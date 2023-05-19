var jQuery1 = jQuery.noConflict(true);
    
jQuery1(document).ready(function() {
    var dialog, form;
    var check_cart = false;
    var check_buy = false;

    emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    card_name = jQuery1( "#card-name" ),
    card_number = jQuery1( "#card-number" ),
    card_exp_m = jQuery1( "#card-exp-m" ),
    card_exp_y = jQuery1( "#card-exp-y" ),
    card_cvv = jQuery1( "#card-cvv" ),
    email = jQuery1( "#email" ),
    allFields = jQuery1( [] ).add( card_name ).add( card_number ).add( card_exp_m ).add( card_exp_y ).add( card_cvv ).add( email ),
    tips = jQuery1( ".validateTips" );

    function updateTips( t ) {
    tips
        .text( t )
        .addClass( "ui-state-highlight" );
    setTimeout(function() {
        tips.removeClass( "ui-state-highlight", 1500 );
    }, 500 );
    }

    function checkLength_m( o, n, min, max ) {
        if ( o.val().length > max || o.val().length < min ) {
            o.addClass( "ui-state-error" );
            updateTips( "Length of " + n + " must be between " +
            min + " and " + max + "." );
            return false;
        } else {
            return true;
        }
    }

    function checkLength_s( o, n, m ) {
        if ( o.val().length > m || o.val().length < m ) {
            o.addClass( "ui-state-error" );
            updateTips( "Length of " + n + " must be " + m + ".");
            return false;
        } else {
            return true;
        }
    }

    function checkRegexp( o, regexp, n ) {
    if ( !( regexp.test( o.val() ) ) ) {
        o.addClass( "ui-state-error" );
        updateTips( n );
        return false;
    } else {
        return true;
    }
    }

    function purchase() {
        var valid = true;
        allFields.removeClass( "ui-state-error" );
    
        valid = valid && checkLength_m( card_name, "cardname", 3, 30 );
        valid = valid && checkLength_s( card_number, "cardnumber", 16);
        valid = valid && checkLength_m( card_exp_m, "cardexpm", 1, 2);
        valid = valid && checkLength_s( card_exp_y, "cardexpy", 2);
        valid = valid && checkLength_s( card_cvv, "cardcvv", 3);
        valid = valid && checkRegexp( card_name, /^[a-z]([0-9A-Za-z_\s])+$/i, "Username may consist of a-z, 0-9, underscores, spaces and must begin with a letter." );
        valid = valid && checkRegexp( card_number, /^([0-9])+$/, "Card number may consist of 0-9." );
        valid = valid && checkRegexp( card_exp_m, /^([0-9])+$/, "Card expiration month may consist of 0-9." );
        valid = valid && checkRegexp( card_exp_y, /^([0-9])+$/, "Card expiration year may consist of 0-9." );
        valid = valid && checkRegexp( card_cvv, /^([0-9])+$/, "Card cvv may consist of 0-9." );
        valid = valid && checkRegexp( email, emailRegex, "eg. ui@jquery.com" );
    
        if ( valid ) {
            jQuery1( "#users tbody" ).append( "<tr>" +
            "<td>" + card_name.val() + "</td>" +
            "<td>" + card_number.val() + "</td>" +
            "<td>" + card_exp_m.val() + "</td>" +
            "<td>" + card_exp_y.val() + "</td>" +
            "<td>" + card_cvv.val() + "</td>" +
            "<td>" + email.val() + "</td>" +
            "</tr>" );
            dialog.dialog( "close" );
            alert("Purchase Successful!");
            jQuery1(".shopping-cart").fadeToggle( "fast" );
        }
        return valid;
    }  

    dialog = jQuery1( "#purchase-div" ).dialog({
        autoOpen: false,
        height: 500,
        width: 400,
        modal: true,
        buttons: {
        "Purchase": purchase,
        Cancel: function() {
            dialog.dialog( "close" );
        }
        },
        close: function() {
        form[ 0 ].reset();
        allFields.removeClass( "ui-state-error" );
        }
    });

    jQuery1(".ui-dialog").css({
        "background-color": "#23252b",
        "color": "#c2c2c4",
        "font-family": "Arial, Helvetica, sans-serif",
        "border": "none",
        "border-radius": "10px",
    });

    jQuery1(".ui-dialog-titlebar").css({
      "background-color": "#23252b",
      "color": "#c2c2c4",
      "font-family": "Arial, Helvetica, sans-serif", 
      "border": "none",
    });

    jQuery1(".ui-dialog-content").css({
      "background-color": "#23252b",
      "color": "#c2c2c4",
      "font-family": "Arial, Helvetica, sans-serif",
      "border": "none",
      "border-radius": "10px",
    });

    jQuery1("input").css({
      "margin-bottom": "10px",
    });

    jQuery1(".ui-dialog-buttonpane").css({
      "background-color": "#23252b",
      "color": "#c2c2c4",
      "font-family": "Arial, Helvetica, sans-serif",
      "border": "none",
    });

    form = dialog.find( "form" ).on( "submit", function( event ) {
        event.preventDefault();
        purchase();
        
    });

    var total_num = jQuery1("#total_num");
    var total_price = jQuery1("#total_price");

    jQuery1( ".button-checkout" ).button().on( "click", function() {
        if(total_num.text() != "0") {
            dialog.dialog( "open" );
        } else {
            alert("Cart is empty!");
        }
    });

    function totals(some_price_) {
        total_num.text(parseInt(total_num.text()) + 1);
        total_price.text(parseInt(total_price.text()) + parseInt(some_price_.text()));
    }

    function cart_name_price(name_, price_) {
        jQuery1(".item-name").text(name_);
        jQuery1(".item-price").text(price_);
    }

    jQuery1( "#buy_1" ).button().on( "click", function() {
    if (!check_buy) {
        jQuery1(".cart-container").show();
        jQuery1(".shopping-cart").fadeToggle( "slow" );
        cart_name_price(jQuery1("#name_1").text(), jQuery1("#price_1").text());
        totals(jQuery1("#price_1"));
    } else {
        jQuery1(".shopping-cart").fadeToggle( "fast" );
    }
    });
    
    jQuery1( "#buy_2" ).button().on( "click", function() { 
      if (!check_buy) {
        jQuery1(".cart-container").show();
        jQuery1(".shopping-cart").fadeToggle( "slow" );
        cart_name_price(jQuery1("#name_2").text(), jQuery1("#price_2").text());
        totals(jQuery1("#price_2"));
      } else {
        jQuery1(".shopping-cart").fadeToggle( "fast" );
      }
    });

    jQuery1( "#buy_3" ).button().on( "click", function() {
      if (!check_buy) {
        jQuery1(".cart-container").show();
        jQuery1(".shopping-cart").fadeToggle( "slow" );
        cart_name_price(jQuery1("#name_3").text(), jQuery1("#price_3").text());
        totals("0");
      } else {
        jQuery1(".shopping-cart").fadeToggle( "fast" );
      }
    });

    jQuery1( "#buy_4" ).button().on( "click", function() {
      if (!check_buy) {
        jQuery1(".cart-container").show();
        jQuery1(".shopping-cart").fadeToggle( "slow" );
        cart_name_price(jQuery1("#name_4").text(), jQuery1("#price_4").text());
        totals(jQuery1("#price_4"));
      } else {
        jQuery1(".shopping-cart").fadeToggle( "fast" );
      }
    });

    jQuery1( "#buy_5" ).button().on( "click", function() {
      if (!check_buy) {
        jQuery1(".cart-container").show();
        jQuery1(".shopping-cart").fadeToggle( "slow" );
        cart_name_price(jQuery1("#name_5").text(), jQuery1("#price_5").text());
        totals(jQuery1("#price_5"));
      } else {
        jQuery1(".shopping-cart").fadeToggle( "fast" );
      }
    });

    jQuery1( "#buy_6" ).button().on( "click", function() {
      if (!check_buy) {
        jQuery1(".cart-container").show();
        jQuery1(".shopping-cart").fadeToggle( "slow" );
        cart_name_price(jQuery1("#name_6").text(), jQuery1("#price_6").text());
        totals(jQuery1("#price_6"));
      } else {
        jQuery1(".shopping-cart").fadeToggle( "fast" );
      }
    });

    jQuery1( "#buy_7" ).button().on( "click", function() {
      if (!check_buy) {
        jQuery1(".cart-container").show();
        jQuery1(".shopping-cart").fadeToggle( "slow" );
        cart_name_price(jQuery1("#name_7").text(), jQuery1("#price_7").text());
        totals("0");
      } else {
        jQuery1(".shopping-cart").fadeToggle( "fast" );
      }
    });

    jQuery1( "#buy_8" ).button().on( "click", function() {
      if (!check_buy) {
        jQuery1(".cart-container").show();
        jQuery1(".shopping-cart").fadeToggle( "slow" );
        cart_name_price(jQuery1("#name_8").text(), jQuery1("#price_8").text());
        totals(jQuery1("#price_8"));
      } else {
        jQuery1(".shopping-cart").fadeToggle( "fast" );
      }
    });

    jQuery1( "#buy_9" ).button().on( "click", function() {
      if (!check_buy) {
        jQuery1(".cart-container").show();
        jQuery1(".shopping-cart").fadeToggle( "slow" );
        cart_name_price(jQuery1("#name_9").text(), jQuery1("#price_9").text());
        totals(jQuery1("#price_9"));
      } else {
        jQuery1(".shopping-cart").fadeToggle( "fast" );
      }
    });

    jQuery1( "#buy_10" ).button().on( "click", function() {
      if (!check_buy) {
        jQuery1(".cart-container").show();
        jQuery1(".shopping-cart").fadeToggle( "slow" );
        cart_name_price(jQuery1("#name_10").text(), jQuery1("#price_10").text());
        totals(jQuery1("#price_10"));
      } else {
        jQuery1(".shopping-cart").fadeToggle( "fast" );
      }
    });

    jQuery1( ".buy" ).css({
        "border": "green 2px solid",
        "text-align": "center",
        "background-color": "inherit",
        "float": "right",
        "color": "green",
        "height": "30px",
        "width": "50px",
        "padding": "0 5px",
        "border-radius": "7px",
        "font-family": "Arial, Helvetica, sans-serif"} );

    
    jQuery1("#cart").one('click',function(){
        jQuery1(".cart-container").show();
        check_cart = true;
    });

    jQuery1("#cart").on( 'click', function() {
        if (!check_cart) {
            jQuery1(".shopping-cart").fadeToggle( "fast" );
        }
        check_cart = false;
    });

    jQuery1( ".button-checkout").css({
        "color": "#c2c2c4",
        "background-color": "#15171e",
        "text-align": "center",
        "padding": "12px",
        "text-decoration": "none",
        "font-family": "Arial, Helvetica, sans-serif",
        "display": "block",
        "border-radius": "3px",
        "font-size": "16px",
        "margin": "25px 0 15px 0" });
    });


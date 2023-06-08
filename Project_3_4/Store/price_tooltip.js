var jQuery3 = jQuery.noConflict(true);

var content;
var position_ = {
    my: "center bottom-20",
    at: "center top",
    using: function( position, feedback ) {
      jQuery3( this ).css( position );
      jQuery3( "<div>" )
        .addClass( "arrow" )
        .addClass( feedback.vertical )
        .addClass( feedback.horizontal )
        .appendTo( this )
    }
};

jQuery3(document).ready(function() {
    jQuery3.ajax({
        url: "http://www.floatrates.com/daily/usd.json",
        dataType: "json",
        success: function(data) {
            var currencyData = data["try"];
            var currencyRate = currencyData.rate;

            for (var i = 1; i < 11; i++) {        
                if(jQuery3( "#price_" + i ).text() != "Free")
                    content = (parseInt(jQuery3( "#price_" + i ).text()) / currencyRate). toFixed(2);
                else
                    content = 0;
                jQuery3( "#price_" + i ).tooltip({
                    content: "$" + content,
                    position: position_
                });
            }
        },
        error: function(xhr, status, error) {
            console.log("An error occurred while retrieving currency data.");
        }
    });
    
});


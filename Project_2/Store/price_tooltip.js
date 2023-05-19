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
    jQuery3( "#price_1" ).tooltip({
        content: "$55",
        position: position_
    });

    jQuery3( "#price_2" ).tooltip({
        content: "$65",
        position: position_
    });

    jQuery3( "#price_3" ).tooltip({
        content: "$0",
        position: position_
    });

    jQuery3( "#price_4" ).tooltip({
        content: "$45",
        position: position_
    });

    jQuery3( "#price_5" ).tooltip({
        content: "$5",
        position: position_
    });

    jQuery3( "#price_6" ).tooltip({
        content: "$6.5",
        position: position_
    });

    jQuery3( "#price_7" ).tooltip({
        content: "$12.5",
        position: position_
    });

    jQuery3( "#price_8" ).tooltip({
        content: "$7",
        position: position_
    });

    jQuery3( "#price_9" ).tooltip({
        content: "$11.75",
        position: position_
    });

    jQuery3( "#price_10" ).tooltip({
        content: "$65",
        position: position_
    });

});
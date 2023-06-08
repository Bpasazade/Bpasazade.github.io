$(document).ready(function () {
    $("#card-top-1").empty();
    $("#card-mid-1").empty();
    $("#card-bottom-1").empty();

    $("#card-top-2").empty();
    $("#card-mid-2").empty();
    $("#card-bottom-2").empty();

    $("#card-top-3").empty();
    $("#card-mid-3").empty();
    $("#card-bottom-3").empty();

    $("#card-top-4").empty();
    $("#card-mid-4").empty();
    $("#card-bottom-4").empty();
    
    loadReview("rev", "#card-top-1", "#card-mid-1", "#card-bottom-1");
    loadReview("bpasazade", "#card-top-2", "#card-mid-2", "#card-bottom-2");
    loadReview("ezoks", "#card-top-3", "#card-mid-3", "#card-bottom-3");
    loadReview("morty", "#card-top-4", "#card-mid-4", "#card-bottom-4");

    $(document).on ("click", ".like", function () {
        var id = $(this).attr('id');
        var num = id.split("_")[2];
        var like_num = $("#like_num_" + num).text();
        like_num++;
        $("#like_num_" + num).text(like_num);
    });

    $(document).on ("click", ".dislike", function () {
        var id = $(this).attr('id');
        var num = id.split("_")[2];
        var dislike_num = $("#dislike_num_" + num).text();
        dislike_num++;
        $("#dislike_num_" + num).text(dislike_num);
    });
});

function loadReview(review, card_top, card_mid, card_bottom) {
    var output_top = '';
    var output_mid = '';
    var output_bottom = '';
    $.getJSON("reviews/" + review + ".json", function (data) {
        $.each(data.reviews, function (i, val) {
            var like_id;
            if(review == "rev") { like_id = 1; }
            else if(review == "bpasazade") { like_id = 2; } 
            else if(review == "ezoks") { like_id = 3; }
            else if(review == "morty") { like_id = 4; }

            // Top
            output_top += '<div><img src=' + val.profile_pic + ' id="pp"/></div>';
            output_top += '<h4>' + val.nickname + '</h4>';
            output_top += '<div class="about_game">',
            output_top += '<div class="rp_row_img"><img src=' + val.game_icon + ' id="rp_icon"></div>';
            output_top += '<p id="game_about">' + val.game + '</p>';
            output_top += '</div>';

            // Mid
            output_mid += '<p>' + val.review + '</p>';

            // Bottom
            output_bottom += '<button class="like" id="like_button_' + like_id + '">';
            output_bottom += '<div>';
            output_bottom += '<img src="../Assets/like.png" alt="Like" id="like"/>';
            output_bottom += '<p id="like_num_' + like_id + '">' + val.likes + '</p>';
            output_bottom += '<div>';
            output_bottom += '</button>';

            output_bottom += '<button class="dislike" id="dislike_button_' + like_id + '">';
            output_bottom += '<div>';
            output_bottom += '<img src="../Assets/dislike.png" alt="Dislike" id="dislike"/>';
            output_bottom += '<p id="dislike_num_' + like_id + '">' + val.dislikes + '</p>';
            output_bottom += '<div>';
            output_bottom += '</button>';
        });
        $(card_top).html(output_top);
        $(card_mid).html(output_mid);
        $(card_bottom).html(output_bottom);
    });
}


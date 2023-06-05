$(document).ready(function () {
    $('#nav_list ul li a').click(function () {
        var title = $(this).attr("title");
        $.getJSON('json_files/' + title +'.json', function (data) {
            console.log(data);
            var output = '';
            $.each(data.speakers, function (key, val) {
                output += '<h1>' + val.title + '</h1>';
                output += '<img src="' + val.image + '">';
                output += '<h2>' + val.month + '</br>' + val.speaker + '</h2>';
                output += '<p>' + val.text + '</p>';
            });
            $('main').html(output);
        });
    });
}); // end ready
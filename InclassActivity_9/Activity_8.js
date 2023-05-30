$(document).ready(function() {

    // Part 3
    $("#birthday").datepicker();

    // Part 4
    var languages = ["Java", "C#", "Python", "PHP", "JavaScript", "Ruby", "Swift", "C++", "C", "Objective-C"];
    $("#language").autocomplete({
        source: languages
    });
});
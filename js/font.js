function increaseFontSizeBy1px() {
    var font = parseInt($("a").css('font-size'));
    font = font + 1; 
    $("a").css("fontSize", font);

    var font = parseInt($("footer").css('font-size'));
    font = font + 1; 
    $("footer").css("fontSize", font);

    var font = parseInt($("p").css('font-size'));
    font = font + 1; 
    $("p").css("fontSize", font);

    var font = parseInt($("h2").css('font-size'));
    font = font + 1; 
    $("h2").css("fontSize", font);
}

function decreaseFontSizeBy1px() {
    var font = parseInt($("a").css('font-size'));
    font = font - 1; 
    $("a").css("fontSize", font);

    var font = parseInt($("footer").css('font-size'));
    font = font - 1; 
    $("footer").css("fontSize", font);

    var font = parseInt($("p").css('font-size'));
    font = font - 1; 
    $("p").css("fontSize", font);

    var font = parseInt($("h2").css('font-size'));
    font = font - 1; 
    $("h2").css("fontSize", font);
}
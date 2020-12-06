function increaseFontSizeBy1px() {
    var font = parseInt($("#b").css('font-size'));

    font++;
     document.getElementById('b').style.fontSize =font+ "px";
    }
function lazyload() {
    var sRule1 =
        "@font-face {" +
        "  font-family: 'FangZhengXiTan';" +
        "  src: url('/css/fonts/fangzhengxitan.ttf');" +
        "}";
    var style1 = document.styleSheets[0];
    if ( "function" === typeof(style1.insertRule) ) {
        // Firefox, Safari, Chrome
        style1.insertRule(sRule1, 0);
    }
    else if ( "string" === typeof(style1.cssText) ) {
        // IE
        style1.cssText = sRule1;
    }
}

window.onload = function() {
    console.log('lazyload11')
    setTimeout(lazyload, 100);
    console.log('lazyload22')
}

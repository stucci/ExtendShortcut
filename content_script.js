var shortcut = {
    // Images -> All
    // A: function() { window.location.href = window.location.href.replace( /&tbm=isch/g, "") },
    // Check activeElement
    E: function() { console.log(document.activeElement) },
    // All -> iMages
    m: function() { window.location.href = window.location.href + "&tbm=isch" },
    // All -> Map
    M: function() { window.location.href = "https://maps.google.co.jp/maps?" + (window.location.hash ? window.location.hash.slice(1) : window.location.search.slice(1)) },
    // Open link in new tab
    // L: function() { window.open(document.activeElement.href) },
    // Open link in background tab
    o: function() { openInBackground() }
};

document.onkeypress = function (e) {
    // Check cursor is in search bar
    if (Object.prototype.toString.call(document.activeElement) == "[object HTMLInputElement]") return;
    // Run command
    var keyChar = String.fromCharCode(e.keyCode);
    // alert(keyChar);
    if (keyChar in shortcut) shortcut[keyChar]();
};

function openInBackground() {
    var a = document.createElement("a");
    a.href = document.activeElement.href;
    if (a.href == "https://www.google.co.jp/undefined") return;
    var evt = document.createEvent("MouseEvents");
    // Initialize mouse event to "Ctrl + Click"
    evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, true, false, false, false, 0, null);
    a.dispatchEvent(evt);
}


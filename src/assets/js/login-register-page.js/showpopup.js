export function showpopup(_this, popup_content) {
    _this.popup_content = popup_content;
    var overlay = document.getElementById("overlay");
    overlay.style.display = "block";
}
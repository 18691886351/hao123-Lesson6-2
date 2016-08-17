/**点击menu显示或者隐藏**/
var menu = document.getElementById("search-panel-menu");
var menu_childs = document.getElementsByClassName("search-panel-menu-tab-child");
var menu_tab = document.getElementById("search-panel-menu-tab");
var wslider = document.getElementById("wslider");
var arrow_prev = document.getElementById("arrow-prev");
var arrow_next = document.getElementById("arrow-next");
/*
默认的时间触发顺序是foucs>click>blur
这将click事件优先触发，以避免在点击menu时,先触发foucs,再click而导致的菜单闪烁的情况
*/
window.onload = function() {
    menu.addEventListener('click', menu_click, true);
    menu.addEventListener('foucs', menu_foucs, true);
    menu.addEventListener('blur', menu_blur, true);
}

var menu_click = function() {
    if (menu_tab.style.display == "block") {
        menu_tab.style.display = "none"
    } else {
        menu_tab.style.display = "block"
    }
}


var menu_foucs = function() {
    if (menu_tab.style.display == "block") {
        menu_tab.style.display = "none"
    } else {
        menu_tab.style.display = "block"
    }
}

var menu_blur = function() {
    menu_tab.style.display = "none"
}


wslider.onmouseover = function() {
    arrow_prev.style.display = "block";
    arrow_next.style.display = "block";
}

wslider.onmouseout = function() {
    arrow_prev.style.display = "none";
    arrow_next.style.display = "none";
}

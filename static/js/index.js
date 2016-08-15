/**点击menu显示或者隐藏**/
var menu = document.getElementById("search-panel-menu");
var menu_childs = document.getElementsByClassName("search-panel-menu-tab-child");
var flag = 1;
menu.onclick = function() {
    var menu_tab = document.getElementById("search-panel-menu-tab");

    //alert(menu_childs.length);
    if (menu_tab.style.display == "none" && flag == 1) {
        menu_tab.style.display = "block";
        menu_childs[0].focus();
        flag = 0;
    } else {
        menu_childs[0].blur();
        flag = 1
    }
}

menu_childs[0].onblur = function() {
    var menu_tab = document.getElementById("search-panel-menu-tab");
    menu_tab.style.display = "none"
    flag = 0;
}

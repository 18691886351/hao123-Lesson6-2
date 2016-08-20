/**点击menu显示或者隐藏**/
var menu = document.getElementById("search-panel-menu");
var menu_childs = document.getElementsByClassName("search-panel-menu-tab-child");
var menu_tab = document.getElementById("search-panel-menu-tab");
var wslider = document.getElementById("wslider");
var arrow_prev = document.getElementById("arrow-prev");
var arrow_next = document.getElementById("arrow-next");

var change_skin_btn = document.getElementById("change-skin-btn"); //换肤按钮

var skiner = document.getElementById("skiner"); //换肤界面

var pager = document.getElementById("pager"); //整个页面

var baidu_logon = document.querySelectorAll("#pager .search-panel .baidu-logo a");

var screen_skin_items = document.querySelectorAll("#pager .skin .skin-box .screen .item");

var skin_operation = document.querySelectorAll("#pager .skin .skin-header .operation a");

var skin_name = "normal";

/*
默认的时间触发顺序是foucs>click>blur
这将click事件优先触发，以避免在点击menu时,先触发foucs,再click而导致的菜单闪烁的情况

因为chrome 浏览器不支持使用本地cookies,所以使用了h5的localStorage属性来存储皮肤数据
*/
window.onload = function() {
    menu.addEventListener('click', menu_click, true);
    menu.addEventListener('foucs', menu_foucs, true);
    menu.addEventListener('blur', menu_blur, true);
    /*
    var skinName = getCookie("skinName")
    //alert(skinName);
    if (skinName.length != 0) {
        loadSkin(skinName);
    }
    */
    var skinName = localStorage.skinName;
    //alert(skinName);
    if (skinName != null && skinName.length != 0) {
        loadSkin(skinName);
    }
};



/*点击选好的皮肤，进行load*/
[].map.call(screen_skin_items, function(x) {
    x.onclick = function() {
        loadSkin(this.name);
    }
});


/*点击换肤导航上不同的操作按钮，进行重置,不进行换肤，保存的操作*/
[].map.call(skin_operation, function(x) {
    x.onclick = function() {
        switch (this.name) {
            case "cansel":
                resetOrCancleSkin();
                break;
            case "save":
                //document.cookie = "skinName=" + skin_name;
                ///document.cookie ="skinName=normal;"
                localStorage.skinName = skin_name;
                skinPanelOpenOrclosed();
                //alert(getCookie("skinName"));
                break;
            case "reset":
                resetOrCancleSkin();
                localStorage.skinName = "normal";
                break;

        }
    }
});

/*for (index in screen_skin_items) {
    screen_skin_items[index].onclick = function() {
        loadSkin(this.name);
    }
}*/


/*换肤*/
var loadSkin = function(name) {
    switch (name) {
        case "love":
            resetOrCancleSkin();
            loadLoveSkin();
            skin_name = name;
            break;
        case "warOfNina":
            resetOrCancleSkin();
            loadWarOfNina();
            skin_name = name;
            break;
        case "keeny":
            resetOrCancleSkin();
            loadKeenySkin();
            skin_name = name;
            break;
        case "normal":
            resetOrCancleSkin();
            skin_name = name;
            break;

    }
}

/*年兽皮肤*/
function loadWarOfNina() {
    pager.style.background = 'url("https://gss0.bdstatic.com/5eR1dDebRNRTm2_p8IuM_a/res/r/image/2016-02-03/e240765236dbf2a2b347635985471cd2.jpg") center top no-repeat';
    pager.style.backgroundSize = "cover";
    baidu_logon[0].style.background = 'url("https://gss0.bdstatic.com/5eR1dDebRNRTm2_p8IuM_a/res/images/search_logo_white/webv2-w.png") left top no-repeat';
    var hao123_col_text = document.querySelectorAll(".skin-fontColor");
    /*
    这种方式遍历，会遍历到length属性
    for(indexj in hao123_col_text){
    hao123_col_text[indexj].style.color="white";
    }*/
    [].map.call(hao123_col_text, function(x) {
        x.style.color = "white";
    });
}
/*爱皮肤*/
function loadLoveSkin() {
    pager.style.background = "url(https://gss0.bdstatic.com/5eR1dDebRNRTm2_p8IuM_a/res/r/image/2015-08-25/27fbf0ab0754745cf2b10c7e2309e9a5.jpg) no-repeat center top";
    pager.style.backgroundSize = "cover";
    baidu_logon[0].style.background = 'url("https://gss0.bdstatic.com/5eR1dDebRNRTm2_p8IuM_a/res/images/search_logo_white/webv2-w.png") left top no-repeat';
    var hao123_col_text = document.querySelectorAll(".skin-fontColor");
    /*
    这种方式遍历，会遍历到length属性
    for(indexj in hao123_col_text){
    hao123_col_text[indexj].style.color="white";
    }*/
    [].map.call(hao123_col_text, function(x) {
        x.style.color = "white";
    });
}

/*加载bestUS皮肤*/
function loadKeenySkin() {
    pager.style.background = "url('https://gss0.bdstatic.com/5eR1dDebRNRTm2_p8IuM_a/res/r/image/2015-08-25/a5414b778e5eb2632b6486d01d62840a.jpg') center top no-repeat";
    pager.style.backgroundSize = "cover";
    baidu_logon[0].style.background = 'url("https://gss0.bdstatic.com/5eR1dDebRNRTm2_p8IuM_a/res/images/search_logo_white/webv2-w.png") left top no-repeat';
    var hao123_col_text = document.querySelectorAll(".skin-fontColor");
    /*
    这种方式遍历，会遍历到length属性
    for(indexj in hao123_col_text){
    hao123_col_text[indexj].style.color="white";
    }*/
    [].map.call(hao123_col_text, function(x) {
        x.style.color = "white";
    });
}

/*重置皮肤*/
function resetOrCancleSkin() {
    pager.style.background = "";
    pager.style.backgroundSize = "";
    baidu_logon[0].style.background = "";
    var hao123_col_text = document.querySelectorAll(".skin-fontColor");
    [].map.call(hao123_col_text, function(x) {
        x.style.color = "";
    });
}

/*获取cookie*/
function getCookie(c_name) {　　　　
    if (document.cookie.length > 0) {　　 //先查询cookie是否为空，为空就return ""
        c_start = document.cookie.indexOf(c_name + "=")　　 //通过String对象的indexOf()来检查这个cookie是否存在，不存在就为 -1　　
        if (c_start != -1) {　　　　　　　　
            c_start = c_start + c_name.length + 1　　 //最后这个+1其实就是表示"="号啦，这样就获取到了cookie值的开始位置
            c_end = document.cookie.indexOf(";", c_start)　　 //其实我刚看见indexOf()第二个参数的时候猛然有点晕，后来想起来表示指定的开始索引的位置...这句是为了得到值的结束位置。因为需要考虑是否是最后一项，所以通过";"号是否存在来判断
            if (c_end == -1) c_end = document.cookie.length　　　　　　　　　　
            return unescape(document.cookie.substring(c_start, c_end))　　 //通过substring()得到了值。想了解unescape()得先知道escape()是做什么的，都是很重要的基础，想了解的可以搜索下，在文章结尾处也会进行讲解cookie编码细节　　　　　　
        }　　　　
    }　　　　
    return ""
}

/*搜索面板的弹出菜单*/
var menu_click = function() {
    if (menu_tab.style.display == "block") {
        menu_tab.style.display = "none"
    } else {
        menu_tab.style.display = "block"
    }
}

/*搜索面板的弹出菜单*/
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


/*换肤面板的滑动效果*/
var skinPanelOpenOrclosed = function() {
    if (skiner.style.height == "0" || skiner.style.height == "" || skiner.style.height == "0px") {
        skiner.style.height = "189px"
    } else if (skiner.style.height == "189px") {
        skiner.style.height = "0"
    }
}

change_skin_btn.onclick = skinPanelOpenOrclosed;

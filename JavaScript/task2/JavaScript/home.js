var myleft = document.getElementById("left-sidebar");
    myright = document.getElementById("right-main");
    mybutton = document.getElementById("button");
var sidebar = "off";
    mybutton.onclick = function() {
        if (sidebar === "off") {
            myleft.style.left = "0";
            myright.style.left = "200px";
            sidebar = "on";
        } else if(sidebar === "on") {
            myleft.style.left = "-200px";
            myright.style.left = "0";
            sidebar = "off";
        };
    };

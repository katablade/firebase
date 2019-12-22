var target = document.getElementById("TextArea");
function boldText(){
    if( target.style.fontWeight == "bolder" ) {
        target.style.fontWeight = "normal";
    } else {
        target.style.fontWeight = "bolder";
    }
}
function italicText(){
    if( target.style.fontStyle == "italic" ) {
        target.style.fontStyle = "normal";
    } else {
        target.style.fontStyle = "italic";
    }
}
function undrText(){
    if( target.style.textDecoration == "underline" ) {
        target.style.textDecoration = "none";
    } else {
        target.style.textDecoration = "underline";
    }
}
var selectSize=document.getElementById("size");
function changeSize(){
    target.style.fontSize=selectSize.value;
}
function changefont(){
    target.style.fontFamily=document.getElementById("fnt").value;
}
document.getElementById("bld").addEventListener("click", boldText);
document.getElementById("itlc").addEventListener("click", italicText);
document.getElementById("undr").addEventListener("click", undrText);
document.getElementById("size").addEventListener("change", changeSize);
document.getElementById("fnt").addEventListener("change", changefont);


$(document).ready(function(){
    $(".course1").hover(function(){
    $("#btn1c").show();
    $(".course1").css("opacity",0.5);
}, function(){
    $(".course1").css("opacity",1);
    $("#btn1c").hide();
}
)
})
$(document).ready(function(){
    $(".course2").hover(function(){
    $("#btn2c").show();
    $(".course2").css("opacity",0.5);
}, function(){
    $(".course2").css("opacity",1);
    $("#btn2c").hide();
}
)
})
$(document).ready(function(){
    $(".course3").hover(function(){
    $("#btn3c").show();
    $(".course3").css("opacity",0.5);
}, function(){
    $(".course3").css("opacity",1);
    $("#btn3c").hide();
}
)
})
$(document).ready(function(){
    $(".course4").hover(function(){
    $("#btn4c").show();
    $(".course4").css("opacity",0.5);
}, function(){
    $(".course4").css("opacity",1);
    $("#btn4c").hide();
}
)
})
$(document).ready(function(){
    $(".course5").hover(function(){
    $("#btn5c").show();
    $(".course5").css("opacity",0.5);
}, function(){
    $(".course5").css("opacity",1);
    $("#btn5c").hide();
}
)
})
$(document).ready(function(){
    $(".course6").hover(function(){
    $("#btn6c").show();
    $(".course6").css("opacity",0.5);
}, function(){
    $(".course6").css("opacity",1);
    $("#btn6c").hide();
}
)
})
$(document).ready(function(){
    $(".course7").hover(function(){
    $("#btn7c").show();
    $(".course7").css("opacity",0.5);
}, function(){
    $(".course7").css("opacity",1);
    $("#btn7c").hide();
}
)
})
$(document).ready(function(){
    $(".course8").hover(function(){
    $("#btn8c").show();
    $(".course8").css("opacity",0.5);
}, function(){
    $(".course8").css("opacity",1);
    $("#btn8c").hide();
}
)
})
$(document).ready(function(){
    $(".course9").hover(function(){
    $("#btn9c").show();
    $(".course9").css("opacity",0.5);
}, function(){
    $(".course9").css("opacity",1);
    $("#btn9c").hide();
}
)
})


dragElement(document.getElementById(("toggable_women__1")));
dragElement(document.getElementById(("toggable_women__2")));
dragElement(document.getElementById(("toggable_women__3")));
dragElement(document.getElementById(("toggable_women__4")));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
      /* if present, the header is where you move the DIV from:*/
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
      /* otherwise, move the DIV from anywhere inside the DIV:*/
      elmnt.onmousedown = dragMouseDown;
    }
  
    function dragMouseDown(e) {
      e = e || window.event;
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
      e = e || window.event;
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
  
    function closeDragElement() {
      /* stop moving when mouse button is released:*/
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }


let flag = 0

function visiable_chair() {
    if (flag == 0){
        document.getElementById('anime_chair').classList.add("appearance_of__chair");
        document.getElementById("view_of_the_chair").src="img/1440/man-sitting-on-chair_colored.svg";
        flag = 1;

    } else {
        document.getElementById('anime_chair').classList.remove("appearance_of__chair");
        document.getElementById("view_of_the_chair").src="img/1440/man-sitting-on_chair.svg";
        flag = 0;
    }; 
}
    
let card = 0;

function visiable_card() {
    if (card == 0){
        document.getElementById("view_of_the__card").src="img/1440/white-card-ilgiosso.svg"; 
        card = 1;
    } else {
        // document.getElementById("view_of_the__card").src="img/1440/yellow-card-ilgiosso.svg";
        // card = 0;
    }
}

let container = 0;

function hat_for_unvisiable_container() {
    if (container == 0){
        document.getElementById("visiable_container").style.display = "none";
        container++;
        console.log(container);
    } 
}

function opacity_visiable() {
    if (container == 2) {
        document.getElementById("visiable_container").style.display = "block";
        container = -1;
    }
    container++;
    
    console.log(container);
}

function visiable_card__2() {
    document.getElementById("view_of_the__card_2").src="img/1440/blue-card_ilmago.svg";
}

function visiable_card__3() {
    document.getElementById("view_of_the__card_3").src="img/1440/yellow-card-lomagia.svg"
}

function visiable_card__4() {
    document.getElementById("view_of_the__card_4").src="img/1440/red-card-imperro.svg"
}

function visiable_card__6() {
    document.getElementById("view_of_the__card_6").src="img/1440/red-card_incanto.svg";
}

function visiable_card__7() {
    document.getElementById("view_of_the__card_7").src="img/1440/blue-card_rogazzo.svg";
}

function mixing_mans() {
    document.getElementById("another_man").src="img/1440/man-with-red_sheet.svg";
    document.getElementById("another_man").style.opacity="1";
}

function mixing_mans__2() {
    document.getElementById("another_man__2").src="img/1440/a-big_man.svg";
    document.getElementById("another_man__2").style.opacity="1";
}

// function click_visiable_magician__boy() {
//     document.getElementById("visiable_magician__boy").style.opacity="1";
// }
let table_1__click = 0;

function click_table_with_rabbit__1() {
    if(table_1__click == 0) {
        document.getElementById('rabbit_table__1').style.opacity = 0;
        setTimeout('document.getElementById("rabbit_table__1").src="img/1440/table-with-rabbit_1__colored.svg";', 300);
        setTimeout('document.getElementById("rabbit_table__1").style.opacity = 1;', 600);
        table_1__click = 1;
     } else {
        document.getElementById('rabbit_table__1').style.opacity = 0;
        setTimeout('document.getElementById("rabbit_table__1").src="img/1440/table-with-rabbit_1.svg"; ', 300);
        setTimeout('document.getElementById("rabbit_table__1").style.opacity = 1;', 600);
        table_1__click = 0;
    }  
}

let table_2__click = 0;

function click_table_with_rabbit__2() {
    if(table_2__click == 0) {
        document.getElementById('rabbit_table__2').style.opacity = 0;
        setTimeout('document.getElementById("rabbit_table__2").src="img/1440/table-with-rabbit_2__colored.svg";', 300);
        setTimeout('document.getElementById("rabbit_table__2").style.opacity = 1;', 600);
        table_2__click = 1;
     } else {
        document.getElementById('rabbit_table__2').style.opacity = 0;
        setTimeout('document.getElementById("rabbit_table__2").src="img/1440/table-with-rabbit_2.svg"; ', 300);
        setTimeout('document.getElementById("rabbit_table__2").style.opacity = 1;', 600);
        table_2__click = 0;
    }  
}

let table_3__click = 0;

function click_table_with_rabbit__3() {
    if(table_3__click == 0) {
        document.getElementById('rabbit_table__3').style.opacity = 0;
        setTimeout('document.getElementById("rabbit_table__3").src="img/1440/table-with-rabbit_3__colored.svg";', 300);
        setTimeout('document.getElementById("rabbit_table__3").style.opacity = 1;', 600);
        table_3__click = 1;
     } else {
        document.getElementById('rabbit_table__3').style.opacity = 0;
        setTimeout('document.getElementById("rabbit_table__3").src="img/1440/table-with-rabbit_3.svg"; ', 300);
        setTimeout('document.getElementById("rabbit_table__3").style.opacity = 1;', 600);
        table_3__click = 0;
    }  
}

let broom_click = 0;

function click_dragging__broom() {
    if(broom_click == 0) {
        document.getElementById('dragging_broom').classList.add("dragging_broom");
        document.getElementById("dragging_broom").style.opacity = "1"; 
        broom_click = 1;
     } else {
        document.getElementById("dragging_broom").classList.remove("dragging_broom"); 
        // document.getElementById("dragging_hat").style.opacity = "0"; 
        broom_click = 0;
    }  
}

let hat_click = 0;

function click_dragging__hat() {
    if(hat_click == 0) {
        document.getElementById('dragging_hat').classList.add("dragging_hat");
        document.getElementById("dragging_hat").style.opacity = "1"; 
        hat_click = 1;
     } else {
        document.getElementById("dragging_hat").classList.remove("dragging_hat"); 
        // document.getElementById("dragging_hat").style.opacity = "0"; 
        hat_click = 0;
    }  
}

let dove_click = 0;

function click_dragging__dove() {
    if(dove_click == 0) {
        document.getElementById('dragging_dove').classList.add("dragging_dove");
        document.getElementById("dragging_dove").style.opacity = "1"; 
        dove_click = 1;
     } else {
        document.getElementById("dragging_dove").classList.remove("dragging_dove"); 
        // document.getElementById("dragging_hat").style.opacity = "0"; 
        dove_click = 0;
    }  
}

let rabbit_click = 0;

function click_dragging__rabbit() {
    if(rabbit_click == 0) {
        document.getElementById('dragging_rabbit').classList.add("dragging_rabbit");
        document.getElementById("dragging_rabbit").style.opacity = "1"; 
        rabbit_click = 1;
     } else {
        document.getElementById("dragging_rabbit").classList.remove("dragging_rabbit"); 
        // document.getElementById("dragging_hat").style.opacity = "0"; 
        rabbit_click = 0;
    }  
}

let wand_click__2 = 0;

function click_dragging_wand__2() {
    if(wand_click__2 == 0) {
        document.getElementById('dragging_wand__2').classList.add("dragging_wand__2");
        document.getElementById("dragging_wand__2").style.opacity = "1"; 
        wand_click__2 = 1;
     } else {
        document.getElementById("dragging_wand__2").classList.remove("dragging_wand__2"); 
        // document.getElementById("dragging_hat").style.opacity = "0"; 
        wand_click__2 = 0;
    }  
}

let wand_click = 0;

function click_dragging__wand() {
    if(wand_click == 0) {
        document.getElementById('dragging_wand').classList.add("dragging_wand");
        document.getElementById("dragging_wand").style.opacity = "1"; 
        wand_click = 1;
     } else {
        document.getElementById("dragging_wand").classList.remove("dragging_wand"); 
        // document.getElementById("dragging_hat").style.opacity = "0"; 
        wand_click = 0;
    }  
}

let boy = 0;

function click_visiable_magician__boy() {
    if(boy == 0) {
        document.getElementById("visiable_magician__boy").style.opacity = "1";
        boy = 1;
    } else {
        document.getElementById("visiable_magician__boy").style.opacity = "0";
        boy = 0;
    }  
}

let man_hat = 0

function click_visiable_man__hat() {
    if(man_hat == 0) {
        document.getElementById("visiable_man__hat").style.opacity = "1";
        man_hat = 1;
    } else {
        document.getElementById("visiable_man__hat").style.opacity = "0";
        man_hat = 0;
    }  
}
let opening = 0;
let prev_none = 0;
function click_for_opening__door() {
    myObjects = document.getElementsByClassName('elements_for__door');
    if(opening == 0) {
        do{
            number = Math.floor(Math.random() * 5 );
        } while (number == prev_none);
        myObjects[number].style.display = "block";
        document.getElementById('opening_door').classList.add("door-for_magic__click");
        opening = 1;
     } else {
        document.getElementById("opening_door").classList.remove("door-for_magic__click"); 
        opening = 0;
        setTimeout('myObjects['+number+'].style.display = "none";', 300);
        prev_none = number;
    }  
}

let opening_2 = 0;

function click_for_opening__door_2() {
    if(opening_2 == 0) {
        document.getElementById('opening_door_2').classList.add("door-for_magic__click_2");
        opening_2 = 1;
     } else {
        document.getElementById("opening_door_2").classList.remove("door-for_magic__click_2"); 
        opening_2 = 0;
    }  
}


let rabbit = 0

function visiable_rabbit() {
    if(rabbit == 0) {
        document.getElementById("view_of_the__rabbit").style.opacity = "1";
        rabbit = 1;
    } else {
        document.getElementById("view_of_the__rabbit").style.opacity = "0";
        rabbit = 0;
    }  
}; 

function visiable_ears() {
    document.getElementById("view_of_the__ears").style.opacity = "1";
}

let dove = 0;
function visiable_dove() {
    if(dove == 0){
        document.getElementById("view_of_the__dove").style.opacity = "1";
        dove = 1;
    } else {
        document.getElementById("view_of_the__dove").style.opacity = "0";
        dove = 0;
    }
    
}
    
function visiable_hat() {
    document.getElementById("view_of_the__hat").style.opacity = "1";
}

function unvisiable_broom() {
    document.getElementById("unview_of_the__broom").style.opacity = "0";
}

function visiable_train() {
    document.getElementById("view_of_the__train").style.display = "none";
}






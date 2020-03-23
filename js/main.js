let flag = 0


function visiable_chair() {
    if (flag == 0){
        document.getElementById('anime_chair').classList.add("appearance_of__chair");document.getElementById("view_of_the_chair").src="img/1440/man-sitting-on-chair_colored.svg";
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

let rabbit = 0

function visiable_rabbit() {
    document.getElementById("view_of_the__rabbit").style.opacity = "1";
}

function visiable_ears() {
    document.getElementById("view_of_the__ears").style.opacity = "1";
}

function visiable_dove() {
    document.getElementById("view_of_the__dove").style.opacity = "1";
}
    
function visiable_hat() {
    document.getElementById("view_of_the__hat").style.opacity = "1";
}

function unvisiable_broom() {
    document.getElementById("unview_of_the__broom").style.opacity = "0";
}

function visiable_train() {
    document.getElementById("view_of_the__train").style.opacity = "0";
}






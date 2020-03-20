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
    
    
    

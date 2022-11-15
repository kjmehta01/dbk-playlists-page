const headers = ["Good evening", "Video", "Good Evening"];

function openCloseNav() {
    if(document.getElementsByClassName("side-bar")[0].style.width === "60px"){
        document.getElementsByClassName("side-bar")[0].style.width = "200px";
        document.getElementsByClassName("main")[0].style.marginLeft = "215px";

        sbbtns = document.getElementsByClassName("side-bar-button");
        for(let i = 0; i < sbbtns.length; i++){
            sbbtns[i].style['padding-left'] = "30px"
            sbbtns[i].style['text-align'] = "left"
            sbbtns[i].textContent = headers[i]
        }
    }
    else{
        document.getElementsByClassName("side-bar")[0].style.width = "60px";
        document.getElementsByClassName("main")[0].style.marginLeft = "75px";

        sbbtns = document.getElementsByClassName("side-bar-button");
        for(let i = 0; i < sbbtns.length; i++){
            sbbtns[i].style['padding-left'] = "0px"
            sbbtns[i].style['text-align'] = "center"
            sbbtns[i].textContent = "O"
        }
    }
}

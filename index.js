const headers = ["Good evening", "Video", "Good Evening"];

function openCloseNav() {
    if (document.getElementsByClassName("side-bar")[0].style.width === "60px") {
        document.getElementsByClassName("side-bar")[0].style.width = "200px";
        document.getElementsByClassName("main")[0].style.marginLeft = "215px";

        sbbtns = document.getElementsByClassName("side-bar-button");
        for (let i = 0; i < sbbtns.length; i++) {
            sbbtns[i].style['padding-left'] = "30px"
            sbbtns[i].style['text-align'] = "left"
            sbbtns[i].textContent = headers[i]
        }
    }
    else {
        document.getElementsByClassName("side-bar")[0].style.width = "60px";
        document.getElementsByClassName("main")[0].style.marginLeft = "75px";

        sbbtns = document.getElementsByClassName("side-bar-button");
        for (let i = 0; i < sbbtns.length; i++) {
            sbbtns[i].style['padding-left'] = "0px"
            sbbtns[i].style['text-align'] = "center"
            sbbtns[i].textContent = "O"
        }
    }
}


var waiting = false;
function navHighlighter(){
    if(!waiting){
        waiting = true;
        setTimeout(navHighlighterHelper, 100)
    }
}


function navHighlighterHelper() {
    console.log('aa')
    

    const sections = document.querySelectorAll("section");
    const navMenu = document.getElementsByClassName("side-bar-button");
    const main = document.getElementsByClassName("main")[0];

    console.log(main.scrollTop)

    let first = true;

    for (let i = sections.length - 1; i >= 0; i--) {
        curr = sections[i]
        const distToTop = main.scrollTop - curr.offsetTop

        console.log(i + ': ' + distToTop)

        if (distToTop >= -70 && first) {
            navMenu[i].style.color = "#ffffff";
            first = false;
        } else {
            navMenu[i].style.color = "#a3a3a3";
        }
    }

    waiting = false;
}

setTimeout(navHighlighter, 100);
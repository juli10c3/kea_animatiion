let points = 0;
window.addEventListener("load", sidenVises);

//function skal altid være med parantes bagved
function sidenVises() {
    //for at holde styr på det
    console.log("siden vises");
    //Hvad der skal ske
    showStart();
}

function showStart() {
    console.log("show start");
    document.querySelector("#start").classList.remove("hide");
    document.querySelector("#play").classList.add("pulse");
    document.querySelector("#play").addEventListener("click", hideStart);
    document.querySelector("#setting_knap").addEventListener("click", showSettings);


}

function showSettings() {
    console.log("show settings");
    document.querySelector("#settings").classList.remove("hide");
    document.querySelector("#setting_knap").removeEventListener("click", showSettings);
    document.querySelector("#checkmark1").addEventListener("click", hideCheckmark1);
    document.querySelector("#checkmark2").addEventListener("click", hideCheckmark2);
    document.querySelector("#checkmark3").addEventListener("click", hideCheckmark3);
    document.querySelector("#checkmark1").addEventListener("click", showCheckmark1);
    document.querySelector("#checkmark2").addEventListener("click", showCheckmark2);
    document.querySelector("#checkmark3").addEventListener("click", showCheckmark3);
}

function hideCheckmark1() {
    console.log("hide checkmark1");
    document.querySelector("#checkmark1").classList.add("hide");
    //hide ved click


}

function showCheckmark1() {
    console.log("show checkmark1");
    document.querySelector("#checkmark1").classList.remove("hide");
}


function hideCheckmark2() {
    console.log("hide checkmark2");
    document.querySelector("#checkmark2").classList.add("hide");

    //hide ved click

}

function showCheckmark2() {
    console.log("show checkmark2");
    document.querySelector("#checkmark2").classList.remove("hide");
}

function hideCheckmark3() {
    console.log("hide checkmark3");
    document.querySelector("#checkmark3").classList.add("hide");

    //hide ved click

}

function showCheckmark3() {
    console.log("show checkmark3");
    document.querySelector("#checkmark3").classList.remove("hide");
}

//
//function showCheckmark1() {
//    console.log("show checkmark1");
//    document.querySelector("#checkmark1").classList.remove("hide");
//}

function hideStart() {
    console.log("hide start");
    document.querySelector("#play").removeEventListener("click", hideStart);
    document.querySelector("#play").classList.remove("pulse");
    document.querySelector("#start").classList.add("fade_out");
    document.querySelector("#start").addEventListener("animationend", startGame);
}

function startGame() {
    console.log("start game");
    document.querySelector("#start").classList.remove("fade_out");
    document.querySelector("#start").removeEventListener("animationend", startGame);
    document.querySelector("#start").classList.add("hide");

    document.querySelector("#meatball").addEventListener("click", clickFood);
    document.querySelector("#meatball2").addEventListener("click", clickFood);
    document.querySelector("#meatball3").addEventListener("click", clickFood);
    document.querySelector("#meatball4").addEventListener("click", clickFood);
    document.querySelector("#meatball5").addEventListener("click", clickFood);
    document.querySelector("#meatball6").addEventListener("click", clickFood);
    document.querySelector("#pasta").addEventListener("click", clickFood);
    document.querySelector("#pasta2").addEventListener("click", clickFood);
    document.querySelector("#pasta3").addEventListener("click", clickFood);
    document.querySelector("#pasta4").addEventListener("click", clickFood);
    document.querySelector("#pasta5").addEventListener("click", clickFood);
    document.querySelector("#knife").addEventListener("click", clickCutlery);
    document.querySelector("#knife2").addEventListener("click", clickCutlery);
    document.querySelector("#knife3").addEventListener("click", clickCutlery);
    document.querySelector("#knife4").addEventListener("click", clickCutlery);
    document.querySelector("#fork").addEventListener("click", clickCutlery);
    document.querySelector("#fork2").addEventListener("click", clickCutlery);
    document.querySelector("#fork3").addEventListener("click", clickCutlery);

}


function clickFood() {
    console.log("pasta klikket");

    points++;
    console.log(points);
    document.querySelector("#points").innerHTML = points;
    console.log(this);
    this.classList.add("hide");
    this.removeEventListener("click", clickFood);
}

function clickCutlery() {
    console.log("bestik klikket");

    points--;
    console.log(points);
    document.querySelector("#points").innerHTML = points;

    console.log(this);
    this.classList.add("hide");
    this.removeEventListener("click", clickCutlery);
}

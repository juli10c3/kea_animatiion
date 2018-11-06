let points = 0;
let timeLeft = 30;
let life = 3;
let showSettingsEffektSound = true;
let showSettingsMusic = true;

window.addEventListener("load", sidenVises);

//function skal altid være med parantes bagved
function sidenVises() {
    //for at holde styr på det
    console.log("siden vises");
    //Hvad der skal ske
    document.querySelector("#settings").addEventListener("click", showSettings);
    showStart();
}

function showStart() {
    console.log("show start");
    document.querySelector("#start").classList.remove("hide");
    document.querySelector("#play").classList.add("pulse");
    document.querySelector("#play").addEventListener("click", hideStart);
    //    document.querySelector("#setting_knap").addEventListener("click", showSettings);


}

function showSettings() {
    console.log("show settings");
    document.querySelector("#settings_screen").classList.remove("hide");
    document.querySelector("#setting_close").addEventListener("click", hideSettings);
    document.querySelector("#sfx").addEventListener("click", toggleSounds);
    document.querySelector("#music").addEventListener("click", toggleMusic);
    //    document.querySelector("#sfx").addEventListener("click", toggleSounds);
    //    document.querySelector("#music").addEventListener("click", toggleMusic);

}

function hideSettings() {
    console.log("hideSettings");
    document.querySelector("#settings_screen").classList.add("hide");
}

function toggleSounds() {
    console.log("toggleSounds");
    if (showSettingsEffektSound == false) {
        console.log("true");
        showSettingsEffektSound = true;
        soundsOn();
    } else {
        console.log("false");
        showSettingsEffektSound = false;
        soundsOff();
        //        this.addEventListener("click", soundsOff);
    }
}

function soundsOff() {
    console.log("soundsOff");
    document.querySelector("#sfx").classList.remove("on");

}

function soundsOn() {
    console.log("soundsOn");
    document.querySelector("#sfx").classList.add("off");
}

function toggleMusic() {
    console.log("toggleMusic");
    if (showSettingsMusic == true) {
        console.log("true");
        showSettingsMusic = false;
        musicOn();
    } else {
        console.log("false");
        showSettingsMusic = true;
        musicOff();
    }
}

function musicOff() {
    console.log("musicOff");
    document.querySelector("#music").classList.remove("on");
}

function musicOn() {
    console.log("musicOn");
    document.querySelector("#music").classList.add("off");
}

//function hideCheckmark1() {
//    console.log("hide checkmark1");
//    document.querySelector("#checkmark1").classList.add("hide");
//    //hide ved click
//
//
//}
//
//function showCheckmark1() {
//    console.log("show checkmark1");
//
//}
//
//
//function hideCheckmark2() {
//    console.log("hide checkmark2");
//    document.querySelector("#checkmark2").classList.add("hide");
//
//    //hide ved click
//
//}
//
//function showCheckmark2() {
//    console.log("show checkmark2");
//
//}
//
//function hideCheckmark3() {
//    console.log("hide checkmark3");
//    document.querySelector("#checkmark3").classList.add("hide");
//
//    //hide ved click
//
//}
//
//function showCheckmark3() {
//    console.log("show checkmark3");
//
//}

//
//function showCheckmark1() {
//    console.log("show checkmark1");
//    document.querySelector("#checkmark1").classList.remove("hide");
// document.querySelector("#play").classList.toggle("hide");
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
    timeLeftFc();
}


function clickFood() {
    console.log("pasta klikket");

    points++;
    console.log(points);
    document.querySelector("#points").innerHTML = points;
    console.log(this);
    this.classList.add("hide");
    this.removeEventListener("click", clickFood)

    //
    //        this.addEventListener("animationend", nySvamp);
    //        gameStatus();
}

function clickCutlery() {
    console.log("bestik klikket");

    life--;
    console.log("life");
    document.querySelector("#heart" + (life + 1)).classList.add("hide");

    this.addEventListener("animationend", timeLeftFc);
    gameStatus();
}

function timeLeftFc() {
    console.log("timeleftFc timeleft er" + timeLeft);
    //se øverst for hvad den tæller ned fra

    if (timeLeft > 0) {
        console.log("timeleft");
        timeLeft--;
        setTimeout(timeLeftFc, 1000);

    } else {

        gameStatus();
        //^Kalder på gameover funktionen
    }
}

function gameStatus() {
    console.log("gameStatus");
    console.log(life);
    if (life == 0) {
        document.querySelector("#gameover").classList.remove("hide");
    } else if (points == 10) {
        document.querySelector("#levelcomplete").classList.remove("hide");
    }
}

function gameOver() {

}

function levelComplete() {

}

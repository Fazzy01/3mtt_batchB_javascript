var myBtn = document.getElementById("btn")
var myBtnAuto = document.getElementById("auto")

myBtn.addEventListener("click", buttonClicked );
myBtnAuto.addEventListener("click", buttonClickedAuto );

function buttonClicked () {
    var myArrQoutes = [
        "if you eat you belle full",
        "you cant see without opening your eyes",
        "you fly by lifting wings",
        "higher than higher"
    ]
    let randomQuotte =  Math.floor(Math.random()* myArrQoutes.length)

    var myQoute = document.getElementById('qoute')
    myQoute.innerHTML = myArrQoutes[randomQuotte]
}

function buttonClickedAuto() {
     setInterval(buttonClicked, 500)
}



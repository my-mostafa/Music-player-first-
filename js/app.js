let mousic = document.getElementById("mousic")
let timer = document.getElementById("timer")
let timerfull = document.getElementById("timerfull")
let playbtn = document.getElementById("playbtn")
let stopbtn = document.getElementById("stopbtn")

let arymos = [
    "./audio/1.mp3",
    "./audio/2.mp3",
    "./audio/3.mp3",
    "./audio/4.mp3"
]
let i = 0
 
function funplay () {
    stopbtn.style.backgroundColor = "white"
    playbtn.style.backgroundColor = "blue"
    mousic.play()
    setInterval(function(){
        timer.innerHTML = Math.floor(mousic.currentTime)+"s"
        timerfull.innerHTML = Math.floor(mousic.duration)+"s"
        if(mousic.duration===mousic.currentTime){
            funnext()
        }
        },1000)

}

function funstop () {
    mousic.pause()
    stopbtn.style.backgroundColor = "blue"
    playbtn.style.backgroundColor = "white"


    
}

function funnext () {
    if(i >= arymos.length-1){i=-1}
    i++
    mousic.setAttribute("src",arymos[i])
    funplay()
}

function funprevios () {
    if(i <= 0 ){i=arymos.length}
    i--
    mousic.setAttribute("src",arymos[i])
    funplay()
}

function funspeedfast () {
    if(mousic.playbackRate == 1){
        mousic.playbackRate = 2
    }else if(mousic.playbackRate == 2){
        mousic.playbackRate = 3
    }else if(mousic.playbackRate == 3){
        mousic.playbackRate = 1
    }
}

function funmi() {
    mousic.currentTime = mousic.currentTime - 10
}


function funpl() {
    mousic.currentTime = mousic.currentTime + 10
}














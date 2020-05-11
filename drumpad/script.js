//I put a features to adjust the volum of the beats as you want//
function sound (ID) 
{
    let sound = document.querySelector(ID)
    let soundVolume = document.querySelector(".soundVolume")

    sound.volume = soundVolume.value / 10
    if (sound.paused){
    sound.play()
    } else {
    sound.currentTime = 0
    }

}

//My beats play with the numer of the keyboard//
document.addEventListener("keydown", function(event) 
{
    //At this moment i just try to put a transition when i play the beats on the keyboard, the next is at the bottom//
    let eventWhichKey = event.which
    const boum = document.querySelector(".boum")

    boum.classList.add('playing')
    boum.classList.remove('playing')
    boum.classList.toggle('playing')

    //This is my function who permit to play the song with the keyboard//
    switch (eventWhichKey){

        case 65:
            sound('.first')
            break

        case 90:
            sound('.two')
            break

        case 69:
            sound('.three')
            break

        case 81:
            sound('.four')
            break

        case 83:
            sound('.five')
            break

        case 68:
            sound('.six')
            break
    }
})

//I try to make a transition when we click on the keyboard to show which key play (features)//
function removeTransition(e) {
    if(e.propertyName !== 'transform') return
    
    console.log("end")
}

const bass = document.querySelector('.bass')
bass.addEventListener('transitionend', removeTransition)


//This is my Mickael Jackson song, a simple function (features)//

document.querySelector('.button').onclick = function () {

    let audioMusic = new Audio('sqsonore.mp3')

    audioMusic.src = "song/sonore.mp3"
    audioMusic.loop = false
    audioMusic.volume = 0.3
    audioMusic.play()
}
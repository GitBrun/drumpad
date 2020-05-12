//This is my Mickael Jackson song, a simple function to play the song//
document.querySelector('.button').onclick = function () {

    let audioMusic = new Audio('sonore.mp3')

    audioMusic.src = "song/sonore.mp3"
    audioMusic.loop = false
    audioMusic.volume = 0.2
    audioMusic.play()
}


//Is to adjust the volum of the beats as you want//
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

//A beautifull transition when i play the beats on the keyboard//
document.addEventListener("keydown", function(event){
    
    let eventWhichKey = event.which
    let key = document.getElementById(eventWhichKey)

    if(key){
        key.style.background = "#fd79a8"
    }

    document.addEventListener('keyup', () =>{
        let keys = document.getElementsByClassName('moving')
        for (var i = 0 ; i < keys.length ; i++){
            keys[i].style.background = null
        }
    })
  
    //This is my function who permit to play the song with the keyboard//
    switch (eventWhichKey){
  
        //My beats play with the number of the keyboard//
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


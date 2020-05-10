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

document.addEventListener("keydown", function(event) 
{
    let eventWhichKey = event.which

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


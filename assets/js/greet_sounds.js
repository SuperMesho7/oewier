document.onselectstart = playMouseClickSound

keyIsDown = false

function playMouseClickSound() {
    const clickSound = new Audio("assets/audio/click.mp3")
    clickSound.volume = 0.0125
    clickSound.play()
}

buttonElements = document.getElementsByTagName("button")

for (let index = 0; index < buttonElements.length; index++) {
    buttonElements[index].onclick = playMouseClickSound
}

document.onkeydown = () => {
    if (keyIsDown) return
    const keydownSound = new Audio("assets/audio/keydown.mp3")
    keydownSound.volume = 0.0125
    keydownSound.play()
    keyIsDown = true
}

document.onkeyup = () => {
    keyIsDown = false
}
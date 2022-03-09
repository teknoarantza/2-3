basic.forever(function () {
    if (input.lightLevel() > 20) {
        basic.showString("Egun on")
    }
})
basic.forever(function () {
    if (input.lightLevel() > 20) {
        music.startMelody(music.builtInMelody(Melodies.JumpDown), MelodyOptions.Once)
        basic.pause(1000)
    }
})

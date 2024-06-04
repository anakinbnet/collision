input.onGesture(Gesture.LogoUp, function () {
    Fall = false
    Count = 10
})
input.onGesture(Gesture.SixG, function () {
    Fall = true
})
let Count = 0
let Fall = false
Fall = false
Count = 9
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    if (Fall) {
        while (Count > 0) {
            if (!(Fall)) {
                break;
            }
            Count = Count - 1
            basic.showNumber(Count)
        }
        music.play(music.tonePlayable(262, Count), music.PlaybackMode.UntilDone)
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showIcon(IconNames.Happy)
        music.stopAllSounds()
    }
})

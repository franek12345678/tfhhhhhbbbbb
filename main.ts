radio.onReceivedValue(function (name, value) {
    if (name == "dice") {
        basic.showNumber(value)
    }
})
input.onGesture(Gesture.Shake, function () {
    dice = randint(1, 6)
    radio.sendValue("dice", dice)
    basic.showNumber(dice)
})
let dice = 0
led.setBrightness(255)
radio.setGroup(255)
radio.setFrequencyBand(83)
radio.setTransmitPower(7)

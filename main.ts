input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
    basic.showIcon(IconNames.Yes)
    basic.pause(2000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(1)
    basic.showIcon(IconNames.Yes)
    basic.pause(2000)
    basic.clearScreen()
})
radio.setGroup(4)
radio.setTransmitPower(7)
radio.setTransmitSerialNumber(true)
basic.forever(function () {
	
})

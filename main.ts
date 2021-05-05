function setMin () {
    ConTime = 0
    basic.showString("Set min")
    while (ConTime == 0) {
        let Min = 0
        basic.showNumber(Min)
    }
}
function setHour () {
    Time = 0
    ConTime = 0
    basic.showString("Set hour")
    while (ConTime == 0) {
        basic.showNumber(Time)
        if (input.buttonIsPressed(Button.A)) {
            Time += 1
            basic.showNumber(Time)
        } else if (input.buttonIsPressed(Button.B)) {
            Time += -1
            basic.showNumber(Time)
        } else if (input.buttonIsPressed(Button.AB)) {
            ConTime = 1
            basic.showNumber(Time)
            basic.showString("Done")
        }
    }
}
let Time = 0
let ConTime = 0
setHour()
basic.forever(function () {
	
})

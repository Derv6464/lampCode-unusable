function setEnd () {
    ConTime = 0
    basic.showString("Set end hrs")
    while (ConTime == 0) {
        basic.showNumber(endHr)
        if (input.buttonIsPressed(Button.A)) {
            endHr += 1
            basic.showNumber(endHr)
        } else if (input.buttonIsPressed(Button.B)) {
            endHr += -1
            basic.showNumber(endHr)
        } else if (input.buttonIsPressed(Button.AB)) {
            ConTime = 1
            basic.showNumber(endHr)
            basic.showString("Done")
        }
        if (endHr > 24) {
            endHr = 0
        }
    }
    ConTime = 0
    basic.showString("Set start min")
    while (ConTime == 0) {
        basic.showNumber(endMin)
        if (input.buttonIsPressed(Button.A)) {
            endMin += 1
            basic.showNumber(endMin)
        } else if (input.buttonIsPressed(Button.B)) {
            endMin += -1
            basic.showNumber(endMin)
        } else if (input.buttonIsPressed(Button.AB)) {
            ConTime = 1
            basic.showNumber(endMin)
            basic.showString("Done")
        }
        if (endMin > 60) {
            endMin = 0
        }
    }
}
function setMin () {
    Min = 0
    ConTime = 0
    basic.showString("Set min")
    while (ConTime == 0) {
        basic.showNumber(Min)
        if (input.buttonIsPressed(Button.A)) {
            Min += 1
            basic.showNumber(Min)
        } else if (input.buttonIsPressed(Button.B)) {
            Min += -1
            basic.showNumber(Min)
        } else if (input.buttonIsPressed(Button.AB)) {
            ConTime = 1
            basic.showNumber(Min)
            basic.showString("Done")
        }
        if (Min > 60) {
            Min = 0
        }
    }
}
function setHour () {
    Hour = 0
    ConTime = 0
    basic.showString("Set hour")
    while (ConTime == 0) {
        basic.showNumber(Hour)
        if (input.buttonIsPressed(Button.A) && !(input.buttonIsPressed(Button.AB))) {
            Hour += 1
            basic.showNumber(Hour)
        } else if (input.buttonIsPressed(Button.B) && !(input.buttonIsPressed(Button.AB))) {
            Hour += -1
            basic.showNumber(Hour)
        } else if (input.buttonIsPressed(Button.AB)) {
            ConTime = 1
            basic.showNumber(Hour)
            basic.showString("Done")
        }
        if (Hour > 24) {
            Hour = 0
        }
    }
}
function setStart () {
    ConTime = 0
    basic.showString("Set start hrs")
    while (ConTime == 0) {
        basic.showNumber(startHr)
        if (input.buttonIsPressed(Button.A)) {
            startHr += 1
            basic.showNumber(startHr)
        } else if (input.buttonIsPressed(Button.B)) {
            startHr += -1
            basic.showNumber(startHr)
        } else if (input.buttonIsPressed(Button.AB)) {
            ConTime = 1
            basic.showNumber(startHr)
            basic.showString("Done")
        }
        if (startHr > 24) {
            startHr = 0
        }
    }
    ConTime = 0
    basic.showString("Set start min")
    while (ConTime == 0) {
        basic.showNumber(startMin)
        if (input.buttonIsPressed(Button.A)) {
            startMin += 1
            basic.showNumber(startMin)
        } else if (input.buttonIsPressed(Button.B)) {
            startMin += -1
            basic.showNumber(startMin)
        } else if (input.buttonIsPressed(Button.AB)) {
            ConTime = 1
            basic.showNumber(startMin)
            basic.showString("Done")
        }
        if (startMin > 60) {
            startMin = 0
        }
    }
}
function setInter () {
    ConTime = 0
    basic.showString("Set start hrs")
    while (ConTime == 0) {
        basic.showNumber(interval)
        if (input.buttonIsPressed(Button.A)) {
            interval += 10
            basic.showNumber(interval)
        } else if (input.buttonIsPressed(Button.B)) {
            interval += -10
            basic.showNumber(interval)
        } else if (input.buttonIsPressed(Button.AB)) {
            interval = 1
            basic.showNumber(interval)
            basic.showString("Done")
        }
        if (interval > 60) {
            interval = 0
        }
    }
}
let interval = 0
let startMin = 0
let startHr = 0
let Hour = 0
let Min = 0
let endMin = 0
let endHr = 0
let ConTime = 0
setHour()
setMin()
setStart()
setInter()
setEnd()
basic.forever(function () {
	
})

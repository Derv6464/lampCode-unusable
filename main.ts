function setEnd () {
    ConTime = 0
    basic.showString("eh")
    while (ConTime == 0) {
        basic.showNumber(endHr)
        if (input.buttonIsPressed(Button.A) && !(input.buttonIsPressed(Button.AB))) {
            endHr += 1
            basic.showNumber(endHr)
        } else if (input.buttonIsPressed(Button.B) && !(input.buttonIsPressed(Button.AB))) {
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
    basic.showString("em")
    while (ConTime == 0) {
        basic.showNumber(endMin)
        if (input.buttonIsPressed(Button.A) && !(input.buttonIsPressed(Button.AB))) {
            endMin += 1
            basic.showNumber(endMin)
        } else if (input.buttonIsPressed(Button.B) && !(input.buttonIsPressed(Button.AB))) {
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
function long () {
    pins.digitalWritePin(DigitalPin.P2, 1)
    for (let index = 0; index < 12; index++) {
        kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor2, kitronik_motor_driver.MotorDirection.Forward, 25)
        basic.pause(100)
    }
    for (let index = 0; index < 12; index++) {
        kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor2, kitronik_motor_driver.MotorDirection.Reverse, 25)
        basic.pause(100)
    }
    pins.digitalWritePin(DigitalPin.P2, 0)
}
function setMin () {
    Min = 0
    ConTime = 0
    basic.showString("m")
    while (ConTime == 0) {
        basic.showNumber(Min)
        if (input.buttonIsPressed(Button.A) && !(input.buttonIsPressed(Button.AB))) {
            Min += 1
            basic.showNumber(Min)
        } else if (input.buttonIsPressed(Button.B) && !(input.buttonIsPressed(Button.AB))) {
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
    basic.showString("hr")
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
function short () {
    pins.digitalWritePin(DigitalPin.P2, 1)
    for (let index = 0; index < 4; index++) {
        kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor2, kitronik_motor_driver.MotorDirection.Forward, 100)
        basic.pause(100)
    }
    for (let index = 0; index < 4; index++) {
        kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor2, kitronik_motor_driver.MotorDirection.Reverse, 100)
        basic.pause(100)
    }
    pins.digitalWritePin(DigitalPin.P2, 0)
    kitronik_motor_driver.motorOff(kitronik_motor_driver.Motors.Motor2)
}
function setStart () {
    ConTime = 0
    basic.showString("sh")
    while (ConTime == 0) {
        basic.showNumber(startHr)
        if (input.buttonIsPressed(Button.A) && !(input.buttonIsPressed(Button.AB))) {
            startHr += 1
            basic.showNumber(startHr)
        } else if (input.buttonIsPressed(Button.B) && !(input.buttonIsPressed(Button.AB))) {
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
    basic.showString("sm")
    while (ConTime == 0) {
        basic.showNumber(startMin)
        if (input.buttonIsPressed(Button.A) && !(input.buttonIsPressed(Button.AB))) {
            startMin += 1
            basic.showNumber(startMin)
        } else if (input.buttonIsPressed(Button.B) && !(input.buttonIsPressed(Button.AB))) {
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
    basic.showString("i")
    while (ConTime == 0) {
        basic.showNumber(interval)
        if (input.buttonIsPressed(Button.A) && !(input.buttonIsPressed(Button.AB))) {
            interval += 10
            basic.showNumber(interval)
        } else if (input.buttonIsPressed(Button.B) && !(input.buttonIsPressed(Button.AB))) {
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
let endMin = 0
let endHr = 0
let ConTime = 0
let Min = 0
let Hour = 0
setHour()
setMin()
setStart()
setInter()
setEnd()
let timeHr = Hour
let timeMin = Min
basic.forever(function () {
    basic.pause(60000)
    timeMin += 1
    if (timeMin > 60) {
        timeMin = 0
        timeHr += 1
        if (timeHr > 24) {
            timeHr = 0
        }
    }
})
basic.forever(function () {
    while (timeHr == endHr && timeMin == endMin) {
        long()
        break;
    }
    while (timeHr > startHr && timeMin > startMin) {
        basic.pause(interval * 60000)
        short()
    }
})

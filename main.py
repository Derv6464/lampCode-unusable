def setEnd():
    global ConTime, endHr, endMin
    ConTime = 0
    basic.show_string("eh")
    while ConTime == 0:
        basic.show_number(endHr)
        if input.button_is_pressed(Button.A) and not (input.button_is_pressed(Button.AB)):
            endHr += 1
            basic.show_number(endHr)
        elif input.button_is_pressed(Button.B) and not (input.button_is_pressed(Button.AB)):
            endHr += -1
            basic.show_number(endHr)
        elif input.button_is_pressed(Button.AB):
            ConTime = 1
            basic.show_number(endHr)
            basic.show_string("Done")
        if endHr > 24:
            endHr = 0
    ConTime = 0
    basic.show_string("em")
    while ConTime == 0:
        basic.show_number(endMin)
        if input.button_is_pressed(Button.A) and not (input.button_is_pressed(Button.AB)):
            endMin += 1
            basic.show_number(endMin)
        elif input.button_is_pressed(Button.B) and not (input.button_is_pressed(Button.AB)):
            endMin += -1
            basic.show_number(endMin)
        elif input.button_is_pressed(Button.AB):
            ConTime = 1
            basic.show_number(endMin)
            basic.show_string("Done")
        if endMin > 60:
            endMin = 0
def long():
    Kitronik_Robotics_Board.motor_on(Kitronik_Robotics_Board.Motors.MOTOR1,
        Kitronik_Robotics_Board.MotorDirection.FORWARD,
        25)
    Kitronik_Robotics_Board.motor_on(Kitronik_Robotics_Board.Motors.MOTOR1,
        Kitronik_Robotics_Board.MotorDirection.REVERSE,
        25)
def setMin():
    global Min, ConTime
    Min = 0
    ConTime = 0
    basic.show_string("m")
    while ConTime == 0:
        basic.show_number(Min)
        if input.button_is_pressed(Button.A) and not (input.button_is_pressed(Button.AB)):
            Min += 1
            basic.show_number(Min)
        elif input.button_is_pressed(Button.B) and not (input.button_is_pressed(Button.AB)):
            Min += -1
            basic.show_number(Min)
        elif input.button_is_pressed(Button.AB):
            ConTime = 1
            basic.show_number(Min)
            basic.show_string("Done")
        if Min > 60:
            Min = 0
def setHour():
    global Hour, ConTime
    Hour = 0
    ConTime = 0
    basic.show_string("hr")
    while ConTime == 0:
        basic.show_number(Hour)
        if input.button_is_pressed(Button.A) and not (input.button_is_pressed(Button.AB)):
            Hour += 1
            basic.show_number(Hour)
        elif input.button_is_pressed(Button.B) and not (input.button_is_pressed(Button.AB)):
            Hour += -1
            basic.show_number(Hour)
        elif input.button_is_pressed(Button.AB):
            ConTime = 1
            basic.show_number(Hour)
            basic.show_string("Done")
        if Hour > 24:
            Hour = 0
def short():
    Kitronik_Robotics_Board.motor_on(Kitronik_Robotics_Board.Motors.MOTOR1,
        Kitronik_Robotics_Board.MotorDirection.FORWARD,
        100)
    Kitronik_Robotics_Board.motor_on(Kitronik_Robotics_Board.Motors.MOTOR1,
        Kitronik_Robotics_Board.MotorDirection.REVERSE,
        100)
def setStart():
    global ConTime, startHr, startMin
    ConTime = 0
    basic.show_string("sh")
    while ConTime == 0:
        basic.show_number(startHr)
        if input.button_is_pressed(Button.A) and not (input.button_is_pressed(Button.AB)):
            startHr += 1
            basic.show_number(startHr)
        elif input.button_is_pressed(Button.B) and not (input.button_is_pressed(Button.AB)):
            startHr += -1
            basic.show_number(startHr)
        elif input.button_is_pressed(Button.AB):
            ConTime = 1
            basic.show_number(startHr)
            basic.show_string("Done")
        if startHr > 24:
            startHr = 0
    ConTime = 0
    basic.show_string("sm")
    while ConTime == 0:
        basic.show_number(startMin)
        if input.button_is_pressed(Button.A) and not (input.button_is_pressed(Button.AB)):
            startMin += 1
            basic.show_number(startMin)
        elif input.button_is_pressed(Button.B) and not (input.button_is_pressed(Button.AB)):
            startMin += -1
            basic.show_number(startMin)
        elif input.button_is_pressed(Button.AB):
            ConTime = 1
            basic.show_number(startMin)
            basic.show_string("Done")
        if startMin > 60:
            startMin = 0
def setInter():
    global ConTime, interval
    ConTime = 0
    basic.show_string("i")
    while ConTime == 0:
        basic.show_number(interval)
        if input.button_is_pressed(Button.A) and not (input.button_is_pressed(Button.AB)):
            interval += 10
            basic.show_number(interval)
        elif input.button_is_pressed(Button.B) and not (input.button_is_pressed(Button.AB)):
            interval += -10
            basic.show_number(interval)
        elif input.button_is_pressed(Button.AB):
            interval = 1
            basic.show_number(interval)
            basic.show_string("Done")
        if interval > 60:
            interval = 0
interval = 0
startMin = 0
startHr = 0
Hour = 0
Min = 0
endMin = 0
endHr = 0
ConTime = 0
setHour()
setMin()
setStart()
setInter()
setEnd()

def on_forever():
    timeMin = 0
    timeHr = 0
    while timeHr == endHr and timeMin == endMin:
        long()
        break
basic.forever(on_forever)

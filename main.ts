serial.redirect(
SerialPin.P0,
SerialPin.P1,
BaudRate.BaudRate115200
)
basic.forever(function () {
    basic.showLeds(`
        # # . # #
        # # . # #
        . # # # .
        . # . # .
        . # . # .
        `)
    basic.showLeds(`
        # # . # #
        # # . # #
        . # # # .
        . . # . .
        . . # . .
        `)
})

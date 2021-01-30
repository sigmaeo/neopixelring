let zaehler = 0
let strip = neopixel.create(DigitalPin.C17, 24, NeoPixelMode.RGBW)
strip.showRainbow(1, 360)
strip.setBrightness(255)
strip.show()
basic.forever(function () {
    strip.rotate(1)
    zaehler += 1
    if (zaehler == 72) {
        for (let Index = 0; Index <= 23; Index++) {
            strip.setPixelWhiteLED(Index, 255)
        }
    }
    if (zaehler == 144) {
        zaehler = 0
        for (let Index = 0; Index <= 23; Index++) {
            strip.setPixelWhiteLED(Index, 0)
        }
    }
    strip.show()
    basic.pause(10)
})

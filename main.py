strip = neopixel.create(DigitalPin.C17, 24, NeoPixelMode.RGBW)
strip.show_rainbow(1, 360)
strip.set_brightness(255)
strip.show()
zaehler = 0

def on_forever():
    global zaehler
    strip.rotate(1)
    zaehler += 1
    if zaehler == 24:
        for Index in range(24):
            strip.set_pixel_white_led(Index, 255)
    if zaehler == 48:
        zaehler = 0
        strip.clear()
        strip.show_rainbow(1, 360)
    strip.show()
    basic.pause(10)
basic.forever(on_forever)

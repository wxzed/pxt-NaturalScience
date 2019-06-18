// Add your code here

/**
 * demo1: Routine for measuring water TDS values
 */
NaturalScience.setK(2.68)
basic.forever(function () {
    NaturalScience.showUserText(0, NaturalScience.getK())
    NaturalScience.showUserNumber(2, NaturalScience.getTDS())
    basic.pause(1000)
    NaturalScience.clear()
})

/**
 * demo2: Get information about the temperature, humidity, and atmospheric pressure of the environment
 */
basic.forever(function () {
    NaturalScience.showUserText(0, NaturalScience.readBME280Data(NaturalScience.BME280Data.Temperature))
    NaturalScience.showUserText(1, NaturalScience.readBME280Data(NaturalScience.BME280Data.Humidity))
    NaturalScience.showUserText(2, NaturalScience.readBME280Data(NaturalScience.BME280Data.Pressure))
    basic.pause(1000)
    NaturalScience.clear()
})

/**
 * demo3: Get water temperature, UV, sound intensity, natural light and other values, and display on OLED
 */
basic.forever(function () {
    NaturalScience.showUserNumber(0, NaturalScience.TemperatureNumber())
    NaturalScience.showUserNumber(1, NaturalScience.getUV())
    NaturalScience.showUserNumber(2, NaturalScience.getNoise())
    NaturalScience.showUserNumber(3, NaturalScience.getC())
    basic.pause(1000)
    NaturalScience.clear()
})

/**
 * demo4: Set the color of the RGB light according to the RGB component of the color sensor
 */
let r = 0
let g = 0
let b = 0
basic.forever(function () {
    r = NaturalScience.getRed()
    g = NaturalScience.getGreen()
    b = NaturalScience.getBlue()
    NaturalScience.showUserNumber(0, r)
    NaturalScience.showUserNumber(1, g)
    NaturalScience.showUserNumber(1, b)
    NaturalScience.setRGB(50, NaturalScience.rgb(r, g, b))
    basic.pause(1000)
    NaturalScience.clear()
})

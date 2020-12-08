module.exports = {
    convert : (data, callback) => {
        const value = data.temperatureValue
        const type = data.temperatureType
        if(type == "celcius") {
            const celcius = value
            const reamur = 4/5 * celcius
            const fahrenhait = 9/5 * celcius + 32
            const kelvin = celcius +  273
            const result = {
                celcius,
                reamur,
                fahrenhait,
                kelvin
            }
            return callback(null, result)
        }
        if(type == "reamur") {
            const reamur = value
            const celcius = 5/4 * reamur
            const fahrenhait = 9/4 * reamur + 32
            const kelvin = 5/4 * reamur + 273
            const result = {
                reamur,
                celcius,
                fahrenhait,
                kelvin
            }
            return callback(null, result)
        }
        if(type == "fahrenhait") {
            const fahrenhait = value
            const celcius = 5/9 * (fahrenhait - 32)
            const reamur = 4/9 * (fahrenhait - 32)
            const result = {
                fahrenhait,
                celcius,
                reamur
            }
            return callback(null, result)
        }
        if(type == "kelvin") {
            const kelvin = value
            const celcius = kelvin - 273
            const reamur = 4/5 * (kelvin - 273)
            const result = {
                kelvin,
                celcius,
                reamur
            }
            return callback(null, result)
        }
    }
}
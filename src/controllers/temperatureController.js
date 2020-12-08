const {convert} = require('../models/temperatureModel')

module.exports = {
    temperature : (req, res) => {
        const data = req.body
        const temperatureValue = Number(data.temperatureValue)
        const temperatureType = data.temperatureType
        convert({temperatureValue, temperatureType}, (err, result) => {
            if(err) res.json({
                status : 0,
                msg : err
            })
            res.json({
                status : 1,
                msg : "Data success to receive",
                result
            })
        })
    }
}
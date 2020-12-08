const { bmiModel } = require('../models/bmiModel')

module.exports = {
    bmi : (req, res) => {
        bmiModel(Number(req.body.height), Number(req.body.mass), (err, result) => {
            if(err) res.json({
                status : 0,
                result 
            })
            res.json({
                status : 1,
                result
            })
        })
    }
    
}
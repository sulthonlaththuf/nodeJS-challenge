const {
    cubeModel,
    rectangularPrismModel
} = require('../models/geometryModel')

module.exports = {
    cube : (req, res) => {
        const edge = Number(req.body.edge)
        cubeModel(edge, (err, result) => {
            if(err) res.json({
                status : 0,
                msg : err
            })
            res.json({
                status : 1,
                msg : result
            })
        })
    },
    rectangularPrism : (req, res) => {
        const length = Number(req.body.length)
        const width = Number(req.body.width)
        const height = Number(req.body.height)
        const data = {length, width, height}
        rectangularPrismModel(data, (err, result) => {
            if(err) res.json({
                status : 0,
                msg : err
            })
            res.json({
                status : 1,
                msg : result
            })
        })
    }
    
}
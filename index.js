const express = require('express')

const app = express()

app.use(express.json())

const router = (args) => {
    return require('./src/routes/' + args)
}

app.use('/geometry', router('geometryRoute'))
app.use('/temperature', router('temperatureRoute'))
app.use('/bmi', router('bmiRoute'))

app.get('/decimal/:value', (req, res) => {
    const decimal = Number(req.params.value)
    const binary = decimal.toString(2)
    const octal = decimal.toString(8)
    const hexadecimal = decimal.toString(16)
    res.json({
        decimal,
        result : {
            binary,
            octal,
            hexadecimal
        }
    })
})

app.get('/binary/:value', (req, res) => {
    const binary = req.params.value
    const decimal = parseInt(binary, 2)
    res.json({
        binary,
        result : {
            decimal
        }
    })
})

app.get('/octal/:value', (req, res) => {
    const octal = Number(req.params.value)
    const decimal = parseInt(octal, 8)
    res.json({
        octal, 
        result : {
            decimal
        }
    })
})

app.get('/hexadecimal/:value', (req, res) => {
    const hexadecimal = req.params.value
    const decimal = parseInt(hexadecimal, 16)
    res.json({
        hexadecimal,
        result : {
            decimal
        }
    })
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
}) 
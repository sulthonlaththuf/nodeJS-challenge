const router = require('express').Router()

const {temperature} = require('../controllers/temperatureController')

router.post('/', temperature)

module.exports = router
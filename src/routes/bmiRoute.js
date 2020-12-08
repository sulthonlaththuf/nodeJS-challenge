const router = require('express').Router()
const { bmi } = require('../controllers/bmiController')

router.post('/', bmi)

module.exports = router
const router = require('express').Router()

const {
    cube,
    rectangularPrism
} = require('../controllers/geometryController')

router.post('/cube/', cube)
router.post('/rectangularPrism/', rectangularPrism)

module.exports = router
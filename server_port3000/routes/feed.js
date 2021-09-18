const express = require('express')

const feedController = require('../controllers/feed')

const router = express.Router();

router.get('/city/:cityName', feedController.getCity)

module.exports = router;
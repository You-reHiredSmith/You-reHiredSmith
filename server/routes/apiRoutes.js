const express = require('express')

const apiController = require('../controllers/apiController.js'); 

const router = express.Router()

// router.get('/', apiController.testController, (req, res) => {
//   res.send('no bugs')
// })

router.get('/users/:id', apiController.getUserId, (req, res) => {
    res.status(200).json(res.locals.rows); 
})

module.exports = router; 
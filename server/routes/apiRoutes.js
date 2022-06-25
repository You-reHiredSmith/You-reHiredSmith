const express = require('express')

const apiController = require('../controllers/apiController.js'); 

const router = express.Router()

// router.get('/', apiController.testController, (req, res) => {
//   res.send('no bugs')
// })

router.get('/api/applications/:id', apiController.getApplicationId, (req, res) => {
    res.status(200).json(res.locals.applicationId); 
})

module.exports = router; 
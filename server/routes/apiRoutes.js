const express = require('express')

const apiController = require('../controllers/apiController.js'); 

const router = express.Router()

// router.get('/', apiController.testController, (req, res) => {
//   res.send('no bugs')
// })

router.get('/users/applications/:id', apiController.getUsersApplications, (req, res) => {
  res.json(res.locals.applications)
})

module.exports = router; 
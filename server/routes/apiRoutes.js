const express = require('express')

const apiController = require('../controllers/apiController.js'); 

const router = express.Router()

// router.get('/', apiController.testController, (req, res) => {
//   res.send('no bugs')
// })

router.get('/users/:id', apiController.getUserId, (req, res) => {
    res.status(200).json(res.locals.rows); 

})

router.get('/users/applications/:id', apiController.getUsersApplications, (req, res) => {
  res.json(res.locals.applications)
})

router.post('/applications', apiController.addApplication, (req, res) => {
  res.send('Post Successful!')
})

module.exports = router; 
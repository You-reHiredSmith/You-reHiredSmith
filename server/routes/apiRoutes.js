const express = require('express')

const apiController = require('../controllers/apiController.js')

const router = express.Router()

// router.get('/', apiController.testController, (req, res) => {
//   res.send('no bugs')
// })

// the :id is for a dynamic route segment, but it's not actually being used in the query because userId of 1 is hardcoded
router.get('/', apiController.getUser, (req, res) => {
  res.sendStatus(200).json(res.locals.userLoggedIn)
})

router.get('/users/:id', apiController.getUserId, (req, res) => {
  //console.log(req.params)
  res.status(200).json(res.locals.rows)
})

router.get('/users/applications/:id', apiController.getUsersApplications, (req, res) => {
  res.json(res.locals.applications)
})

router.post('/applications', apiController.addApplication, (req, res) => {
  res.send('Post Successful!')
})

router.get('/applications/:id', apiController.getApplicationsId, (req, res) => {
  res.json(res.locals.applicationsId)
})

router.post('/', apiController.addNewUser, (req, res) => {
  res.sendStatus(200).json(res.locals.user)
})

router.put('/users/applications/:id', apiController.updateApplication, (req, res) => {
  res.send('Put Successful!')
})

router.delete('/applications/:id', apiController.deleteApplications, (req, res) => {
  res.send('Delete Successful!')
})

module.exports = router

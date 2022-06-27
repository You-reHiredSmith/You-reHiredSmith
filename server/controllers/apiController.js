const db = require('../models/models.js')

module.exports = {
  // All general api controllers will go here
  // testController: async (req, res, next) => {
  //   try {
  //     console.log('test')
  //     const data = await db.query('SELECT * FROM users')
  //     console.log(data)
  //     next()
  //   } catch(err) {
  //     console.log(err)
  //     next(err)
  //   }
  // }

  getUserId: async (req, res, next) => {
    try {
      const { id } = req.params
      const text = 'SELECT * FROM users WHERE user_id = $1'
      const values = [id]
      const data = await db.query(text, values)
      res.locals.rows = data.rows[0]
      return next()
    } catch (err) {
      console.log(err)
      next(err)
    }
  },

  getUsersApplications: async (req, res, next) => {
    const { id: userId } = req.params
    try {
      const data = await db.query('SELECT * FROM applications WHERE user_id = $1', [userId])
      res.locals.applications = data.rows
      next()
    } catch (err) {
      next(err)
    }
  },

  addApplication: async (req, res, next) => {
    const {
      user_id, companyname, status, priority, createddate,
      notes, posting
    } = req.body
    if (!user_id || !companyname || !status || !priority || !createddate ||
      typeof notes !== 'string' || typeof posting !== 'string') next({ message: 'Invalid Body in addApplication' })
    try {
      await db.query(`
        INSERT INTO applications (user_id, companyname, status, priority, createddate, notes, posting)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        `, [user_id, companyname, status, priority, createddate, notes, posting])
      next()
    } catch (err) {
      console.log(err)
      next(err)
    }
  },

  getApplicationsId: async (req, res, next) => {
    const { id } = req.params
    try {
      const data = await db.query('SELECT * FROM applications WHERE application_id = $1', [id])
      res.locals.applicationsId = data.rows[0]
      next()
    } catch (err) {
      next(err)
    }
  },

  addNewUser: async (req, res, next) => {
    const {  firstname, lastname, age } = req.body
    try {
      await db.query('INSERT INTO users (firstname, lastname, age) VALUES ($1, $2, $3)', [ firstname, lastname, age]) //'CREATE USER WITH VALUES
      next()
    } catch (err) {
      console.log(err)
      next(err)
    }
  }
}

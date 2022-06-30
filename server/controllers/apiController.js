const db = require('../models/models.js')
const bcrypt = require('bcrypt')
const { isRejected } = require('@reduxjs/toolkit')

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

  // users table:
  // user_id, firstname, lastname, age, spider_passwords
  // 'INSERT INTO users (username, spiders_passwords) VALUES ($1, $2)', [username, hashedPassword]
  // need to getUser function from login, bcrypt compare
  getUser: async (req, res, next) => {
    try {
      const { username, password } = req.body
      const query = `SELECT username, spiders_passwords FROM users WHERE username = '${username}'`
      const data = await db.query(query)
      //console.log(data)
      // console.log(data.rows)
      const data1 = data.rows[0]
      // console.log(data1.spiders_passwords)
      const user = data1.username
      
      // res.locals.userLoggedIn = user
      // console.log(user)
      const hashedPassword = data1.spiders_passwords
      // console.log(hashedPassword)
      const match = await bcrypt.compare(password, hashedPassword)
      console.log(match)
      if (match) {
        return next()
      }
    } catch (err) {
      console.log(err)
      next(err)
    }
  },

  getUserId: async (req, res, next) => {
    try {
      const { id } = req.params
      const text = 'SELECT * FROM users WHERE user_id = $1'
      const values = [id]
      const data = await db.query(text, values)
      res.locals.rows = data.rows[0]
      console.log(res.locals.rows)

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
      userId, companyname, status, priority, createddate,
      notes, posting
    } = req.body
    console.log(req.body)
    if (!userId || !companyname || !status || typeof priority !== 'string' || !createddate ||
      typeof notes !== 'string' || typeof posting !== 'string') next({ message: 'Invalid Body in addApplication' })
    try {
      await db.query(`
        INSERT INTO applications (user_id, companyname, status, priority, createddate, notes, posting)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        `, [userId, companyname, status, priority, createddate, notes, posting])
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

  // add encrypted password

  addNewUser: async (req, res, next) => {
    const saltRounds = 12
    const { username, password } = req.body
    // console.log(req.body)
    // const hashedPassword = await new Promise((resolve, reject) =>
    //   bcrypt.hash(password, saltRounds, function (err, hash) {
    //     if (err) reject(err)
    //     resolve(hash)
    //   }))
    // console.log(hashedPassword)
    const hashedPassword = await bcrypt.hash(password, saltRounds)

    try {
      await db.query('INSERT INTO users (username, spiders_passwords) VALUES ($1, $2)', [username, hashedPassword])
      // const data = await db.query('SELECT username FROM users WHERE username = $1', [username])
      // console.log(data)
      res.locals.user = username
      // console.log(res.locals.user)
      next()
    } catch (err) {
      next(err)
    }
  },

  // addNewUser: async (req, res, next) => {
  //   const { firstname, lastname, age } = req.body
  //   try {
  //     await db.query('INSERT INTO users (firstname, lastname, age) VALUES ($1, $2, $3)', [firstname, lastname, age]) // 'CREATE USER WITH VALUES
  //     next()
  //   } catch (err) {
  //     next(err)
  //   }
  // },

  updateApplication: async (req, res, next) => {
    const { application_id, user_id, companyname, status, priority, createddate, notes, posting } = req.body
    console.log(req.body)
    if (!user_id || !companyname || !status || !priority || !createddate || typeof notes !== 'string' || typeof posting !== 'string') next({ message: 'Invalid Body in updateApplication' })
    try {
      await db.query(`UPDATE applications 
      SET user_id = $1, companyname = $2, status= $3, priority = $4, createddate = $5, notes = $6, posting = $7
      WHERE application_id = $8`, [user_id, companyname, status, priority, createddate, notes, posting, application_id])
      next()
    } catch (err) {
      console.log(err)
      next(err)
    }
  },

  deleteApplications: async (req, res, next) => {
    const { id } = req.params
    try {
      console.log(req.params)
      await db.query('DELETE FROM applications WHERE application_id = $1', [id])
      next()
    } catch (err) {
      console.log(err)
      next(err)
    }
  }
}

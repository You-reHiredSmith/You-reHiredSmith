const db = require('../models/models.js'); 



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
    } catch(err){
      console.log(err)
      next(err)
    }
  },

  getUsersApplications: async (req, res, next) => {
    const { id : userId } = req.params
    try {
      const data = await db.query('SELECT * FROM applications WHERE user_id = $1',[userId])
      res.locals.applications = data.rows
      next()
    } catch(err) {
      next(err)
    }
  }
}; 

const db = require('../models/models.js'); 



module.exports = {
  // All general api controllers will go here
  testController: async (req, res, next) => {
    try {
      console.log('test')
      const data = await db.query('SELECT * FROM users')
      console.log(data)
      next()
    } catch(err) {
      console.log(err)
      next(err)
    }
  }
} 
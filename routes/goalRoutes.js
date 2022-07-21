const express = require("express")
const router = express.Router()
const { getGoals,setGoal,updateGoal,DeleteGoal } = require('../controllers/goalControllers')

// routes for get and post 
router.route('/').get(getGoals).post(setGoal)

// route for update anda delete 
router.route('/:id').put(updateGoal).delete(DeleteGoal)
  
 module.exports = router
const express = require("express")
const router = express.Router()
const { getGoals,setGoal,updateGoal,DeleteGoal } = require('../controllers/goalControllers')
const {protect} =require('../middleware/authMiddleware')

// routes for get and post 
router.route('/').get(protect,getGoals).post(protect,setGoal)

// route for update anda delete 
router.route('/:id').put(protect,updateGoal).delete(protect,DeleteGoal)
  
 module.exports = router
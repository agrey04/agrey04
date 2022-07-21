const express = require("express")
const router = express.Router()
const { getGoals,setGoal,updateGoal,DeleteGoal } = require('../controllers/goalControllers')

router.route('/').get(getGoals).post(setGoal)
router.route('/:id').put(updateGoal).delete(DeleteGoal)
  
 module.exports = router
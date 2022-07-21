const asyncHandler = require('express-async-handler')


// @desc Get goals
// @route GET /api/goals
// @access private
const getGoals =asyncHandler( async(req,res)=>{
    if (!req.body.text){
        res.status(400)
        throw new  Error("please add a text field")
    }
    res.status(200).json({messge:"get goals"})
}
)
// @desc set goals
// @route PUT /api/goals
// @access private
const setGoal =asyncHandler(  async(req,res)=>{
    res.status(200).json({messge:"Set goals"})
}
)
// @desc delete goal
// @route PUT /api/goals/:id
// @access private
const updateGoal =asyncHandler( async(req,res)=>{
    res.status(200).json({messge:`update goal ${req.params.id}`})
})
// @desc  Delete goal
// @route DELETE /api/goals/:id
// @access private
const DeleteGoal = asyncHandler( async(req,res)=>{
    res.status(200).json({messge:`delete goal ${req.params.id}`})
})
module.exports ={getGoals,setGoal,updateGoal,DeleteGoal}
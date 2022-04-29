
const express=require('express')
const router=express.Router()

const {getTask,creat_task,updateTasks,deleteTasks}=require('../controller/TaskC')

const {protect}=require('../middleware/empAUTH')

router.route('/').get(protect, getTask)
router.route('/').post(protect, creat_task)


router.route('/:id').put(protect, updateTasks)
router.route('/').delete(protect, deleteTasks)



module.exports=router
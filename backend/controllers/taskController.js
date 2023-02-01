const Task = require("./../model/TaskModel")

exports.getAllMainTask = async (req, res) => {
    try {
        const result = await Task.find()
        res.json({
            success: true,
            message: "All Task Fetched",
            result
        })
    } catch (error) {
        res.json({
            success: false,
            message: `Error ${error}`,
            result
        })
        
    }
} 
exports.addMainTask = async (req, res) => {
    try {
        console.log(req.body);
        const result = await Task.create(req.body)
        res.json({
            success: true,
            message: "Task created success",
        
        })
    } catch (error) {
        res.json({
            success: false,
            message: `Error ${error}`,
            
        })  
    }
} 
exports.editTask = async (req, res) => {
    try {
        // console.log(req.body);
        const {taskId} = req.params
       await Task.findByIdAndUpdate(taskId,req.body)
        res.json({
            success: true,
            message: "Task edited success",
        
        })
    } catch (error) {
        res.json({
            success: false,
            message: `Error ${error}`,
            
        })  
    }
} 

exports.removeTask = async (req, res) => {
    try {
        // console.log(req.body);
        const {taskId} = req.params
     await Task.findByIdAndDelete(taskId)
        res.json({
            success: true,
            message: "Task remove",    
        })
    } catch (error) {
        res.json({
            success: false,
            message: `Error ${error}`,         
        })  
    }
} 
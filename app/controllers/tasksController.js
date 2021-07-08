const Task = require('../models/task')

module.exports.list = (req, res) => {
    Task.find({ user: req.user._id })
        .then(tasks => res.json(tasks))
}

module.exports.create = (req, res) => {
    const body = req.body 
    const task = new Task(body)
    task.user = req.user._id 
    task.save()
        .then(task => res.json(task))
        .catch(err => res.json(err))
}

module.exports.show = (req, res) => {
    const id = req.params.id 
    Task.findOne({ 
        user: req.user._id, 
        _id: id 
    }).then(task => {
        if(!task) {
            res.json({})
        } 
        res.json(task)
    })
}

module.exports.update = (req, res) => {
    const id = req.params.id 
    const body = req.body 
    Task.findOneAndUpdate({ user: req.user._id, _id: id}, { $set: body}, { new: true, runValidators: true })
        .then(task => {
            if(!task) {
                res.json({})
            }
            res.json(task) 
        })
}

module.exports.destroy = (req, res) => {
    const id = req.params.id 
    Task.findOneAndDelete({ user: req.user._id, _id: id})
        .then(task => {
            if(!task) {
                res.json({})
            }
            res.json(task) 
        })
}
const mongoose = require('mongoose')
const validator = require('validator')
const Schema = mongoose.Schema

const taskSchema = new Schema({
    title: {
        type: String,
        required: [true, 'title  required']
    }, 
    description: {
        type: String,
        required: [true, 'description required'],
    },
    createdAt: {
        type: Date, 
        default: Date.now()
    }, 
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true 
    }
})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task
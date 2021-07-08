const mongoose = require('mongoose')
mongoose.Promise = global.Promise 

const CONNECTION_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/to-do-node'

mongoose.connect(CONNECTION_URI,{
    useNewUrlParser: true
})
    .then(() => {
        console.log('connected to db')
    })
    .catch((err) => {
        console.log('errr connecting to db', err)
    })

module.exports = mongoose
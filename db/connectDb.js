const mongoose = require('mongoose')

const connectdb = async () => {
    const url = process.env.MODE = 'developmemt' ? process.env.MONGO_URL : process.env.MONGO_DEV
    return mongoose.connect(url)
    .then(res => {
        console.log("mongodb is connected");
    })
    .catch(err => console.log(err.message))
}

module.exports = connectdb
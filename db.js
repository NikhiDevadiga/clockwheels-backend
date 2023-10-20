const mongoose = require("mongoose")
dbConnect()
async function dbConnect() {
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect('mongodb+srv://nikhidevadiga985:06022102@cluster0.lzbxgyu.mongodb.net/clockwheels', { useNewUrlParser: true })
        console.log("Mongodb connected successfully")
    } catch (error) {
        console.log("Mongodb connection fail")
    }
}

module.exports = mongoose
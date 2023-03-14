const mongoose = require("mongoose");


mongoose.set('strictQuery', true);

const  connection = async () => {
    try {
        await mongoose.connect("mongodb://admin:password@localhost:27017", { useNewUrlParser: true });
        console.log('MongoDB connected....');
    }
    catch (err) {
        console.log(`Message: ${err.message} `);
        process.exit(1);
    }
}

module.exports = connection;
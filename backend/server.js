const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const User = require('./models/Users');

const app = express();

app.use(cors({
    origin: '*',
}));


connectDB();
app.use(express.json({extended: false}));



app.get('/users', async (req, res) => {
    try {
        let user = await User.find();
        res.send(user);

    } catch (err) {
        console.log("error: ", err);
        res.send("error");
    }
});


app.post("/user", async (req, res) => {
    const {name, email, password} = req.body;

    let user = new User({
        name,
        email,
        password
    });

    try {
        await user.save();
        
    } catch (err) {
        res.send(`Error saving: ${err}`);
    }


    res.send("saved");
})

app.listen(5000, () => {console.log("listening on port 5000");})
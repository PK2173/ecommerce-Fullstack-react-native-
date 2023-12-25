const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const crypto = require("crypto");
const jwt = require("jsonwebtoken")
const nodemailer = require("nodemailer");
const User = require("./models/user");

mongoose.connect('mongodb+srv://praveen21:gP7CwHPy1hOJOn4g@cluster0.ejfyypk.mongodb.net/',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then((result) => {
    console.log('Connected to mongoDB');
}).catch((err) => {
    console.log(err);
});

const app = express();
const port = 8000;
const cors = require("cors");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const genrateSecretkey = ()=>{
    const secretekey = crypto.randomBytes(32).toString("hex");
    return secretekey;
}

const secretKey = genrateSecretkey();

// funtion to send verificatioin  email to the user
const sendVerificationEmail = async (email,verificationToken) => {
    // create a nodemailer transport
    const transport = nodemailer.createTransport({
        // configre the email service
        service:"gmail",
        auth:{
            user:"pk5082604@gmail.com",
            pass:"dczj zjag jncw kzoz"
        }
    })
    // compose the email message
    const mailOptions = {
       fromo:"amazone.com",
       to:email,
       subject:"Email Verification",
       text:`Please click the following link to verify your email : http://localhost:8000/verify/${verificationToken}`
    }

    // send the email
    try {
        await transport.sendMail(mailOptions)
    } catch (error) {
        console.log("Error sending verification email",error);
    }
}

app.post("/register", async (req,res)=>{
    try {
        const {name,email,password} = req.body;

        // check if user already register
        const existingUser = await User.findOne({email});
        if (existingUser) {
            return res.status(400).json({messahe:"Email already registered"});
        }

        // create new user 
        const newUser = new User({name,email,password});

        // generate and store the verification token
        
        newUser.verificationToken = crypto.randomBytes(20).toString("hex");

        // save the user to the database

        await newUser.save();

        // send verification email to the user
        sendVerificationEmail(newUser.email,newUser.verificationToken)

        res.status(200).json({message:"Kindly confirm your"})
    } catch (error) {
        console.log("error registering user",error);
        res.status(500).json({message:"Registration Failed"})
    }
})

// end point the verifi the email
app.get("/verify/:token", async (req, res)=>{
    try {
        const token = req.params.token;

        // find the user with the givine verification token
        const user = await User.findOne({verificationToken:token})
        if(!user){
            return res.status(404).json({message:"Invalid verification token"})
        }

        // Mark the user as verified 
        user.verified = true;
        user.verificationToken = undefined;

        await user.save();

        res.status(200).json({message:"Email verified successfully"})
    } catch (error) {
        res.status(500).json({message:"Email Verification Failed"})
    }
})
// end point to be login the user

app.post("/login",async(req,res)=>{
    try {
        const{email,password} = req.body;

        // check if the user exists
        const user = await User.findOne({email})
        if (!user) {
            return re.status(404).json({message:"invalid email or password"});
        }

        // check if password is correct 
        if (user.password !== password) {
            return res.status(401).json({message:"Invelid password"},secretKey)
        }

        // genreat token

        const token = jwt.sign({userId:user._id},secretKey)
        res.status(200).json({token})
    } catch (error) {
        res.status(500).json({message:"Login Verification Failed"}) 
    }
})

app.listen(port,()=>{
    console.log('server is running on' , port);
})
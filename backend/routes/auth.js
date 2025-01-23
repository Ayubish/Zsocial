import express from "express";
import { check, validationResult } from "express-validator";
import User from "../models/User.js";
import jwt from "jsonwebtoken";
import Post from "../models/post.js";




const router = express.Router();

router.post('/register', [
    check("username").notEmpty().withMessage("Username is required"),
    check("email").isEmail().withMessage("Enter a valid email"),
    check("password").isLength({ min: 6 }).withMessage("Password must be atleast 6 charachters"),
], async (req, res)=>{

    const errors = validationResult(req);
    if(!errors.isEmpty()) return res.status(400).json({errors: errors.array()});
    
    try {
        const {username, email, password} = req.body;

        //check if username is already taken
        const existingUser = await User.findOne({ username });
        if(existingUser) return res.status(400).json({error: "username already taken"});

        //check if email already exist
        const existingEmail = await User.findOne({ email });
        if(existingEmail) return res.status(400).json({error: "Email already exist"});

        const user = new User({username, email, password});
        await user.save();

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '1h'});
        res.status(201).json({ token });
    } catch(err){
        res.status(500).json({error: 'Server error', err});
    }
});

//user login
router.post('/login', async (req, res)=>{
    const {email, password} = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({error: 'Invalid Email'});

        const isMatch = await user.comparePassword(password);
        if(!isMatch) return res.status(400).json({error: "Wrong password"});

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: "1h"});
        return res.status(200).json({ token });
    } catch (err) {
        res.status(500).json({error: 'Server error', err: err});
    }
});

router.post("/post", async(req, res)=>{
    const {name, likes} = req.body;
    const post = new Post({name, likes});
    await post.save();
    res.status(200).json({msg: "You made it"});
});

export default router;
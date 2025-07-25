const userModel = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Register
const registerController = async (req, res) => {
    try {
        const existingUser = await userModel.findOne({ email: req.body.email });

        if (existingUser) {
            return res.status(200).send({
                success: false,
                message: 'User Already Exists!'
            });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        req.body.password = hashedPassword;

        const user = new userModel(req.body);
        await user.save();

        return res.status(201).send({
            success: true,
            message: 'User Registered Successfully!',
            user,
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in Register API!',
            error
        });
    }
};

// Login
const loginController = async (req, res) => {
    try {
        const user = await userModel.findOne({ email: req.body.email });

        if (!user) {
            return res.status(404).send({
                success: false,
                message: 'Invalid Credentials!',
            });
        }
        //check role
        if(user.role !== req.body.role){
            return res.status(500).send({
                success: false,
                message: "Role doesn't match!"
            });
        }

        const comparePassword = await bcrypt.compare(req.body.password, user.password);
        if (!comparePassword) {
            return res.status(401).send({
                success: false,
                message: 'Invalid Credentials!',
            });
        }

        console.log("JWT Secret (login):", process.env.JWT_SECRET);

        const token = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '1d' }
        );

        return res.status(200).send({
            success: true,
            message: 'Logged In!',
            token,
            user
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in Login API!',
            error
        });
    }
};

// Get Current User
const currentUserController = async (req, res) => {
    try {
        const user = await userModel.findOne({ _id: req.userId });
        return res.status(200).send({
            success: true,
            message: 'User Fetched Successfully!',
            user,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: 'Unable to get current user!',
            error
        });
    }
};

module.exports = { registerController, loginController, currentUserController };

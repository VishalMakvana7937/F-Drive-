import dotenv from 'dotenv';
dotenv.config();
import usermodel from "../modal/usermodule.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const adminlogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await usermodel.findOne({ email });
        console.log('User...', user);

        if (!user) {
            return res.json({ msg: "User does not exist" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
            const token = jwt.sign({ id: user.id, email: user.email }, process.env.SECRET_KEY);
            return res.json({ msg: "Login successfully", token });
        }

        res.json({ auth: true, token });
        
    } catch (err) {
        console.log('Error...', err);
    }
}

export const adminsignup = async (req, res) => {
    try {
        const { username, email, password, confirmpassword } = req.body;
        const user = await usermodel.findOne({ email });
        console.log('Error...', user);
        if (!user) {

            if (password == confirmpassword) {

                const hashpassword = await bcrypt.hash(password, 10);

                const result = new usermodel({
                    username,
                    email,
                    password: hashpassword
                });

                await result.save();
                console.log(result);
                res.json({ msg: `${username} is registered successfully`, data: result });
            } else {
                res.json({ msg: "password and confirmpassword do not match" });
            }
        } else {
            res.json({ msg: "email already exists" });
        }
    } catch {

    }
}

export const manageTeacher = async (req, res) => {
    try {
        res.json({ message: 'Manage teachers here.' });
    } catch (err) {
        console.log('Error...', err);
    }
}

export const manageStudent = async (req, res) => {
    try {
        res.json({ message: 'Manage students here.' });
    } catch (err) {
        console.log('Error...', err);
    }
}
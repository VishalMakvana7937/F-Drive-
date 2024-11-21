import dotenv from 'dotenv';
dotenv.config();
import usermodel from "../modal/usermodule.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const signin = async (req, res) => {
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
        } else {
            return res.json({ msg: "Invalid password" });
        }
    } catch (err) {
        console.log('Error...',err);
    }
}
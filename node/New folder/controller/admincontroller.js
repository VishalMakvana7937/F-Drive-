import dotenv from 'dotenv';
dotenv.config();
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import createadmin from "../modal/adminmodule.js";


export const defaultadmin = (req, res) => {
    res.json({ msg: "welcome to default admin" })
}

export const admincreate = async (req, res) => {
    try {
        const { username, email, password, confirmpassword, role } = req.body;

        const user = await createadmin.findOne({ email });
        console.log('Error...', user);

        if (!user) {

            if (password == confirmpassword) {

                const hashpassword = await bcrypt.hash(password, 10);

                const result = new createadmin({
                    username,
                    email,
                    password: hashpassword,
                    role
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

    } catch (err) {
        console.log(err);
        res.json({ msg: "something went wrong" });
    }
}

export const adminRegister = async (req, res) => {
    try {
        if (req.user && req.user.role === 'admin') {
            
            const { email, password } = req.body;
            const user = await createadmin.findOne({ email });

            if (!user) {
                return res.status(401).json({ msg: "User does not exist" }); 
            }

            const isMatch = await bcrypt.compare(password, user.password);

            if (isMatch) {
                
                const token = jwt.sign({ id: user.id, email: user.email }, process.env.SECRET_KEY);
                return res.json({ msg: "Login successfully", token }); 
            } else {
                return res.status(401).json({ msg: "Invalid password" }); 
            }
        } else {
            
            return res.status(403).json({ message: 'Admin access required' });
        }
    } catch (err) {
        console.log('Error...', err);
        return res.status(500).json({ message: 'Internal server error' });
    }
}
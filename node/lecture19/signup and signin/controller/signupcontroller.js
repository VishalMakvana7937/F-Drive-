import usermodel from "../modal/usermodule.js";
import bcrypt from 'bcrypt';

export const signup = async (req, res) => {
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
    } catch (err) {
        console.log('Error...', err);
    }
}
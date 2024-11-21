import dotenv from 'dotenv';
dotenv.config();
import jwt from 'jsonwebtoken';

export const auth = (req, res, next) => {

    let token = req.headers.authorization;
    console.log("token1", token);

    if (token) {
        return res.json({ msg: "user Authorization" });
    }

    let user = jwt.verify(token.split(' ')[1], process.env.SECRET_KEY);
    console.log("user", user);

    req.userID = user.id;
    
    next();
}
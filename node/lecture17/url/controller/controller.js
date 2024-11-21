  const fs = require("fs");
  const MyUrl = require('../model/mymodal');


  const defaultHandler = async (req, res) => {
    const urls = await MyUrl.find();
    res.json(urls);
  };

  const defaultpost = async (req, res) => {
    const { name, email, contact } = req.body;
    console.log('contain: ',req.body);
    const Myuser = new MyUrl({
      name,
      email,
      contact
    });

    // await res.redirect('/');

    await Myuser.save();
    console.log('user:', Myuser);
    res.json({ message: 'User created successfully', user: Myuser });
  }

  module.exports = { defaultHandler, defaultpost };

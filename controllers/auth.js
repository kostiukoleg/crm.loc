const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys.js');
const User = require('../models/User.js');
const errorHandler = require('../utils/errorHandler.js');

module.exports.login = async function (req,res) {
    const candidate = await User.findOne({
        email: req.body.email
    });
    if(candidate){
        const passwordResult = bcrypt.compareSync(req.body.password, candidate.password);
        if(passwordResult){
            const token = jwt.sign({
                email: candidate.email,
                id: candidate._id
            }, keys.jwt, {expiresIn:3600});
            res.status(200).json({
                token: `Bearer ${token}`
            });
        } else {
            res.status(401).json({
                message: 'Пароли не совпадают, попробуйте снова.'
            });
        }
    } else {
        res.status(404).json({
            message: 'Пользователь с таким email не найден.'
        });
    }
}

module.exports.register = async function (req,res) {
    const candidate = await User.findOne({
        email: req.body.email
    });
    if (candidate) {
        res.status(409).json({
            message: 'Такой email уже зайнят, попробуйте другой.'
        });
    } else {
        const salt = bcrypt.genSaltSync(10);
        const password = req.body.password;
        const user = new User({
            email: req.body.email,
            password: bcrypt.hashSync(password, salt)
        }); 
        try {
            await user.save();
            res.status(201).json(user);
        } catch (e) {
            errorHandler(res, e);
        }
    }
}
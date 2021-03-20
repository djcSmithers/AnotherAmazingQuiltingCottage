const User = require('../models/user');
const bcrypt = require('bcryptjs');
// const {validationResult} = require('express-validator/check');
const jwt = require('jsonwebtoken');
const { json } = require('body-parser');
// const { url } = require('node:inspector');

/***************************************************************************
 * Post Login
 ****************************************************************************/
 exports.login = (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;
    let loadedUser;
    User.findOne({ username: username })
        .then(user => {
            if (!user) {
                const error = new Error('A user with this email could not be found.');
                error.statusCode = 401;
                throw error;
            }
            loadedUser = user;
            return bcrypt.compare(password, user.password);
        })
        .then(isEqual => {
            if (!isEqual) {
                const error = new Error('Wrong password!');
                error.statusCode = 401;
                throw error;
            }
            const token = jwt.sign({
                    username: loadedUser.username,
                    userId: loadedUser._id.toString()
                },
                'pLOw!r2VGVszbWX{606e,FeBA]Q<+_', { expiresIn: '1h' }
            );
            res.status(200).json({ token: token, userId: loadedUser._id.toString() });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

/***************************************************************************
 * Post Add Images
 ****************************************************************************/
exports.postAddImages = (req, res, next) => {
    const images = req.files //Array if image files

    console.log(images);

    if (!images){
        return res.status(422).json({message: "Image upload failed"});
    }

    const imageUrl = [];

    //Remove this block later
    ////////////////////////////////////////////
    for (image of images){
        imageUrl.push(image.path);
    }
    console.log(imageUrl);
    ////////////////////////////////////////////

    for (url of imageUrl){
        //Will this work?
        return url.save().then(res => {
            res.status(201).json({message: "image upload successful"});
        }); 
    }
}
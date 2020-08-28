const mongoose = require('mongoose');
const multer = require('multer')
const path = require('path');
const IMAGE_PATH = path.join('/public/uploads');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    image : {
        type : String
    }
}, {
    timestamps: true
});

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '..', AVATAR_PATH));
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now());
    }
  })

//static methods

userSchema.statics.uploadedAvatar = multer({storage: storage}).single('image');
userSchema.statics.avatarPath = IMAGE_PATH;





const User = mongoose.model('User', userSchema);

module.exports = User;





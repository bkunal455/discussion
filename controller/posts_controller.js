const Post = require('../models/post');
const User = require('../models/user');
const Comment = require('../models/comment');
const fs = require('fs');
const path = require('path');
// const Like = require('../models/like');
// const {delete} = require('../routes');

module.exports.create = async function(req, res){
    
    try{
        console.log(req.body.content);
        let newone = await Post.create({});
        Post.uploadedPost(req, res, function(err){
            if (err) {console.log('*****Multer Error: ', err)}
            
            newone.content = req.body.content;
            

            if (req.file){

                


                // this is saving the path of the uploaded file into the avatar field in the user
                newone.post = Post.postsPath + '/' + req.file.filename;
            }
            newone.save();
            
            return res.redirect('back');
        });
    }catch(err){
            return;
    }
    
}

module.exports.destroy = async function(req, res){

    try{
        let post = await Post.findByIdAndDelete(req.params.id);


                    return res.redirect('back');
    }catch(err){
        return res.redirect('back');
    }

    
}    
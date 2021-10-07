const express = require('express');
const signupRouter = express.Router();

signupRouter.get ('/',function(req,res){
    res.render("signup",
    {
        nav:[{link:'/',name:'Home'},{link:'/login',name:'Login'},{link:'/signup',name:'Signup'}],
        title:'Library',
        
    });
});

module.exports = signupRouter;
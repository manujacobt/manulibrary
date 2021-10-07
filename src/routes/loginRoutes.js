const express = require('express');
const loginRouter = express.Router();

loginRouter.get ('/',function(req,res){
    res.render("login",
    {
        nav:[{link:'/',name:'Home'},{link:'/login',name:'Login'},{link:'/signup',name:'Signup'}],
        title:'Library',
        
    });
});

module.exports = loginRouter;
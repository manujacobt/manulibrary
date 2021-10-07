const express = require('express');
const admin1Router = express.Router();


admin1Router.get('/',function(req,res){
    res.render('addauthor',{
        nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authours'},{link:'/admin',name:'Add Book'},{link:'/admin1',name:'Add Author'}],
        title:'Library'        
    })
});

admin1Router.post('/add',function(req,res){
  
   
   res.redirect('/Authors');

})
module.exports = admin1Router;
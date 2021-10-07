const express = require('express');
const adminRouter = express.Router();


adminRouter.get('/',function(req,res){
    res.render('addbook',{
        nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authours'},{link:'/admin',name:'Add Book'},{link:'/admin1',name:'Add Author'}],
        title:'Library'        
    })
});

adminRouter.post('/add',function(req,res){
   
   res.redirect('/books');

})
module.exports = adminRouter;
const express = require('express');
const authorRouter = express.Router();

var authors=[
    {
        name :'Fyodor Dostoevsky',
        main :'Crime and Punishment,The Idiot ',
        place:'Russia',
        img:"dasdo.jpg",
        works:'Novels and short stories',
        numb:'12 Novels and 16 short stories'
            
    },
    {
        name :'Leo Tolstoy',
        main :'Anna Karenina',
        place:'Russia',
        img:"Leo.jpg",
        works:'Novels and short stories',
        numb:'18 Novels and 7 short stories'
        
    }, 
    {
        name :'Thakazhi Sivasankara Pillai',
        main :'Kayar, Chemmeen',
        place:'Kerala',
        img:"takazi.jpg",
        works:'Novels and short stories',
        numb:'30 Novels and 7 short stories'
            
    },
    {
        name :'William Shakespeare',
        main :' Hamlet, Romeo and Juliet, Othello, King Lear, and Macbeth',
        place:'England',
        img:"shake.jpg",
        works:'Plays, Sonnets and long poems',
        numb:'39 Plays, 154 Sonnets and 3 long poems'
            
    }
   
]


authorRouter.get ('/',function(req,res){
    res.render("authors",
    {
        nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authours'},{link:'/admin',name:'Add Book'},{link:'/admin1',name:'Add Author'}],
        title:'Library',
        authors
    });
});


authorRouter.get('/:id1',function(req,res){
    const id1 = req.params.id1
    res.render('author',
    {
        nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authours'}],
        title:'Library',
        author : authors[id1]  
    });
});

module.exports = authorRouter;
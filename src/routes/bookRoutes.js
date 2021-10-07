const express = require('express');
const booksRouter = express.Router();

var books=[
    {
        title:'The Brothers Karamazov',
        author:'Fyodor Dostoevsky',
        genre:'Novel',
        img:"karamazov.jpg",
        pages: 840,
        lang:'Russian',
        trans:'English'
    },
    {
        title:'War and Peace',
        author:'Leo Tolstoy',
        genre:'Novel',
        img:"wp.jpg",
        pages:1225,
        lang:'Russian',
        trans:'English'
    },
    {
        title:'Chemmeen',
        author:'Thakazhi Sivasankara Pillai',
        genre:'Novel',
        img:"chm.jpg",
        pages:207,
        lang:'Malayalam',
        trans:'Other Languages'
    },
    {
        title:'Macbeth',
        author:'William Shakespeare',
        genre:'Drama',
        img:"mcb.jpg",
        pages:122,
        lang:'English',
        trans:'Other languages'
    }
]


booksRouter.get ('/',function(req,res){
    res.render("books",
    {
        nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authours'},{link:'/admin',name:'Add Book'},{link:'/admin1',name:'Add Author'}],
        title:'Library',
        books
    });
});

booksRouter.get('/:id',function(req,res){
    const id = req.params.id
    res.render('book',
    {
        nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authours'}],
        title:'Library',
        book : books[id]  
    });
});

module.exports = booksRouter;
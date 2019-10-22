const express = require('express');
const app = express();
const bodyParser = require('body-parser');

require('./db');

const memberModel = require('./model/member');
const newsModel = require('./model/news');

const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','*');
    res.setHeader('Access-Control-Allow-Headers','content-type, x-access-token');
    res.setHeader('Access-Control-Allow-Credentials',true);
    next();
});


app.listen(port, ()=>{
    console.log('Server is running on port ' + port);
});

app.get('/member', (req,res)=>{
    memberModel.find({},(err,doc)=>{
        res.json({doc});
    });
});

app.get('/findMember/:id', (req,res)=>{
    memberModel.findById({_id: req.params.id}, (err,doc)=>{
        res.json({doc});
    });
});

app.post('/register', (req,res)=>{
    memberModel.create(req.body, (err,doc)=>{
        if(err) res.json({result: "Register Failed!"});
        else res.json({result: "Register Success!"});
    });
});

app.post('/login', (req,res)=>{
    memberModel.findOne({username: req.body.username, password: req.body.password}, (err, doc)=>{
        if(err) res.json({result: "username and password in correct!"});
        else res.json({doc});
    });
});


app.post('/addnews', (req,res)=>{
    newsModel.create(req.body, (err,doc)=>{
        res.json({doc});
    });
});

app.get('/news', (req,res)=>{
    newsModel.find({}, (err,doc)=>{
        res.json({doc});
    });
});

app.post('/findNews', (req,res)=>{
    newsModel.findOne({type: req.body.type}, (err,doc)=>{
        res.json({doc});
    });
});

app.post('/login', (req,res)=>{
    memberModel.findOne({username: req.body.username, passworrd: req.body.password}, (err,doc)=>{
        res.json({doc});
    });
});

app.delete('/deleteNews/:id', (req,res)=>{
    console.log({_id: req.params.id});
    newsModel.findByIdAndRemove({_id: req.params.id}, (err)=>{
            res.json({result: "Delete Success!"});
    });
});

app.get('/edit/:id', (req,res)=>{
    newsModel.findById({_id: req.params.id}, (err,doc)=>{
            res.json({doc});
    });
});

app.post('/update/:id', (req,res)=>{
    newsModel.findById(req.params.id, (err,doc)=>{
        doc.caption = req.body.caption;
        doc.describtion = req.body.describtion;
        doc.type = req.body.type;
        doc.image = req.body.image;

        doc.save().then(doc=>{
            res.json({res : "update done!"});
        }).catch(err=>{
            res.status(400).send({err});
        });
    });
});

app.post('/updatestatus/:id', (req,res)=>{
    memberModel.findById({_id:req.params.id}, (err,doc)=>{
        doc.status = req.body.status;

        doc.save().then(doc=>{
            res.json({res : "update done!"});
        }).catch(err=>{
            res.status(400).send('Update failed!');
        });
    });
});


app.post('/updateSNews/:id', (req,res)=>{
    newsModel.findById({_id: req.params.id}, (err,doc)=>{
        doc.status = req.body.status;

        doc.save().then(doc=>{
            res.json({res : "update done!"});
        }).catch(err=>{
            res.status(400).send('Update failed!');
        });
    });
});

app.get('/newslist', (req,res)=>{
    newsModel.find({status: "allow"}, (err,doc)=>{
        res.json({doc});
    });
});

app.get('/newsDetail/:id', (req,res)=>{
    newsModel.findById({_id: req.params.id}, (err,doc)=>{
        res.json({doc});
    });
});

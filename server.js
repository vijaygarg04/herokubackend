const express=require('express');
const app=express();
var path = require('path')
const bodyParser = require('body-parser');

app.use( express.static('public') ) ;  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}) );

const listing=require('./mysql/listings/listings');
const user=require ('./mysql/users/users');
const wishlist=require('./mysql/wishlist/wishlist');



//user routes

app.post('/adduser',function(req,res){
    console.log(req.body['user']);
    var data=req.body.user;
    console.log(data);
    var ele=data;
    console.log(ele);

     var name=ele.name;
     var email=ele.email;
     var college=ele.college;
     var address=ele.address;
     var phonenumber=ele.phonenumber+"";
     var password=ele.password;
     user.adduser(name,email,college,address,phonenumber,password).
     then(function(){
         res.json('successfully added new user');
     }).catch(function(err){
         console.log(err);
         res.json("Error in adding new user. Please Try Again Later!!! Or Try With Different Mail Id");

     });



});

app.get('/verifyuser',function(req,res){
    console.log(req.query);

    var email=req.query.email;
    var password=req.query.password;
    console.log(email+"---"+password);

    user.getpasswordforemail(email).
    then(function(pass){
        console.log(pass);
        if(pass.length>=1){
        if(pass[0].password===password){
            console.log('hi');

            res.json('Id Password Match Successfully');
        }else{
            res.json('password does not match');
        }
    }else{
        res.json('id does not exist');
    }
    }).catch(function(err){
        console.log("Some Server Error occured");

        res.json(err);

    });

});

//listing routes

app.post('/addlisting',function(req,res){
    var data=req.body.list;
    console.log(data);
    var stringify=JSON.stringify(data);
    var ele=JSON.parse(stringify);
    console.log(ele);

     var seller=ele.seller;
     var book=ele.book;
     var author=ele.author;
     var img=ele.img;
     var price=ele.price+"";
     var cond=ele.condition;
     var desc=ele.description
     listing.addlisting(seller,book,author,img,price,cond,desc).
     then(function(){
         res.json('successfully added new list item');
     }).catch(function(err){
         console.log(err);
         res.json("error in server");

     });



});

app.get('/getuser',function(req,res){
    var email=req.query.user;
    user.getuser(email).
    then(function(rows){
        var data=JSON.stringify(rows);
        console.log(data);
        res.send(data);

    }).catch(function(err){
        console.log("error");

        res.send(err);

    });

});
app.get('/getalllisting',function(req,res){
    listing.getalllistings().
    then(function(rows){
        var data=JSON.stringify(rows);
        console.log(data);
        res.send(data);

    }).catch(function(err){
        console.log("error");

        res.send(err);

    });

});
app.get('/getuseristing',function(req,res){
    var data=req.body.user;
    console.log(data);
    var ele=JSON.parse(data);
    console.log(ele);
     var seller=ele.email;
    listing.getuserlistings(seller).
    then(function(rows){
        var data=JSON.stringify(rows);
        res.send(data);

    }).catch(function(err){
        console.log("error");

        res.send(err);

    });

});

app.post('/deletelisting',function(req,res){
    console.log(req.body['user']);
    var data=req.body.listing;
    console.log(data);
    var ele=JSON.parse(data);
    console.log(ele);
     var id=ele.id;
     listing.deletelisting(id).
     then(function(){
         res.send('success');
     }).catch(function(err){
         console.log(err);
         res.send("error");
     });
});
app.get('/sortbypricelowtohigh',function(req,res){
    listing.getsortedlistingbypricelowtohigh().
    then(function(rows){
        var data=JSON.stringify(rows);
        console.log(data);
        res.send(data);

    }).catch(function(err){
        console.log("error");

        res.send(err);

    });

});
app.get('/sortbypricehightolow',function(req,res){
    listing.getsortedlistingbypricehightolow().
    then(function(rows){
        var data=JSON.stringify(rows);
        console.log(data);
        res.send(data);

    }).catch(function(err){
        console.log("error");

        res.send(err);

    });

});
app.get('/sortbyconditiongoodtobad',function(req,res){
    listing.getsortedlistingbyconditiongoodtobad().
    then(function(rows){
        var data=JSON.stringify(rows);
        console.log(data);
        res.send(data);

    }).catch(function(err){
        console.log("error");

        res.send(err);

    });

});
app.get('/sortbyconditionbadtogood',function(req,res){
    console.log('hi');
    
    listing.getsortedlistingbyconditionbadtogood().
    then(function(rows){
        var data=JSON.stringify(rows);
        console.log(data);
        res.send(data);

    }).catch(function(err){
        console.log("error");

        res.send(err);

    });

});
//wishlist
app.post('/addtowishlist',function(req,res){
    console.log("server called");
    
    var data=req.body.wish;
    console.log(data);
    var ele=data;
    console.log(ele);

     var bookid=ele.bookid;
     var userid=ele.userid;

     wishlist.addinwishlist(bookid,userid).
     then(function(){
         res.json('successfully added to wishlist');
     }).catch(function(err){
         console.log(err);
         res.json("error");
     });
});
app.post('/removefromwishlist',function(req,res){
    console.log("server called");
    
    var data=req.body.data;
    var ele=data;
    console.log(ele);

     var bookid=ele.bookid;
     var userid=ele.userid;

     wishlist.deletefromwishlist(bookid,userid).
     then(function(){
        console.log("server success");
         res.json('successfully removed from wishlist');
     }).catch(function(err){
         console.log(err);
         res.json("error in serverx");
     });
});

app.get('/searchbook',function(req,res){
    console.log(req.query);

    var search=req.query.search;

    listing.getlistingbysearch(search).
    then(function(rows){

        var data=JSON.stringify(rows);
        console.log(data);
        res.send(data);
    }).catch(function(err){
        console.log("Some Server Error occured");

        res.json(err);

    });

});
app.get('/removebook',function(req,res){
    console.log(req.query);

    var id=req.query.id;
    
    listing.removemsg(id).
    then(function(msg){

        wishlist.removefromwish(id).
        then(function(msg){
            listing.removelistingbyid(id).
    then(function(msg){
        res.json("Successfully removed the advertisement for this book");
    }).catch(function(err){
        console.log("Some Server Error occured");

        res.json(err);

    });

        }).catch(function(err){
            console.log("Some Server Error occured");
    
            res.json(err);
    
        });

    }).catch(function(err){

        res.json(err);
    });

    

});
app.get('/getbook',function(req,res){
    console.log(req.query);

    var id=req.query.id;

    listing.getlistingbyid(id).
    then(function(rows){
        var data=JSON.stringify(rows);
        console.log(data);
        res.send(data);
    }).catch(function(err){
        console.log("Some Server Error occured");

        res.json(err);

    });

});
app.get('/getuserlisting',function(req,res){
    console.log(req.query);

    var user=req.query.user;

    listing.getlistingbyuser(user).
    then(function(rows){

        var data=JSON.stringify(rows);
        console.log(data);
        res.send(data);
    }).catch(function(err){
        console.log("Some Server Error occured");

        res.json(err);

    });

});

app.get('/mywishlist',function(req,res){
    console.log(req.query);

    var user=req.query.user;

    listing.getmywishlist(user).
    then(function(rows){

        var data=JSON.stringify(rows);
        console.log(data);
        res.send(data);
    }).catch(function(err){
        console.log("Some Server Error occured");

        res.json(err);

    });
});

app.post('/sendmsg',function(req,res){
    console.log("server called");
    
    var data=req.body.data;
    console.log(data);
    var ele=data;
    console.log(ele);

     var id=ele.id;
     var sender=ele.sender;
     var receiver=ele.receiver;
     var msg=ele.msg;

     listing.sendmsg(id,sender,receiver,msg).
     then(function(){
         res.json('Message Sent SuccessFully');
     }).catch(function(err){
         console.log(err);
         res.json("Message Sent Failed");
     });
});

app.get('/getmsg',function(req,res){
    var email=req.query.user;
    console.log(email);
    
    listing.getmsgs(email).
    then(function(rows){
        var data=JSON.stringify(rows);
        console.log(data);
        res.send(data);

    }).catch(function(err){
        console.log("error");

        res.send(err);

    });

});
app.get('/getmsgsendbyme',function(req,res){
    var email=req.query.user;
    console.log(email);
    
    listing.getmsgssendbyme(email).
    then(function(rows){
        var data=JSON.stringify(rows);
        console.log(data);
        res.send(data);

    }).catch(function(err){
        console.log("error");

        res.send(err);

    });

});
app.get('/getmsgreceivedbyme',function(req,res){
    var email=req.query.user;
    console.log(email);
    
    listing.getmsgsreceivedbyme(email).
    then(function(rows){
        var data=JSON.stringify(rows);
        console.log(data);
        res.send(data);

    }).catch(function(err){
        console.log("error");

        res.send(err);

    });

});
app.get('/getmsgsendorreceivedby',function(req,res){
    var email=req.query.user;
    var email2=req.query.other;
    console.log(email+"---"+email2);

    
    listing.getmsgssendorreceivedby(email,email2).
    then(function(rows){
        var data=JSON.stringify(rows);
        console.log(data);
        res.send(data);

    }).catch(function(err){
        console.log("error");

        res.send(err);

    });

});

let port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 3000
let ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0'

app.listen(port,ip,function(){
console.log("SERVER STARTED AT "+port+"--->"+ip);
});

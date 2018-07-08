const mysql=require('mysql2');

const connection =mysql.createConnection(
    {
        host:'sql12.freemysqlhosting.net',
        database:'sql12246628',
        user:'sql12246628',
        password:'81Ng2itMjq'
    }
)


// const connection =mysql.createConnection(
//     {
//         host:'us-cdbr-iron-east-04.cleardb.net',
//         database:'heroku_46856bf9dc93c7e',
//         user:'b4a1393db7b5a5',
//         password:'17f1c2e8',
//         insecureAuth:true
//     }
// )
function addlisting(seller,book,author,img,price,cond,description){
    return new Promise(function(resolve,reject){
        console.log("three");
        
        connection.query(`INSERT INTO listing (seller, book, author,image,price,cond,description) VALUES(?,?,?,?,?,?,?
            )`,[seller,book,author,img,price,cond,description],function(err,res){
                if(err){
                    console.log('------');
                    
                    reject(err);
                }else{
                    console.log("---------");
                    
                    resolve();
                } 
            })
    })
}

function getalllistings(){
    return new Promise(function(resolve,reject){
        connection.query(`SELECT * FROM listing`,
        function(err,rows,cols){
            if(err){
                reject(err);
            }else{
                resolve(rows); 
            }
           
        })
    })
}
function getsortedlistingbypricelowtohigh(){
    console.log("price low to high server");
    
    return new Promise(function(resolve,reject){
        connection.query(`SELECT * FROM listing ORDER BY price ASC;`,
        function(err,rows,cols){
            if(err){
                reject(err);
            }else{
                resolve(rows); 
            }
           
        })
    })
}
function getsortedlistingbypricehightolow(){
    console.log("price high to low server");
    
    return new Promise(function(resolve,reject){
        connection.query(`SELECT * FROM listing ORDER BY price DESC;`,
        function(err,rows,cols){
            if(err){
                reject(err);
            }else{
                resolve(rows); 
            }
           
        })
    })
}
function getsortedlistingbyconditionbadtogood(){
    return new Promise(function(resolve,reject){
        connection.query(`SELECT * FROM listing ORDER BY cond ASC;`,
        function(err,rows,cols){
            if(err){
                reject(err);
            }else{
                resolve(rows); 
            }
           
        })
    })
}
function getsortedlistingbyconditiongoodtobad(){
    return new Promise(function(resolve,reject){
        connection.query(`SELECT * FROM listing ORDER BY cond DESC;`,
        function(err,rows,cols){
            if(err){
                reject(err);
            }else{
                resolve(rows); 
            }
           
        })
    })
}
function getuserlistings(seller){
    return new Promise(function(resolve,reject){
        connection.query(`SELECT * FROM listing WHERE seller='${seller}'`,
        function(err,rows,cols){
            if(err){
                reject(err);
            }else{
                resolve(rows); 
            }
           
        })
    })
}
function getlistingbysearch(search){
    return new Promise(function(resolve,reject){
        connection.query(`SELECT * FROM listing WHERE book='${search}' OR author='${search}'`,
        function(err,rows,cols){
            if(err){
                reject(err);
            }else{
                resolve(rows); 
            }
           
        })
    })
}
function getlistingbyid(id){
    return new Promise(function(resolve,reject){
        connection.query(`SELECT * FROM listing WHERE id=${id}`,
        function(err,rows,cols){
            if(err){
                reject(err);
            }else{
                resolve(rows); 
            }
           
        })
    })
}

function removelistingbyid(id){
    return new Promise(function(resolve,reject){
        connection.query(`DELETE FROM listing where id=${id}`,
    function(err,rows){
        if(err){
            reject(err);
        }else{
            resolve(rows); 
        }
       
        })
    })
}
function getlistingbyuser(user){
    return new Promise(function(resolve,reject){
        connection.query(`SELECT * FROM listing WHERE seller='${user}'`,
        function(err,rows,cols){
            if(err){
                reject(err);
            }else{
                resolve(rows); 
            }
           
        })
    })
}
function getmywishlist(userid){
    return new Promise(function(resolve,reject){
        connection.query(`SELECT * FROM listing WHERE id IN(SELECT bookid FROM wishlist WHERE userid='${userid}')`,
        function(err,rows,cols){
            if(err){
                reject(err);
            }else{
                resolve(rows); 
            }
           
        })
    })
}
function sendmsg(id,sender,receiver,msg){
    return new Promise(function(resolve,reject){
        connection.query(`INSERT INTO msg (bookid,sender,receiver,msg) VALUES (${id},'${sender}','${receiver}','${msg}')`,
        function(err,rows,cols){
            if(err){
                reject(err);
            }else{
                resolve(rows); 
            }
           
        })
    })
}

function removemsg(id){
    return new Promise(function(resolve,reject){
        connection.query(`DELETE FROM msg WHERE bookid=${id}`,
        function(err,rows,cols){
            if(err){
                reject(err);
            }else{
                resolve(rows); 
            }
           
        })
    })
}

function getmsgs(id){
    return new Promise(function(resolve,reject){
        connection.query(`SELECT * FROM msg WHERE sender='${id}' OR receiver='${id}'`,
        function(err,rows,cols){
            if(err){
                reject(err);
            }else{
                resolve(rows); 
            }
           
        })
    })
}

function getmsgssendbyme(id){
    return new Promise(function(resolve,reject){
        connection.query(`SELECT * FROM msg WHERE sender='${id}'`,
        function(err,rows,cols){
            if(err){
                reject(err);
            }else{
                resolve(rows); 
            }
           
        })
    })
}
function getmsgsreceivedbyme(id){
    return new Promise(function(resolve,reject){
        connection.query(`SELECT * FROM msg WHERE receiver='${id}'`,
        function(err,rows,cols){
            if(err){
                reject(err);
            }else{
                resolve(rows); 
            }
           
        })
    })
}
    function getmsgssendorreceivedby(email,email2){
        return new Promise(function(resolve,reject){
            connection.query(`SELECT * FROM msg WHERE receiver='${email}' AND sender='${email2}' OR receiver='${email2}' AND sender='${email}'`,
            function(err,rows,cols){
                if(err){
                    reject(err);
                }else{
                    resolve(rows); 
                }
               
            })
        })
}


exports=module.exports={
    addlisting,
    getalllistings,
    removelistingbyid,
    getuserlistings,
    getsortedlistingbypricelowtohigh,
    getsortedlistingbyconditionbadtogood,
    getsortedlistingbyconditiongoodtobad,
    getsortedlistingbypricehightolow,
    getlistingbysearch,
    getlistingbyuser,
    getlistingbyid,
    getmywishlist,
    sendmsg,
    removemsg,
    getmsgs,
    getmsgssendbyme,
    getmsgsreceivedbyme,
    getmsgssendorreceivedby,
}


//CREATE TABLE IF NOT EXISTS listing (id INTEGER AUTO_INCREMENT PRIMARY KEY, seller VARCHAR(50) NOT NULL, book VARCHAR(100) NOT NULL, author VARCHAR(100) NOT NULL, image VARCHAR(1000) NOT NULL, price INTEGER NOT NULL, cond INTEGER NOT NULL,description VARCHAR(1000) NOT NULL,  FOREIGN KEY (seller) REFERENCES user(email));

// CREATE TABLE IF NOT EXISTS user (name VARCHAR(50) NOT NULL, email VARCHAR(50) NOT NULL PRIMARY KEY, college VARCHAR(100) NOT NULL, address VARCHAR(200) NOT NULL, phonenumber INTEGER NOT NULL, password VARCHAR(50) NOT NULL);

// CREATE TABLE IF NOT EXISTS wishlist (bookid INTEGER NOT NULL, userid VARCHAR(50) NOT NULL);
// CREATE TABLE IF NOT EXISTS msg(sender VARCHAR(50) NOT NULL, receiver VARCHAR(50) NOT NULL, bookid INTEGER NOT NULL, msg VARCHAR(200) NOT NULL);
// ALTER TABLE listing ADD FOREIGN KEY (seller) REFERENCES users(email);
// ALTER TABLE wishlist ADD FOREIGN KEY (userid) REFERENCES user(email);
// ALTER TABLE wishlist ADD FOREIGN KEY (bookid) REFERENCES listing(id);
// ALTER TABLE msg ADD FOREIGN KEY (sender) REFERENCES user(email);
// ALTER TABLE msg ADD FOREIGN KEY (receiver) REFERENCES user(email);
// ALTER TABLE msg ADD FOREIGN KEY (bookid) REFERENCES listing(id);

// Heroku Tried
// Details
// Username:	b4a1393db7b5a5
// Password:	17f1c2e8
// databasename: heroku_46856bf9dc93c7e
// host: us-cdbr-iron-east-04.cleardb.net
// Vijay123
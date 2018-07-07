const mysql=require('mysql2');

const connection =mysql.createConnection(
    {
        host:'localhost',
        database:'bookreseller',
        user:'root',
        password:'12345678',
        insecureAuth:true
    }
)
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
    sendmsg
}


//CREATE TABLE IF NOT EXISTS listing (id INTEGER AUTO_INCREMENT PRIMARY KEY, seller VARCHAR(50) NOT NULL, book VARCHAR(100) NOT NULL, author VARCHAR(100) NOT NULL, image VARCHAR(1000) NOT NULL, price INTEGER NOT NULL, cond INTEGER NOT NULL,description VARCHAR(1000) NOT NULL,  FOREIGN KEY (seller) REFERENCES user(email));

// CREATE TABLE IF NOT EXISTS user (name VARCHAR(50) NOT NULL, email VARCHAR(50) NOT NULL PRIMARY KEY, college VARCHAR(100) NOT NULL, address VARCHAR(200) NOT NULL, phonenumber INTEGER NOT NULL, password VARCHAR(50) NOT NULL);

// CREATE TABLE IF NOT EXISTS wishlist (bookid INTEGER NOT NULL, userid VARCHAR(50) NOT NULL, FOREIGN KEY userid REFERENCES user(email), FOREIGN KEY bookid REFERENCES listing(id));
// CREATE TABLE IF NOT EXISTS msg(sender VARCHAR(50) NOT NULL, receiver VARCHAR(50) NOT NULL, bookid INTEGER NOT NULL, msg VARCHAR(200) NOT NULL,sendtime DATETIME NOT NULL, FOREIGN KEY bookid REFERENCES listing(id),FOREIGN KEY sender REFERENCES user(email),FOREIGN KEY receiver REFERENCES listing(id));

// listing={"seller":"vj042@","book":"mono","author":"vjg","img":"imglink","price":"100","description":"desc"}
// ALTER TABLE wishlist ADD FOREIGN KEY (userid) REFERENCES user(email);
// ALTER TABLE wishlist ADD FOREIGN KEY (bookid) REFERENCES listing(id);
// ALTER TABLE msg ADD FOREIGN KEY (sender) REFERENCES user(email);
// ALTER TABLE msg ADD FOREIGN KEY (receiver) REFERENCES user(email);
// ALTER TABLE msg ADD FOREIGN KEY (bookid) REFERENCES listing(id);

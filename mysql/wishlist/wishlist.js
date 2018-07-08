const mysql=require('mysql2');


// const connection =mysql.createConnection(
//     {
//         host:'us-cdbr-iron-east-04.cleardb.net',
//         database:'heroku_46856bf9dc93c7e',
//         user:'b4a1393db7b5a5',
//         password:'17f1c2e8',
//         insecureAuth:true
//     }
// )

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
//         host:'localhost',
//         database:'bookreseller',
//         user:'root',
//         password:'12345678',
//         insecureAuth:true
//     }
// )
function addinwishlist(bookid,userid){
    return new Promise(function(resolve,reject){
        console.log("three");
        
        connection.query(`INSERT INTO wishlist (bookid, userid) VALUES(?,?
            )`,[bookid,userid],function(err,res){
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


function deletefromwishlist(bookid,userid){
    return new Promise(function(resolve,reject){
        connection.query(`DELETE FROM wishlist WHERE bookid=${bookid} AND userid='${userid}'`,
    function(err,rows){
        if(err){
            reject(err);
        }else{
            resolve(rows); 
        }
       
        })
    })
}
function removefromwish(bookid){
    return new Promise(function(resolve,reject){
        connection.query(`DELETE FROM wishlist WHERE bookid=${bookid}`,
    function(err,rows){
        if(err){
            reject(err);
        }else{
            resolve(rows); 
        }
       
        })
    })
}
exports=module.exports={
    addinwishlist,
    deletefromwishlist,
    removefromwish
}
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
exports=module.exports={
    addinwishlist,
    deletefromwishlist
}
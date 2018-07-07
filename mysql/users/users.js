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
function adduser(name,email,college,address,phonenumber,password){
    return new Promise(function(resolve,reject){
        connection.query(`INSERT INTO user (name, email, college,address,phonenumber,password) VALUES(?,?,?,?,?,?
            )`,[name,email,college,address,phonenumber,password],function(err,res){
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
function getpasswordforemail(email){
    return new Promise(function(resolve,reject){
        connection.query(`SELECT password FROM user where email='${email}'`,
        function(err,rows,cols){
            if(err){
                reject(err);
            }else{
                resolve(rows); 
            }
           
        })
    })
}

function getuser(email){
    return new Promise(function(resolve,reject){
        connection.query(`SELECT * FROM user WHERE email='${email}'`,function(err,rows){
                if(err){
                    console.log('------');
                    
                    reject(err);
                }else{
                    console.log("---------");
                    
                    resolve(rows);
                } 
            })
    })
}

exports=module.exports={
    getpasswordforemail,
    adduser,
    getuser
}



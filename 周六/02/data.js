let mysql = require('mysql')

let connect = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"123",
    database:"web"
})

connect.connect();

let sql_r = 'slecct * from stus'
connect.query(sql_r,(err,result,filed)=>{
    console.log(err),
   result.forEach(val=>{
       let id = val.id
       let name = val.name
       let borth = val.birth
       let str = `${b.getYear()}-${b.getMonth()}-${b.getDate()+1}`
   })
    connect.end()
})
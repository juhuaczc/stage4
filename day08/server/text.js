let { User } = require('./model') 

let u1 = {
    empId: 101,
  empName: "张三",
  age: 33,
  postion: '销售',
  telephone: '1233444',
  address: '北京朝阳区',
  edu: '大专'
}
let u2 = {
    empId: 102,
  empName: "李丽",
  age: 13,
  gender: "F",
  postion: '人事',
  telephone: '33334444',
  address: '南京雨花台',
  edu: '本科'
}

User.insertMany([u1,u2],function(err,docs){
    console.log(err)
    console.log(docs)
})
const jwt = require('jsonwebtoken');
let token = jwt.sign({username:'abc'},'abc');
console.log(token);
jwt.verify(token,'abc',(err,obj)=>{
    console.log(err,obj);
})
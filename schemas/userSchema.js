const validator = require('validator')
const mongoose = require('mongoose')

let UserSchema = new mongoose.Schema(
    {
        name:{type:String,required:true},
        email:{
            type:String,
            required:true,
            lowercase:true,
            validate:(value)=>{
                return validator.isEmail(value)
            }
        },
        standard:{type:String,required:true},
        age:{type:String,required:true},
        createdAt:{type:Date,default:Date.now}
    },
    {
       collection:'users',
       versionKey:false
    }
)


let UserModel = mongoose.model('users',UserSchema)
module.exports={UserModel}

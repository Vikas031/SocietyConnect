const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const memberSchema=new Schema({
    name:{
        salutation :{type:String},
        member_name:{type:String} 
    },
    father_name:{type:String,required:false},
    age:{type:String,required:false},
    nationality:{type:String,required:false},
    dob:{type:String,required:false},
    home_address:{type:String,required:false},
    residence_phone_no:{type:String,required:false},
    occupation:{type:String,required:false},
    occupation_address_phone_no:{type:String,required:false},
    name_of_bank:{type:String,required:false},
    branch:{type:String,required:false},
    bank_acc_no:{type:String,required:false},
    pan_no:{type:String,required:false},
    income:{type:String,required:false},

    avatar:{type:String,required:false,get:(avatar)=>{
        if(avatar){
            return `${process.env.BASE_URL}${avatar}`
        }
        return avatar
        
    }},
},{
    timestamps:true,
    toJSON:{getters:true},
});

module.exports=mongoose.model('User',userSchema,'users');
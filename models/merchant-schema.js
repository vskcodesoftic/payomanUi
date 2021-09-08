const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')
const Schema = mongoose.Schema;


const merchantSchema = new Schema({
    name: { type: String },
    email: { type: String , unique : true},
    password: { type: String },
    businessName :{ type :String,  },
    countryCode : {type : String, },
    phoneNumber : { type : Number, },
    resetToken:{ type:String },
    expireToken:{ type:Date },
    profilePic :{type:String}  ,
    accountNumber :{type :Number} ,
    bankName : { type: String },
    swiftCode : { type : String },
    Balance :{ type :Number, default: '00'}
}, { versionKey: false });

merchantSchema.plugin(uniqueValidator)


module.exports = mongoose.model('Merchant', merchantSchema);
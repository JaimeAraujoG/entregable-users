const User = require("./User");
const EmailCode = require("./EmailCode");

//emailCode =>  userId
EmailCode.belongsTo(User)
User.hasMany(EmailCode)
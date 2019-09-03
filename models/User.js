const mongoose = require("mongoose");
const { Schema } = mongoose;   
//  it is called deprecation const Schema = mongoose.Schema

const userSchema = new Schema ({
  googleId : String  
})

mongoose.model("users", userSchema)
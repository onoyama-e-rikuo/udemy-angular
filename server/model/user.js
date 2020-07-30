const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const bcrypt = require('bcrypt');


const UserSchema = new Schema({
  username: { type: String, required: true, max: [20, "最大20文字までです"] },
  email: { type: String, required: true, max: [100, "最大100文字までです"], lowercase: true, unique: true },
  password: { type: String, required: true, min: [6, "6文字以上で入力してください"], max: [20, "最大20文字までです"] },
});

UserSchema.methods.hasSamePassword = function(inputPassword) {
  const user = this
  return bcrypt.compareSync(inputPassword, user.password)
}

UserSchema.pre('save', function(next) {
  const user = this
  const saltRounds = 10

  bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(user.password, salt, function(err, hash) {
        user.password = hash
        next()
    });
});
})

module.exports = mongoose.model("User", UserSchema);

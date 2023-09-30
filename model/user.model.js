const mongoose = require("mongoose");
const bcryptService = require("../services/bcrypt.services");

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    image_url: {
        type: String,
    },
    isActive: {
        type: Boolean,
        default: true
    }
  },
  { timestamps: true }
//   { collection: `${process.env.PREFIX_TABLE}_friend_lists`}
);

// encrypted password

userSchema.pre('save',async function(next){
    const data = this.password.toString();
    const encryptedPassword = await bcryptService.encrypt(data);
    this.password = encryptedPassword;
    next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;

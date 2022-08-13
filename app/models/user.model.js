import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const reqString = { type: String, required: true };
const user = mongoose.Schema(
  {
    firstName: reqString,
    lastName: reqString,
    email: reqString,
    password: reqString,
  },
  {
    versionKey: false,
  }
);

user.pre("save", function (next) {
  const user = this;

  if (this.isModified("password") || this.isNew) {
    bcrypt.genSalt(10, function (saltError, salt) {
      if (saltError) {
        return next(saltError);
      } else {
        bcrypt.hash(user.password, salt, function (hashError, hash) {
          if (hashError) {
            return next(hashError);
          }

          user.password = hash;
          next();
        });
      }
    });
  } else {
    return next();
  }
});

user.methods.checkPassword = async function (password) {
  return bcrypt.compare(password, this.password).then((res) => res);
};

export const Users = mongoose.model("Users", user);

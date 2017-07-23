import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const UserSchema = new Schema({
  nickname: {
    type: String,
    required: true
  },
  mobilephone: {
    type: String,
    required: true
  },
  sex: {
    type: Number,
    default: 1
  },
  salt: String,
  hash: String
});

const User = mongoose.model('user', UserSchema);

export default User;

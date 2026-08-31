import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },

    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String 
    },
    bio: {
        type: String
    },
    followers: [
        // ids to be stored
    ],
    followings : [
        //ids
    ],
    posts: [

    ],
    stories: [

    ],
    reels: [

    ],
    profileImage: {
        type: String
    }

})

const User = mongoose.model("User", userSchema);

export default User;
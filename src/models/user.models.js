import mongoose from "mongoose";
import  jwt  from "jsonwebtoken";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: [true, "Password is required"],
        },
        avatar: {
            type: String, //Cloudinary URL
            default: "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg"
        },
        refreshToken: {
            type: String
        }
    },
    {
        timestamp: true
    }
)

userSchema.pre("save", async function(next){
    if(this.isModified("password")) {
        this.password = bcrypt.hash(this.password, 10)
        next()    
    }
})

userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = async function(){
    jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}


userSchema.methods.generateRefreshToken = async function(){
    jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_SECRET
        }
    )
}


export default User = mongoose.model("User", userSchema)
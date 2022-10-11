import mongoose from 'mongoose';
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import autoinc from 'mongoose-plugin-autoinc';
const UserSchema = new mongoose.Schema({
    unique_id: Number,
    first_name: String,
    last_name: String,
    full_name: String,
    username: { type: String, unique: true }, // unique
    password: String, // encrypted
    email: { type: String, unique: true }, //unique
    building_number: Number,
    street: String,
    district: { type: String, default: "" },
    city: String,
    country: String,
    mobile_number: String,
    access_token: { type: String, default: "" }
}, {
    usePushEach: true,
    strict: true,
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});
UserSchema.plugin(autoinc.plugin, { model: 'user', field: 'unique_id', startAt: 1, incrementBy: 1 });
UserSchema.index({ first_name: 'text', last_name: 'text', full_name: 'text' });

//encrypt password and save
UserSchema.pre('save', function (next) {
    try {
        if (this.isModified("password") || this.isNew) {
            const salt = bcrypt.genSaltSync(12);
            this.password = bcrypt.hashSync(this.password, salt);
        }
        next()
    } catch (error) {
        next(error)
    }
});
//generate JWT
UserSchema.methods.generateJWT = function () {
    return jwt.sign({ user_id: this._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_TOKEN_EXPIRY });
};
//compare with hashed password
UserSchema.methods.isValidPassword = function (password) {
    return bcrypt.compareSync(password, this.password)
};

export default mongoose.model('user', UserSchema);

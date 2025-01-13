import mongoose from 'mongoose';

const authSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: [true, 'First name is required'],
        trim: true,
    },
    lname: {
        type: String,
        required: [true, 'Last name is required'],
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        trim: true,
        lowercase: true,
        match: [
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            'Please enter a valid email address',
        ],
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [6, 'Password must be at least 6 characters long'],
    },
}, {
    timestamps: true, // Adds createdAt and updatedAt fields
});

const Auth = mongoose.model('Auth', authSchema);

export default Auth;

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    // state: {
    //     type: String,
    //     required: true,
    // },
    // city: {
    //     type: String,
    //     required: true,
    // },
    // pincode: {
    //     type: String,
    //     required: true,
    // },
    dob: {
        type: Date,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    religion: {
        type: String,
        required: true,
    },
    education: {
        highestQualification: {
            type: String,
            required: true,
        },
        courseName: {
            type: String,
            required: true,
        },
    },
    occupation: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: false,
    },
    annualIncome: {
        type: String,
        required: true,
    },

})


export const User = mongoose.models.User || mongoose.model("User", userSchema);
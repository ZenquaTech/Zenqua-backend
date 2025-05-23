const mongoose = require('mongoose');

const enquiryFeedbackSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        match: [/\S+@\S+\.\S+/, 'Please enter a valid email address'],
    },
    type: {
        type: String,
        enum: ['Inquiry', 'Feedback'],
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
}, {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
});


const EnquiryFeedback = mongoose.model('Feedback', enquiryFeedbackSchema);

module.exports = EnquiryFeedback;

const mongoose = require('mongoose');

const FormSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },

    skype: {
        type: String,
        required: true,
    },

    phone: {
        type: String,
        required: true,
    },
    linkdin: {
        type: String,
        required: true,
    },

    city: {
        type: String,
        reuired: true,
    },

    state: {
        type: String,
        required: true,
    },

    Portfolio: String,

    freeTimeToWork: {
        type: String,
        required: true,
    },

    bestTimeToWork: {
        type: String,
        required: true,
    },

    salaryRequeriments: {
        type: String,
        required: true,
    },
});
module.exports = mongoose.model('Form', FormSchema);
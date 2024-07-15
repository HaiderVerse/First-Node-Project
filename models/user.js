const mongoose =  require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 32,
        validate: {
            validator: function(password) {
                // Password must contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character
                return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,32}$/.test(password);
            },
            message: props => `${props.value} is not a valid password. Must contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character (@$!%*?&).`
        }
    }
})
const USER = mongoose.model('users', userSchema);

module.exports = USER;
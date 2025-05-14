import mongoose from "mongoose";
const { Schema } = mongoose;

const subscriptionSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Subscription name is required'],
        trim: true,
        minlength: 2,
        maxlength: 100,
    },
    price: {
        type: Number,
        required: [true, 'Subscription price is required'],
        min: [0, 'Price must be greater than 0']
    },
    currency: {
        type: String,
        enum: ['USD', 'EUR', 'GBP'],
        default: 'USD'
    },
    frequency: {
        type: String,
        enum: ['daily', 'weekly', 'monthly', 'yearly']
    },
    category: {
        type: String,
        enum: ['sports', 'news', 'entertainment', 'lifestyles', 'technology', 'finance', 'politcs', 'other'],
        required: true,
    },
    paymentMethod: {
        type: String,
        required: true,
        trim: true,
    },
    status: {
        type: String,
        enum: ['active', 'cancelled', 'expired'],
        default: 'active'
    },
    startDate: {
        type: Date,
        required: true,
        validate: {
            validator: (value) => value < new Date(),
            message: 'Start date must be in the past'
        }
    },
    renewalDate: {
        type: Date,
        required: true,
        validate: {
            validator: function (value) { 
                return value > this.startDate;
            },
            message: 'Renewal date must be after start date',
        }
    }, 
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true
    }
}, { timestamps: true });

const subcription = mongoose.model('Subscription', subscriptionSchema);

export default subcription; 
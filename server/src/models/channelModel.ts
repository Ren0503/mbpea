import mongoose from 'mongoose';

const channelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    description: String,
    authRequired: {
        type: Boolean,
        default: false,
    },
    order: {
        type: Number,
        required: true,
    },
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
    }],
}, {
    timestamps: true,
});

export default mongoose.model('Channel', channelSchema);

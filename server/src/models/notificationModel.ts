import mongoose from 'mongoose';

const notificationSchema = new mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    post: mongoose.Schema.Types.ObjectId,
    like: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Like',
    },
    follow: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Follow',
    },
    comment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
    },
    message: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message',
    },
    seen: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true
});

export default mongoose.model('Notification', notificationSchema);
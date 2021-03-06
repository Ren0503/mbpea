import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    title: String,
    image: String,
    imagePublicId: String,
    pinned: Boolean,
    channel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Channel',
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    favorites: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Favorite',
    }],
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
    }],
}, {
    timestamps: true,
});

export default mongoose.model('Post', postSchema);

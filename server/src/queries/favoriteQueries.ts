// @ts-nocheck
import {
    User,
    Post,
    Favorite,
} from '../models';

export const favoriteById = async (id: string): Promise<any> => {
    const favorite = await Favorite.findById(id);
    return favorite;
};

export const createFavorite = async (userId: string, postId: string): Promise<any> => {
    const favorite = await new Favorite({ user: userId, post: postId }).save();

    // Push the favorite to the post and user collection.
    await Post.findOneAndUpdate({ _id: postId }, { $push: { favorites: favorite._id } });
    await User.findOneAndUpdate({ _id: userId }, { $push: { favorites: favorite._id } });

    return favorite;
};

export const deleteFavorite = async (id: string): Promise<any> => {
    const favorite = await Favorite.findByIdAndRemove(id);

    // Delete the favorite from the user and post collection.
    await User.findOneAndUpdate({ _id: favorite.user }, { $pull: { favorites: favorite._id } });
    await Post.findOneAndUpdate({ _id: favorite.post }, { $pull: { favorites: favorite._id } });

    return favorite;
};

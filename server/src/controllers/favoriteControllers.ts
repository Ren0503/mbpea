import { Request, Response } from 'express';
import { AuthUser, ErrorCodes, ErrorMessages } from '../constants';
import { createFavorite, deleteFavorite, favoriteById } from '../queries';

const FavoriteCtrl = {
    create: async (req: Request, res: Response): Promise<any> => {
        const { postId } = req.body;
        const authUser = req.user as AuthUser;
        const favorite = await createFavorite(authUser._id, postId);
        return res.send(favorite);
    },
    delete: async (req: Request, res: Response): Promise<any> => {
        const { id } = req.body;
        const authUser = req.user as AuthUser;

        // Check if the favorite author is removing the favorite.
        const favorite: any = await favoriteById(id);
        if (favorite.user.toString() === authUser._id.toString()) {
            const deletedFavorite = await deleteFavorite(id);
            return res.send(deletedFavorite);
        }
        return res.status(ErrorCodes.Bad_Request).send(ErrorMessages.Generic);
    },
};

export default FavoriteCtrl;
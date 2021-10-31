import { Request, Response, Router } from 'express';
import multer from 'multer';
import passport from 'passport';

import {
    UserCtrl,
    AuthCtrl,
    PostCtrl,
    SettingsCtrl,
    FavoriteCtrl,
} from '../controllers';
import {
    checkIfAdmin,
    checkIfSuperAdmin,
    checkIfUser,
    withUser,
} from '../middleware';

const router = Router();
const storage = multer.memoryStorage();
const multerUpload = multer({ storage });

router.get('/', (req: Request, res: Response) => res.send('API Running'));

/**
 * Authentication
 */
router.get('/auth-user', AuthCtrl.authUser);
router.post('/register', AuthCtrl.register);
router.post('/login', AuthCtrl.login);
router.post('/logout', AuthCtrl.logout);
router.post('/forgot-password', AuthCtrl.forgotPassword);
router.post('/reset-password', AuthCtrl.resetPassword);
router.post('/email-verify', AuthCtrl.emailVerify);
router.get('/github', passport.authenticate('github', { scope: ['user:email'] }));
router.get('/github/callback', AuthCtrl.githubCallback);
router.get('/google', passport.authenticate('google', { scope: 'profile email' }));
router.get('/google/callback', AuthCtrl.googleCallback);
router.get('/facebook', passport.authenticate('facebook', { scope: ['email'] }));
router.get('/facebook/callback', AuthCtrl.facebookCallback);


/**
 * Users
 */
router.get('/users/get-users', withUser, UserCtrl.getUsers);
router.get('/users/online-users', withUser, UserCtrl.onlineUsers);
router.get('/users/new-members', withUser, UserCtrl.newMembers);
router.post('/users/upload-photo', [checkIfUser, multerUpload.single('image')], UserCtrl.uploadPhoto);
router.get('/users/:id', UserCtrl.user);
router.delete('/users/ban-user', checkIfSuperAdmin, UserCtrl.banUser);

/**
 * Settings
 */
router.get('/settings', SettingsCtrl.settings);
router.put('/settings/update-community', checkIfAdmin, SettingsCtrl.updateCommunity);
router.post('/settings/upload-logo', [checkIfAdmin, multerUpload.single('image')], SettingsCtrl.uploadLogo);
router.put('/settings/update-user', checkIfUser, SettingsCtrl.updateProfile);
router.get('/settings/users', checkIfSuperAdmin, SettingsCtrl.users);
router.get('/settings/users-total', checkIfSuperAdmin, SettingsCtrl.usersTotal);
router.put('/settings/update-password', checkIfUser, SettingsCtrl.updatePassword);
router.post('/settings/create-user', checkIfSuperAdmin, SettingsCtrl.createUser);

/**
 * Posts
 */
router.get('/posts/channel/:channelId', PostCtrl.postsByChannelId);
router.get('/posts/author/:authorId', PostCtrl.postsByAuthorId);
router.get('/posts/follow', withUser, PostCtrl.postsByFollowing);
router.get('/posts/:id', PostCtrl.postById);
router.post('/posts/create', checkIfUser, multerUpload.single('image'), PostCtrl.create);
router.put('/posts/update', checkIfUser, multerUpload.single('image'), PostCtrl.update);
router.delete('/posts/delete', checkIfUser, PostCtrl.delete);
router.post('/posts/pin', checkIfSuperAdmin, PostCtrl.pin);

/**
 * Favorites
 */
router.post('/favorites/create', checkIfUser, FavoriteCtrl.create);
router.delete('/favorites/delete', checkIfUser, FavoriteCtrl.delete);

export default router;
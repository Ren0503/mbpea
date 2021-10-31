import { Request, Response, Router } from 'express';
import multer from 'multer';
import passport from 'passport';

import { UserController, AuthController } from '../controllers';
import {
    checkIfAdmin,
    checkIfSuperAdmin,
    checkIfUser,
    withUser,
} from '../middleware';

const router = Router();
const storage = multer.memoryStorage();
const multerUpload = multer({ storage });

/**
 * Authentication
 */
router.get('/auth-user', AuthController.authUser);
router.post('/register', AuthController.register);
router.post('/login', AuthController.login);
router.post('/logout', AuthController.logout);
router.post('/forgot-password', AuthController.forgotPassword);
router.post('/reset-password', AuthController.resetPassword);
router.post('/email-verify', AuthController.emailVerify);
router.get('/github', passport.authenticate('github', { scope: ['user:email'] }));
router.get('/github/callback', AuthController.githubCallback);
router.get('/google', passport.authenticate('google', { scope: 'profile email' }));
router.get('/google/callback', AuthController.googleCallback);
router.get('/facebook', passport.authenticate('facebook', { scope: ['email'] }));
router.get('/facebook/callback', AuthController.facebookCallback);


/**
 * Users
 */
router.get('/users/get-users', withUser, UserController.getUsers);
router.get('/users/online-users', withUser, UserController.onlineUsers);
router.get('/users/new-members', withUser, UserController.newMembers);
router.post('/users/upload-photo', [checkIfUser, multerUpload.single('image')], UserController.uploadPhoto);
router.get('/users/:id', UserController.user);
router.delete('/users/ban-user', checkIfSuperAdmin, UserController.banUser);

export default router;
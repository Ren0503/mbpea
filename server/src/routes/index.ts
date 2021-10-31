import { Request, Response, Router } from 'express';
import multer from 'multer';

import { UserController } from '../controllers';
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
 * Users
 */
router.get('/users/get-users', withUser, UserController.getUsers);
router.get('/users/online-users', withUser, UserController.onlineUsers);
router.get('/users/new-members', withUser, UserController.newMembers);
router.post('/users/upload-photo', [checkIfUser, multerUpload.single('image')], UserController.uploadPhoto);
router.get('/users/:id', UserController.user);
router.delete('/users/ban-user', checkIfSuperAdmin, UserController.banUser);

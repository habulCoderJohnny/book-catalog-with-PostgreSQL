import { UserRole } from '@prisma/client';
import express from 'express';
import auth from '../../middlewares/auth';
import { UserControllers } from './controllers';
const router = express.Router();

router.get('/', auth(UserRole.ADMIN), UserControllers.getAllUsers);
router.get('/:id', auth(UserRole.ADMIN), UserControllers.getUser);
router.patch('/:id', auth(UserRole.ADMIN), UserControllers.updateUser);
router.delete('/:id', auth(UserRole.ADMIN), UserControllers.deleteUser);

export const UserRoutes = router;

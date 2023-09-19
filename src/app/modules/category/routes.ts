import express from 'express';
import { CategoryControllers } from './controllers';
import auth from '../../middlewares/auth';
import { UserRole } from '@prisma/client';
import validateRequest from '../../middlewares/validateRequest';
import { CategoryValidators } from './validation';
const router = express.Router();

router.post(
  '/create-category',
  auth(UserRole.ADMIN),
  validateRequest(CategoryValidators.createCategoryZodSchema),
  CategoryControllers.createCategory
);

router.get('/', CategoryControllers.getAllCategories);

router.get('/:id', CategoryControllers.getCategory);

router.patch(
  '/:id',
  auth(UserRole.ADMIN),
  validateRequest(CategoryValidators.updateCategoryZodSchema),
  CategoryControllers.updateCategory
);

router.delete('/:id', auth(UserRole.ADMIN), CategoryControllers.deleteCategory);

export const CategoryRoutes = router;

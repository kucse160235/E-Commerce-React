import express from 'express';
const router = express.Router();

import {
  userAuth,
  getUserProfile,
  registerUser,
  updateUserProfile,
} from '../controllers/userControllers.js';
import { protect } from '../middlwares/authMiddeware.js';

router.post('/login', userAuth);
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router.route('/').post(registerUser);

export default router;

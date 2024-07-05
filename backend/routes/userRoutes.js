import express from 'express';
import {
  authUser,
  registerUser,
  logoutUser,
  updateUserProfile,
  getUserProfile,
  getAllUsers,
} from '../controllers/userController.js';
import { userControlAuth } from '../middleware/authMiddleware.js';

const router = express.Router();

// Yeni kullanıcı kaydı için route
router.post('/register', registerUser);

// Kullanıcı girişi için route
router.post('/auth', authUser);

// Kullanıcı oturumu kapatma için route
router.post('/logout', logoutUser);
router.post('/all', getAllUsers);

// Kullanıcı profilini getirme ve güncelleme için route
router.route('/profile')
  .get(userControlAuth, getUserProfile)
  .put(userControlAuth, updateUserProfile);

export default router;

import express from 'express';
import { protect, restrictTo } from '../middleware/auth.js';
import User from '../models/User.js';

const router = express.Router();

// @desc    Get all users (admin only)
// @route   GET /api/users
// @access  Private/Admin
router.get('/', protect, restrictTo('admin'), async (req, res, next) => {
  try {
    const users = await User.find({});
    
    res.status(200).json({
      success: true,
      count: users.length,
      users
    });
  } catch (error) {
    next(error);
  }
});

export default router;
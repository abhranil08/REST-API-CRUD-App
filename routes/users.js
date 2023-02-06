import express from 'express';
import { getAllUser, createUser, getUserById, deleteUserById, updateUserById } from '../controller/util.js';
const router = express.Router();



router.get('/', getAllUser );
router.post('/', createUser );
router.get('/:id', getUserById );
router.delete('/:id', deleteUserById );
router.patch('/:id', updateUserById );

export default router;
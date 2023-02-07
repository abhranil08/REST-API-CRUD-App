import express from 'express';
import {    UpdateUserByEmail, deleteUserByEmail,
            createNewUserInDb, getAllUsers, getUserByEmail, getUserByFirstName } 
        from '../controller/userController.js';
const router = express.Router();



router.get('/getUsersFromDb', getAllUsers );
router.post('/createNewUserInDb', createNewUserInDb );

router.get('/getUserByEmail/:email', getUserByEmail );
router.get('/getUserByFirstName/:firstName', getUserByFirstName );

router.delete('/deleteUserByEmail/:email', deleteUserByEmail );
router.patch('/UpdateUserByEmail/:email', UpdateUserByEmail );

export default router;
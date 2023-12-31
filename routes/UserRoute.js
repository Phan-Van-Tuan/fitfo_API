const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

// Define routes using the UserController methods
router.get('/getAllUsers/', UserController.getAllUsers);
router.get('/getUserByPhoneNumber/:phoneNumber', UserController.getUserByPhoneNumber);
router.get('/getUserById/:id', UserController.getUserById);
router.get('/profile/', UserController.profile);
router.post('/register/', UserController.register);
router.post('/login/', UserController.login);
router.put('/update/:id', UserController.update);
router.put('/updatePassword/:id', UserController.updatePassword);
router.patch('/updateAvatar/:id', UserController.updateAvatar);
router.delete('/delete/:id', UserController.delete);

module.exports = router;
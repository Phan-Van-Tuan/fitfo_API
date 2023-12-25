const express = require('express');
const router = express.Router();
const PostController = require('../controllers/PostController');

router.post('/', PostController.createPost);
router.delete('/:postId', PostController.deletePost);
router.put('/:postId', PostController.updatePost);
router.get('/getAll/', PostController.getAllPosts);
router.get('/getByUser/:id', PostController.getAllPosts);

module.exports = router;
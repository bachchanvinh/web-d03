var express = require('express')
var router = express.Router()

const postController =require ('../controllers/posts.controller')

router.get('/',postController.getPosts)
router.get('/:id',postController.getPostById)
router.post('/',postController.addPost)
router.put('/:id/',postController.updatePost)
module.exports = router
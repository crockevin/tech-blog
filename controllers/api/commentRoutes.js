const router = require('express').Router()
const { Blog, Comments, User } = require('../../models')

router.post('/', async (req, res) => {// post comments
    try {
        const { content, blog_id } = req.body
        const newComment = await Comments.create({
            content: content,
            user_id: req.session.user_id,
            blog_id: blog_id
        })
        res.status(201).json({ message: 'Comment made' })
    } catch (error) {
        res.status(500).json({ message: error })
    }
})

module.exports = router
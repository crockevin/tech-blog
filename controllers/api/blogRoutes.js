const router = require('express').Router()
const { Blog, Comments, User } = require('../../models')

router.post('/', async (req, res) => {// posts new blog
    try {
        const { title, body } = req.body
        const newBlog = await Blog.create({
            title: title,
            body: body,
            user_id: req.session.user_id
        })
        res.status(201).json({ message: 'Post made' })
    } catch (error) {
        res.status(500).json({ message: error })
    }
})
router.put('/update/:id', async (req, res) => {//update blog based on id
    try {
        const { body } = req.body
        await Blog.update({ body }, {
            where: {
                id: req.params.id
            }
        })
        res.status(201).json({ message: 'blog updated'})
    } catch (error) {
        res.status(500).json(error)
    }
})
router.delete('/delete/:id', async (req, res) => {// delete blog based on id
    try {
        await Blog.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(201).json({ message: 'blog deleted'})
    } catch (error) {
        res.status(500).json(error)
    }
})


module.exports = router

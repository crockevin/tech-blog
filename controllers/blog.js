const router = require('express').Router()
const { Blog, Comments, User } = require('../models')
const withAuth = require('../utils/auth')

router.get('/:id', withAuth, async (req, res) => {//load blog by id
    try {
        const id = req.params.id
        const blogData = await Blog.findByPk(id, {
            include: [
                {
                    model: User,
                    attributes: ['firstName', 'lastName']
                }

            ]
        })
        if (!blogData) {
            return res.redirect('/')
        }
        const sameUser = blogData.user_id === req.session.user_id
        const commentData = await Comments.findAll({// gets all comments for the blog
            where: {
                blog_id: id
            }
        })
        const comments = commentData.map((comment) => ({
            content: comment.content
        }))
        const blog = blogData.get({ plain: true })
        console.log('comments', comments)
        res.render('blog', { id, sameUser, blog, comments, logged_in: req.session.logged_in })
    } catch (error) {
        res.status(500).json({ message: error })
    }
})


module.exports = router
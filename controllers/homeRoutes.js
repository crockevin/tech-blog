const router = require('express').Router()
const withAuth = require('../utils/auth')
const { Blog, Comments, User } = require('../models')

router.get('/', async (req, res) => {// gets all blogs
    try {
        const blogData = await Blog.findAll({
            include: [
                {
                    model: User,
                    attributes: ['firstName', 'lastName']
                }

            ]
        })

        const blogs = blogData.map((blog) => ({
            id: blog.id,
            title: blog.title,
            body: blog.body,
            timeStamp: blog.timeStamp,
            user: {
                firstName: blog.user.firstName,
                lastName: blog.user.lastName
            }
        }))
        console.log(blogs)
        res.render('homepage', { blogs, logged_in: req.session.logged_in })
    } catch (error) {
        res.status(500).json({ message: error })
    }

})
router.get('/login', (req, res) => {//login 
    res.render('login', { sameUser: false })
})
router.get('/signup', (req, res) => {//sign up
    res.render('signup', { sameUser: false })
})
router.post('/logout', (req, res) => {//log out
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end()
        })
    }
    else {
        res.status(404).end()
    }
})
router.get('/dashboard', withAuth, async (req, res) => {//user dashboard, gets all users blogs
    const userId = req.session.user_id
    try {
        const blogData = await Blog.findAll({
            where: { user_id: userId },
            include: User
        })
        const blogs = blogData.map((blog) => ({
            id: blog.id,
            title: blog.title,
            body: blog.body,
            timeStamp: blog.timeStamp,
            user: {
                firstName: blog.user.firstName,
                lastName: blog.user.lastName
            }
        }))
        res.render('dashboard', { blogs, logged_in: req.session.logged_in })
    } catch (error) {
        res.status(500).json({ message: error })
    }
})
module.exports = router
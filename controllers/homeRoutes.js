const router = require('express').Router()

router.get('/', (req, res) => {
    res.render('homepage', { logged_in: req.session.logged_in })
})
router.get('/test', (req, res) => {
    res.render('test', { sameUser: false })
})
router.get('/login', (req, res) => {
    res.render('login', { sameUser: false })
})
router.get('/signup', (req, res) => {
    res.render('signup', { sameUser: false })
})
module.exports = router
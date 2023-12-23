const router = require('express').Router()
const login = require('./loginRoutes')
const blog = require('./blogRoutes')
const comment = require('./commentRoutes')
router.use('/', login)
router.use('/blog', blog)
router.use('/comment', comment)

module.exports = router
const router = require('express').Router()
const homeRoutes = require('./homeRoutes')
const api = require('./api')
const blog = require('./blog')


router.use('/', homeRoutes)
router.use('/api', api)
router.use('/blog', blog)

module.exports = router
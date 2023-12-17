const express = require('express')
const session = require('express-session')
const exphbs = require('express-handlebars')
const SequelizeStore = require('connect-session-sequelize')(session.Store)
const path = require('path')
const sequelize = require('./config/connection')
const helpers = require('./utils/helper')
const hbs = exphbs.create({ helpers })
const app = express()
const routes = require('./controllers')
const PORT = process.env.PORT || 3001
const sess = {
    secret: 'The one piece is real',
    cookie: {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: false,
        sameSite: 'strict'
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
}

app.use(session(sess))
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(routes)

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Listening at ${PORT}`))
})
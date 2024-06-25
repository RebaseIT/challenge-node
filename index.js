const express = require('express')
const protectedRoutes = require('./routes/protected');
const { findUserBy, updateUser } = require('./database/repository')
const { getRandomString } = require('./utils/string')
const { checkLoggedToken } = require('./middlewares/checkLoginToken');

const app = express()
app.use(express.json())
app.use('/api', checkLoggedToken , protectedRoutes)
app.post('/login', (req, res) => {
    try {
        if(!req.body.user){
            throw new Error('User field missing.')
        }
        const { username, password } = req.body.user
        const user = findUserBy('name', username)
        if(!user || password !== user.password){
            throw new Error('Username or password invalid/missing.')
        }
        const token = getRandomString(16)
        const userUpdated = {...user, token }
        updateUser(userUpdated)
        return res.status(200).json({userUpdated})
    } catch(err) {
        return res.status(500).json({status: 500, error: err.message})
    }
})

app.listen(8100, () => {
    console.log('Server listening in port 8100')
})
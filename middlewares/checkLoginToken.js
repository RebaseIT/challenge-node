const { findUserBy } = require("../database/repository")

const checkLoggedToken = (req, res, next) => {
    try {
        const { token }  = req.headers
        if (!token) {
            return res.status(403).json({ status: 403, msg: 'Unauthorized' })
        }
        const user = findUserBy('token', token)
        if(!user){
            return res.status(403).json({ status: 403, msg: 'Unauthorized' })
        }
        next()
    } catch (error) {
        return res.status(500).json({error})
    }
}

module.exports = {
    checkLoggedToken
}
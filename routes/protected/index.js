const express = require('express')
const router = express.Router()

const { 
    findProductBy,
    findUserBy,
    addProduct,
    addUser,
    updateProduct,
    updateUser,
    removeProductById,
    removeUserById,
    getAllUsers,
    getAllproducts
} = require('../../database/repository')

router.post('/users', (req, res) => {
    const user = req.user
    if(!user){
        return res.json({status: 400, errorMsg: 'User field missing.'}).status(400)
    }
    const userWithId = addUser(user)
    return res.json({ user: userWithId }).status(200)
})
router.get('/users', (req, res) => {
    try {
        const users = getAllUsers()
        return res.status(200).json({users})
    } catch(err) {
        return res.status(500).json({status: 500, err})
    }
})
router.get('/users/:id', (req, res) => {
    try {
        const user = findUserBy('id', req.params.id)
        return res.status(200).json({user})
    } catch(err) {
        return res.status(500).json({status: 500, err})
    }
})
router.patch('/users/:id', (req, res) => {
    try {
        const user2Update = req.body.user
        const user = findProductBy('id', req.params.id)
        const userUpdated = {...user, ...user2Update}
        updateUser(userUpdated)
        return res.status(200).json({user: userUpdated})
    } catch(err) {
        return res.status(500).json({status: 500, err})
    }
})
router.put('/users/:id', (req, res) => {
    try {
        const user2Update = req.body.user
        updateUser(userUpdated)
        return res.status(200).json({user: user2Update})
    } catch(err) {
        return res.status(500).json({status: 500, err})
    }
})
router.delete('/users/:id', (req, res) => {
    try {
        removeUserById(req.params.id)
    } catch(err) {
        return res.status(500).json({status: 500, err})
    }
})
router.post('/products', (req, res) => {
    const product = req.product
    if(!product){
        return res.json({status: 400, errorMsg: 'Product field missing.'}).status(400)
    }
    const productWithId = addProduct(product)
    return res.json({ product: productWithId }).status(200)
})
router.get('/products', (req, res) => {
    try {
        const products = getAllproducts()
        return res.status(200).json({products})
    } catch(err) {
        return res.status(500).json({status: 500, err})
    }
})
router.get('/products/:id', (req, res) => {
    try {
        const product = findProductBy('id', req.params.id)
        return res.status(200).json({product})
    } catch(err) {
        return res.status(500).json({status: 500, err})
    }
})
router.patch('/products/:id', (req, res) => {
    try {
        const product2Update = req.body.product
        const product = findProductBy('id', req.params.id)
        const productUpdated = {...product, ...product2Update}
        updateProduct(productUpdated)
        return res.status(200).json({product: productUpdated})
    } catch(err) {
        return res.status(500).json({status: 500, err})
    }
})
router.put('/products/:id', (req, res) => {
    try {
        const product2Update = req.body.product
        updateProduct(product2Update)
        return res.status(200).json({product: product2Update})
    } catch(err) {
        return res.status(500).json({status: 500, err})
    }
})
router.delete('/products/:id', (req, res) => {
    try {
        removeProductById(req.params.id)
    } catch(err) {
        return res.status(500).json({status: 500, err})
    }
})


module.exports = router
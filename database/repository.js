const repository = {
    users: [{
        id: '1',
        name: 'admin',
        password: 'admin',
        token: null
    },
    {
        id: '2',
        name: 'user',
        password: 'user',
        token: null
    },
    {
        id: '3',
        name: 'anotherUser',
        password: 'anotherUser',
        token: null
    }],
    products: [
        {
            id: '1',
            name: 'ACME Dynamite',
            price: '10',
            seller: '1'
        },
        {
            id: '2',
            name: 'Slash\'s guitar',
            price: '900000',
            seller: '1'
        },
        {
            id: '3',
            name: 'Slash\'s guitar (replica)',
            price: '900000',
            seller: '3'
        },

    ]
}

const addProduct = (product) => {
    const lastId = repository.products.sort((el1, el2) => el1.id - el2.id)[repository.products.length - 1].id
    const product2Insert = {...product, id: lastId + 1 , seller: '3'}
    repository.products.push(product2Insert)
    return product2Insert
}

const removeProductById = (id) => {
    repository.products = repository.products.filter(product => product.id != id)
}

const updateProduct = (productUpdated) => {
    const newProductList = repository.products.filter(product => product.id != productUpdated.id)
    newProductList.push(productUpdated)
    repository.products = newProductList
}

const addUser = (user) => {
    const lastId = repository.users.sort((el1, el2) => el1.id - el2.id)[repository.users.length - 1].id
    const user2Insert = {...user, id: lastId + 1 }
    repository.users.push(user2Insert)
    return user2Insert
}

const removeUserById = (id) => {
    repository.users = repository.users.filter(user => user.id != id)
}

const updateUser = (userUpdated) => {
    const newUserList = repository.users.filter(user => user.id != userUpdated.id)
    newUserList.push(userUpdated)
    repository.users = newUserList
}

const findUserBy = (field, value) => {
    return findBy(field, value, 'users')
}
const findProductBy = (field, value) => {
    return findBy(field, value, 'products')
}

const findBy = (field, value, type) => {
    return repository[type].find(user => {
        const userFieldValue = user[field]
        const wildecardAtBeginning = value.startsWith('%')
        const wildecardAtEnd = value.endsWith('%')
        const valueWithoutWidecards = value.replaceAll('%','')
        if(wildecardAtEnd && wildecardAtBeginning) {
            return userFieldValue.contains(valueWithoutWidecards)
        }
        if(wildecardAtEnd){
            return userFieldValue.endsWith(valueWithoutWidecards)
        }
        if(wildecardAtBeginning){
            return userFieldValue.startsWith(valueWithoutWidecards)
        }
        return userFieldValue === valueWithoutWidecards
    })
}
const getAllproducts = () => {
    return repository.products
}

const getAllUsers = () => {
    return repository.users
}

module.exports = {
    findProductBy,
    findUserBy,
    addProduct,
    addUser,
    updateProduct,
    updateUser,
    removeProductById,
    removeUserById,
    getAllproducts,
    getAllUsers,
}
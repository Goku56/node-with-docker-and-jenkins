const express = require('express')
const User = require('./user.model')
const mongoose = require('mongoose')
require('./user.model')
const app = express()


mongoose.connect('mongodb+srv://gokul:root123@cluster0.ewuu2vk.mongodb.net/test')
    .then(() => {
        console.log('Connected to MongoDB')
    })
    .catch(err => console.error(err))


app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.get('/health-check', (req, res) => {
    console.log('health-check api requested and respose sended successfully')
    res.json(
        {
            status: 200,
            message: 'Health check api working'
        }
    )
})

app.post('/health-check', (req, res) => {
    console.log('health-check api requested and respose sended successfully')
    res.json(
        {
            status: 200,
            message: 'Health check api working'
        }
    )
})


app.post('/users', async (req, res) => {
    const { name, email, password } = req.body

    const userData = {
        name,
        email,
        password
    }

    const user = await User.create({ ...userData })
    console.log(user)
    if (!user) {
        return res.status(500).json({ message: 'something went wrong' })
    }
    console.log('user data successfully saved to db')
    res.json({ data: "user data successfully added", status: 200 })
})

app.get('/user', async (req, res) => {
    const users = await User.find()

    console.log('user data successfully fetched from db')
    res.json(users).status(201)
})

app.get('/user/:id', async (req, res) => {
    const user = await User.findById(req.params.id)
    if (!user) {
        return res.status(404).json({ message: 'User not found' })
    }

    console.log('user data successfully fetched from db for single user')
    res.json(user).status(200)
})

app.listen(5000, () => {
    console.log('server app listening on port 5000!')
})

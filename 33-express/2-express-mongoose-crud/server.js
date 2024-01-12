// ============================================
// IMPORTS
// ============================================

const express = require('express')
const mongoose = require ('mongoose')

// ============================================
// CONFIGS
// ============================================

const app = express()
const port = 3000

// ============================================
// MIDDLEWARES
// ============================================

app.use(express.json())  // use json

// ============================================
// ROUTES
// ============================================

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

// imti visas knygas
app.get('/books', (req, res) => {
    res.send({message: 'GET /books NOT IMPLEMENTED'})
})


//imti viena konkrecia knyga
app.get('/books/:id', (req, res) => {
    res.send({message: 'GET /books/:id NOT IMPLEMENTED'})
})


//ideti nauja knyga
app.post('/books', (req, res) => {
    res.send({message: 'POST /books NOT IMPLEMENTED'})
})


// atnaujinti konkrečią knygą
app.patch('/books/:id', (req, res) => {
    res.send({message: 'PATCH /books/:id NOT IMPLEMENTED'})
})


// ištrinti konkrečią knygą
app.delete('/books/:id', (req, res) => {
    res.send({message: 'DELETE /books/:id NOT IMPLEMENTED'})
})


// ============================================
// START SERVER
// ============================================

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
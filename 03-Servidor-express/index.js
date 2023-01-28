//const express = require("express")
import express from "express" 

const app = express()
const PORT = 8080

app.use(express.urlencoded({extended:true}))

// NOTA PARA EL TUTOR
// Este lo hice así porque aún no me funcionan los desafios anteriores, y para resolver este, lo desarrolle de esta manera para fines practicos.
let ProductManager =[
    {
        title: "Producto1",
        description: "Esto es un producto",
        price: 1600,
        thumbnail: "Imagen",    
        id: "1",
        stock: 50
    },
    {
        title: "Producto2",
        description: "Esto es un producto",
        price: 2500,
        thumbnail: "Imagen",    
        id: "2",
        stock: 120
    },
    {
        title: "Producto3",
        description: "Esto es un producto",
        price: 1500,
        thumbnail: "Imagen",    
        id: "3",
        stock: 500
    },
    {
        title: "Producto4",
        description: "Esto es un producto",
        price: 1000,
        thumbnail: "Imagen",    
        id: "4",
        stock: 500
    },
    {
        title: "Producto5",
        description: "Esto es un producto",
        price: 150,
        thumbnail: "Imagen",    
        id: "5",
        stock: 500
    },
    {
        title: "Producto6",
        description: "Esto es un producto",
        price: 2000,
        thumbnail: "Imagen",    
        id: "6",
        stock: 500
    }
]

app.get("/products", (req, res) => {
    res.send(ProductManager)
})

app.get("/products/:pid", (req, res) => {
    const {pid} = req.params
    const products = ProductManager.find(product => product.id === pid)
    if(!products) return res.send("No existe el producto")
    res.send(products)
})

app.get("/products", (req, res) => {
    const { limit } = req.query
    //if(limit === 6) return res.send("No existe el producto")
    let productsLimit = ProductManager.filter(products => products.lenght === limit)
    res.send(productsLimit)
})

app.listen(PORT, err => {
    if(err) console.log(err)
    console.log("Escuchando en el puerto ${PORT}")
})

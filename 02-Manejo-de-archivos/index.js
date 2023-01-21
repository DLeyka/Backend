const fs = require("fs")

class ProductManager {
    constructor(){
        this.path = "./data.txt"
    }  

    getProducts = () => {
        const consultProduct = async () => {
            try {
                let data = await fs.promises.readFile("./data.txt", "utf-8")
                let dataJs = JSON.parse(data)
            } catch (error) {
                console.log(error)
            }
        
        }
    }

    addProduct = () => {
        const addProduct = async () => {
            try {
                let product = { 
                    title : "Puma",
                    description : "Tenis del No. 7 para Hombre",
                    price : 1700, "thumbnail" : "Aquí hay imagen",
                    code : "A2",
                    stock : 10 
                }
                let addData = await fs.promises.appendFile("./data.txt", product, "utf-8")
                let adddataJS = JSON.parse(addData)
                adddataJS.id = [ { id: this.products[this.products.length - 1].id + 1 }]

            } catch (error) {
                console.log(error)
            }
        } 
    }
}

const productos = new ProductManager()

console.log(productos.addProduct())

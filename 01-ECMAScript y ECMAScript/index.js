class ProductManager {
    constructor(){
        this.products = []
    }
    getProducts = () => { this.products }
    getProductsById = (id) => {}
    addProduct = (newItem) => {
        const productsBD = this.products.find(product => product.code === newItem.code)

        if (productsBD) {
            return "Se encuentra el producto"
        }

        if (this.products.length === 0) {
            newItem.id = 1
            this.products.push(newItem)
        } else {
            this.products =  [ ... this.products, { ... newItem, id: this.products[this.products.length - 1].id + 1 } ]
        }
    }
}

const productos = new ProductManager()

console.log(productos.addProduct({
    title: "Producto",
    description: "Esto es un producto",
    price: 1800,
    thumbnail: "Imagen",
    code: 1,
    stock: 500
}))

console.log(productos.getProducts())
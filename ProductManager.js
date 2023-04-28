class ProductManager {
  constructor() {
    this.product = [];
  }

  getProducts() {
    return this.product;
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    let idMax = 0;
    this.product.forEach((prod) => {
      if (prod.id > idMax) {
        idMax = prod.id;
      }
    });
    idMax++;
    if (this.product.find((item) => item.code == code)) {
      return console.log(`El códido ${code} ya existe`);
    } else {
      if (
        stock < 0 ||
        price < 0 ||
        code === `` ||
        title === "" ||
        description === "" ||
        thumbnail === ""
      ) {
        return console.log("No se pueden ingresar datos en blanco");
      } else {
        let productCreate = {
          id: idMax,
          title,
          description,
          price,
          thumbnail,
          code,
          stock,
        };
        this.product.push(productCreate);
      }
    }
  }

  getProductById(id) {
    let prodexist = 0;
    for (let index = 0; index < this.product.length; index++) {
      if (this.product[index].id == id) {
        return this.product[index];
        prodexist = 1;
      }
    }
    if (prodexist === 0) {
      let message = `El producto con ID: ${id} no existe`;
      return message;
    }
  }
}

const product = new ProductManager();
/* -----------------
Listado de productos vacio
--------------------*/
//console.log("Listado de productos Vacios");
//console.log("----------------------");
//console.log(product.getProducts());
//console.log("----------------------");
/* -----------------
Agregamos los productos
--------------------*/

// product.addProduct("Manzana", "Manzana Roja", 480, "imagen1", "FRU001", 20);
// product.addProduct("Banana", "Banana Ecuador", 380, "imagen2", "FRU002", 40);
// product.addProduct("Pera", "Pera Williams", 380, "imagen3", "FRU003", 50);
// product.addProduct("Kiwi", "Kiwi Chile", 380, "imagen4", "FRU004", 10);
//product.addProduct("", "Kiwi Chile", 380, "imagen4", "FRU004", 10);
/* -----------------
Agregamos un producto con código duplicado
--------------------*/
// product.addProduct("Durazno", "Durazno Blanco", 680, "imagen5", "FRU002", 60);

/* -----------------
Mostramos los productos
--------------------*/
console.log("Listado de Productos");
console.log("----------------------");
console.log(product.getProducts());
console.log("----------------------");
// /* -----------------
// Buscamos un producto por ID que existe
// --------------------*/
// console.log(`El producto con código 2 es:`);
// console.log(product.getProductById(2));

/* -----------------
Buscamos un producto por ID que NO existe
--------------------*/
//console.log(product.getProductById(5));

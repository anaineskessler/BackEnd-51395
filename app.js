//const express = require("express");
import express from "express";
import { product } from "./ProductManager.js";
//Importamos el ProductManage

//const productManager = require("./ProductManager.js");
const app = express();
const PORT = 8080;

app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

//const products = new ProductManager();
console.log(product);
console.log(typeof product);
console.log("----------------");
console.log(product[4]);
//Chequeo Servidor corriendo en puerto 8080
app.get("/", (req, res) => {
  res.json({
    message: `Hola a todos ahora estamos en el Desafío 3 en el puerto ${PORT}`,
    Payload: product,
  });
});

//Si me enviaron por query el ?limit = algo, entonces solo envio esa cantidad, de lo contrario todo
app.get("/products/", (req, res) => {
  const { limit } = req.query;
  res.send(limit ? product.slice(0, limit) : product);

  // if query {
  //   res.json({
  //     //si no aclararon nada en el query mando todos los productos
  //     products,
  //   });
  // } else {

  // }
  // //if  me enviaron por query el ?limit = algo, entonces solo envio esa cantidad

  // res.json({
  //   /*envio todos los productos hasta el límite que me piden*/
  // });
});

//Muestro solo el Producto por ID
app.get("/products/:pid", (req, res) => {
  //dentro de req.params vienen lo que mando por la url
  const id = req.params.pid;

  res.send(`Buscamos el producto ${id}`);
  console.log(`Buscamos el producto ${id}`);
  console.log(product);
  //const productoEncontrado = products.find((prod) => prod.id == id);
  const productoEncontrado = product.getProductById(id);
  console.log(productoEncontrado);
  res.json(productoEncontrado);
});

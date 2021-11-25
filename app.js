//req= request -> petición cliente
//res = response -> respuesta del servidor
//cliente = navegador

const express = require("express");
const app = express(); // usar app como http

//conexion por la url

app.get("/", (req, res) => {
  res.send("la conexión ha sido correcta");
});

app.listen(3000, () => {
  console.log("servidor a la espera de conexiones");
});

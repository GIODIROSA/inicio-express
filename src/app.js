//req= request -> petición cliente
//res = response -> respuesta del servidor
//cliente = navegador

const express = require("express");
const app = express(); // usar app como http
const path = require("path"); // modulo que se encarga de normalizar rutas por temas de sistema de operativo

//ROUTES
// const routes = require("./routes/index.routes");
// app.use(routes);
// la versión shortcut
app.use(require("./routes/index.routes"));

// static files
app.use(express.static(path.join(__dirname, "../public")));
// console.log(__dirname);

app.use((req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.listen(3000, () => {
  console.log("servidor a la espera de conexiones");
});

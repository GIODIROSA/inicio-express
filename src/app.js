//req= request -> petición cliente
//res = response -> respuesta del servidor
//cliente = navegador

const express = require("express");
const { route } = require("./routes/index.routes");
const app = express(); // usar app como http

//ROUTES
// const routes = require("./routes/index.routes");
// app.use(routes);
// la versión shortcut
app.use(require("./routes/index.routes"));

app.listen(3000, () => {
  console.log("servidor a la espera de conexiones");
});

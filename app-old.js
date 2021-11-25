const http = require("http");

const server = http.createServer((req, res) => {
  console.log("un cliente se ha conectado");
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.write("la conexión ha sido correcta");
  res.end();
});

server.listen(3000, () => {
  console.log("servidor a la espera de conexiones");
});

const controller = {};

controller.index = (req, res) => {
  res.send("la conexión ha sido correcta desde index.controller");
};

module.exports = controller;

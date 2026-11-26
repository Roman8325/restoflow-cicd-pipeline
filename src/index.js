const http = require("http");

function crearReserva({ mesa, hora, personas }) {
  if (!mesa || !hora || personas <= 0) {
    throw new Error("DATOS_RESERVA_INVALIDOS");
  }
  return {
    id: `RES-${Date.now()}`,
    mesa,
    hora,
    personas,
    estado: "CONFIRMADA"
  };
}

function calcularTotalPedido(items, impuesto = 0.19) {
  const subtotal = items.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
  const total = Number((subtotal * (1 + impuesto)).toFixed(2));
  return { subtotal, total };
}

if (require.main === module) {
  const port = process.env.PORT || 3000;
  const server = http.createServer((req, res) => {
    if (req.url === "/health") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ status: "ok", service: "restoflow-api" }));
      return;
    }
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "RestoFlow API activa" }));
  });
  server.listen(port, () => console.log(`Servidor escuchando en puerto ${port}`));
}

module.exports = { crearReserva, calcularTotalPedido };
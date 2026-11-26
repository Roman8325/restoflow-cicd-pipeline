const { describe, it } = require("node:test");
const assert = require("node:assert/strict");
const { crearReserva, calcularTotalPedido } = require("../src/index");

describe("RestoFlow - Reservas y Pedidos", () => {
  it("debe confirmar una reserva valida", () => {
    const reserva = crearReserva({ mesa: "M-04", hora: "20:00", personas: 4 });
    assert.equal(reserva.estado, "CONFIRMADA");
    assert.equal(reserva.mesa, "M-04");
  });

  it("debe rechazar una reserva con datos incompletos", () => {
    assert.throws(
      () => crearReserva({ mesa: "", hora: "20:00", personas: 2 }),
      /DATOS_RESERVA_INVALIDOS/
    );
  });

  it("debe calcular subtotal y total con impuesto", () => {
    const resultado = calcularTotalPedido([
      { nombre: "Pizza Artesanal", precio: 25, cantidad: 2 },
      { nombre: "Limonada", precio: 5, cantidad: 2 }
    ], 0.10);
    assert.equal(resultado.subtotal, 60);
    assert.equal(resultado.total, 66);
  });
});
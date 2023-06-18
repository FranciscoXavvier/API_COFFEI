// INICIO CONSULTAS TARJETA
const consultaAgregarTarjeta = 
      `INSERT INTO Tarjeta (numeroTarjeta, cuentaPaypal, dinero, puntosAcumulados)
      OUTPUT INSERTED.* 
       VALUES (@numeroTarjeta, @cuentaPaypal, @dinero, @puntosAcumulados)`;

const consultaBuscarTarjetaPorNumero = 
     `SELECT *
      FROM   Tarjeta
      WHERE	 numeroTarjeta = @numeroTarjeta`;

const consultaBuscarTarjetaPorID = 
     `SELECT *
      FROM   Tarjeta
      WHERE	 idTarjeta = @idTarjeta`;

const consultaModificarDinero = 
     `UPDATE Tarjeta
      SET dinero = @dinero
      WHERE Tarjeta.idTarjeta = @idTarjeta`;

const consultaModificarPuntosAcumulados = 
     `UPDATE Tarjeta
      SET puntosAcumulados = @puntosAcumulados
      WHERE Tarjeta.idTarjeta = @idTarjeta`;

const consultaUltimoId =
      `SELECT COALESCE (MAX (idTarjeta), 0) AS idTarjeta FROM Tarjeta`;


// FIN CONSULTAS TARJETA

export const tarjetaQuerys = {
    agregarTarjeta: consultaAgregarTarjeta,
    buscarTarjetaPorNumero: consultaBuscarTarjetaPorNumero,
    buscarTarjetaPorID: consultaBuscarTarjetaPorID,
    modificarDinero: consultaModificarDinero,
    modificarPuntosAcumulados: consultaModificarPuntosAcumulados,
    obtenerUltimoId: consultaUltimoId
};
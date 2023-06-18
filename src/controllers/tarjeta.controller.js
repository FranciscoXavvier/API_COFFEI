import { getConnection, tarjetaQuerys, sql } from "../database";

// Agregar una tarjeta
export const agregarTarjeta = async (req, res, next) => {
    const { numeroTarjeta, cuentaPaypal, dinero, puntosAcumulados } = req.body;
    try {
      const pool = await getConnection();
      const result = 
      await pool
        .request()
        .input("numeroTarjeta", sql.VarChar(50), numeroTarjeta)
        .input("cuentaPaypal", sql.VarChar(50), cuentaPaypal)
        .input("dinero", sql.Decimal(18,2), dinero)
        .input("puntosAcumulados", sql.Int, puntosAcumulados)
        .query(tarjetaQuerys.agregarTarjeta);
      res.status(200).json(result.recordset);
    } catch (error) {
      res.status(500);
      res.send(error.message);
      console.log(error);
    }
  };
  
 // Buscar una tarjeta por numero de tarjeta
 export const buscarTarjetaPorNumero = async (req, res, next) =>{
  //const numeroTarjeta  = String(req.query.numeroTarjeta);
  try{
    const pool = await getConnection();
    const result =
    await pool
    .request()
    .input("numeroTarjeta", parseInt(req.params.numeroTarjeta)) 
    .query(tarjetaQuerys.buscarTarjetaPorNumero);
    if(result.recordset.length < 1){
      return res.status(404).json({ mensage: "La tarjeta no existe" });
    }else{
      res.status(200).json(result.recordset);
    }
  }catch(error){
    res.status(500);
    res.send(error.message);
    console.log(error);
  }
};
  
  // Buscar una tarjeta por id
  export const buscarTarjetaPorID = async (req, res, next) => {
    
    try {
      const pool = await getConnection();
      const result = 
      await pool
        .request()
        .input("idTarjeta", parseInt(req.params.idTarjeta))
        .query(tarjetaQuerys.buscarTarjetaPorID);
      if (result.recordset.length < 1) {
        return res.status(404).json({ mensaje: "No se encontró la tarjeta" });
      } else {
        res.status(200).json(result.recordset);
      }
    } catch (error) {
      res.status(500);
      res.send(error.message);
      console.log(error);
    }
  };
  
  // Modificar el dinero de una tarjeta por id
  export const modificarDinero = async (req, res, next) => {
    const { idTarjeta } = req.params;
    const { dinero } = req.body;
    try {
      const pool = await getConnection();
      const result = 
      await pool
        .request()
        .input("idTarjeta", sql.Int, idTarjeta)
        .input("dinero", sql.Decimal(18,2), dinero)
        .query(tarjetaQuerys.modificarDinero);
      if (result.rowsAffected[0] < 1) {
        return res.status(404).json({ mensaje: "No se modificó el dinero de la tarjeta" });
      } else {
        res.status(200).json({ mensaje: "Dinero modificado con éxito" });
      }
    } catch (error) {
      res.status(500);
      res.send(error.message);
      console.log(error);
    }
  };
  
  // Modificar los puntos acumulados de una tarjeta por id
  export const modificarPuntosAcumulados = async (req, res, next) => {
    const { idTarjeta } = req.params;
    const { puntosAcumulados } = req.body;
    try {
      const pool = await getConnection();
      const result = 
      await pool
        .request()
        .input("idTarjeta", sql.Int, idTarjeta)
        .input("puntosAcumulados", sql.Int, puntosAcumulados)
        .query(tarjetaQuerys.modificarPuntosAcumulados);
      if (result.rowsAffected[0] < 1) {
        return res.status(404).json({ mensaje: "No se modificaron los puntos acumulados de la tarjeta" });
      } else {
        res.status(200).json({ mensaje: "Puntos acumulados modificados con éxito" });
      }
    } catch (error) {
      res.status(500);
      res.send(error.message);
      console.log(error);
    }
  };

  //Método obtenerUltimoId
  export const obtenerUltimoId = async (req, res, next) => {
    try {
      const pool = await getConnection ();
      const result = await pool
        .request ()
        .query (tarjetaQuerys.obtenerUltimoId);
      res.status(200).json(result.recordset);
    } catch (error) {
      res.status (500);
      res.send (error.message);
      console.log (error);
    }
  };
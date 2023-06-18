import { getConnection, publicidadQuerys, sql } from "../database";

// Agregar una publicidad
export const agregarPublicidad = async (req, res, next) => {
    const { fechaInicio, fechaFin, nombre, rutaImagen } = req.body;
    try {
      const pool = await getConnection();
      const result = 
      await pool
        .request()
        .input("fechaInicio", sql.Date, fechaInicio)
        .input("fechaFin", sql.Date, fechaFin)
        .input("nombre", sql.VarChar(50), nombre)
        .input("rutaImagen", sql.VarChar(100), rutaImagen)
        .query(publicidadQuerys.agregarPublicidad);
      res.status(200).json(result.recordset);
    } catch (error) {
      res.status(500);
      res.send(error.message);
      console.log(error);
    }
  };
  
  // Modificar una publicidad por id
  export const modificarPublicidad = async (req, res, next) => {
    const { idPublicidad } = req.params;
    const { fechaInicio, fechaFin, nombre, rutaImagen } = req.body;
    try {
      const pool = await getConnection();
      const result = 
      await pool
        .request()
        .input("idPublicidad", sql.Int, idPublicidad)
        .input("fechaInicio", sql.Date, fechaInicio)
        .input("fechaFin", sql.Date, fechaFin)
        .input("nombre", sql.VarChar(50), nombre)
        .input("rutaImagen", sql.VarChar(100), rutaImagen)
        .query(publicidadQuerys.modificarPublicidad);
      if (result.rowsAffected[0] < 1) {
        return res.status(404).json({ mensaje: "No se modificó" });
      } else {
        res.status(200).json({ mensaje: "Modificado con éxito" });
      }
    } catch (error) {
      res.status(500);
      res.send(error.message);
      console.log(error);
    }
  };
  
  // Eliminar una publicidad por id
  export const eliminarPublicidad = async (req, res, next) => {
    const { idPublicidad } = req.params;
    try {
      const pool = await getConnection();
      const result = 
      await pool
        .request()
        .input("idPublicidad", sql.Int, idPublicidad)
        .query(publicidadQuerys.eliminarPublicidad);
      if (result.rowsAffected[0] < 1) {
        return res.status(404).json({ mensaje: "No se eliminó la publicidad" });
      } else {
        res.status(200).json({ mensaje: "Publicidad eliminada con éxito" });
      }
    } catch (error) {
      res.status(500);
      res.send(error.message);
      console.log(error);
    }
  };

    // Buscar todas las publicidades
    export const buscarPublicidades = async (req, res, next) => {
    try {
      const pool = await getConnection();
      const result = 
      await pool
        .request()
        .query(publicidadQuerys.buscarPublicidades);
      if (result.recordset.length < 1) {
        return res.status(404).json({ mensaje: "No se encontraron publicidades" });
      } else {
        res.status(200).json(result.recordset);
      }
    } catch (error) {
      res.status(500);
      res.send(error.message);
      console.log(error);
    }
  };
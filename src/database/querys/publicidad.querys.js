// INICIO CONSULTAS PUBLICIDAD
const consultaAgregarPublicidad = 
      `INSERT INTO Publicidad (fechaInicio, fechaFin, nombre, rutaImagen)
      OUTPUT INSERTED.* 
       VALUES (@fechaInicio, @fechaFin, @nombre, @rutaImagen);`;

const consultaModificarPublicidad = 
     `UPDATE Publicidad
      SET fechaInicio = @fechaInicio, fechaFin = @fechaFin, nombre = @nombre, rutaImagen = @rutaImagen
      WHERE Publicidad.idPublicidad = @idPublicidad;`;

const consultaEliminarPublicidad = 
     `DELETE FROM Publicidad
      WHERE Publicidad.idPublicidad = @idPublicidad;`;

const buscarPublicidades = 
     `SELECT *
      FROM   Publicidad;`;

// FIN CONSULTAS PUBLICIDAD

export const publicidadQuerys = {
    agregarPublicidad: consultaAgregarPublicidad,
    modificarPublicidad: consultaModificarPublicidad,
    eliminarPublicidad: consultaEliminarPublicidad,
    buscarPublicidades: buscarPublicidades,
};
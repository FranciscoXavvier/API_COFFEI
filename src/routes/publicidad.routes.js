import { Router } from "express";
import { agregarPublicidad, modificarPublicidad, eliminarPublicidad, buscarPublicidades } from "../controllers/publicidad.controller";

const router = Router();

// INICIO RUTAS PUBLICIDAD

router.post("/Publicidad/Agregar", agregarPublicidad);
router.put("/Publicidad/Modificar/:idPublicidad", modificarPublicidad);
router.delete("/Publicidad/Eliminar/:idPublicidad", eliminarPublicidad);
router.get("/Publicidad/BuscarPublicidades", buscarPublicidades)

// FIN RUTAS PUBLICIDAD

export default router;
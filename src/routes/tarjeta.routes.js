import { Router } from "express";
import { agregarTarjeta, buscarTarjetaPorNumero, buscarTarjetaPorID, modificarDinero, modificarPuntosAcumulados, obtenerUltimoId } from "../controllers/tarjeta.controller";

const router = Router();

// INICIO RUTAS TARJETA

router.post("/Tarjeta/Agregar", agregarTarjeta);
router.get("/Tarjeta/BuscarPorNumero/:numeroTarjeta", buscarTarjetaPorNumero);
router.get("/Tarjeta/BuscarPorId/:idTarjeta", buscarTarjetaPorID);
router.put("/Tarjeta/ModificarDinero/:idTarjeta", modificarDinero);
router.put("/Tarjeta/ModificarPuntosAcumulados/:idTarjeta", modificarPuntosAcumulados);
router.get("/Tarjeta/UltimoId", obtenerUltimoId)

// FIN RUTAS TARJETA

export default router;
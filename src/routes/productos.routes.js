import { Router } from "express";
import uploadImage from "../storage/libs/storage"
import { buscarProducto, registrarProducto, modificarProductoById, eliminarProductoById, subirImagenProducto, buscarProductosConPuntos } from "../controllers/productos.controller";

const router = Router();

// INICIO RUTAS CU YASSER

router.get("/Productos/Buscar", buscarProducto);
router.post("/Productos/Registrar", registrarProducto);
router.post("/Productos/SubirImagen", uploadImage.single('ImagenProducto'), subirImagenProducto);
router.put("/Productos/Actualizar/:id", modificarProductoById);
router.delete("/Productos/Eliminar/:id", eliminarProductoById);

// FIN RUTAS CU YASSER

router.get("/Productos/BuscarConPuntos", buscarProductosConPuntos);
export default router;
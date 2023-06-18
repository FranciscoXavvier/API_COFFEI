import express from "express";
import cors from "cors";
import logger from "morgan";
import config from "./config";
import clienteRoutes from "./routes/clientes.routes";
import productoRoutes from "./routes/productos.routes";
import empleadoRoutes from "./routes/empleado.routes";

import publicidadRoutes from "./routes/publicidad.routes";
import tarjetaRoutes from "./routes/tarjeta.routes";

import ordenRoutes from "./routes/orden.routes";
import bodyParser from "body-parser";
import creataError from "http-errors";
import path from "path";

const app = express();

// settings
app.set("port", config.listenport);

// Middlewares
app.use(cors());
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.disable('x-powered-by');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));


//CORS Manual
app.use(function(req, res, next){
    res.header("Acces.Control-Allow-Origin", "*");
    res.header("Acces.Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS, HEAD");
    res.header("Acces.Control-Allow-Headers", "Origin, X-Requested-with, contentType, Content-Type, Accept, Authorization");
    next();
});


// Handling Errors
app.use((err, req, res, next) => {
    // console.log(err);
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";
    res.status(err.statusCode).json({
      message: err.message,
    });
});

// Routes CU YASSER
app.use("/api", clienteRoutes);
app.use("/api", productoRoutes);
app.use("/api", empleadoRoutes);
// Routes CU Xavier
app.use("/api", ordenRoutes);

app.use("/api", publicidadRoutes);
app.use("/api", tarjetaRoutes);

//Servir Imagenes
app.use("/api/Imagenes/", express.static(`${__dirname}/storage/images`));

export default app;


//Final

import express from "express";
import swaggerJsdoc from "swagger-jsdoc";
import * as swaggerUi from "swagger-ui-express";

import { setContentType } from "./middleware/authMiddleware.mjs";

import { MedicoRoutes } from "./routes/MedicoRoutes.mjs";  
import { PacienteRoutes } from "./routes/PacienteRoutes.mjs";  

const app = express();

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Hospital",
      description: "A sample API",
      version: "1.0.0",
    },
  },
  apis: ["./routes/*.mjs"],
};

const spec = swaggerJsdoc(options);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(spec));
app.get("/api-docs.json", (req, res) => {
  res.send(spec);
});

app.use(express.json());
app.use(setContentType);


app.use("/Medico", MedicoRoutes);
app.use("/Paciente", PacienteRoutes);

app.all("*", (req, res) => {
  res.status(404).send(JSON.stringify({ message: "invalid path" }));
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(8080, () => {
  console.log("Servidor escuchando en el puerto 8080");
});
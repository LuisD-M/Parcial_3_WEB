import dotenv from 'dotenv';
dotenv.config();  

import express from 'express';
import cors from 'cors';
import PacienteRoutes from './routes/PacienteRoutes.mjs';
import MedicoRoutes from './routes/MedicoRoutes.mjs';

const app = express();

// Middleware para permitir CORS y parsear JSON
app.use(cors());
app.use(express.json());

// Rutas
app.use('/Paciente', PacienteRoutes);
app.use('/Medico', MedicoRoutes);

export default app;









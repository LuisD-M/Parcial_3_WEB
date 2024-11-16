import express from 'express';
import { PacienteController } from '../controllers/PacienteController.mjs';

const router = express.Router();

const pacienteController = new PacienteController();

// Rutas
router.get('/:id', pacienteController.obtenerPaciente); 
router.post('/', pacienteController.crearPaciente);  
router.post('/login', pacienteController.login);  
router.post('/assign-appointment', pacienteController.assignAppointment);  

export { router as PacienteRoutes };
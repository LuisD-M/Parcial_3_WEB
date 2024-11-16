import express from 'express';
import { PacienteController } from '../controllers/PacienteController.mjs';

const router = express.Router();

const pacienteController = new PacienteController();

// Rutas de paciente
router.get('/:id', pacienteController.obtenerPaciente); 
router.post('/', pacienteController.crearPaciente);  
router.post('/login', pacienteController.login);  
router.get('/appointment', pacienteController.listarCitasPaciente); 
router.post('/appointment', pacienteController.asignarCita); 
router.put('/appointment/:appointmentId', pacienteController.editarCita); 
router.delete('/appointment/:appointmentId', pacienteController.eliminarCita); 

export { router as PacienteRoutes };
import express from 'express';
import { MedicoController } from '../controllers/MedicoController.mjs';

const router = express.Router();

const medicoController = new MedicoController();

// Rutas de médico
router.get('/:doctorId', medicoController.obtenerMedico); 
router.get('/:doctorId/appointment', medicoController.listarCitasDoctor); 
router.get('/', medicoController.obtenerMedicos);  
router.post('/', medicoController.crearMedico);    

export { router as MedicoRoutes };
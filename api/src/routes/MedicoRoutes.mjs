import express from 'express';
import { MedicoController } from '../controllers/MedicoController.mjs';

const router = express.Router();

const medicoController = new MedicoController();

router.get('/', medicoController.obtenerMedicos);  
router.post('/', medicoController.crearMedico);    

export { router as MedicoRoutes };
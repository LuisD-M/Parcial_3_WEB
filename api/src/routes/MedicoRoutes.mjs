import express from 'express';
import { DoctorController } from '../controllers/doctorController.mjs';

const router = express.Router();

router.get('/', DoctorController.obtenerMedicos);
router.post('/', DoctorController.crearMedico);

export { router as doctorRoutes };
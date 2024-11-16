import express from 'express';
import { PatientController } from '../controllers/patientController.mjs';

const router = express.Router();

router.get('/:id', PatientController.obtenerPaciente);
router.post('/', PatientController.crearPaciente);

export { router as patientRoutes };
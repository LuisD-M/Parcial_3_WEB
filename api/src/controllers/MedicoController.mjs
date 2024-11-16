import { MedicoService } from '../services/MedicoService.mjs';

class MedicoController {
  
  async obtenerMedicos(req, res) {
    try {
      const medicos = await MedicoService.getMedicos(); 
      return res.status(200).json(medicos);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async crearMedico(req, res) {
    try {
      const nuevoMedico = await MedicoService.createMedico(req.body); 
      return res.status(201).json(nuevoMedico);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

export { MedicoController };
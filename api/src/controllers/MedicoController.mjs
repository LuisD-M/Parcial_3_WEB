import { Medico } from '../models/Medico.mjs';  
import { CitaMedica } from '../models/Citamedica.mjs';

class MedicoController {


  async obtenerMedico(req, res) {
    const { doctorId } = req.params;
    const medico = await Medico.findByPk(doctorId);
    if (!medico) {
      return res.status(404).json({ error: 'Médico no encontrado' });
    }
    return res.json(medico);
  }

 
  async listarCitasDoctor(req, res) {
    const { doctorId } = req.params;
    const citas = await CitaMedica.findAll({ where: { medicoId: doctorId } });
    return res.json(citas);
  }


  async obtenerMedicos(req, res) {
    const medicos = await Medico.findAll();
    return res.json(medicos);
  }

 
  async crearMedico(req, res) {
    const { nombre, especialidad } = req.body;
    const medico = await Medico.create({ nombre, especialidad });
    return res.status(201).json(medico);
  }
}

export { MedicoController };
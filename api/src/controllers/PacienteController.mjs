import { PacienteService } from '../services/PacienteService.mjs';
import { generateJWT } from '../utils/jwt.mjs';

class PacienteController {
  async login(req, res) {
    const { email, password } = req.body;

    try {
      const paciente = await PacienteService.findByEmail(email);
      if (!paciente || paciente.password !== password) {
        return res.status(401).json({ message: 'Credenciales inválidas' });
      }

     
      const token = generateJWT({ id: paciente.id, role: 'paciente' });
      return res.status(200).json({ token });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async assignAppointment(req, res) {
    const { medicoId, date, hour } = req.body;
    const pacienteId = req.user.id;

    try {
      const appointment = await PacienteService.assignAppointment(pacienteId, medicoId, date, hour);
      return res.status(201).json(appointment);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }


  async obtenerPaciente(req, res) {
    const pacienteId = req.params.id;

    try {
      const paciente = await PacienteService.findById(pacienteId);
      if (!paciente) {
        return res.status(404).json({ message: 'Paciente no encontrado' });
      }
      return res.status(200).json(paciente);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  
  async crearPaciente(req, res) {
    const { nombre, email, password } = req.body;

    try {
      const nuevoPaciente = await PacienteService.createPaciente({ nombre, email, password });
      return res.status(201).json(nuevoPaciente);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

export { PacienteController };
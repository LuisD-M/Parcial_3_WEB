import jwt from 'jsonwebtoken';
import { Paciente } from '../models/Paciente.mjs';  
import { CitaMedica } from '../models/Citamedica.mjs'; 

class PacienteController {

  
  async login(req, res) {
    const { email, password } = req.body;

    const paciente = await Paciente.findOne({ where: { email, password } });

    if (!paciente) {
      return res.status(400).json({ error: 'Credenciales incorrectas' });
    }

    const token = jwt.sign({ pacienteId: paciente.id }, 'clave_secreta', { expiresIn: '30m' });
    return res.json({ token });
  }

  
  async listarCitasPaciente(req, res) {
    const { pacienteId } = req.params;
    const { date } = req.query; 
    
    let citas;
    if (date) {
      citas = await CitaMedica.findAll({ where: { pacienteId, fecha: date } });
    } else {
      citas = await CitaMedica.findAll({ where: { pacienteId } });
    }

    return res.json(citas);
  }

 
  async asignarCita(req, res) {
    const { pacienteId, medicoId, fecha, hora } = req.body;

    const cita = await CitaMedica.create({ pacienteId, medicoId, fecha, hora });
    return res.status(201).json(cita);
  }


  async editarCita(req, res) {
    const { appointmentId } = req.params;
    const { medicoId, fecha, hora } = req.body;

    const cita = await CitaMedica.findByPk(appointmentId);
    if (!cita) {
      return res.status(404).json({ error: 'Cita no encontrada' });
    }

    cita.medicoId = medicoId;
    cita.fecha = fecha;
    cita.hora = hora;

    await cita.save();
    return res.json(cita);
  }

  async eliminarCita(req, res) {
    const { appointmentId } = req.params;

    const cita = await CitaMedica.findByPk(appointmentId);
    if (!cita) {
      return res.status(404).json({ error: 'Cita no encontrada' });
    }

    await cita.destroy();
    return res.status(204).json();
  }

  
  async obtenerPaciente(req, res) {
    const { id } = req.params;
    const paciente = await Paciente.findByPk(id);
    if (!paciente) {
      return res.status(404).json({ error: 'Paciente no encontrado' });
    }
    return res.json(paciente);
  }


  async crearPaciente(req, res) {
    const { nombre, email, password } = req.body;

    const paciente = await Paciente.create({ nombre, email, password });
    return res.status(201).json(paciente);
  }
}

export { PacienteController };
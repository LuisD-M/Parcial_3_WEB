import MedicoService from '../services/MedicoService.mjs';

class MedicoController {
  async getAppointments(req, res) {
    const medicoId = req.params.medicoId;

    try {
      const appointments = await MedicoService.getAppointments(medicoId);
      return res.status(200).json(appointments);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

export {MedicoController};
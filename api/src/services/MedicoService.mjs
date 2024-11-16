import { Db } from '../config/db.mjs';

class MedicoService {
  async findById(medicoId) {
    const query = 'SELECT * FROM medico WHERE id = $1';
    const result = await Db.getInstance().query(query, [medicoId]);
    return result.rows[0];
  }

  async getAppointments(medicoId) {
    const query = 'SELECT * FROM citamedica WHERE medico_id = $1';
    const result = await Db.getInstance().query(query, [medicoId]);
    return result.rows;
  }
}

export {MedicoService};
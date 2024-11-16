import { Db } from '../config/db.mjs';

class PacienteService {
  async findByEmail(email) {
    const query = 'SELECT * FROM paciente WHERE email = $1';
    const result = await Db.getInstance().query(query, [email]);
    return result.rows[0];
  }

  async createPaciente(name, age, email, password) {
    const query = 'INSERT INTO paciente (name, age, email, password) VALUES ($1, $2, $3, $4) RETURNING *';
    const result = await Db.getInstance().query(query, [name, age, email, password]);
    return result.rows[0];
  }

  async getAppointments(pacienteId, date) {
    const query = `
      SELECT * FROM citamedica 
      WHERE paciente_id = $1 ${date ? 'AND date = $2' : ''}
    `;
    const params = date ? [pacienteId, date] : [pacienteId];
    const result = await Db.getInstance().query(query, params);
    return result.rows;
  }

  async assignAppointment(pacienteId, medicoId, date, hour) {
    const conflictsQuery = `
      SELECT * FROM citamedica 
      WHERE (paciente_id = $1 OR medico_id = $2) AND date = $3 AND hour = $4
    `;
    const conflicts = await Db.getInstance().query(conflictsQuery, [pacienteId, medicoId, date, hour]);

    if (conflicts.rows.length > 0) {
      throw new Error('Conflicto: Ya existe una cita en esa fecha y hora');
    }

    const insertQuery = `
      INSERT INTO citamedica (paciente_id, medico_id, date, hour) 
      VALUES ($1, $2, $3, $4) RETURNING *
    `;
    const result = await Db.getInstance().query(insertQuery, [pacienteId, medicoId, date, hour]);
    return result.rows[0];
  }
}

export {PacienteService};
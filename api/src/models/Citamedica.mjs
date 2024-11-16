import { Db } from '../config/db.mjs';

class CitaMedica {
  constructor(id, paciente_id, medico_id, fecha, hora) {
    this.id = id;
    this.paciente_id = paciente_id;
    this.medico_id = medico_id;
    this.fecha = fecha;
    this.hora = hora;
  }

  static async crearCita(paciente_id, medico_id, fecha, hora) {
    const db = Db.getInstance();
    const query = `
      INSERT INTO citas_medicas (paciente_id, medico_id, fecha, hora)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `;
    const values = [paciente_id, medico_id, fecha, hora];
    const result = await db.query(query, values);
    return result.rows[0];
  }

  static async obtenerCitasPorMedico(medico_id) {
    const db = Db.getInstance();
    const query = `
      SELECT * FROM citas_medicas WHERE medico_id = $1;
    `;
    const values = [medico_id];
    const result = await db.query(query, values);
    return result.rows;
  }

  static async obtenerCitasPorPaciente(paciente_id) {
    const db = Db.getInstance();
    const query = `
      SELECT * FROM citas_medicas WHERE paciente_id = $1;
    `;
    const values = [paciente_id];
    const result = await db.query(query, values);
    return result.rows;
  }
}

export { CitaMedica };
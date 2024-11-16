import { Db } from '../config/db.mjs';

class Medico {
  constructor(id, nombre, especialidad_id) {
    this.id = id;
    this.nombre = nombre;
    this.especialidad_id = especialidad_id;
  }

  static async obtenerMedicosPorEspecialidad(especialidad_id) {
    const db = Db.getInstance();
    const query = `
      SELECT * FROM medicos WHERE especialidad_id = $1;
    `;
    const values = [especialidad_id];
    const result = await db.query(query, values);
    return result.rows;
  }

  static async crearMedico(nombre, especialidad_id) {
    const db = Db.getInstance();
    const query = `
      INSERT INTO medicos (nombre, especialidad_id)
      VALUES ($1, $2)
      RETURNING *;
    `;
    const values = [nombre, especialidad_id];
    const result = await db.query(query, values);
    return result.rows[0];
  }
}

export { Medico };
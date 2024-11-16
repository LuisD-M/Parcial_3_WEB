import { Db } from '../config/db.mjs';

class Paciente {
  constructor(id, nombre, fecha_nacimiento) {
    this.id = id;
    this.nombre = nombre;
    this.fecha_nacimiento = fecha_nacimiento;
  }

  static async crearPaciente(nombre, fecha_nacimiento) {
    const db = Db.getInstance();
    const query = `
      INSERT INTO pacientes (nombre, fecha_nacimiento)
      VALUES ($1, $2)
      RETURNING *;
    `;
    const values = [nombre, fecha_nacimiento];
    const result = await db.query(query, values);
    return result.rows[0];
  }

  static async obtenerPacientePorId(id) {
    const db = Db.getInstance();
    const query = `
      SELECT * FROM pacientes WHERE id = $1;
    `;
    const values = [id];
    const result = await db.query(query, values);
    return result.rows[0];
  }
}

export { Paciente };
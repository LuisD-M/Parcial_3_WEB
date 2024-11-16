import { Db } from '../config/db.mjs';

class Especialidad {
  constructor(id, nombre) {
    this.id = id;
    this.nombre = nombre;
  }

  static async obtenerTodas() {
    const db = Db.getInstance();
    const query = 'SELECT * FROM especialidades;';
    const result = await db.query(query);
    return result.rows;
  }

  static async crearEspecialidad(nombre) {
    const db = Db.getInstance();
    const query = `
      INSERT INTO especialidades (nombre)
      VALUES ($1)
      RETURNING *;
    `;
    const values = [nombre];
    const result = await db.query(query, values);
    return result.rows[0];
  }
}

export { Especialidad };
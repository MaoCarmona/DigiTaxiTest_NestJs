import { Injectable } from '@nestjs/common';
import { connection } from '../../configDatabase';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UsuariosService {
  async getAll() {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM usuarios', (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results);
      });
    });
  }
  async create(usuario: any) {
    try {
      const query = 'INSERT INTO usuarios (nombre, dni, id) VALUES (?, ?, ?)';
      const values = [usuario.nombre, usuario.dni , uuidv4()];
        
      const result = await new Promise((resolve, reject) => {
        connection.query(query, values, (err, result) => {
          if (err) {
            return reject(err);
          }
          resolve(result);
        });
      });
      return '200 OK Usuario Creado';
    } catch (err) {
      throw new Error(`Error al crear el usuario: ${err.message}`);
    }
  }
  async update(id: string, usuario:any): Promise<void> {
    try {
        const query = 'UPDATE usuarios SET nombre = ?,dni = ?  WHERE id = ?';
        const values = [usuario.nombre, usuario.dni, id];
        const result:any = await new Promise((resolve, reject) => {
        connection.query(query, values, (err, result) => {
          if (err) {
            return reject(err);
          }
          resolve(result);
        });
      });
      if (result.affectedRows === 0) {
        throw new Error(`El usuario con id ${id} no existe`);
      }
    } catch (err) {
      throw new Error(`Error al actualizar el usuario: ${err.message}`);
    }
  }

  async deleteById(id: string): Promise<void> {
    try {
      const query = 'DELETE FROM usuarios WHERE id = ?';
      const result:any = await new Promise((resolve, reject) => {
        connection.query(query,id, (err, result) => {
          if (err) {
            return reject(err);
          }
          resolve(result);
        });
      });
      if (result.affectedRows === 0) {
        throw new Error(`El usuario con id ${id} no existe`);
      }
    } catch (err) {
      throw new Error(`Error al eliminar el usuario: ${err.message}`);
    }
  }
}



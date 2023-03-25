import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';

@Controller('usuarios')
export class UsuariosController {
  constructor(private usuariosService: UsuariosService) {}

  @Get()
  async getAll() {
    try {
      const usuarios = await this.usuariosService.getAll();
      return usuarios;
    } catch (err) {
      throw new Error(`Error al obtener los usuarios: ${err.message}`);
    }
  }

  @Post()
  async create(@Body() usuario: any): Promise<string> {
    return this.usuariosService.create(usuario);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() conductor) {
    try {
        await this.usuariosService.update(id, conductor);
        return `El usuario con id ${id} ha sido actualizado correctamente`;
      } catch (err) {
        throw new Error(`Error al actualizar el usuario: ${err.message}`);
      }
    
  }

  @Delete(':id')
  async deleteById(@Param('id') id: string) {
    try {
        await this.usuariosService.deleteById(id);
        return `El usuario con id ${id} ha sido eliminado correctamente`;
      } catch (err) {
        throw new Error(`Error al obtener los usuarios: ${err.message}`);
      }
    
  }
}

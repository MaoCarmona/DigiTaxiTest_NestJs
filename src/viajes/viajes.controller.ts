import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ViajesService } from './viajes.service';

@Controller('viajes')
export class ViajesController {
  constructor(private viajesService: ViajesService) {}

  @Get()
  async getAllCompleted(){
    try {
      const viajes = await this.viajesService.getAllCompleted();
      return viajes;
    } catch (error) {
      throw new Error(`Error al obtener los viajes: ${error.message}`);
    }
  }

  @Post()
  async create(@Body() viaje: any): Promise<any> {
    try {
      return this.viajesService.create(viaje);
    } catch (error) {
      throw new Error(`Error al crear el viaje: ${error.message}`);
    }
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() viaje: any): Promise<any> {
    try {
      await this.viajesService.updateToComplete(id, viaje);
      return { message: `Viaje con id ${id} actualizado` };
    } catch (error) {
      throw new Error(`Error al actualizar el viaje con id ${id}: ${error.message}`);
    }
  }

}

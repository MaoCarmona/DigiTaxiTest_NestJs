import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ConductoresService } from './conductores.service';

@Controller('conductores')
export class ConductoresController {
  constructor(private readonly conductoresService: ConductoresService) {}

  @Get()
  async getAll() {
    try {
      const conductores = await this.conductoresService.getAll();
      return conductores;
    } catch (err) {
      throw new Error(`Error al obtener los conductores: ${err.message}`);
    }
  }

  @Get('disponibles')
  async getDisponibles() {
    const conductores = await this.conductoresService.getDisponibles();
    return conductores;
  }

  @Get('cercanos/:latitud/:longitud/:distanciaMaximaEnKm')
  async getCerca(
    @Param('latitud') latitud: number,
    @Param('longitud') longitud: number,
    @Param('distanciaMaximaEnKm') distanciaMaximaEnKm: number,
  ) {
    const conductores = await this.conductoresService.getCerca(
      latitud,
      longitud,
      distanciaMaximaEnKm,
    );
    return conductores;
  }
  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.conductoresService.getById(id);
  }

  @Post()
  async create(@Body() conductor: any) {
    return this.conductoresService.create(conductor);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() conductor) {
    try {
      await this.conductoresService.update(id, conductor);
    return `El conductor con id ${id} ha sido actualizado correctamente`;
    } catch (err) {
      throw new Error(`Error al actualizar el conductor: ${err.message}`);
    }
  }

  @Delete(':id')
  async deleteById(@Param('id') id: string) {
    try {
      await this.conductoresService.deleteById(id);
      return `El conductor con id ${id} ha sido eliminado correctamente`;
    } catch (err) {
      throw new Error(`Error al actualizar el conductor: ${err.message}`);
    }
    
  }
}

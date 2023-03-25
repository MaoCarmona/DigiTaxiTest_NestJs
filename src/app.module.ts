import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConductoresController } from './conductores/conductores.controller';
import { ConductoresService } from './conductores/conductores.service';
import { UsuariosService } from './usuarios/usuarios.service';
import { UsuariosController } from './usuarios/usuarios.controller';
import { ViajesController } from './viajes/viajes.controller';
import { ViajesService } from './viajes/viajes.service';



@Module({
  imports: [],
  controllers: [AppController, ConductoresController, UsuariosController, ViajesController],
  providers: [AppService, ConductoresService, UsuariosService, ViajesService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Reserva } from './reserva.entity';
import { Usuario } from '../usuario/usuario.entity';
import { Quarto } from '../quarto/quarto.entity';


import { ReservaService } from './reserva.service';
import { ReservaController } from './reserva.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Reserva, Usuario, Quarto])],
  providers: [ReservaService],
  controllers: [ReservaController]
})

export class ReservaModule {}

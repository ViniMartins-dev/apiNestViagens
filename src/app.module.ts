import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Usuario } from './usuario/usuario.entity';
import { UsuarioModule } from './usuario/usuario.module';

import { Reserva } from './reserva/reserva.entity';
import { ReservaModule } from './reserva/reserva.module';

import { Quarto } from './quarto/quarto.entity';
import { QuartoModule } from './quarto/quarto.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '', // ou '123', dependendo do seu XAMPP
      database: 'api_nest',
      entities: [Usuario, Reserva, Quarto],
      synchronize: true, // em produção, mude para false
    }),
    UsuarioModule,
    ReservaModule,
    QuartoModule,
  ],
})
export class AppModule {}
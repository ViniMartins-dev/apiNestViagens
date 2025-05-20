import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuartoService } from './quarto.service';
import { QuartoController } from './quarto.controller';
import { Quarto } from './quarto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Quarto])],
  providers: [QuartoService],
  controllers: [QuartoController],
})
export class QuartoModule {}

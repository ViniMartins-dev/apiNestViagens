import { Module } from '@nestjs/common';
import { QuartoService } from './quarto.service';
import { QuartoController } from './quarto.controller';

@Module({
  providers: [QuartoService],
  controllers: [QuartoController]
})
export class QuartoModule {}

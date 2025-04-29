import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Quarto } from './quarto.entity';

@Injectable()
export class QuartoService {

    constructor(
      @InjectRepository(Quarto)
      private quartoRepository: Repository<Quarto>,
    ) { }
  
    findAll(): Promise<Quarto[]> {
      return this.quartoRepository.find();
    }
  
  }

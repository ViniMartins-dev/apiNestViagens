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

  async findAll(): Promise<Quarto[]> {
    return this.quartoRepository.find();
  }

  async create(data: Partial<Quarto>): Promise<Quarto> {
    const quarto = this.quartoRepository.create(data);
    return this.quartoRepository.save(quarto);
  }

  async show(id: number): Promise<Quarto> {
    const quarto = await this.quartoRepository.findOne({ where: { id } });

    if(!quarto) {
      throw new NotFoundException("Quarto não encontrado")
    }

    return quarto;
  }

  async patch(id: number, status: Partial<Quarto>): Promise<Quarto> {
    const quarto = await this.quartoRepository.findOne({ where: {id} });

    if (!quarto) {
      throw new NotFoundException("Quarto não encontrado")
    }

    const updated = Object.assign(quarto, status);
    return await this.quartoRepository.save(updated);
  }

}

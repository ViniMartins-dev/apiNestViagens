import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reserva } from './reserva.entity'
import { Usuario } from '../usuario/usuario.entity';
import { Quarto } from '../quarto/quarto.entity';

@Injectable()
export class ReservaService {
  constructor(
    @InjectRepository(Reserva)
    private reservaRepository: Repository<Reserva>,

    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,

    @InjectRepository(Quarto)
    private quartoRepository: Repository<Quarto>,

  ) { }

  async findAll(): Promise<Reserva[]> {
    return this.reservaRepository.find({
      relations: ['usuario', 'quarto'],
    });
  }

  async create(
    usuarioId: number,
    quartoId: number,
    checkin: string,
    checkout: string,
  ): Promise<Reserva> {
    const usuario = await this.usuarioRepository.findOne({ where: { id: usuarioId } });
    if (!usuario) {
      throw new Error('Usuário não encontrado');
    }

    // Verificar se o quarto existe
    const quarto = await this.quartoRepository.findOne({ where: { id: quartoId } });
    if (!quarto) {
      throw new Error('Quarto não encontrado');
    }

    const reserva = this.reservaRepository.create({
      usuario, // Relacionamento com o usuário
      quarto,  // Relacionamento com o quarto
      checkin,
      checkout,
    });

    return this.reservaRepository.save(reserva);
  }
}
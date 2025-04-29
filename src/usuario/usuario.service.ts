import { Injectable, NotFoundException, UnauthorizedException  } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity';

@Injectable()

export class UsuarioService {

    constructor(
        @InjectRepository(Usuario)
        private usuarioRepository: Repository<Usuario>,
    ) {}

    create(data: Partial<Usuario>): Promise<Usuario> {
        const usuario = this.usuarioRepository.create(data);
        return this.usuarioRepository.save(usuario);
    }

    async login(email: string, senha: string): Promise<boolean> {
        const usuario = await this.usuarioRepository.findOne({ where: { email } });
        
        if (!usuario) {
            throw new NotFoundException('Usuário não encontrado')
        }

        if (usuario.senha !== senha) {
            throw new UnauthorizedException('Credenciais inválidas')
        }

        return true;
    }

    findAll(): Promise<Usuario[]> {
        return this.usuarioRepository.find();
    }
}

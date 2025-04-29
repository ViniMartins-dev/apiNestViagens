import { Controller, Get, Post, Body, UnauthorizedException  } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { Usuario } from './usuario.entity';

@Controller('usuarios')

export class UsuarioController {
    constructor(private readonly usuarioService: UsuarioService) { }

    @Get()
    findAll() {
        return this.usuarioService.findAll();
    }

    @Post('create')
    async create(@Body() body: { nome: string; email: string; senha: string }): Promise<Usuario> {
        return this.usuarioService.create(body);
    }

    @Post('login')
    async login(@Body() body: { email: string; senha: string }): Promise<boolean> {
        const { email, senha } = body;
        try {
            return await this.usuarioService.login(email, senha);
        } catch (error) {
            if (error instanceof UnauthorizedException) {
                throw error;  // Se for um erro de credenciais inválidas, repassa o erro para o cliente
            }
            throw new UnauthorizedException('Erro ao fazer login');
        }
    }
}
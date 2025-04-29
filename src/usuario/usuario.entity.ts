import { Entity, PrimaryGeneratedColumn, Column, OneToMany  } from 'typeorm';
import { Reserva } from '../reserva/reserva.entity';

@Entity('usuarios')// nome da tabela no banco de dados
export class Usuario {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    email: string;

    @Column()
    senha: string;

    @OneToMany(() => Reserva, reserva => reserva.usuario)
    reservas: Reserva[];
}

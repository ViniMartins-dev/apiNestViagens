import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Reserva } from '../reserva/reserva.entity';

@Entity('quartos')// nome da tabela no banco de dados
export class Quarto {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    status: string;

    @Column()
    numero_quarto: number;

    @OneToMany(() => Reserva, reserva => reserva.quarto)
    reservas: Reserva[];
}
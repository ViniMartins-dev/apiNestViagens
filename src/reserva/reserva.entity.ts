import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Usuario } from '../usuario/usuario.entity';
import { Quarto } from '../quarto/quarto.entity';

@Entity('reservas')// nome da tabela no banco de dados
export class Reserva {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'date' })
    checkin: Date;

    @Column({ type: 'date' })
    checkout: Date;

    

    @ManyToOne(() => Usuario, usuario => usuario.reservas)
    usuario: Usuario;

    @ManyToOne(() => Quarto, quarto => quarto.reservas)
    quarto: Quarto;
}
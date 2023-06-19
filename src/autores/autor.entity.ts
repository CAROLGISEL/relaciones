// src/autor/autor.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Canciones } from '../cancion/cancion.entity.js';

@Entity()
export class Autor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Canciones, Canciones => Canciones.autor)
  Canciones: Canciones[];
}

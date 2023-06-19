// src/songs/song.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Autor } from '../autores/autor.entity';

@Entity()
export class Canciones {
  [x: string]: any;
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @ManyToOne(() => Autor, autor => autor.Canciones)
  author: Autor;
}

// src/songs/song.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Canciones } from './cancion.entity';
import { Autor } from '../autores/autor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Canciones, Autor])],
})
export class CancionModule {}

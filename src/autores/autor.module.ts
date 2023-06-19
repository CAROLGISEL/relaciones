// src/autor/autor.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Autor } from './autor.entity';
import { Canciones } from '../cancion/cancion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Autor, Canciones])],
})
export class AutorModule {}

import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { Locales } from './Locales'

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  path: string

  @Column()
  format: string

  @OneToMany(type => Locales, locale => locale)
  locales: string
}

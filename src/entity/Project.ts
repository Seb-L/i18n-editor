import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { Locale } from './Locale'
import { Translation } from './Translation'

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @OneToMany(type => Locale, locale => locale.id)
  locales: Locale[]

  // @OneToMany(type => Translation, translation => translation.id)
  // translations: Translation[]
}

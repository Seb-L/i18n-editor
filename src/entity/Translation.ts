import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { Locale } from './Locale'
import { Project } from './Project'

@Entity()
export class Translation {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  keyName: string

  @Column()
  message: string

  @ManyToOne(type => Locale, locale => locale.id)
  locale: Locale

  @ManyToOne(type => Project, project => project.id)
  project: Project
}

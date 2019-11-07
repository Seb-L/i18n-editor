import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import { Project } from './Project'

@Entity()
export class Locales {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  code: string

  @Column()
  format: string

  @ManyToOne(type => Project, project => project)
  locales: string
}

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, RelationId } from 'typeorm'
import { Project } from './Project'

@Entity()
export class Locale {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @ManyToOne(type => Project, project => project.id)
  project: number

  @RelationId((project: Project) => project.id) // you need to specify target relation
  projectId: number;
}

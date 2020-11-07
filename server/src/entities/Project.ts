import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { User } from './User'

@Entity()
export class Project extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @CreateDateColumn()
  timeCreated: Date

  @Column({
    length: 100,
    nullable: false,
  })
  title: string

  @Column({
    length: 2000,
    nullable: false,
  })
  description: string

  @ManyToOne(() => User, user => user.projectsCreated, {
    eager: true
  })
  @JoinColumn()
  createdBy: User

  @ManyToMany(() => User, user => user.projectsPartOf, {
    eager: true
  })
  usersInProject: User[]
}

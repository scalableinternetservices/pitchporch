import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
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

  @ManyToOne(() => User, user => user.projectsCreated)
  @JoinColumn()
  createdBy: User;
}

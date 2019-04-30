import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Chat {
  @PrimaryGeneratedColumn()
  public id!: number;

  /* 0: not a group */
  /* 1: group */
  @Column()
  public group!: number;

  @Column()
  public title!: string;
}

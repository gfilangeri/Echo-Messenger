import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public date!: Date;

  @Column()
  public message!: string;

  @Column()
  public userId!: number;

  @Column()
  public chatId!: number;
}

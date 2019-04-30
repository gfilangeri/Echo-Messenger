import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Chat } from "./chat.entity";
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

  @ManyToOne(()=>Chat, (chat)=>chat.id)
  @Column()
  public chatId!: number;
}

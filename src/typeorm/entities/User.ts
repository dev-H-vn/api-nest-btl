import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  // key primary auto generate
  // bigint interge big
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ unique: true })
  username: string;

  @Column({ unique: true })
  password: string;

  @Column()
  admin: boolean;

  @Column()
  createAt: Date;

  @Column({ nullable: true })
  updateAt: Date;
}

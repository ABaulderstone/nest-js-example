import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Train {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  color: string;

  @Column()
  company: string;

  @Column()
  inService: boolean;
}

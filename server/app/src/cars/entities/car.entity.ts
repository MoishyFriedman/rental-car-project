import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cars {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  seats_number: number;

  @Column({ type: 'varchar', length: 20 })
  license_plate: string;

  @Column({ type: 'varchar', length: 100 })
  description: string;

  @Column({ type: 'varchar', length: 100 })
  manufacturer_model: string;

  @Column({ type: 'varchar', length: 50 })
  color: string;

  @Column()
  year: number;

  @Column({ type: 'varchar', length: 100 })
  location: string;

  @Column({ type: 'varchar', length: 255 })
  image: string;

  @Column({ type: 'varchar', length: 255 })
  image_alt: string;

  @Column()
  hour_price: number;

  @Column({ default: true })
  availability: boolean;
}

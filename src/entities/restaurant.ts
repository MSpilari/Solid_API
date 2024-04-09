import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Product } from './product'

@Entity()
export class Restaurant {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	picture: string

	@Column()
	name: string

	@Column()
	address: string

	@Column()
	workHour: string

	@OneToMany(() => Product, product => product.restaurant)
	products: Product[]
}

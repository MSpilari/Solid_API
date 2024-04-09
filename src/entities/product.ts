import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Restaurant } from './restaurant'

@Entity()
export class Product {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	picture: string

	@Column()
	name: string

	@Column()
	price: string

	@Column()
	category: string

	@Column()
	promoDescription: string

	@Column()
	promoPrice: string

	@Column()
	daysOfPromo: string

	@ManyToOne(() => Restaurant, restaurant => restaurant.products)
	restaurant: Restaurant
}

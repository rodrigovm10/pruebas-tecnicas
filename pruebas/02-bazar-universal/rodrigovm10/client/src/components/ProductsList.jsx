import { Link } from 'react-router-dom'
import { Rating } from './Rating'

export function ProductsList({ products }) {
	return (
		<section className='mt-10'>
			<p className='text-center'>Resultados de la búsqueda: {products.length}</p>
			<ul className='flex flex-col gap-y-5'>
				{products.map(product => {
					return (
						<li key={product.id}>
							<article className=''>
								<Link
									to={`/items/${product.id}`}
									className='flex w-96 p-3 mx-auto my-0  hover:bg-purple-950 gap-x-5'
								>
									<img
										className='size-20 rounded-full'
										src={product.thumbnail}
										alt={product.title}
									/>
									<section className=''>
										<h3 className='font-semibold text-xl'>{product.title}</h3>
										<p className='opacity-80 text-sm line leading-6'>{product.description}</p>
										<div className='flex justify-between'>
											<span className='font-semibold text-lg'>${product.price}</span>
											<Rating
												extraClass={'size-5'}
												rating={product.rating}
											/>
										</div>
									</section>
								</Link>
							</article>
						</li>
					)
				})}
			</ul>
		</section>
	)
}

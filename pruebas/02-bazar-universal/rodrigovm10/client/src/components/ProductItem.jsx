import { Rating } from './Rating'

export function ProductItem({ product }) {
	console.log(product)
	const imgs = product?.images.slice(0, 3)
	return (
		<article className='my-10 flex w-96 mx-auto flex-col gap-y-5 items-center justify-center'>
			<section className='flex gap-x-5'>
				<img
					className='size-44 rounded-full self-center bg-cover'
					src={product?.thumbnail}
					alt={product?.title}
				/>
				<aside className='flex flex-col gap-y-5 bg-cover'>
					{imgs?.map((item, i) => (
						<img
							className='size-24 rounded-full'
							key={i}
							src={item}
							alt={product.title}
						/>
					))}
				</aside>
			</section>
			<section className='flex flex-col gap-y-3'>
				<h2 className='font-semibold text-2xl  text-center'>
					{product?.title} - {product?.brand}
				</h2>
				<div className='flex gap-4 justify-between'>
					<div className='flex flex-col'>
						<span className='text-center font-semibold text-xl text-purple-600'>
							${product?.price}
						</span>
						<span className='opacity-80 text-purple-100'>{product?.stock} disponibles</span>
					</div>
					<Rating
						extraClass={'size-5'}
						rating={product?.rating}
					/>
				</div>
			</section>
			<section>
				<p className='text-center'>{product?.description}</p>
			</section>
			<section className='w-full flex flex-col gap-y-3'>
				<button
					className='
          py-3 rounded-md
        bg-purple-400 
        text-purple-950 w-full
        hover:bg-purple-300
        active:bg-purple-500 active:text-purple-950    
         '
				>
					Comprar
				</button>
				<button
					className='
          w-full py-3 rounded-md
          border-purple-30 border-2
        text-purple-300
        hover:border-purple-300 hover:bg-purple-950
          active:border-purple300 active:text-purple-300 active:bg-purple-900
        '
				>
					Añadir al carrito
				</button>
			</section>
		</article>
	)
}

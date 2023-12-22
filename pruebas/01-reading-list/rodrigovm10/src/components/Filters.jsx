import { useId } from 'react'
import { useFilter } from '../hooks/useFilter'
import { Filter } from './Icons'

export function Filters() {
	const { filters, changeQuantityOfPages, changeBookGenre, cleanFilters } = useFilter()

	const filterByPageId = useId()
	const filterByGenreId = useId()

	return (
		<aside className='w-96 ml-4 text-white flex flex-col gap-5'>
			<section className='flex flex-col'>
				<label
					htmlFor={filterByPageId}
					className='uppercase font-medium text-lg text-pastel-green-600'
				>
					Filtrar por páginas
				</label>
				<input
					type='range'
					name='pages'
					id={filterByPageId}
					min='0'
					max='1200'
					onChange={changeQuantityOfPages}
				/>
				<span className='opacity-60'> Max pág. {filters.pages}</span>
			</section>
			<section className='flex flex-col'>
				<label
					htmlFor={filterByGenreId}
					className='uppercase font-medium text-lg text-pastel-green-600'
				>
					Seleccione un género
				</label>
				<div className='flex flex-col items-start'>
					<button
						className='inline-block '
						onClick={changeBookGenre}
						value='Ciencia ficción'
					>
						Ciencia ficción
					</button>
					<button
						className='inline-block '
						onClick={changeBookGenre}
						value='Fantasía'
					>
						Fantasía
					</button>
					<button
						className='inline-block '
						onClick={changeBookGenre}
						value='Terror'
					>
						Terror
					</button>
					<button
						className='inline-block '
						onClick={changeBookGenre}
						value='Zombies'
					>
						Zombies
					</button>
				</div>
			</section>
			<section className='flex gap-5'>
				<p className='uppercase font-medium text-lg text-pastel-green-600'>Limpiar filtros</p>
				<button onClick={cleanFilters}>
					<Filter />
				</button>
			</section>
		</aside>
	)
}

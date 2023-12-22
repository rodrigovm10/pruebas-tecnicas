import { useId } from 'react'
import { useFilter } from '../hooks/useFilter'
import { Filter } from './Icons'

export function Filters() {
	const { filters, changeQuantityOfPages, changeBookGenre, cleanFilters } = useFilter()

	const filterByPageId = useId()
	const filterByGenreId = useId()

	return (
		<aside className='w-96 text-white'>
			<section className='flex flex-col'>
				<label
					htmlFor={filterByPageId}
					className='uppercase'
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
				<span> Max pág. {filters.pages}</span>
			</section>
			<section className='flex flex-col'>
				<label htmlFor={filterByGenreId}>Seleccione un genero</label>
				<div className='flex items-start flex-col'>
					<button
						onClick={changeBookGenre}
						value='Ciencia ficción'
					>
						Ciencia ficción
					</button>
					<button
						onClick={changeBookGenre}
						value='Fantasía'
					>
						Fantasía
					</button>
					<button
						onClick={changeBookGenre}
						value='Terror'
					>
						Terror
					</button>
					<button
						onClick={changeBookGenre}
						value='Zombies'
					>
						Zombies
					</button>
				</div>
			</section>
			<section>
				<p>Limpiar filtros</p>
				<button onClick={cleanFilters}>
					<Filter />
				</button>
			</section>
		</aside>
	)
}

import { useId } from 'react'
import { useFilter } from '../hooks/useFilter'
import { Search } from './Icons'

export function SearchBooks() {
	const { filters, changeBooksBySearch } = useFilter()
	const filterBySearch = useId()

	return (
		<section className='flex flex-col gap-2'>
			<label
				htmlFor={filterBySearch}
				className='text-white opacity-50 ml-2'
			>
				Busca un libro por su título
			</label>
			<div className='relative'>
				<input
					id={filterBySearch}
					type='text'
					value={filters.search}
					onChange={changeBooksBySearch}
					className='h-7 w-80 px-5 py-4 rounded-lg bg-pastel-green-700 placeholder:text-white focus:bg-pastel-green-600 text-sm text-white'
					placeholder='Harry Potter, Dune...'
				/>
				<span className='absolute z-10 top-2 right-2'>
					<Search />
				</span>
			</div>
		</section>
	)
}

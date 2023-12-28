import { useNavigate } from 'react-router'
import { SearchIcon } from '../components/Icons'
import { useSearch } from '../hooks/useSearch'

export function Form({ padding }) {
	const { params, changeParams } = useSearch()
	const navigate = useNavigate()

	const handleSubmit = e => {
		e.preventDefault()
		navigate(`/items?${params}`)
	}

	const handleChangeSearch = e => {
		changeParams(e.target.value)
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className='relative'>
				<div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
					<SearchIcon />
				</div>
				<input
					onChange={handleChangeSearch}
					type='search'
					id='search'
					name='search'
					className={`block w-full ${padding} ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-zinc-800 dark:border-zinc-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
					placeholder='Laptops, smartphones...'
					required
				/>
				<button
					type='submit'
					className='text-white absolute end-2.5 bottom-2.5 bg-purple-600 hover:bg-purple-800 focus:ring-2 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800'
				>
					Buscar
				</button>
			</div>
		</form>
	)
}

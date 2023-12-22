import { X } from './Icons'
import { BookOfList } from './BookOfList'
import { useBook } from '../hooks/useBook'

export function List({ handleClickIsActive }) {
	const { list } = useBook()

	return (
		<aside className='bg-pastel-green-950 border-2 border-pastel-green-600 rounded-lg mr-10 absolute top-1 right-0 h-full overflow-y-auto w-96 z-10 px-3'>
			<header className='flex justify-between mt-4'>
				<h3 className='text-white text-lg font-medium'>Lista de libros</h3>
				<button onClick={handleClickIsActive}>
					<X />
				</button>
			</header>
			<main>
				{list.length === 0 ? (
					<p className='text-white opacity-70'>No hay libros en la lista</p>
				) : (
					list.map(book => (
						<BookOfList
							key={book.ISBN}
							book={book}
						/>
					))
				)}
			</main>
		</aside>
	)
}

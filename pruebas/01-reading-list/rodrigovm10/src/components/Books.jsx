import { Book } from './Book'

export function Books({ books }) {
	return (
		<main>
			<p className='text-white opacity-50 text-left mb-5'>Cantidad de libros: {books.length}</p>
			<ul className='grid grid-cols-4 gap-4 gap-y-10'>
				{books.map(item => {
					const { book } = item

					return (
						<Book
							key={item.ISBN}
							book={book}
						/>
					)
				})}
			</ul>
		</main>
	)
}

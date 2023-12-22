import { useBook } from '../hooks/useBook'
import { Book } from './Book'

export function Books() {
	const { books } = useBook()
	return (
		<main>
			<ul className='grid grid-cols-4 gap-4 gap-y-10'>
				{books.map(item => {
					const { book } = item
					return (
						<Book
							key={book.ISBN}
							book={book}
						/>
					)
				})}
			</ul>
		</main>
	)
}

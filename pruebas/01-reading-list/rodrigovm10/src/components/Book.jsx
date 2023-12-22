import { useBook } from '../hooks/useBook'
import { Heart } from './Icons'

export function Book({ book }) {
	const { addBookToList, removeBookOfBooks } = useBook()

	const handleClickAddBookToList = book => {
		addBookToList(book)
		removeBookOfBooks(book)
	}

	return (
		<li className='relative group'>
			<article>
				<section>
					<button
						className='
          absolute bg-pastel-green-400 rounded-full right-3 top-1 opacity-0 
          group-hover:opacity-100
        hover:bg-pastel-green-950 transition-colors'
						onClick={() => handleClickAddBookToList(book)}
					>
						<span className='p-2 opacity-70 hover:opacity-100 block'>
							<Heart />
						</span>
					</button>
					<img
						src={book.cover}
						alt={book.title}
						className='w-[95%] mb-4 aspect-[9/14] object-cover rounded-sm pointer-events-none text'
					/>
				</section>
				<section>
					<h4 className='text-white uppercase font-semibold'>{book.title}</h4>
					<p className='text-gray-400 font-semibold'>{book.author.name}</p>
					<div className='text-gray-400 font-semibold flex justify-between'>
						<p>{book.year}</p>
						<p>{book.pages} pág</p>
					</div>
				</section>
			</article>
		</li>
	)
}

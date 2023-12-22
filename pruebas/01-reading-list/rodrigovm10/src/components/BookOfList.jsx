import { useBook } from '../hooks/useBook'
import { Trash } from './Icons'

export function BookOfList({ book }) {
	const { removeBookOfList } = useBook()

	return (
		<ul className='mt-5 flex flex-col gap-5'>
			<li className='relative group'>
				<article className='relative flex gap-3 py-2 px-2 items-center rounded-md group'>
					<button
						className='
          absolute bg-pastel-green-400 rounded-full left-[-10px] top-[-10px] opacity-0 
          group-hover:opacity-100
        hover:bg-pastel-green-950 transition-colors'
						onClick={() => removeBookOfList(book)}
					>
						<span className='p-2 opacity-70 hover:opacity-100 block'>
							<Trash />
						</span>
					</button>
					<img
						src={book.cover}
						alt={book.title}
						className='w-28 h-40 object-cover'
					/>
					<section className='flex flex-col gap-5 justify-between'>
						<h4 className='text-white uppercase font-semibold'>{book.title}</h4>
						<div className='text-gray-400 font-semibold '>
							<p>{book.synopsis}</p>
							<div className='flex justify-between'>
								<p>{book.year}</p>
								<p>{book.pages} pág.</p>
							</div>
						</div>
					</section>
				</article>
			</li>
		</ul>
	)
}

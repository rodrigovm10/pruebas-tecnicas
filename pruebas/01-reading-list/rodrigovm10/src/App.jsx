import { Books } from './components/Books'
import { Filters } from './components/Filters'
// import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { BooksProvider } from './context/books'
import { useFilter } from './hooks/useFilter'
import { useBook } from './hooks/useBook'

function App() {
	const { filterBooks } = useFilter()
	const { books } = useBook()
	const filteredBooks = filterBooks(books)

	return (
		<>
			<Header />
			<main className='grid grid-cols-2'>
				<section className='col-span-1 '>
					<Filters />
				</section>
				<section className='col-span-1'>
					<Books books={filteredBooks} />
				</section>
			</main>
		</>
	)
}

export default App

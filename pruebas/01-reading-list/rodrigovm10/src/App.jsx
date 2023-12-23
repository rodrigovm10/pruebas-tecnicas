import { Books } from './components/Books'
import { Filters } from './components/Filters'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { useFilter } from './hooks/useFilter'
import { useBook } from './hooks/useBook'

function App() {
	const { filterBooks } = useFilter()
	const { books } = useBook()
	const filteredBooks = filterBooks(books)

	return (
		<>
			<div className='flex flex-col min-h-screen'>
				<Header />
				<main className='flex-grow grid grid-cols-custom mb-10'>
					<section className=''>
						<Filters />
					</section>
					<section className=''>
						<Books books={filteredBooks} />
					</section>
				</main>
				<Footer />
			</div>
		</>
	)
}

export default App

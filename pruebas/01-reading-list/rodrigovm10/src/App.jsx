import { Books } from './components/Books'
import { Filters } from './components/Filters'
// import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { useFilter } from './hooks/useFilter'
import { useBook } from './hooks/useBook'

function App() {
	const { filterBooks } = useFilter()
	const { books } = useBook()
	const filteredBooks = filterBooks(books)

	return (
		<>
			<Header />
			<main className='grid grid-cols-custom'>
				<section className=''>
					<Filters />
				</section>
				<section className=''>
					{/* La clase 'flex-grow' hará que esta sección ocupe el espacio restante */}
					<Books books={filteredBooks} />
				</section>
			</main>
		</>
	)
}

export default App

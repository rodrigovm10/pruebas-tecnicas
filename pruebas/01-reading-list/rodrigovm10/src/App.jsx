import { Books } from './components/Books'
import { Filters } from './components/Filters'
// import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { BooksProvider } from './context/books'

function App() {
	return (
		<BooksProvider>
			<Header />
			<main className='grid grid-cols-2'>
				<section className='col-span-1 '>
					<Filters />
				</section>
				<section className='col-span-1'>
					<Books />
				</section>
			</main>
		</BooksProvider>
	)
}

export default App

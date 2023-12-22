import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FiltersProvider } from './context/filters'
import { BooksProvider } from './context/books.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
	<FiltersProvider>
		<BooksProvider>
			<App />
		</BooksProvider>
	</FiltersProvider>
)

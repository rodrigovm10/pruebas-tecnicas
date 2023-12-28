import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home, Products, Product } from './pages'
import { SearchProvider } from './context/searchContext'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />
	},

	{
		path: '/items',
		element: <Products />
	},
	{
		path: '/items/:id',
		element: <Product />
	}
])

function App() {
	return (
		<SearchProvider>
			<RouterProvider router={router} />
		</SearchProvider>
	)
}

export default App

import { Header } from '../components/Header'
import { NoProducts } from '../components/NoProducts'
import { ProductsList } from '../components/ProductsList'
import { useSearch } from '../hooks/useSearch'

export function Products() {
	const { products } = useSearch()

	return (
		<main>
			<Header />
			{products.length === 0 ? <NoProducts /> : <ProductsList products={products} />}
		</main>
	)
}

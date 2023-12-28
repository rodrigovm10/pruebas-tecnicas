import { Header } from '../components/Header'
import { ProductItem } from '../components/ProductItem'
import { useParams } from 'react-router'
import { useEffect, useState } from 'react'

export function Product() {
	const { id } = useParams()
	const [product, setProduct] = useState()

	useEffect(() => {
		fetch(`http://localhost:3000/api/items/${id}`)
			.then(response => response.json())
			.then(data => {
				console.log(data)
				setProduct(data)
			})
			.catch(error => {
				console.error('Error:', error)
			})
	}, [])

	return (
		<>
			<Header />
			<ProductItem product={product} />
		</>
	)
}

import { useContext, useEffect } from 'react'
import { SearchContext } from '../context/searchContext'
import { useSearchParams } from 'react-router-dom'

export function useSearch() {
	const { products, setProducts } = useContext(SearchContext)
	const [params, setParams] = useSearchParams()
	let search = ''
	for (const entry of params.entries()) {
		search = entry[1].toLowerCase()
	}
	useEffect(() => {
		fetch(`http://localhost:3000/api/items?q=${search}`)
			.then(response => response.json())
			.then(data => {
				setProducts(data)
				console.log(data)
			})
			.catch(error => {
				console.error('Error:', error)
			})
	}, [params])

	const changeParams = value => {
		console.log(value)
		if (value === '') {
			params.delete('search')
			setParams(params)
			return
		}
		setParams({
			search: value
		})
	}

	return { params, setParams, products, changeParams }
}

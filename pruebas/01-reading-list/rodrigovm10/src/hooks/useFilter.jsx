import { useContext } from 'react'
import { FiltersContext } from '../context/filters'

export function useFilter() {
	const { filters, setFilters } = useContext(FiltersContext)

	const filterBooks = books => {
		return books.filter(book => {
			return (
				book.book.pages >= filters.pages &&
				(filters.genre === 'all' || book.book.genre === filters.genre)
			)
		})
	}

	const changeQuantityOfPages = e => {
		return setFilters(prevState => ({ ...prevState, pages: e.target.value }))
	}

	const changeBookGenre = e => {
		return setFilters(prevState => ({ ...prevState, genre: e.target.value }))
	}

	const cleanFilters = () => {
		setFilters({
			pages: 0,
			genre: 'all'
		})
	}

	return { filters, filterBooks, changeQuantityOfPages, changeBookGenre, cleanFilters }
}

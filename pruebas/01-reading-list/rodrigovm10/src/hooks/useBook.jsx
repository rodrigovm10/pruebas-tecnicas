import { useContext } from 'react'
import { BooksContext } from '../context/books'

export function useBook() {
	const { list, setList, books, setBooks } = useContext(BooksContext)

	const addBookToList = book => {
		setList(prevState => [...prevState, book])
	}

	const removeBookOfList = book => {
		return setList(prevState => prevState.filter(item => item.ISBN !== book.ISBN))
	}

	return { list, books, addBookToList, removeBookOfList }
}

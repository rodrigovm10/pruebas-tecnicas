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

	const removeBookOfBooks = book => {
		return setBooks(prevState => prevState.filter(item => item.book.ISBN !== book.ISBN))
	}

	const addBookToBooks = book => {
		return setBooks(prevState => [...prevState, { book }])
	}

	return { list, books, addBookToList, removeBookOfList, removeBookOfBooks, addBookToBooks }
}

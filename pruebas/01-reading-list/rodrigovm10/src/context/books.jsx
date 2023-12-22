import { createContext, useState } from 'react'
import { BOOKS } from '../constants/books'

export const BooksContext = createContext()

export function BooksProvider({ children }) {
	const booksInitialState = JSON.parse(window.localStorage.getItem('books')) || BOOKS
	const listInitialState = JSON.parse(window.localStorage.getItem('list')) || []

	const [list, setList] = useState(listInitialState)
	const [books, setBooks] = useState(booksInitialState)

	return (
		<BooksContext.Provider value={{ list, setList, books, setBooks }}>
			{children}
		</BooksContext.Provider>
	)
}

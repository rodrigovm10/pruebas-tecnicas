import { createContext, useState } from 'react'
import { BOOKS } from '../constants/books'

export const BooksContext = createContext()

export function BooksProvider({ children }) {
	const [list, setList] = useState([])
	const [books, setBooks] = useState(BOOKS)

	return (
		<BooksContext.Provider value={{ list, setList, books, setBooks }}>
			{children}
		</BooksContext.Provider>
	)
}

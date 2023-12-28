import { createContext, useState } from 'react'

export const SearchContext = createContext()

export function SearchProvider({ children }) {
	const [products, setProducts] = useState([])

	return (
		<SearchContext.Provider value={{ products, setProducts }}>{children}</SearchContext.Provider>
	)
}

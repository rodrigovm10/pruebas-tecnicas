export const fetchProducts = async (product: string) => {
  const res = await fetch(`http://localhost:3000/api/items?q=${product}`)
  const data = await res.json()
  return data
}

export const fetchProduct = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/items/${id}`)
  const data = await res.json()
  return data
}

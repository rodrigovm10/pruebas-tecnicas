export const fetchProducts = async (product: string) => {
  const res = await fetch(`https://pruebas-tecnicas-bazar-online.vercel.app/api/items?q=${product}`)
  const data = await res.json()
  return data
}

export const fetchProduct = async (id: string) => {
  const res = await fetch(`https://pruebas-tecnicas-bazar-online.vercel.app/api/items/${id}`)
  const data = await res.json()
  return data
}

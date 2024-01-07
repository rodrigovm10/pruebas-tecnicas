import { NextResponse } from 'next/server'
import products from '@/products.json'

export async function GET(request: Request) {
  try {
    const { search } = new URL(request.url)
    const category = search.slice(3).toLowerCase()

    if (category.length > 0) {
      const newProducts = products.products.filter(
        product =>
          product.category.toLowerCase().includes(category) ||
          product.brand.toLowerCase().includes(category) ||
          product.title.toLowerCase().includes(category)
      )
      return NextResponse.json(newProducts)
    } else {
      return NextResponse.json({ message: "Expected a query param example: '?q=laptops'" })
    }
  } catch (err) {
    console.log(err)
    return NextResponse.json({ message: "The products doesn't exists", error: err })
  }
}

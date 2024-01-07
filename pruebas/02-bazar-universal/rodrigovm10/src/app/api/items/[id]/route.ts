import { NextResponse } from 'next/server'
import products from '@/products.json'

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = params.id
    const product = products.products.find(item => item.id.toString() === id)

    if (product !== null) {
      return NextResponse.json(product)
    }
  } catch (err) {
    console.log(err)
    return NextResponse.json({ message: "This id don't exist", error: err })
  }
}

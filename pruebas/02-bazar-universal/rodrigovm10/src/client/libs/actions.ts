'use server'

import { redirect } from 'next/navigation'

export async function searchProduct(formData: FormData) {
  const product: string | undefined = formData.get('product')?.toString()

  if (product === undefined) return

  if (product.length > 0) {
    redirect(`/items/?search=${product}`)
  }
}

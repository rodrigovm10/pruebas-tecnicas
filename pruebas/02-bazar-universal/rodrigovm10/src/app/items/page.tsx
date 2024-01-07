import { ProductsList } from '@/components/products-list'
import { fetchProducts } from '@/lib/data'
import { Suspense } from 'react'

export default async function ItemsPage({
  searchParams
}: {
  searchParams: {
    search: string
  }
}) {
  const product = searchParams.search
  const products = await fetchProducts(product?.toString())

  return (
    <main>
      <p className='font-medium text-center -mt-3 mb-3'>
        Resultados de {product}: {products.length}
      </p>
      <Suspense
        key={product}
        fallback={<p className='z-10'>Cargando...</p>}
      >
        <ProductsList products={products} />
      </Suspense>
    </main>
  )
}

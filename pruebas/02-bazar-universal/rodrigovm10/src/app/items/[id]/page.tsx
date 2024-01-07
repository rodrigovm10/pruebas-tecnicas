import { ProductCard } from '@/components/product-card'
import { fetchProduct } from '@/lib/data'

export default async function PageItem({ params }: { params: { id: string } }) {
  const product = await fetchProduct(params.id)

  return (
    <main>
      <ProductCard
        product={product}
        isAlone={true}
      />
    </main>
  )
}

import { ProductCard } from '@/client/components/items/product-card'
import { fetchProduct } from '@/client/libs/data'

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

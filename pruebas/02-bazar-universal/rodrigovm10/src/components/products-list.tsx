import { ProductCard } from './product-card'
import { type ProductsProps, type Product } from '@/types/types'
import Link from 'next/link'

export function ProductsList({ products }: ProductsProps) {
  return (
    <>
      {products.length > 0 && (
        <ul className='flex flex-col gap-y-10'>
          {products.map((item: Product) => {
            const { id } = item
            return (
              <li key={id}>
                <Link href={`/items/${id.toString()}`}>
                  <ProductCard
                    product={item}
                    isAlone={false}
                  />
                </Link>
              </li>
            )
          })}
        </ul>
      )}
      {products.length === 0 && (
        <>
          <div className='w-full h-full pb-[55%] relative'>
            <iframe
              src='https://giphy.com/embed/2UCt7zbmsLoCXybx6t'
              className='giphy-embed'
              allowFullScreen
            ></iframe>
          </div>
        </>
      )}
    </>
  )
}

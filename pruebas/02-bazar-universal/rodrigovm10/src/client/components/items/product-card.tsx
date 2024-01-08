'use client'

import { toastAddToCart } from '@/client/libs/alerts'
import { useCartStore } from '@/client/store/cartStore'
import { type ProductCardProps } from '@/types/types'
import { StarIcon } from '@client/components/icons'
import { Badge } from '@client/components/ui/badge'
import { Button } from '@client/components/ui/button'
import { useRouter } from 'next/navigation'

export function ProductCard({ product, isAlone }: ProductCardProps) {
  const router = useRouter()
  const addToCart = useCartStore(state => state.addToCart)

  const { title, thumbnail, rating, price, brand, description } = product

  return (
    <>
      {isAlone && (
        <section className='flex justify-center -mt-3 mb-2'>
          <Button
            className='opacity-85'
            variant='link'
            onClick={() => router.back()}
          >
            Volver a todos los productos
          </Button>
        </section>
      )}

      <section
        className='w-full max-w-sm bg-orange-50 border border-gray-200 rounded-lg shadow
          dark:bg-gray-800 dark:border-gray-700 hover:bg-orange-200'
      >
        <header>
          <img
            className='p-4'
            src={thumbnail}
            alt={title}
          />
        </header>
        <main className='px-5 pb-5'>
          <h5 className='text-xl font-semibold tracking-tight text-gray-900 dark:text-white'>
            {title} - {brand}
          </h5>
          <p>{description}</p>
          <section className='flex items-center mt-2.5 mb-5 gap-x-3'>
            <StarIcon />
            <Badge>{rating}</Badge>
          </section>
          <section className='flex items-center justify-between'>
            <span className='text-3xl font-bold text-gray-900 dark:text-white'>${price}</span>
            {!isAlone && <Button>Comprar</Button>}
          </section>
        </main>
      </section>
      {isAlone && (
        <footer>
          <section className='flex flex-col mt-4 gap-y-2'>
            <Button className='transition-all active:scale-90'>Comprar</Button>
            <Button
              onClick={() => {
                addToCart(product)
                toastAddToCart({ product })
              }}
              variant='secondary'
              className='transition-all active:scale-90'
            >
              Añadir al carrito
            </Button>
          </section>
        </footer>
      )}
    </>
  )
}

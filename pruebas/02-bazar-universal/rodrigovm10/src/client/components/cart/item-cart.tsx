'use client'

import { type ProductCardProps } from '@/types/types'
import { StarIcon, TrashIcon } from '@client/components/icons'
import { Badge } from '@client/components/ui/badge'
import { SelectQuantity } from './select-quantity'

export function ProductCart({ product }: ProductCardProps) {
  const { title, thumbnail, rating, price, brand, quantity } = product

  return (
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
        <section className='flex items-center mt-2.5 mb-5 gap-x-3'>
          <StarIcon />
          <Badge>{rating}</Badge>
        </section>
        <span className='text-3xl font-bold text-gray-900 dark:text-white'>${price}</span>
      </main>
      <footer className='flex items-center justify-between px-5 pb-5'>
        {/* <p className='opacity-80'>
          <span className='font-medium'>Cantidad:</span> {quantity}
        </p> */}
        <SelectQuantity
          quantity={quantity}
          product={product}
        />
        <p>
          <TrashIcon />
        </p>
      </footer>
    </section>
  )
}

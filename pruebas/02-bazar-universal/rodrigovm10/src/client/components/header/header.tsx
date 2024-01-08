'use client'

import Link from 'next/link'
import { CartIcon } from '../icons'
import { SearchHeader } from './search-header'
import { useCartStore } from '@/client/store/cartStore'

export function Header() {
  const cart = useCartStore(state => state.cart)

  return (
    <header className='flex flex-col items-center justify-center gap-y-8 mt-8'>
      <section className='flex justify-between gap-x-7'>
        <h1 className='text-4xl font-bold'>Bazar Online</h1>
        <article className=''>
          <Link
            href='/cart'
            className='self-center relative'
          >
            <div className='size-5 rounded-full bg-red-600 absolute -right-2 -top-2'>
              <span className='text-white text-sm absolute right-0 -translate-x-2'>
                {cart?.length}
              </span>
            </div>
            <CartIcon size={'size-8'} />
          </Link>
        </article>
      </section>
      <SearchHeader />
    </header>
  )
}

'use client'

import { useCartStore } from '@/client/store/cartStore'
import { ProductCart } from './item-cart'

export function ProductsList() {
  const cart = useCartStore(state => state.cart)

  return (
    <>
      {cart.length > 0 && (
        <ul className='flex flex-col gap-y-5'>
          {cart.map(item => {
            return (
              <li key={item.id}>
                <ProductCart
                  product={item}
                  isAlone={true}
                />
              </li>
            )
          })}
        </ul>
      )}
      {cart.length === 0 && (
        <p className='font-bold text-center text-2xl mt-10'>No hay productos en el carrito</p>
      )}
    </>
  )
}

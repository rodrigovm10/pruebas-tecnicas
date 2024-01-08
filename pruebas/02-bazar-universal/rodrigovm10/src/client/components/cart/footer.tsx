'use client'
import { Button } from '@/client/components/ui/button'
import { useCartStore } from '@/client/store/cartStore'

export function Footer() {
  const {
    cart: { length },
    quantity,
    total,
    cleanCart
  } = useCartStore(state => state)

  return (
    <footer className='mt-3 mb-10 flex w-full flex-col gap-y-2'>
      <section>
        <Button
          onClick={cleanCart}
          variant='link'
          className='p-0 opacity-60 hover:opacity-100'
          disabled={length === 0}
        >
          Limpiar carrito
        </Button>
      </section>
      <section className='flex justify-between'>
        <p className='font-semibold'>Cantidad de productos</p>
        <p className='font-semibold'>{quantity}</p>
      </section>
      <section className='flex justify-between'>
        <p className='font-semibold'>Total de productos</p>
        <p className='font-semibold'>{length}</p>
      </section>
      <section className='flex justify-between'>
        <p className='font-semibold'>Total</p>
        <p className='font-semibold'>${total}</p>
      </section>
      <section>
        <Button
          className='w-full transition-all active:scale-90'
          disabled={length === 0}
        >
          Comprar
        </Button>
      </section>
    </footer>
  )
}

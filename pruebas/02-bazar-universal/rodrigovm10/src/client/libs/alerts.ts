import { type Product } from '@/types/types'
import { toast } from 'sonner'
import { redirect } from 'next/navigation'

export function toastAddToCart({ product }: { product: Product }) {
  toast(`El producto ${product.title} se ha añadido al carrito de compras`, {
    description: 'Revise su carrito de compras',
    action: {
      label: 'Ir al carrito',
      onClick: () => {
        console.log('hola')
        redirect('/cart')
      }
    }
  })
}

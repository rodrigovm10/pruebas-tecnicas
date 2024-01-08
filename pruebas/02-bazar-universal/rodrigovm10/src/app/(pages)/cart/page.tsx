import { Footer } from '@/client/components/cart/footer'
import { Header } from '@/client/components/cart/header'
import { ProductsList } from '@/client/components/cart/products-list'

export default async function Cart() {
  return (
    <>
      <main>
        <Header />
        <ProductsList />
      </main>
      <Footer />
    </>
  )
}

import { type Product } from '@/types/types'
import { create } from 'zustand'

interface CartState {
  cart: Product[]
  total: number
  quantity: number
  addToCart: (product: Product) => void
  removeFromCart: (product: Product) => void
  cleanCart: () => void
  changeQuantity: (product: Product, quantity: number) => void
}

const initialState = {
  cart: [],
  total: 0,
  quantity: 0
}

export const useCartStore = create<CartState>((set, get) => {
  return {
    ...initialState,
    addToCart: (product: Product) => {
      const quantity = 1
      const newProduct = { ...product, quantity }
      const productInCartIndex = get().cart.findIndex(item => item.id === newProduct.id)

      if (productInCartIndex >= 0) {
        set(state => ({
          cart: [
            ...state.cart.slice(0, productInCartIndex),
            {
              ...state.cart[productInCartIndex],
              quantity: state.cart[productInCartIndex].quantity + 1
            },
            ...state.cart.slice(productInCartIndex + 1)
          ],
          total: state.total + newProduct.price,
          quantity: state.quantity + newProduct.quantity
        }))
      } else {
        set(state => ({
          cart: [...state.cart, newProduct],
          total: state.total + newProduct.price,
          quantity: state.quantity + newProduct.quantity
        }))
      }
    },
    removeFromCart: (product: Product) => {
      set(state => ({
        cart: state.cart.filter(item => item.id !== product.id)
      }))
    },
    cleanCart: () => {
      set({
        ...initialState
      })
    },
    changeQuantity: (product: Product, quantity: number) => {
      const cart = get().cart
      const productInCartIndex = cart.findIndex(item => item.id === product.id)
      if (productInCartIndex >= 0) {
        set(state => ({
          cart: [
            ...state.cart.slice(0, productInCartIndex),
            {
              ...state.cart[productInCartIndex],
              quantity
            },
            ...state.cart.slice(productInCartIndex + 1)
          ],
          total: (state.total = quantity * product.price)
        }))
        const allQuantities = cart.map(item => item.quantity)
        if (quantity > get().quantity) {
          const quantityTotal = allQuantities.reduce(
            (allQty, currValue) => allQty + currValue,
            get().quantity
          )
          set({
            quantity: quantityTotal
          })
        } else {
          const quantityTotal = allQuantities.reduce(
            (allQty, currValue) => allQty - currValue,
            get().quantity
          )
          set({
            quantity: quantityTotal
          })
        }
      }
    }
  }
})

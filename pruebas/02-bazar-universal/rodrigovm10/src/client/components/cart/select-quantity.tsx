// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue
// } from '@/client/components/ui/select'
// import { useCartStore } from '@/client/store/cartStore'
// import { type Product } from '@/types/types'

// export function SelectQuantity({ quantity, product }: { quantity: number; product: Product }) {
//   const changeQuantity = useCartStore(state => state.changeQuantity)

//   return (
//     <Select
//       onValueChange={value => {
//         changeQuantity(product, Number(value))
//       }}
//       defaultValue={quantity.toString()}
//     >
//       <SelectTrigger className='w-[200px]'>
//         <SelectValue placeholder={`Cantidad: ${quantity}`} />
//       </SelectTrigger>
//       <SelectContent>
//         <SelectGroup>
//           <SelectLabel>Cantidad: </SelectLabel>
//           <SelectItem value='1'>Cantidad: 1</SelectItem>
//           <SelectItem value='2'>Cantidad: 2</SelectItem>
//           <SelectItem value='3'>Cantidad: 3</SelectItem>
//           <SelectItem value='4'>Cantidad: 4</SelectItem>
//           <SelectItem value='5'>Cantidad: 5</SelectItem>
//         </SelectGroup>
//       </SelectContent>
//     </Select>
//   )
// }

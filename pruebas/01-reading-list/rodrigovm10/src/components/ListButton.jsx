import { useBook } from '../hooks/useBook'
import { List } from './Icons'

export function ListButton({ handleClickIsActive }) {
	const { list } = useBook()
	return (
		<button
			className='relative'
			onClick={handleClickIsActive}
		>
			<div>
				<span className='absolute bg-pastel-green-500 text-white text-sm top-1 right-[-20] w-5 h-5 rounded-lg '>
					{`${list.length >= 9 ? '+9' : list.length}`}
				</span>
				<List />
			</div>
		</button>
	)
}

import { StarIcon } from './Icons'

export function Rating({ rating, extraClass }) {
	const arr = Array.from({ length: Math.round(rating) }, (_, i) => i + 1)

	return (
		<div className='flex items-center'>
			{arr.map(index => (
				<StarIcon
					extraClass={extraClass}
					key={index}
				/>
			))}
		</div>
	)
}

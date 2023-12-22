import { useState } from 'react'
import { List } from './List'
import { ListButton } from './ListButton'

export function Header() {
	const [isActive, setIsActive] = useState(false)

	const handleClickIsActive = () => {
		setIsActive(prevState => !prevState)
	}

	return (
		<header className='mb-10 mt-4'>
			<nav className='flex justify-between'>
				<h3 className='text-3xl font-semibold text-white uppercase bg-pastel-green-700 p-2 rounded-lg'>
					E-Books
				</h3>
				{!isActive ? (
					<ListButton handleClickIsActive={handleClickIsActive} />
				) : (
					<List handleClickIsActive={handleClickIsActive} />
				)}
			</nav>
		</header>
	)
}

import { Form } from './Form'

export function Header() {
	return (
		<header className=' flex gap-x-4 mt-10'>
			<a
				href='/'
				className='flex justify-center items-center text-2xl font-bold'
			>
				Bazar Online
			</a>
			<nav>
				<Form padding='py-4 px-16' />
			</nav>
		</header>
	)
}

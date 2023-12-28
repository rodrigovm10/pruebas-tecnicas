import { Form } from '../components/Form'

export function Home() {
	return (
		<main className='flex flex-col gap-y-4'>
			<h1 className='text-center text-4xl font-bold'>Bazar Online</h1>
			<Form padding='py-4 px-32' />
		</main>
	)
}

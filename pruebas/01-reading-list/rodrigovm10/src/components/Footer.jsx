import { ReactIcon } from './Icons'

export function Footer() {
	return (
		<footer className='text-white '>
			<section>
				<p className='text-gray-400'>
					Created by{' '}
					<a
						href='https://github.com/rodrigovm10'
						target='_blank'
						rel='noreferrer'
						className='text-green-400'
					>
						Rodrigo Vega
					</a>{' '}
					with
					<ReactIcon />
				</p>
			</section>
		</footer>
	)
}

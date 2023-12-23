import reactIcon from '../assets/react-icon.svg'
export function Footer() {
	return (
		<footer className='text-white w-[95%] bg-pastel-green-950 rounded-sm fixed bottom-0 mt-10 z-20'>
			<section className='flex justify-center py-0 px-6'>
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
				</p>{' '}
				<img
					src={reactIcon}
					alt='React Icon'
					className='ml-2 w-4'
				/>
			</section>
		</footer>
	)
}

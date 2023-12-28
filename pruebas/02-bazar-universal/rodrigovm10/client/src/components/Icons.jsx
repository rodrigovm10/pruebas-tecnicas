export const SearchIcon = () => (
	<svg
		className='w-4 h-4 text-gray-500 dark:text-gray-400'
		aria-hidden='true'
		xmlns='http://www.w3.org/2000/svg'
		fill='none'
		viewBox='0 0 20 20'
	>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth='2'
			d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
		/>
	</svg>
)

export const StarIcon = extraClass => (
	<svg
		className={`ms-3 text-yellow-300 ${extraClass.extraClass}`}
		aria-hidden='true'
		xmlns='http://www.w3.org/2000/svg'
		fill='currentColor'
		viewBox='0 0 22 20'
	>
		<path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
	</svg>
)

export const BackIcon = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className='icon icon-tabler icon-tabler-arrow-back-up'
		width='24'
		height='24'
		viewBox='0 0 24 24'
		strokeWidth='2'
		stroke='currentColor'
		fill='none'
		strokeLinecap='round'
		strokeLinejoin='round'
	>
		<path
			stroke='none'
			d='M0 0h24v24H0z'
			fill='none'
		/>
		<path d='M9 14l-4 -4l4 -4' />
		<path d='M5 10h11a4 4 0 1 1 0 8h-1' />
	</svg>
)

export const ShareIcon = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className='icon icon-tabler icon-tabler-share'
		width='24'
		height='24'
		viewBox='0 0 24 24'
		strokeWidth='2'
		stroke='currentColor'
		fill='none'
		strokeLinecap='round'
		strokeLinejoin='round'
	>
		<path
			stroke='none'
			d='M0 0h24v24H0z'
			fill='none'
		/>
		<path d='M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0' />
		<path d='M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0' />
		<path d='M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0' />
		<path d='M8.7 10.7l6.6 -3.4' />
		<path d='M8.7 13.3l6.6 3.4' />
	</svg>
)

export const CartIcon = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className='icon icon-tabler icon-tabler-shopping-cart-heart'
		width='24'
		height='24'
		viewBox='0 0 24 24'
		strokeWidth='2'
		stroke='currentColor'
		fill='none'
		strokeLinecap='round'
		strokeLinejoin='round'
	>
		<path
			stroke='none'
			d='M0 0h24v24H0z'
			fill='none'
		/>
		<path d='M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0' />
		<path d='M10 17h-4v-14h-2' />
		<path d='M6 5l14 1l-.717 5.016m-7.783 1.984h-5.5' />
		<path d='M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296z' />
	</svg>
)

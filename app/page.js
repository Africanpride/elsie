import Image from "next/image";

export default function Home() {
	return (
		<main className='flex min-h-dvh flex-col items-center justify-between w-full '>
			<div className='bg-gray-900 w-full h-screen flex flex-col items-center justify-center text-center p-4'>
				<div className='text-white space-y-4'>
					<div className='text-center flex justify-center'>
						{/* <Image
							className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert'
							src='/next.svg'
							alt='Next.js Logo'
							width={180}
							height={37}
							priority
						/> */}
					</div>
					<h1 className='text-4xl font-bold'>Elsie Hair Salon </h1>
					<p className='mt-4 text-lg'>www.ElsieHairSalon.co.za</p>
					<p className='mt-4 text-lg'>
						Elsie Hair Salon Coming soon. <br />We're working on something
						awesome!
					</p>
				</div>
				<div className='mt-8 hidden'>
					<form
						action='#'
						method='post'
						className='flex items-center'>
						<input
							type='email'
							name='email'
							placeholder='Enter your email'
							className='py-2 px-4 bg-gray-800 text-white rounded-l-md focus:outline-none'
							required
						/>
						<button
							type='submit'
							className='bg-blue-500 py-2 px-4 text-white rounded-r-md hover:bg-blue-600 focus:outline-none'>
							Subscribe
						</button>
					</form>
					<p className='mt-2 text-gray-400 text-sm'>
						Be the first to know when we launch!
					</p>
				</div>
			</div>
		</main>
	);
}

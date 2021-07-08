import Link from 'next/link'

export default function BabyGoatsHomeAkaTheFarm(){
  return (
    <body className='w-full h-full'>
      <header className='bg-blue-100 mb-20 h-1/4'>
        <Link href='/'><a><h1 className='text-white text-center w-full transition duration-500 ease-in-out bg-blue-600 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110'>THIS IS CRAZY GO BACK</h1></a></Link>
      </header>
      <main className='bg-gradient-to-r from-green-400 to-blue-500 w-full h-full flex animate-bounce mt-40'>
        {[1,1,1,1,1,1,1,1,1,1].map(goat => <Spinny_circles/>)}
        
      </main>
    </body>
  )
}

function Spinny_circles(){
  return (
    <div className='bg-green-300 flex h-1/2 flex-wrap w-full'>
      <div className=' text-white bg-gradient-to-r from-green-400 via-purple-500 to-blue-500 hover:from-pink-500 hover:to-yellow-500 animate-spin rounded-full w-20 h-20 text-center'>BABY</div>
      <div className='text-white bg-gradient-to-r from-green-400 via-purple-500 to-blue-500 hover:from-pink-500 hover:to-yellow-500 animate-spin rounded-full w-20 h-20 text-center'>GOATS</div>
      <div className='text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 animate-spin rounded-full w-20 h-20 text-center'>BABY</div>
      <div className='text-white bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-spin rounded-full w-20 h-20 text-center'>GOATS</div>
      <div className='text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 animate-spin rounded-full w-20 h-20 text-center'>BABY</div>
      <div className='text-white bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-spin rounded-full w-20 h-20 text-center'>GOATS</div>
      <div className='text-white bg-gradient-to-r from-green-400 via-purple-500 to-blue-500 hover:from-pink-500 hover:to-yellow-500 animate-spin rounded-full w-20 h-20 text-center'>AND SOME PIGS</div>
    </div>
  )
}
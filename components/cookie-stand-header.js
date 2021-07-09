import Link from 'next/link'

export default function CookieStandHeader({username, onLogout}) {
  return (
    <header className="p-6 bg-green-500 flex">
      <h1 className="text-2xl font-semibold flex-1 align-middle">Cookie Stand Admin</h1>
      <div className='align-text-bottom bg-green-600'>{username}</div>
      <button onClick={onLogout} className='flex-4 align-middle bg-green-600'><div className='align-middle'>Sign Out</div></button>
      <Link href="./overview" className='flex-5 align-text-bottom bg-green-600'><a><div className='align-middle'>Overview</div></a></Link>
    </header>
  )
}

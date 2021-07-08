import Link from 'next/link'

export default function Header(){
  return (
    <header className="p-6 bg-green-500">
      <h1 className="text-2xl font-semibold">Cookie Stand Admin</h1>
      <Link href="./new_view"><a><h2>Check Out The Farm</h2></a></Link>
    </header>
  )
}
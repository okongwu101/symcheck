import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <div className="flex flex-col gap-24 items-center justify-center h-screen w-full from-slate-700">
        <div>
          <div className='font-serif font-semibold text-4xl lg:text-6xl'>
            <span>sym</span>
            <span className='text-rose-600'>CH</span>
            <span>eck</span>
          </div>
          <div className='font-mono font-xs lg:font-sm'>
            Med assistant
          </div>

        </div>
        <div>
          <Link
          href="/diagnosis"
          className='px-6 py-2 rounded-lg bg-blue-600 text-white  hover:bg-rose-800 focus:bg-rose-800 border-1/2 font-sans font-medium text-sm lg:text-2xl'
          >
            Get started
          </Link>

        </div>
      </div>
    </main>
  )
}

'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  const handleNavigation = (e: string) => {
    router.push(e)
  }

  return (
    <main className="bg-[#fffcf2] top-0 left-0 h-[100vh] w-[100vw] grid justify-center items-center">
      <div className="">
        <div className="flex justify-center items-center">
          <Image alt='' width={300} height={50} src={'/sw.png'} />
          {/* <img className='' src="/sw.png" alt="" /> */}
        </div>
        <div className="lg:flex grid gap-2">

          <button onClick={() => handleNavigation(`/catalog`)} className="w-56 btn p-3 duration-[0.5s] bg-[#CA6528] active:scale-95 text-white rounded-lg shadow-xl">Catalog</button>
          <button onClick={() => handleNavigation(`/panorama`)} className="w-56 btn p-3 duration-[0.5s] bg-[#CA6528] active:scale-95 text-white rounded-lg shadow-xl">3D Experience</button>
        </div>
      </div>
    </main>
  )
}

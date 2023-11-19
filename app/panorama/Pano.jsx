'use client'
import React, { useRef } from 'react'
import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';
import { pano } from "../../public/Panorama.jpg";
import { useRouter } from 'next/navigation';

const Pano = () => {
    const pp = useRef()
    const router = useRouter()

    const handleNavigation = (e) => {
        router.push(e)
    }
    const handleClick = (data) => {
        console.log(data);
    }


    return (
        <div className="">

            <div className="fixed z-50">
                <button onClick={() => handleNavigation('/')} className='m-2 btn p-3 duration-[0.5s] bg-[#CA6528] active:scale-95 text-white rounded-lg shadow-xl'>
                    <div className="flex">
                        Back To Home
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="ml-2 w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>

                    </div>
                </button>

            </div>
            <ReactPhotoSphereViewer navbar={false} className="z-10" onClick={handleClick} src={`/Panorama2.jpg`} height={'100vh'} width={"100vw"}></ReactPhotoSphereViewer>
        </div>
    )
}

export default Pano
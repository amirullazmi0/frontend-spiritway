'use client'
import { useRouter } from 'next/navigation'
import React, { useRef, useEffect } from 'react';
import Pano from "./Pano";
export default function Home() {
    const router = useRouter()
    const handleNavigation = (e: string) => {
        router.push('/')
    }


    return (
        <main className="bg-[#fffcf2] top-0 left-0 h-[100vh] w-[100vw] grid justify-center items-center">
            <Pano />
        </main>
    )
}

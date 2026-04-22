'use client'

import Image from "next/image";
import { useEffect, useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"

type Slide = {
    id: number;
    image: string; 
    title?: string;
}

interface BannerProps {
    slide: Slide[],
    interval?: number,
}

export default function Banner({ slide, interval }: BannerProps) {
    const [index, setIndex] = useState(0)

    function passar(direcao: 'nxt' | 'ant') {
        if (direcao === 'nxt') {
            setIndex((prev) => prev === slide.length - 1 ? 0 : prev + 1)
        } else if (direcao === 'ant') {
            setIndex((prev) => prev === 0 ? slide.length - 1 : prev - 1)
        }
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => prev === slide.length - 1 ? 0: prev + 1)
        }, interval)
        console.log(timer)

        return () => clearInterval(timer);
    }, [slide.length, interval, index])

  return (
    <section className='overflow-hidden w-full relative'>
        <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${index * 100}%)`}}>
            {slide.map((slides) => (
                <div key={slides.id} className="min-w-full h-[70dvh] relative bg-emerald-200">
                    <Image src={slides.image} alt={slides.title || "Imagem do Banner"} fill />
                    
                    <button className="absolute bottom-4 right-4" onClick={() => passar('nxt')}>
                        <ArrowRight />
                    </button>
                    
                    <button className="absolute bottom-4 right-32" onClick={() => passar('ant')}>
                        <ArrowLeft />
                    </button>
                </div>
            ))}
        </div>
    </section>
  )
}
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

export default function Banner({ slide, interval = 3000 }: BannerProps) {
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
            passar('nxt')
        }, interval)

        return () => clearInterval(timer);
    }, [slide.length, interval, index]) // Reseta o timer ao mudar o index

    return (
        <section className='overflow-hidden w-full relative group'>
            {/* Slides Container */}
            <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${index * 100}%)`}}>
                {slide.map((item) => (
                    <div key={item.id} className="min-w-full h-[70dvh] relative bg-emerald-200">
                        <Image src={item.image} alt={item.title || "Banner"} fill className="object-cover" />
                    </div>
                ))}
            </div>

            {/* Barra Lateral de Progresso */}
            <div className="absolute flex flex-col gap-4 justify-center h-full right-6 top-0 z-20">
                {slide.map((_, i) => (
                    <div 
                        key={i} 
                        className="h-20 w-1 bg-white/30 rounded-full overflow-hidden relative"
                    >
                        {/* A "Barra de Enchimento" interna */}
                        {index === i && (
                            <div 
                                className="absolute top-0 left-0 w-full bg-white origin-top"
                                style={{ 
                                    animation: `progressVertical ${interval}ms linear forwards` 
                                }}
                            />
                        )}
                    </div>
                ))}
            </div>

            {/* Botões de Navegação */}
            <button className="absolute bottom-4 right-4 z-30 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors" onClick={() => passar('nxt')}>
                <ArrowRight />
            </button>
            <button className="absolute bottom-4 right-20 z-30 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors" onClick={() => passar('ant')}>
                <ArrowLeft />
            </button>

            {/* Injeção do Keyframe de animação */}
            <style jsx global>{`
                @keyframes progressVertical {
                    from { height: 0%; }
                    to { height: 100%; }
                }
            `}</style>
        </section>
    )
}
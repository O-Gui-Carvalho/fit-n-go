'use client'

import { Heart } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

export default function ProductCard({ product }: { product: any}) {
    const [isHovered, setIsHovered] = useState(false)

    const mainImage = product.images?.[0];
    const secondImage = product.images?.[1];

    const hoverImageClass = `
        absolute top-0 left-0 w-full h-full rounded-lg
        object-cover transition-opacity duration-500 ease-in-out
        ${isHovered && secondImage ? 'opacity-100' : 'opacity-0'}
    `;

  return (
    <div 
        className='flex flex-col gap-8 relative cursor-pointer' 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-2/3">
        <Image 
            src={mainImage} 
            alt={product.name} 
            width={999} 
            height={1500} 
            className='rounded-lg w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
            priority
        />
      
        {secondImage && (
          <Image
            src={secondImage}
            alt={`${product.name} - imagem 2`}
            width={999}
            height={1500}
            className={hoverImageClass}
          />
        )}
      </div>
      <div className="flex flex-col gap-2">
        <span className='text-sm text-gray-400'>{product.category}</span>
        <span className='font-bold'>{product.name}</span>
        {product.stock > 0 ? (
            <span>R${product.price}</span>
        ) : (
            <span className='text-gray-400'>Fora de estoque</span>
        )}
      </div>
      <div className="absolute">
        <div className="bg-white hover:bg-rose-300 transition-colors duration-300 p-2 rounded-full m-4 cursor-pointer">
          <Heart size={16}/>
        </div>
      </div>
    </div>
  )
}

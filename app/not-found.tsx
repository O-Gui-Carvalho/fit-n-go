'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
        <Image 
            src={'/logo.svg'} 
            alt='Logo Fit&Go' 
            height={29} 
            width={90} 
            priority
        />
        <div className="p-6 rounded-lg w-1/3 shadow-md text-center flex flex-col items-center justify-center gap-4">
            <h1 className="text-3xl font-bold text-gray-800">Página não encontrada</h1>
            <p className="text-gray-500">Não encontramos a página que você solicitou.</p>
            <Button variant='secondary' className='rounded-full bg-gray-50 hover:bg-gray-200 text-gray-800 border border-gray-200 transition-colors duration-300 h-10 px-4 flex gap-2 cursor-pointer' onClick={() => (window.location.href = '/')}>
                Voltar ao Início
            </Button>
        </div>
    </div>
  )
}

import { Button } from '@/components/ui/button'
import { ChevronRight, Heart, Menu, Search, ShoppingBagIcon, User2Icon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className='sticky'>
      <div className="grid grid-cols-3 justify-between items-center w-full px-2 py-4 md:px-8 gap-4 border-b">
        {/* Esquerda: Menu e Pesquisa */}
        <div className="flex gap-4 items-center">
          <Button 
            variant="secondary"
            className="rounded-full bg-gray-50 hover:bg-gray-200 text-gray-800 transition-colors duration-300 h-10 px-4 flex gap-2 cursor-pointer"
          >
            <Menu size={16}/>
            <span>Menu</span>
          </Button>
          
          {/* Placeholder de Pesquisa */}
          <div className="hidden md:flex flex-1 justify-between items-center max-w-80 rounded-full bg-gray-50 hover:bg-gray-200 text-gray-800 transition-colors duration-300 px-4 h-10 text-sm cursor-text">
            <span className="text-gray-500 truncate mr-2">Pesquisar...</span>
            <Search size={16} className="text-gray-500"/>
          </div>
        </div>

        {/* Centro: Logo */}
        <Link href='/' className="justify-self-center">
          <Image 
            src={'/logo.svg'} 
            alt='Logo Fit&Go' 
            height={29} 
            width={90} 
            priority 
            className='hidden lg:block'
          />
          <Image 
            src={'/logo-mobile.svg'} 
            alt='Logo Fit&Go' 
            height={32} 
            width={32} 
            priority 
            className='lg:hidden'
          />
        </Link>

        {/* Direita: Ações e Usuário */}
        <div className="flex gap-2 md:gap-4 items-center justify-self-end">
          {/* Ícones de Ação */}
          <div className="flex gap-1 md:gap-2 justify-center items-center">
            <Button asChild variant='ghost' className="w-10 h-10 bg-gray-50 hover:bg-gray-200 text-gray-500 transition-colors duration-300 rounded-full flex items-center justify-center">
              <Link href='/likes'>
                <Heart size={20}/>
              </Link>
            </Button>
            <Button asChild variant='ghost' className="w-10 h-10 bg-gray-50 hover:bg-gray-200 text-gray-500 transition-colors duration-300 rounded-full flex items-center justify-center">
              <Link href='/cart' className='relative'>
                <ShoppingBagIcon size={20}/>
                {/* Exemplo de badge de carrinho */}
                <span className="absolute -top-1 -right-1 bg-gray-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
              </Link>
            </Button>
            <Button asChild variant='ghost' className="w-10 h-10 bg-gray-50 hover:bg-gray-200 text-gray-500 transition-colors duration-300 rounded-full flex items-center justify-center">
              <Link href='/user'>
                <User2Icon size={20}/>
              </Link>
            </Button>
          </div>

          {/* Informações do Usuário - Apenas em telas grandes */}
          <div className="hidden lg:flex flex-col text-sm group leading-tight">
            <span className="font-semibold text-gray-800">Olá, Visitante</span>
            <Link href={'/sign-up'} className="text-gray-400 group-hover:text-gray-800 transition-colors flex items-center gap-0.5 sublinhado duration-300">
              Cadastre-se
              <ChevronRight size={14}/>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex md:hidden col-span-3 w-full justify-between items-center bg-gray-50 hover:bg-gray-200 text-gray-800 transition-colors duration-300 px-4 h-10 text-sm cursor-text">
        <span className="text-gray-500 truncate mr-2">Pesquisar...</span>
        <Search size={16} className="text-gray-500"/>
      </div>
    </header>
  )
}
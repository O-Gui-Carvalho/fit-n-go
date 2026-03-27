import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { ChevronDown, Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link';

type MenuItems = {
  title: string;
}

const menuItems: MenuItems[] = [
  {title: 'Produtos'},
  {title: 'Promoções'},
  {title: 'Em alta'},
]

type MenuLinks = {
  title: string;
}

const menuLinks: MenuLinks[] = [
  {title: 'Tops'},
  {title: 'Calças'},
  {title: 'Conjuntos'},
  {title: 'Saias'},
]

export default function MenuButton() {
  return (
      <Sheet>
        <SheetTrigger className='rounded-full bg-gray-50 hover:bg-gray-200 text-gray-800 transition-colors duration-300 h-10 px-4 inline-flex items-center gap-2 cursor-pointer active:translate-y-px'>
            <Menu size={16}/>
            <span>Menu</span>
        </SheetTrigger>
        <SheetContent side='left' className='flex flex-col items-start p-2 md:p-8'>
          <SheetTitle>
            <Image src='/logo-mobile.svg' alt='Logo Fit&Go' height={32} width={32}/>
          </SheetTitle>
          <div className="border-t border-gray-200 w-full">
            {menuItems.map((el) => (
              <div key={el.title} className="border-b border-gray-200 py-6 flex items-center justify-between text-gray-400 cursor-pointer hover:text-gray-800 duration-300 transition-colors">
                {el.title}
                <ChevronDown />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 grid-rows-2 w-full gap-y-6 mt-6">
            {menuLinks.map((el) => (
              <Link href={'/'} key={el.title} className="text-gray-400 hover:text-gray-800 transition-colors duration-300 sublinhado w-fit">{el.title}</Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
  )
}

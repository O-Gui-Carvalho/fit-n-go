import { footerData, navLinks } from '@/data/footer'
import { APP_NAME } from '@/lib/constants'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
    const currentYear = new Date().getFullYear()
  return (
    <footer>
      {/* Seção Principal de Links */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-2 md:p-8 py-12 md:py-8">
        {footerData.map((section) => (
          <div key={section.title}>
            <h3 className="font-semibold mb-3 text-gray-600">
              {section.title}
            </h3>
            <ul className="space-y-2">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className='text-sm sublinhado text-gray-400 hover:text-gray-800 transition-colors duration-300 '>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Barra de Copyright e Nav Secundária */}
      <div className="p-2 md:p-8 flex flex-col md:flex-row justify-between text-sm border-t">
        <div className="flex flex-col md:flex-row gap-4 py-12 md:py-0 text-gray-400">
          {/*{navLinks.map((el) => (
            <Link href={el.link} key={el.title} className="text-gray-400 hover:text-gray-800 transition-colors duration-300 w-fit sublinhado">{el.title}</Link>
          ))}*/}
          <span>
            Desenvolvido por {' '}
            <a 
              href="https://studiodestaq.com.br/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-800 transition-colors duration-300 sublinhado"
            >
              StudioDestaq
            </a>
          </span>
        </div>
        <hr className="md:hidden" />
        <div className="py-12 md:py-0 text-gray-400">
          &copy; {currentYear} {APP_NAME}. Todos Os Direitos Reservados.
        </div>
      </div>

      {/* Banner de Texto/Branding */}
      <div className="mx-auto px-2 md:px-8">
        <Image src={'/footer-text.svg'} alt='Use Fit&Go' height={376} width={1856} />
      </div>
    </footer>
  )
}

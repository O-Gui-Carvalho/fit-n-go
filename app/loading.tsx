import { LoaderCircle } from 'lucide-react'

export default function LoadingPage() {
  return (
    <div className='flex flex-col justify-center items-center h-screen w-screen'>
        <LoaderCircle className='animate-spin text-gray-800'/>
        <span className="text-gray-500">Carregando...</span>
    </div>
  )
}

import sampleData from '@/data/sample-data'
import ProductList from '@/components/shared/products/product-list'
import Banner from '@/components/ui/Banner'

const slides = [
  {
    id:1,
    image:"/images/banner1.jpg",
    title:"Banner 1"
  },
  {
    id:2,
    image:"/images/banner2.jpg",
    title:"Banner 2"
  },
  {
    id:3,
    image:"/images/banner3.jpg",
    title:"Banner 3"
  },
]

export default async function Homepage() {
  return (
    <div className='min-h-screen'>
      <Banner slide={slides} interval={2000}/>
      {/* <ProductList data={sampleData.products} title='Em Alta' limit={4}/>*/}
    </div>
  )
}

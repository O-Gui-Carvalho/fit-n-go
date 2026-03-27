import sampleData from '@/data/sample-data'
import ProductList from '@/components/shared/products/product-list'

export default async function Homepage() {
  return (
    <div className='min-h-screen'>
      <ProductList data={sampleData.products} title='Em Alta' limit={4}/>
    </div>
  )
}

import Image from 'next/image'
import { useEffect } from 'react'

const ProductList = ({product}) => {

    // useEffect(()=>{
    //     console.log(product);
    // })
  return (
    <div className=' m-10 grid grid-cols-4 p-5'>
        {
            product && product.map((item,index)=>(
                <div key={index} className='border-2 flex items-center justify-center p-5 m-3 rounded-lg flex-col gap-5 shadow-sm'>
                    <Image src={item.attributes.Image_URL} height={200} width={200} alt='product' />
                    <h2 className=' text-2xl font-bold'>{item.attributes.Name}</h2>
                </div>
            ))
        }
    </div>
  )
}

export default ProductList
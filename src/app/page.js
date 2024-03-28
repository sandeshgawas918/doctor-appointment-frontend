"use client"

import { useEffect, useState } from "react"
import ProductList from "./_components/ProductList"
import GlobalAPI from "./utility/GlobalAPI"

const page = () => {
const [product, setproduct] = useState()

useEffect(()=>{
  getProducts()
},[])

const getProducts=()=>{
  GlobalAPI.getProducts().then((res)=>{
    console.log(res.data.data);
    setproduct(res.data.data);
  })
}
  return (
    <div>
      {product && <ProductList product={product}/>}
    </div>
  )
}

export default page
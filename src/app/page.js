"use client"

import { useEffect, useState } from "react"
import Hero from "./_components/Hero"
import CategoryList from "./_components/CategoryList"
import GlobalAPI from "./utility/GlobalAPI"
import DoctorList from "./_components/DoctorList"

const page = () => {
const [categories, setcategories] = useState([])
const [doctors, setdoctors] = useState([])

useEffect(()=>{
  getCategories()
  getDoctors()
},[])

const getDoctors=()=>{
  GlobalAPI.getDoctors().then((res)=>{
    // console.log(res.data.data);
    setdoctors(res.data.data);
  })
}

const getCategories=()=>{
  GlobalAPI.getCategories().then((res)=>{
    // console.log(res.data.data);
    setcategories(res.data.data);
  })
}
  return (
    <div className=" md:mx-20 mb-7">
      <Hero/>
      {categories && <CategoryList categories={categories} />}
      {doctors && <DoctorList doctors={doctors} />}
    </div>
  )
}

export default page
import GlobalAPI from '@/app/utility/GlobalAPI'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const DoctorSuggestion = () => {
  const [doctors, setdoctors] = useState([])

useEffect(()=>{
  getDoctors()
},[])

const getDoctors=()=>{
  GlobalAPI.getDoctors().then((res)=>{
    setdoctors(res.data.data);
  })
}
  return (
    <div>
       <section className=" m-5 p-5 border">
        {doctors.length > 0
          ? doctors.map((doc, index) => (
              <Link href={`/details/${doc.id}`} key={index} className=" border-2 rounded-lg flex flex-row items-center p-3 gap-3 my-3">
                <Image
                  src={doc.attributes.Image.data.attributes.url}
                  width={100}
                  height={100}
                  alt="doc"
                  className=" w-[90px] object-cover h-[90px] rounded-full"
                />
                <div className=" flex  items-baseline flex-col mt-1">
                  <p className="bg-blue-100 rounded-full text-[9px] px-3 p-1 text-primary">
                    {doc.attributes.categories.data[0].attributes.Name}
                  </p>
                  <p className="text-[11px] p-1 font-bold">
                    {doc.attributes.Name}
                  </p>
                  <p className="text-[11px] p-1 text-primary">
                    {doc.attributes.Year_of_Experience} years
                  </p>
                  <p className="text-[11px] p-1 text-grey-500">
                    {doc.attributes.Address} years
                  </p>
                </div>
              </Link>
            ))
          : [1, 2, 3, 4].map((item,index) => (
              <div className="bg-slate-200 h-[170px] w-[260px] rounded-lg animate-pulse flex items-center justify-center m-3" key={index}></div>
            ))}
      </section>
    </div>
  )
}

export default DoctorSuggestion
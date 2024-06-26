"use client"

import GlobalAPI from "@/app/utility/GlobalAPI"
import DoctorDetails from "./_components/DoctorDetails"
import DoctorSuggestion from "./_components/DoctorSuggestion"
import { useParams } from "next/navigation"

const page = () => {
  return (
    <div className=" grid sm:grid-cols-4 md:mx-20">
      <div className="  sm:col-span-3">
        <DoctorDetails />
      </div>
      <div className=" sm:block md:hidden lg:block sm:col-span-1">
        <DoctorSuggestion />
      </div>
    </div>
  )
}

export default page
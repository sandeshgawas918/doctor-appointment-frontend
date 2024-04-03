"use client";

import DoctorList from "@/app/_components/DoctorList";
import GlobalAPI from "@/app/utility/GlobalAPI";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const CategoryDoctor = () => {
  const params = useParams();
  const [doctors, setdoctors] = useState([])

  useEffect(() => {
    getCategoryDoctor();
  }, []);

  const getCategoryDoctor = () => {
    GlobalAPI.getDoctorbyCategory(params.category).then((res) => {
      setdoctors(res.data.data);
    });
  };

  return (
    <div>
      {
        doctors && <DoctorList doctors={doctors}/>
      }
    </div>
  )
};

export default CategoryDoctor;

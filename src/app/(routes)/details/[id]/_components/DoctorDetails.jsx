"use client"

import GlobalAPI from "@/app/utility/GlobalAPI";
import { Button } from "@/components/ui/button";
import {
  Facebook,
  FacebookIcon,
  GraduationCap,
  Linkedin,
  LocateFixedIcon,
  MapPin,
  X,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { redirect, useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import BookAppointment from "./BookAppointment";

const DoctorDetails = () => {

  const socialMediaList = [
    {
      id: 1,
      icon: <Linkedin />,
      url: "/",
    },
    {
      id: 2,
      icon: <X />,
      url: "/",
    },
    {
      id: 3,
      icon: <FacebookIcon />,
      url: "/",
    },
    {
      id: 4,
      icon: <Youtube />,
      url: "/",
    },
  ];

  const params = useParams();
  const [doctor, setdoctor] = useState([]);

  useEffect(() => {
    getDocDetail();
  }, []);

  const getDocDetail = () => {
    GlobalAPI.getDoctorbyId(params.id).then((res) => {
      setdoctor(res.data.data);
    });
  };

  return (
    <div>
      <section className=" overflow-x-hidden">

        {doctor && (
          <div className=" flex sm:flex-row flex-col  p-5 m-5 border rounded-md shadow-sm">
            <div>
              <Image
                src={doctor?.attributes?.Image?.data?.attributes?.url}
                width={200}
                height={200}
                alt="img"
                className="sm:w-[230px] w-[300px] h-[170px] object-cover sm:h-[250px] rounded"
              />
            </div>
            <div className=" mx-3">
              <h1 className=" text-2xl font-semibold">
                {doctor?.attributes?.Name}
              </h1>
              <h1 className=" flex text-[15px] gap-3 mt-2">
                {" "}
                <GraduationCap /> {doctor?.attributes?.Year_of_Experience} years
                of Experience
              </h1>
              <h1 className=" flex text-[15px] gap-3 mt-2">
                {" "}
                <MapPin /> {doctor?.attributes?.Address}
              </h1>
              <h1 className=" flex items-baseline rounded-full mt-2">
                <p className=" bg-blue-100 rounded-full text-primary text-[13px] px-3 p-1">
                  {doctor?.attributes?.categories.data[0].attributes.Name}
                </p>
              </h1>
              <h1 className=" flex flex-row gap-3 mt-3">
                {socialMediaList.map((item, index) => (
                  <Link href={item.url} key={index}>
                    <p className=" bg-slate-100 p-3 rounded-full hover:bg-purple-600 hover:text-white ">
                      {item.icon}
                    </p>
                  </Link>
                ))}
              </h1>
              <h1 className=" mt-3">
                <BookAppointment doctor={doctor} />
              </h1>
            </div>
          </div>
        )}

        <div className=" m-5 mt-10 border rounded-md shadow-sm p-5">
          <h1 className=" text-2xl font-semibold">About</h1>
          <p className="mt-2 text-gray-600">{doctor?.attributes?.About}</p>
        </div>
      </section>
    </div>
  );
};

export default DoctorDetails;

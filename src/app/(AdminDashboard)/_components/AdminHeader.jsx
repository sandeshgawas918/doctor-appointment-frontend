import {
  BriefcaseMedical,
  BriefcaseMedicalIcon,
  CalendarOff,
  CalendarRange,
  GraduationCapIcon,
  HospitalIcon,
  ShieldAlert,
  ShieldXIcon,
} from "lucide-react";
import React from "react";

const AdminHeader = ({ appointments, docCount, categotyCount }) => {
  return (
    <div>
      {/* <h1 className=" mt-9 text-2xl font-semibold">Overview</h1> */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
        <div className="h-40 border shadow-lg flex flex-col justify-center items-center bg-white">
          <CalendarRange />
          <h3 className=" text-black text-xl mt-3 text-center">
            Upcoming Appointments
          </h3>
          <h5 className=" text-black text-4xl font-semibold">
            {appointments &&
              appointments.filter(
                (item) => new Date(item.attributes.Date) > new Date()
              ).length}
          </h5>
        </div>
        <div className="h-40 border shadow-lg flex flex-col justify-center items-center bg-white">
          <CalendarOff />
          <h3 className=" text-black text-xl mt-3 text-center px-3">
            Expired Appointments
          </h3>
          <h5 className=" text-black text-4xl font-semibold">
            {appointments &&
              appointments.filter(
                (item) => new Date(item.attributes.Date) < new Date()
              ).length}
          </h5>
        </div>
        <div className="h-40 border shadow-lg flex flex-col justify-center items-center bg-white">
          <BriefcaseMedicalIcon />
          <h3 className=" text-black text-xl mt-3">Total Doctors</h3>
          <h5 className=" text-black text-4xl font-semibold">
            {docCount && docCount.length}
          </h5>
        </div>
        <div className="h-40 border shadow-lg flex flex-col justify-center items-center bg-white">
          <HospitalIcon />
          <h3 className=" text-black text-xl mt-3">Total Categories</h3>
          <h5 className=" text-black text-4xl font-semibold">
            {categotyCount && categotyCount.length}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;

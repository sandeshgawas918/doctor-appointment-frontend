"use client"

import React, { useEffect, useState } from 'react'
import AdminHeader from '../_components/AdminHeader'
import AppointmentList from '../_components/AppointmentList'
import GlobalAPI from '@/app/utility/GlobalAPI'
import { toast } from 'sonner'

const AdminDashboard = () => {
  const [appointmentCount, setappointmentCount] = useState()
  const [doctorCount, setdoctorCount] = useState()
  const [categotyCount, setcategotyCount] = useState()

  const deleteAppt = (id) => {
    GlobalAPI.deleteAppointment(id).then((res) => {
      if (res) {
        toast("Appointment has been deleted...");
      }
    });
  };

  useEffect(()=>{
    getCount()
    console.log('adss');
  },[deleteAppt])

  const getCount=()=>{
   GlobalAPI.getAppointments().then((res)=>{
    console.log(res.data.data);
    setappointmentCount(res.data.data)
   })

   GlobalAPI.getDoctors().then((res)=>{
    setdoctorCount(res.data.data)
   })

   GlobalAPI.getCategories().then((res)=>{
    setcategotyCount(res.data.data)
   })
  }

  return (
    <div className='m-7'>
      <AdminHeader appointments={appointmentCount} docCount={doctorCount} categotyCount={categotyCount}/>
      <AppointmentList appointments={appointmentCount} deleteAppt={deleteAppt}/>
    </div>
  )
}

export default AdminDashboard
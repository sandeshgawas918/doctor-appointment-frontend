"use client"

import React, { useEffect, useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import GlobalAPI from '@/app/utility/GlobalAPI'
import BookingList from './_components/BookingList'
import { Button } from '@/components/ui/button'
import { toast } from "sonner"


const BookingPage = () => {
    const [appointment, setappointment] = useState()

    const canceling=(id)=>{
        GlobalAPI.deleteAppointment(id).then((res)=>{
            toast('Appointment has been cancelled successfully...')
        })   
    }

    useEffect(() => {
        fetchAppointment()
    }, [canceling])

    const fetchAppointment = () => {
        GlobalAPI.getAppointments().then((res) => {
            setappointment(res.data.data)
        })
    }

    const filteredAppointments = (val) => {
        let result = appointment && appointment.filter((item)=>{
            return val == 'upcoming' ?  new Date(item.attributes.Date) > new Date() :   new Date(item.attributes.Date) < new Date()
        })
        return result
    }

    return (
        <div className='p-3 mt-3 md:mx-20'>
            <h1 className=' text-3xl font-bold'>My Bookings</h1>
            <Tabs defaultValue="upcoming" className="w-full mt-5">
                <TabsList className=" w-full justify-start">
                    <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                    <TabsTrigger value="expired">Expired</TabsTrigger>
                </TabsList>
                <TabsContent value="upcoming"><BookingList appointment={filteredAppointments('upcoming') } expired={false} canceling={canceling} /></TabsContent>
                <TabsContent value="expired" ><BookingList appointment={filteredAppointments('expired')} expired={true}  /></TabsContent>
            </Tabs>
        </div>
    )
}

export default BookingPage
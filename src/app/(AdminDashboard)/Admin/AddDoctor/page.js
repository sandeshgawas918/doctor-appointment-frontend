'use client'

import GlobalAPI from '@/app/utility/GlobalAPI'
import { Button } from '@/components/ui/button'
import { BadgeX, PlusCircle, PlusIcon, PlusSquare, Trash2 } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import AddNewDoctor from './_components/AddDoctor'


const AddDoctor = () => {
  const [doctors, setdoctors] = useState()

  useEffect(() => {
    getAllDoctors()
  }, [])

  const getAllDoctors = () => {
    GlobalAPI.getDoctors().then((res) => {
      setdoctors(res.data.data)
    })
  }

  return (
    <div className=' m-9'>
      <div className=' flex float-end'>
        <Button className='bg-green-700 hover:bg-green-800'> <PlusCircle className='mr-2' />
          <AddNewDoctor/>
        </Button>
      </div>
      <h1 className=" mt-9 text-2xl font-semibold">Doctor's List</h1>
      <div className='overflow-x-auto shadow-lg bg-white mt-3'>
        <table className="min-w-full divide-y-2 divide-gray-200  text-sm">
          <thead className=" bg-gray-400 text-white">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium">Name</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium">
                Phone No.
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium">
                Address
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium">About</th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 ">
            {
              doctors && doctors.map((doc, index) => (
                <tr key={index} className=" hover:bg-gray-100">
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {doc.attributes.Name}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {doc.attributes.Phone}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {doc?.attributes?.Address}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-wrap">
                    {doc.attributes.About}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 flex flex-row">
                    <button
                      onClick={(e) => {
                        deletedoct(doc?.id);
                      }}
                      href="#"
                      className="rounded bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-800 flex flex-row items-center gap-1 justify-center"
                    >
                      <Trash2 className=' size-4' />
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AddDoctor
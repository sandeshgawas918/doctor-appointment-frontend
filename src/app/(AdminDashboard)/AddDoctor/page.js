'use client'

import GlobalAPI from '@/app/utility/GlobalAPI'
import React, { useEffect, useState } from 'react'

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
    <div>

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
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
              {doc.attributes.About}
            </td>
            <td className="whitespace-nowrap px-4 py-2">
              <button
                onClick={(e) => {
                  deletedoct(doc?.id);
                }}
                href="#"
                className="inline-block rounded bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-red-800"
              >
                Cancel
              </button>
            </td>
          </tr>
        ))
      }

    </div>
  )
}

export default AddDoctor
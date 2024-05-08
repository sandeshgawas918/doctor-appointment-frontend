"use client"

import GlobalAPI from '@/app/utility/GlobalAPI'
import { Button } from '@/components/ui/button'
import { PlusCircle, Trash2 } from 'lucide-react'
import moment from 'moment'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const AddCategory = () => {
    const [category, setcategory] = useState([])

    useEffect(() => {
        getAllCategories()
    }, [])

    const getAllCategories = () => {
        GlobalAPI.getCategories().then((res) => {
            console.log(res.data.data);
            setcategory(res.data.data)
        })
    }

    return (
        <div>
            <div className=' m-9'>
                <div className=' flex float-end'>
                    <Button className='bg-green-700 hover:bg-green-800'> <PlusCircle className='mr-2' />
                        Add Category
                    </Button>
                </div>
                <h1 className=" mt-9 text-2xl font-semibold">Category List</h1>
                <div className='overflow-x-auto shadow-lg bg-white mt-3'>
                    <table className="min-w-full divide-y-2 divide-gray-200  text-sm">
                        <thead className=" bg-gray-400 text-white">
                            <tr>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-left">Id</th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-left">Category Name</th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-left">Created Date</th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium">Icon</th>
                                <th className="px-4 py-2"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 ">
                            {
                                category && category.map((item, index) => (
                                    <tr key={index} className=" hover:bg-gray-100" >
                                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900" >{item?.id}</td>
                                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900" >{item?.attributes?.Name}</td>
                                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900" >{moment(item?.attributes?.createdAt).format("DD-MMM-YYYY")}</td>
                                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900" >
                                           <div className=' flex justify-center '>
                                           <Image src={item?.attributes?.Icon?.data?.attributes?.url} width={50} height={50} alt='img' />
                                           </div>
                                        </td>
                                        <td className="whitespace-nowrap px-4 py-2 flex justify-center ">
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
        </div>
    )
}

export default AddCategory
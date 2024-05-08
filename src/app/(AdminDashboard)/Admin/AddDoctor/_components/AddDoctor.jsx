import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import GlobalAPI from "@/app/utility/GlobalAPI";

const AddNewDoctor = () => {

  const createDoc = () => {
    console.log('hiii');
    const data = {
      data: {
        Name: "sandesh",
        Address: "etst",
        Patients: "34",
        About: "jgajsdghja",
        Phone: "7826137123",
        Year_of_Experience: "76",
        Image: "",
        categories: "Cardiologist",
      },
    };

    GlobalAPI.createDoctor(data).then((res)=>{
      console.log(res);
    })
  };

  return (
    <div>
      <div><button onClick={createDoc}>click</button></div>
      <Dialog>
        <DialogTrigger>Add Doctor</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              <form action="" className=" grid grid-cols-2">
                <div className="m-5">
                  <label
                    for="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Name
                  </label>
                  <input
                    type="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter name here"
                    required
                  />
                  <label
                    for="Patients"
                    className="block mb-2 mt-5 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Patients
                  </label>
                  <input
                    type="Patients"
                    id="Patients"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="No of Patients"
                    required
                  />
                  <label
                    for="Phone"
                    className="block mb-2 mt-5 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Phone
                  </label>
                  <input
                    type="Phone"
                    id="Phone"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter phone number"
                    required
                  />
                  <label
                    className="block mb-2 mt-5 text-sm font-medium text-gray-900 dark:text-white"
                    for="user_avatar"
                  >
                    Upload file
                  </label>
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    aria-describedby="user_avatar_help"
                    id="user_avatar"
                    type="file"
                  />
                </div>
                <div className="m-5">
                  <label
                    for="Address"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Address
                  </label>
                  <input
                    type="Address"
                    id="Address"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter address here"
                    required
                  />
                  <label
                    for="About"
                    className="block mb-2 mt-5 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    About
                  </label>
                  <input
                    type="About"
                    id="About"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="About the doctor"
                    required
                  />
                  <label
                    for="experience"
                    className="block mb-2 mt-5 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Years of Experience
                  </label>
                  <input
                    type="experience"
                    id="experience"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Years of experience"
                    required
                  />
                  <label
                    for="email"
                    className="block mb-2 mt-5 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Category
                  </label>
                  <select
                    name=""
                    id=""
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="Cardiologist">Cardiologist</option>
                    <option value="Dentist">Dentist</option>
                    <option value="Ophthalmologist">Ophthalmologist</option>
                    <option value="Orthopedic">Orthopedic</option>
                  </select>
                </div>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddNewDoctor;

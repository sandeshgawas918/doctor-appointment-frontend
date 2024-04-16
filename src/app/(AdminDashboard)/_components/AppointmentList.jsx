import GlobalAPI from "@/app/utility/GlobalAPI";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

const AppointmentList = ({ appointments, deleteAppt }) => {
  // const [apptCount, setapptCount] = useState();


  return (
    <div>
      <div className="overflow-x-auto mt-9 shadow-lg bg-white">
        <table className="min-w-full divide-y-2 divide-gray-200  text-sm">
          <thead className=" bg-gray-400 text-white">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium">
                Name
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium">
                Email Id
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium">
                Appt Schedule
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium">
                Notes
              </th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 text-center">
            {appointments &&
              appointments.map((app, index) => (
                <tr key={index} className=" hover:bg-gray-100">
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {app.attributes.UserName}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {app.attributes.Email}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {moment(app?.attributes?.Date).format("DD-MMM-YYYY")} ||{" "}
                    {app?.attributes?.Time}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {app.attributes.Notes}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">
                    <button
                      onClick={(e) => {
                        deleteAppt(app?.id);
                      }}
                      href="#"
                      className="inline-block rounded bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-red-800"
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppointmentList;

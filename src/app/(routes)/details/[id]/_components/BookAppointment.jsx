import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import GlobalAPI from "@/app/utility/GlobalAPI";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import moment from "moment";

const BookAppointment = ({ doctor }) => {
  const [date, setDate] = useState(new Date());
  const [timeSlot, settimeSlot] = useState();
  const [time, settime] = useState();
  const [notes, setnotes] = useState("");

  const { user } = useKindeBrowserClient();

  useEffect(() => {
    getTime();
  }, []);

  const getTime = () => {
    const timeList = [];

    // First loop for 10 AM to 12 PM
    for (let i = 10; i <= 12; i++) {
      timeList.push({
        time: i + ":00 AM",
      });
      timeList.push({
        time: i + ":30 AM",
      });
    }

    // Second loop for 1 PM to 6:30 PM
    for (let i = 1; i <= 6; i++) {
      timeList.push({
        time: i + ":00 PM",
      });
      if (i < 6) {
        timeList.push({
          time: i + ":30 PM",
        });
      }
    }

    settimeSlot(timeList); // Assuming settimeSlot is a defined function
  };

  const saveBooking = async () => {
    const data = {
      data: {
        UserName: user.given_name + " " + user.family_name,
        Email: user.email,
        Date: date,
        Time: time,
        doctor: doctor.id,
        Notes: notes,
      },
    };

    let resAppt=await GlobalAPI.getAppointments()
    let appt=resAppt?.data?.data

    let slotBooking=false

    for(let item of appt){
      if (moment(item?.attributes?.Date).format("DD-MMM-YYYY") === moment(data.data.Date).format("DD-MMM-YYYY") &&
      data.data.Time === item?.attributes?.Time)
      {
        slotBooking=true
        break
      }
    }

    if(slotBooking){
      setnotes('')
      toast('Already booked! Please select different slot.')
    }
    else{
      let res=await GlobalAPI.bookAppointment(data)
      setnotes('')
      toast('Appointment has been created successfully')
      console.log(data);
    }
  };

  // GlobalAPI.bookAppointment(data).then((res) => {
  //   console.log(res);
  // if (res){
  //   GlobalAPI.sendEmail(data).then((res) => {
  //     toast("Appointment successfully created. Verification email has been sent on your mail");
  //     console.log(res);
  //   });
  // }
  // });

  const isPastDay = (day) => {
    return day < new Date();
  };

  return (
    <div>
      <Dialog className="">
        <DialogTrigger className=" bg-primary text-white p-2 px-3 rounded-lg">
          Book Appointment
        </DialogTrigger>
        <DialogContent className="">
          <DialogHeader className="">
            <DialogTitle className="">Book Appointment</DialogTitle>
            <DialogDescription>
              <div className=" grid sm:grid-cols-2">
                <div className="rounded-md border m-3">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={isPastDay}
                    className=" "
                  />
                </div>
                <div className="grid grid-cols-3 gap-2 p-5 border rounded-md m-3">
                  {timeSlot &&
                    timeSlot.map((item, index) => (
                      <p
                        onClick={() => {
                          settime(item.time);
                        }}
                        key={index}
                        className={` ${
                          time == item.time && "bg-primary text-white"
                        } border rounded-lg p-1 flex items-center justify-center hover:text-white hover:bg-primary transition-all ease-in-out cursor-pointer`}
                      >
                        {item.time}
                      </p>
                    ))}
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
          <div className=" mx-3">
            <textarea
              onChange={(e) => {
                setnotes(e.target.value);
              }}
              name=""
              id=""
              value={notes}
              placeholder="Add notes here..."
              cols="30"
              rows="2"
              className="w-full outline-grey border-2 p-3  rounded-lg"
            ></textarea>
          </div>
          <DialogFooter className="sm:justify-end">
            <DialogClose asChild>
              <Button
                type="button"
                className=" bg-red-600 hover:bg-red-700 hover:outline-black border-2-black"
              >
                Close
              </Button>
            </DialogClose>
            <div>
              <Button
                type="button"
                onClick={() => {
                  saveBooking();
                }}
              >
                Submit
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BookAppointment;

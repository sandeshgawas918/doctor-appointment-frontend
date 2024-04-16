"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";

const AdminLoginPage = () => {
  const [user, setuser] = useState("");
  const [password, setpassword] = useState("");

  const router = useRouter();

  const validateAdmin = () => {
    if (user === "hospital@admin" && password === "Admin123@") {
      console.log(user, password);
      toast('Logged in as Hospital Admin')
      router.push("/Admin");
    } else {
      toast('Worng credentials, please contact your service provider')
    }
  };

  return (
    <div>
      <div className=" flex flex-col items-center justify-center mt-9">
        <section className="border shadow-lg rounded-xl">
          <div className=" bg-primary rounded-t-xl">
            <h2 className="text-2xl font-bold  text-center p-3 text-white">
              Login Here
            </h2>
          </div>
          <div className=" p-7 flex flex-col gap-4">
            <div>
              <input
                value={user}
                onChange={(e) => {
                  setuser(e.target.value);
                }}
                type="text"
                placeholder="Enter Username here"
                className="border-2 outline-none rounded-full mx-3 p-2 px-4 text-[14px]"
              />
            </div>
            <div>
              <input
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
                type="password"
                placeholder="Enter Password here"
                className="border-2 outline-none rounded-full mx-3 p-2 px-4 text-[14px]"
              />
            </div>
            <div className=" text-center mt-5">
              <Button
                onClick={() => {
                  validateAdmin();
                }}
                className="px-9 rounded-lg"
              >
                Login
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdminLoginPage;

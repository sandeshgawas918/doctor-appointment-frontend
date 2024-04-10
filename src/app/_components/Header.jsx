import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  const NavLink = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "Explore",
      link: "/",
    },
    {
      id: 3,
      name: "Contact Us",
      link: "/",
    },
    {
      id: 4,
      name: "Categories",
      link: "/",
    },
    {
      id: 5,
      name: "MY BOOKINGS",
      link: "bookings",
    },
  ];
  return (
    <div>
      <nav className=" flex w-full flex-row justify-between items-center gap-20 p-5 sm:px-20 shadow-sm transition-all ease-in-out cursor-pointer">
        <div className=" flex items-center gap-9">
         <Link href='/'> <Image src="/logo.svg" width={190} height={50} alt="logo" /></Link>
          <div className=" flex flex-row gap-7 ">
            {NavLink.map((item, index) => (
              <Link href={`/${item.link}`}>
                <li className="hover:scale-110 transition-all ease-in-out hover:text-purple-600 hidden lg:block">
                  {item.name}
                </li>
              </Link>
            ))}
          </div>
        </div>
        <div className=" flex float-end">
          <Button>Get Started</Button>
        </div>
      </nav>
    </div>
  );
};

export default Header;

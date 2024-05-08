"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import {LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

const Header = () => {

  const path=usePathname()

  const NavLink = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "Explore",
      link: "#explore",
    },
    {
      id: 3,
      name: "Contact Us",
      link: "#footer",
    },
    {
      id: 4,
      name: "Categories",
      link: "category/Dentist",
    },
  ];

  const { user } = useKindeBrowserClient();
  return (
    <div>
      {/* <pre>{JSON.stringify(user)}</pre> */}
      <nav className={` ${path.includes('/Admin') && path !='/AdminLogin' ? "hidden" : '' } " flex w-full flex-row justify-between items-center sm:gap-20 p-5 sm:px-20 shadow-sm transition-all ease-in-out cursor-pointer md:mx-20"`}>
        <div className=" flex items-center gap-9">
          <Link href="/" className=" w-[150px]">
            {" "}
            <Image src="/logo.svg" width={200} height={90} alt="logo" />
          </Link>
          <div className=" flex flex-row gap-7 ">
            {NavLink.map((item, index) => (
              <Link href={`/${item.link}`} key={index}>
                <li className={`${path.includes('/Admin') && path !='/AdminLogin' ? 'hidden' : "hover:scale-110 transition-all ease-in-out hover:text-purple-600 hidden lg:block" }`}>
                  {item.name}
                </li>
              </Link>
            ))}
          </div>
        </div>
        <div className={`${path.includes('/Admin') ?  'hidden' : 'flex float-end gap-2'}`}> 
          <Link href='/AdminLogin' className={`${user ? 'hidden' : 'bg-green-600 p-1 px-3 rounded-md text-white hidden sm:block'} `}>Admin</Link>
          {user ? (
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger>
                <Image
                className=" rounded-full"
                src={user?.picture || '/user.webp'}
                height={50}
                width={50}
                alt="pic"
              /></DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem><Link href='/bookings' >My Bookings</Link></DropdownMenuItem>
                  <DropdownMenuItem><LogoutLink>Log out</LogoutLink></DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            <LoginLink>
              <Button className=' text-[9px] sm:text-sm'>Get Started</Button>
            </LoginLink>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;

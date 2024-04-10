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
  ];

  const { user } = useKindeBrowserClient();
  return (
    <div>
      <nav className=" flex w-full flex-row justify-between items-center sm:gap-20 p-5 sm:px-20 shadow-sm transition-all ease-in-out cursor-pointer">
        <div className=" flex items-center gap-9">
          <Link href="/" className=" w-[100px]">
            {" "}
            <Image src="/logo.svg" width={190} height={50} alt="logo" />
          </Link>
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
          {user ? (
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger><Image
                className=" rounded-full"
                src={user.picture}
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

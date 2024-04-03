"use client";

import GlobalAPI from "@/app/utility/GlobalAPI";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const CategorySidebar = () => {
  const [categories, setcategories] = useState([]);
  const params = useParams();

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = () => {
    GlobalAPI.getCategories().then((res) => {
      setcategories(res.data.data);
    });
  };

  return (
    <div>
      <Command>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            {categories.map((category, index) => (
              <Link
                href={`/category/${category.attributes.Name}`}
                className=""
                key={index}
              >
                <CommandItem
                  className={` p-3 ${
                    category.attributes.Name == params.category && " bg-blue-100"
                  } `}
                >
                  <Image
                    src={category.attributes.Icon.data.attributes.url}
                    width={30}
                    height={30}
                    alt="cat"
                    className=" "
                  ></Image>
                  <p className=" text-primary px-3">
                    {category.attributes.Name}
                  </p>
                </CommandItem>
              </Link>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
};

export default CategorySidebar;

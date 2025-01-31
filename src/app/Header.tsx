'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";

import { IoIosList } from "react-icons/io";
import { SheetSide } from "@/app/components/sheet";
import { Heart } from "lucide-react";
import { FaCartShopping } from "react-icons/fa6";
import { Search } from "lucide-react";

function Header() {

  
  
  
  return (
    <div className="md:w-full">
     
      <div className="md:w-full w-auto h-auto bg-white flex  justify-center  md:gap-60  gap-12  items-center py-4">
        <div className="md:hidden">
      <SheetSide />
      </div>
        <div className="flex gap-2   pl-2 ">
          <Image
            src={"/Meubel House_Logos-05.png"}
            alt={"#"}
            width={50}
            height={32}
          ></Image>
          <h1 className="text-2xl pt-4">Furniro</h1>
        </div>
       
        <div className="flex">
         
          <ul className="sm:flex gap-3 pt-4 hidden">
            <li>
              <Link href="http://localhost:3000">Home</Link>
            </li>
            <li>
              <Link href="Shop">Shop</Link>
            </li>
            <li>
              <Link href="Blog">Blog</Link>
            </li>
            <li>
              <Link href="Contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-6 pt-4 ">
          
        <Search />
          <Heart />
          <FaCartShopping />
        
        </div>
      </div>
      <div>

      </div>
    </div>
  );
}

export default Header;


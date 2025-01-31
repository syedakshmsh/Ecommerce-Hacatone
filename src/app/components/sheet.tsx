"use client"

import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"
import { Label } from "@/app/components/ui/label"
import { IoIosList } from "react-icons/io";
import Link from "next/link";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/app/components/ui/sheet"
import { Github, Linkedin } from "lucide-react";

const SHEET_SIDES = ["left"] as const

type SheetSide = (typeof SHEET_SIDES)[number]

export function SheetSide() {
  return (
    <div className="grid grid-cols-2 gap-2 ">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button className=""><IoIosList /></Button>
          </SheetTrigger>
          <SheetContent side={side } className="bg-[#F9F1E7]">
            <SheetHeader>
              <SheetTitle>Furniture</SheetTitle>
              
            </SheetHeader>
            <div className="flex ">
         
          <ul className="sm:flex-col gap-3 pt-4 text-2xl  ">
            <li>
              <Link href="#">Home</Link>
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
           <div className="">
          <button className="inline-flex items-center  border-0 py-1 px-3 focus:outline-none hover:bg-red-700 rounded text-black mt-4 md:mt-0  transition-colors duration-300">
           <a href={"https://github.com/syedakshmsh"}>
        <Github />
          </a>
          <svg fill='none'
          stroke="CurrentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-2 h-4 ml-1"
          viewBox="0 0 24 24">
          

            
          </svg>
         
          </button>
          <button className="inline-flex items-center  border-0 py-1 px-3 focus:outline-none hover:bg-red-700 rounded text-black mt-4 md:mt-0  transition-colors duration-300">
           <a href={"https://www.linkedin.com/posts/hayabyjiya-jiya-0128492ba_hackathon-furniturewebsite-ecommercedevelopment-activity-7287209076176904192-2VJE?utm_source=share&utm_medium=member_android "}>
        <Linkedin />
          </a>
          <svg fill='none'
          stroke="CurrentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-4 h-4"
          viewBox="0 0 24 24">
          

            
          </svg>
         
          </button>
           </div>
          
            
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}

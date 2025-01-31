"use client";
import React from 'react'
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import Link from "next/link";
import { useParams } from "next/navigation";



interface Iproduct {
  title: String;
  price: String;
  id: number;
  rating?: String;
  oldprice?: string;
  img_url: string;
  img1:string;
  img2:string;
  img3:string;
}
let shop: Iproduct[] = [
  {
    title: "Syltherine",
    price: "$120",
    id: 1,
    img_url: "/image 2.png",
    img1:"/Group 95.png",
    img2:"/Group 96.png",
    img3:"/Group 107.png",

  },
  {
    title: "Leviosa",
    price: "$240",
    id: 2,
    img_url: "/image 3.png",
    oldprice: "$260",
    img1:"/Group 95.png",
    img2:"/Group 96.png",
    img3:"/Group 107.png",

  },

  {
    title: "Lolito",
    price: "$180",
    id: 3,
    img_url: "/Images.png",
    img1:"/Group 95.png",
    img2:"/Group 96.png",
    img3:"/Group 107.png",

  },

  {
    title: "Respira",
    price: "$130",
    id: 4,
    img_url: "/image 1 (1).png",
    oldprice: "$160",
    img1:"/Group 107.png",
    img2:"/Group 107.png",
    img3:"/Group 107.png",
  },
];
let star=[<FaStar/>, <FaStar/> ,<FaStar/>, <FaStar/> ,<FaStar/>]








export default function product_detail() {
    const params = useParams()
    const id = params.id 
    const item = shop.find((item)=> item.id ===  Number(id))
    if(!item){

        return<h1>Product not found</h1>
    }


  return (
    <div className="md:w-full flex-col md:flex-row flex justify-between gap-12 mt-16">

    <div className='md:pl-10 pl-20 '>
        <Image
        src={item.img1}
        alt={"productdetails"}
        width={200}
        height={200}
        className='mt-2'
        >

        </Image>
        <Image
        src={item.img2}
        alt={"productdetails"}
        width={200}
        height={200}
         className='mt-2 shadow-lg'
        >

        </Image>
        <Image
        src={item.img3}
        alt={"productdetails"}
        width={200}
        height={200}
         className='mt-4 shadow-lg'
        >

        </Image>

        
    </div>
  <div className='md:w-[500px] w-auto mt-10 flex justify-center items-center '>
  <Image
        src={item.img3}
        alt={"productdetails"}
        width={500}
        height={500}
        >

        </Image>
  </div>
      <div className='md:w-[600px] w-auto h-[500px]'>
        <h1>Asgaard sofa</h1>
        <p>Rs. 250,000.00</p>
         <div className="flex">
          {star}
          <span>|customprize</span>
         </div>
         <p>{item.price}<span>{item.oldprice}</span></p>
         <p> Setting the bar as one of the loudest speakers in its class,
            the Kilburn is a compact, stout-hearted hero with a
            well-balanced
             audio which boasts a clear midrange and extended highs for a
            sound.</p>
            <div>
              {/* chose size */}
            <div className="flex pt-2 gap-2">
            <button className="border-2 h-[30px] w-[30px] bg-[#B88E2F]  rounded-lg">
              L
            </button>
            <button className="border-2 h-[30px] w-[30px] border-[#F9F1E7]  bg-[#F9F1E7] rounded-lg">
              XL
            </button>
            <button className="border-2 h-[30px]  border-[#F9F1E7]  bg-[#F9F1E7] w-[30px] rounded-lg">
              Xs{" "}
            </button>
          </div>
             {/* chose size */}
             <div>
              <p>color</p>
              <button className="border-1 h-[30px] w-[30px] bg-[#816DFA] rounded-full">
              {" "}
            </button>
            <button className="border-1 h-[30px] w-[30px] bg-black rounded-full">
              {" "}
            </button>
            <button className="border-1 h-[30px] w-[30px] bg-[#B88E2F] rounded-full">
              {" "}
            </button>
             </div>
             <div className="pt-3 flex gap-2 mt-2">
            <button className="border-2 border-gray-400 rounded-lg h-[44px] w-[123px] mt-3  ">
              <ul className="flex justify-between m-2 ">
                <li>-</li>
                <li>1</li>
                <li>+</li>
              </ul>
            </button>
            <button className="border-2 border-black rounded-lg  h-[64px] w-[215px] p-3 ">
              Add to Cart
            </button>
            <button className="border-2 border-black rounded-lg  h-[64px] w-[215px] p-3 ">
              +Campare
            </button>
          </div>




            </div>
      </div>
    </div>
  )
}


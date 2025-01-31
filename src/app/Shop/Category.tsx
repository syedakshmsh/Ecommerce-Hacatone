import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
// import "bootstrap-icons/font/bootstrap-icons.css";
import { FaStar } from "react-icons/fa6";


interface Iproduct {
  title: String;
  price: String;
  id: number;
  rating?: String;
  oldprice?: string;
  img_url: string;
  description: string;
} 
let shop: Iproduct[] = [
  {
    title: "Syltherine",
    price: "$120",
    id: 1,
    img_url: "/image 2.png",
    description: "Stylish cafe chair"
  },
  {
    title: "Leviosa",
    price: "$240",
    id: 2,
    img_url: "/image 3.png",
    oldprice: "$260",
    description: "Stylish cafe chair"
  },

  {
    title: "Lolito",
    price: "$180",
    id: 3,
    img_url: "/Images.png",
    description: "Luxury big sofa"
  },

  {
    title: "Respira",
    price: "$130",
    id: 4,
    img_url: "/image 1 (1).png",
    oldprice: "$160",
    description: "Outdoor bar table and stoo"
  },
];
let star=[<FaStar/>, <FaStar/> ,<FaStar/>, <FaStar/> ,<FaStar/>]
function Category_Shop(){
    return(
        <div className="flex  mt-10 md:flex-row lg:flex md:justify-between  flex-col justify-center items-center  space-x-2 mx-32">
        {shop.map((data) =>{
          return (
            <div key={data.id} >
             <Link href={`/Shop/${data.id}`}>
             <div className="w-[250px] h-[200px]">
              <Image
                src={data.img_url}
                alt={"data.title"}
                width={200}
                height={200}
              ></Image>
                </div>
             </Link>

              <div>
              <p className="font-bold mt-3">{data.title}</p>
              <p className='text-sm'>{data.description}</p>
              <p className="flex text-yellow-300 mt-2">{star}</p>
              
              <p className="font-bold mt-1">{data.price}<span className="text-gray-400 font-bold line-through">{data.oldprice}</span></p>
              </div>
            </div>
          );
        })}
      </div>

    )

}
export default Category_Shop
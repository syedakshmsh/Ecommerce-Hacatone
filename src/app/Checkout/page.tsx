 "use client"
 
 import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "../components/ui/button";

import JsonResponseViewer from "@/app/components/JsonResponses";


interface ICart{
  title : string
  imageUrl: string 
  price:string
  quantity:number
  

}
function CheckOutpage() {

 

  const [cartItem,setCartItem]= useState<ICart[]>([])
  const [shipCost, setShipCost] = useState(0)
  useEffect(()=>{
    const data = localStorage.getItem("cart")
    const cart = data ? JSON.parse(data) : []
    setCartItem(cart)

    const ShipmentData = localStorage.getItem("ShipmentData")
    const shipData = ShipmentData ? JSON.parse(ShipmentData) : []
    const shipCost = shipData?.shipment_cost?.amount.toFixed(2)
    
    
    setShipCost(shipCost)
    console.log(shipCost)
    


  },[]

  )

  function handlepayment(){
    alert("payment successfull")
    localStorage.setItem("cart",JSON.stringify([]))
    setCartItem([])
  }
  const totalAmount = Number(cartItem.reduce((acc: number, item: ICart) => acc + Number(+item.price * item.quantity), 0)) + Number(shipCost ? shipCost : 0)
  return (
    <div>
      
      <div className=" lg:h-[316px] md:w-full ">
        <Image
          src={"/Group 78 (4).png"}
          alt={"#"}
          width={1360}
          height={316}
        ></Image>
      </div>
      <div className=" lg:h-[1441px] md:w-full md:h-[1441px] 
       h-auto w-auto pl-2 md:pl-28 pt-10 sm:flex lg:flex md:flex-row flex-col mx-20 justify-between gap-28">
        <div>
          <h1 className="text-2xl font-bold">Billing details</h1>
          <div className="md:flex-row flex-col  gap-36 ">
           
            
          </div>
          <span className="gap-4 md:flex md:flex-row flex-col">
          <p className="mt-6">First name</p>
              <input  className="md:w-[100px] md:h-[65px] h-auto w-auto border-2 border-gray rounded-lg " />
              <p className="mt-6">Last name</p> 
              <input className="md:w-[100px] md:h-[65px]  h-auto w-auto border-2 border-gray rounded-lg " />
            
          </span>
            <div>
          <h1 className="pt-10">Country / Region</h1>
          
          <input type="text" className="border-2 border-gray- rounded-lg pt-10 md:h-[75px] md:w-[413px] h-[35px] w-[213px] p-3 " />
          <h1 className="pt-10">Company Name (Optional)</h1>
          <input type="text" className="border-2 border-gray- rounded-lg pt-10 md:h-[75px] md:w-[413px] h-[35px] w-[213px] p-3 " />
          <h1 className="pt-10">Street address</h1>
          <input type="text" className="border-2 border-gray- rounded-lg pt-10 md:h-[75px] md:w-[413px] h-[35px] w-[213px] p-3 " />
          <h1 className="pt-10">Town / City</h1>
          <input type="text" className="border-2 border-gray- rounded-lg pt-10 md:h-[75px] md:w-[413px] h-[35px] w-[213px] p-3 " />
          <h1 className="pt-10">Province</h1>
          <input type="text" className="border-2 border-gray- rounded-lg pt-10 md:h-[75px] md:w-[413px] h-[35px] w-[213px] p-3 " />
          <h1 className="pt-10">ZIP code</h1>
          <input type="text" className="border-2 border-gray- rounded-lg pt-10 md:h-[75px] md:w-[413px] h-[35px] w-[213px] p-3 " />
          <h1 className="pt-10">Phone</h1>
          <input type="text" className="border-2 border-gray- rounded-lg pt-10 md:h-[75px] md:w-[413px] h-[35px] w-[213px] p-3 " />
          <h1 className="pt-10">Email address</h1>
          <input type="text" className="border-2 border-gray- rounded-lg pt-10 md:h-[75px] md:w-[413px] h-[35px] w-[213px] p-3 " />
          <h1 className="pt-10"></h1>
          <input type="text" className="border-2 border-gray- rounded-lg pt-10 md:h-[75px] md:w-[413px] h-[35px] w-[213px] p-3 " />
        </div>
        </div>
        <div className="md:w-[608px] md:h-[789px] flex justify-center items-center  flex-col md:pt-0 pt-8 h-auto w-auto md:pr-28 pr-0 lg:pl-32 md:pl-32 sm:pl-32 ">
        <Card>
          <div className="space-y-4 pt-6">
          <div className=" pl-4 font-bold">
              <h1>Free Delivery</h1>
              <h1>Free </h1>
                      
            </div>
            <div className="flex justify-between px-7 ">
              <span>subTotal</span>
              <span>${cartItem.reduce((acc:number, item:ICart) => acc + Number (+item.price * item.quantity),0)}</span>
            </div>
            
            <div className="flex justify-between px-7" >
                <span>Total</span>
              <span>${cartItem.reduce((acc:number, item:ICart) => acc + Number (+item.price * item.quantity),0)}</span>
              </div>
          
            {cartItem.map((item:ICart,index:number)=>{
              return(
                <div className="flex gap-4 relative px-7 py-7" key={index}>
                  <Image 
                  src={item.imageUrl}
                  alt="image"
                  width={88}
                  height={88}
                  
                  
                  
                  />
                  <div className="w-full space-x-1">
                    <p className="text-sm">{item.title}</p>
                    <p className="text-sm">qty{item.quantity}</p>
                    <p className="text-sm">${item.price}</p>
                    



                  </div>





                </div>
              )
            }
            
            
            
            )}

          </div>


        </Card> 
         
          <hr />
          <div className="flex gap-3 text-gray-400 pt-6">
            <button className="border-1 h-[14px] w-[14px] bg-black rounded-full">
              {" "}
            </button>

            <p>Direct Bank Transfer</p>
          </div>
          <p className="flex justify-between text-gray-400 ">
            Make your payment directly into our bank account. Please use your
            Order ID as the payment reference. Your order will not be shipped
            until the funds have cleared in our account.
          </p>
          <div className="flex gap-3 text-gray-400 pt-6">
            <button className="border-2 h-[14px] w-[14px] border-gray-400 rounded-full">
              {" "}
            </button>

            <p>Direct Direct Bank Transfer</p>
          </div>
          <div className="flex gap-3 text-gray-400 pt-6">
            <button className="border-2 h-[14px] w-[14px] border-gray-400 rounded-full">
              {" "}
            </button>

            <p>Cash On Delivery</p>
          </div>
          <p className="flex justify-center text-gray-400">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our privacy policy.
          </p>
          <div className="flex justify-center text-gray-400 pt-8">
            <Link href={"/shipment"}>
            <Button className="border-2 border-black rounded-lg  h-[64px] w-[215px] p-3 " onClick={handlepayment}>
              Place order
            </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="h-100 bg-[#F9F1E7] md:w-full pt-24 shadow-lg">
          <div className="h-[70] w-[1234] flex  justify-center gap-12">
            <div className="pt-4">
              <i className="bi bi-trophy p-6"></i>
              <h1 className="">High Quality </h1>
              <p className="text-gray-400 pb-6">crafted from top materials</p>
            </div>
            <div className="pl-4 pt-4">
              <i className="bi bi-patch-check p-6"></i>
              <h1 className="">warranty Protection </h1>
              <p className="text-gray-400 pb-6">Over 2 years</p>
            </div>
            <div className="pl-4 pt-4">
              <i className="bi bi-truck p-6"></i>
              <h1 className="">Free shipping </h1>
              <p className="text-gray-400 pb-6">Over 2 years</p>
            </div>
            <div className="pl-4 pt-4 hidden md:block">
              <i className="<i bi bi-file-lock-fill p-6"></i>
              <h1 className="">24 / 7 Support </h1>
              <p className="text-gray-400 pb-6">Dedicated support</p>
            </div>
          </div>
        </div>
       
      

      
    </div>
  );
}

export default CheckOutpage;

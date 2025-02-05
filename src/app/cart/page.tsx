
"use client";
export const dynamic = "force-dynamic"; // Next.js ko prerendering error se bachane ke liye
import React, { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Trash2 } from "lucide-react";
import { Button } from "../components/ui/button";


interface ICard {
  title: string;
  price: number;
  imageUrl: string;
  description: string;
  quantity: number;
}


export default function CartPage() {


  const router = useRouter();
  const searchparams = useSearchParams();
  const [cartItem, setCartItem] = useState<ICard[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return; // Ensure code runs only in client-side
    const cart = localStorage.getItem("cart");
    console.log(cart);

    const updatedCart = cart ? JSON.parse(cart) : [];
      console.log(updatedCart);

    // Initialize default quantity if not present
    updatedCart.forEach((item: ICard) => {
      if (!item.quantity) {
        item.quantity = 1;
      }
    });

    const title = searchparams.get("title");
    const price = searchparams.get("price");
    const imageUrl = searchparams.get("imageUrl");
    const description = searchparams.get("description");

    if (title && price && imageUrl && description) {
      const isDuplicate = updatedCart.some((item: ICard) => item.title === title);
      if (!isDuplicate) {
        updatedCart.push({
          title,
          price: parseFloat(price),
          imageUrl,
          description,
          quantity: 1,
        });
      }
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }

    setCartItem(updatedCart);
  }, [searchparams, router]);

  function handleRemoveItem(index: number) {
    const updatedCart = [...cartItem];
    updatedCart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItem(updatedCart);
  }

  function handleQuantity(index: number, num: string) {
    const updatedCart = [...cartItem];
    updatedCart[index].quantity = Math.max(1, parseInt(num)); // Ensure at least 1
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItem(updatedCart);
  }

  function calculateSubtotal() {
    return cartItem.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  return (
    
    <div>
      <div className="md:h-[316px] h-auto w-auto">
        <Image
          src="/Group 78 (1).png"
          alt="Banner"
          width={1360}
          height={316}
        />
      </div>
      <div className="flex  gap-2 pt-10 pl-7  rounded-lg shadow-lg ">
        <p>Free delivery</p>
              <Link href={"/shipment"}>
              <button className="">
              view
              </button>
              </Link>
            </div>
      <div className="pt-7">
        <div className="md:w-[1240px] h-auto w-auto md:flex pl-2">
          <div className="md:h-[65px] md:w-[817px] w-auto h-auto p-3 bg-[#F9F1E7] gap-4">
            <ul className="flex gap-32 pl-4">
              <li>Product</li>
              <li>Price</li>
              <li className="hidden md:block">Quantity</li>
              <li className="hidden md:block">Subtotal</li>
            </ul>
          </div>
        </div>

        <div className="md:w-full w-auto flex justify-between items-center px-10 md:flex flex-col">
          <div className="space-y-6 pt-10">
            {cartItem.map((item: ICard, index: number) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex gap-6">
                    <div className="w-24 h-24 bg-gray-100 rounded-md">
                      <Image
                        src={item.imageUrl}
                        alt={item.title}
                        width={96}
                        height={96}
                        className="bg-[#F9F1E7] shadow-lg"
                      />
                    </div>
                   
                      <div className="">
                        <div>
                          <h3 className="font-medium">{item.title}</h3>
                        </div>
                        <div className="mt-2 space-y-1">
                          <p className="text-sm">Quantity:</p>
                          <input
                            className="bg-slate-200 rounded-lg text-black w-12"
                            type="number"
                            min={1}
                            value={item.quantity}
                            onChange={(e) => handleQuantity(index, e.target.value)}
                          />
                        </div>
                      
                      <p>Price: Rs. {item.price}</p>
                      <p>Subtotal: Rs. {item.price * item.quantity}</p>
                    </div>
                    <div>
                      <Button variant="ghost" size="sm">
                        <Heart className="w-4 h-4 hover:bg-pink-500" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleRemoveItem(index)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="md:w-[393px] md:h-[390px] w-auto h-auto lg:mt-2 border-2 ml-4 bg-[#F9F1E7] sm:mt-2 md:mt-2 mt-8 rounded-lg ">
            <h1 className="flex justify-center mt-2">Cart Summary</h1>
            <div className="flex justify-center gap-2 pt-7 pl-7">
              <p>Subtotal</p>
              <p className="text-gray-400">Rs. {calculateSubtotal().toLocaleString()}</p>
            </div>
            <br />
            <div className="flex justify-center gap-2 pt-7 pl-7">
              <p>Total</p>
              <p className="text-[#B88E2F]">Rs. {calculateSubtotal().toLocaleString()}</p>
            </div>
            <div className="flex justify-center gap-2 pt-10 pl-7">
              <Link href={"/Checkout"}>
              <button className="border-2 border-black rounded-lg h-[64px] w-[215px] mx-6">
                Proceed to Checkout
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

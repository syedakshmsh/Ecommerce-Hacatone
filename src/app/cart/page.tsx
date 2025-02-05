
// "use client";
// export const dynamic = "force-dynamic"; // Next.js ko prerendering error se bachane ke liye
// import React, { Suspense, useEffect, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { useRouter, useSearchParams } from "next/navigation";
// import { Card, CardContent } from "@/components/ui/card";
// import { Heart, Trash2 } from "lucide-react";
// import { Button } from "../components/ui/button";


// interface ICard {
//   title: string;
//   price: number;
//   imageUrl: string;
//   description: string;
//   quantity: number;
// }


// export default function CartPage() {


//   const router = useRouter();
//   const searchparams = useSearchParams();
//   const [cartItem, setCartItem] = useState<ICard[]>([]);

//   useEffect(() => {
//     if (typeof window === "undefined") return; // Ensure code runs only in client-side
//     const cart = localStorage.getItem("cart");
//     console.log(cart);

//     const updatedCart = cart ? JSON.parse(cart) : [];
//       console.log(updatedCart);

//     // Initialize default quantity if not present
//     updatedCart.forEach((item: ICard) => {
//       if (!item.quantity) {
//         item.quantity = 1;
//       }
//     });

//     const title = searchparams.get("title");
//     const price = searchparams.get("price");
//     const imageUrl = searchparams.get("imageUrl");
//     const description = searchparams.get("description");

//     if (title && price && imageUrl && description) {
//       const isDuplicate = updatedCart.some((item: ICard) => item.title === title);
//       if (!isDuplicate) {
//         updatedCart.push({
//           title,
//           price: parseFloat(price),
//           imageUrl,
//           description,
//           quantity: 1,
//         });
//       }
//       localStorage.setItem("cart", JSON.stringify(updatedCart));
//     }

//     setCartItem(updatedCart);
//   }, [searchparams, router]);

//   function handleRemoveItem(index: number) {
//     const updatedCart = [...cartItem];
//     updatedCart.splice(index, 1);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//     setCartItem(updatedCart);
//   }

//   function handleQuantity(index: number, num: string) {
//     const updatedCart = [...cartItem];
//     updatedCart[index].quantity = Math.max(1, parseInt(num)); // Ensure at least 1
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//     setCartItem(updatedCart);
//   }

//   function calculateSubtotal() {
//     return cartItem.reduce((total, item) => total + item.price * item.quantity, 0);
//   }

//   return (
    
//     <div>
//       <div className="md:h-[316px] h-auto w-auto">
//         <Image
//           src="/Group 78 (1).png"
//           alt="Banner"
//           width={1360}
//           height={316}
//         />
//       </div>
//       <div className="flex  gap-2 pt-10 pl-7  rounded-lg shadow-lg ">
//         <p>Free delivery</p>
//               <Link href={"/shipment"}>
//               <button className="">
//               view
//               </button>
//               </Link>
//             </div>
//       <div className="pt-7">
//         <div className="md:w-[1240px] h-auto w-auto md:flex pl-2">
//           <div className="md:h-[65px] md:w-[817px] w-auto h-auto p-3 bg-[#F9F1E7] gap-4">
//             <ul className="flex gap-32 pl-4">
//               <li>Product</li>
//               <li>Price</li>
//               <li className="hidden md:block">Quantity</li>
//               <li className="hidden md:block">Subtotal</li>
//             </ul>
//           </div>
//         </div>

//         <div className="md:w-full w-auto flex justify-between items-center px-10 md:flex flex-col">
//           <div className="space-y-6 pt-10">
//             {cartItem.map((item: ICard, index: number) => (
//               <Card key={index}>
//                 <CardContent className="p-6">
//                   <div className="flex gap-6">
//                     <div className="w-24 h-24 bg-gray-100 rounded-md">
//                       <Image
//                         src={item.imageUrl}
//                         alt={item.title}
//                         width={96}
//                         height={96}
//                         className="bg-[#F9F1E7] shadow-lg"
//                       />
//                     </div>
                   
//                       <div className="">
//                         <div>
//                           <h3 className="font-medium">{item.title}</h3>
//                         </div>
//                         <div className="mt-2 space-y-1">
//                           <p className="text-sm">Quantity:</p>
//                           <input
//                             className="bg-slate-200 rounded-lg text-black w-12"
//                             type="number"
//                             min={1}
//                             value={item.quantity}
//                             onChange={(e) => handleQuantity(index, e.target.value)}
//                           />
//                         </div>
                      
//                       <p>Price: Rs. {item.price}</p>
//                       <p>Subtotal: Rs. {item.price * item.quantity}</p>
//                     </div>
//                     <div>
//                       <Button variant="ghost" size="sm">
//                         <Heart className="w-4 h-4 hover:bg-pink-500" />
//                       </Button>
//                       <Button
//                         variant="ghost"
//                         size="sm"
//                         onClick={() => handleRemoveItem(index)}
//                       >
//                         <Trash2 className="w-4 h-4" />
//                       </Button>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>

//           <div className="md:w-[393px] md:h-[390px] w-auto h-auto lg:mt-2 border-2 ml-4 bg-[#F9F1E7] sm:mt-2 md:mt-2 mt-8 rounded-lg ">
//             <h1 className="flex justify-center mt-2">Cart Summary</h1>
//             <div className="flex justify-center gap-2 pt-7 pl-7">
//               <p>Subtotal</p>
//               <p className="text-gray-400">Rs. {calculateSubtotal().toLocaleString()}</p>
//             </div>
//             <br />
//             <div className="flex justify-center gap-2 pt-7 pl-7">
//               <p>Total</p>
//               <p className="text-[#B88E2F]">Rs. {calculateSubtotal().toLocaleString()}</p>
//             </div>
//             <div className="flex justify-center gap-2 pt-10 pl-7">
//               <Link href={"/Checkout"}>
//               <button className="border-2 border-black rounded-lg h-[64px] w-[215px] mx-6">
//                 Proceed to Checkout
//               </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
    
//   );
// }


// "use client";
// export const dynamic = "force-dynamic"; // Next.js ko prerendering error se bachane ke liye
// import React, { Suspense, useEffect, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { useRouter, useSearchParams } from "next/navigation";
// import { Card, CardContent } from "@/components/ui/card";
// import { Heart, Trash2 } from "lucide-react";
// import { Button } from "../components/ui/button";
 
 
// interface ICard {
//   title: string;
//   price: number;
//   imageUrl: string;
//   description: string;
//   quantity: number;
// }
 
 
// export default function CartPage() {
 
 
//   const router = useRouter();
//   const searchparams = useSearchParams();
//   const [cartItem, setCartItem] = useState<ICard[]>([]);
 
//   useEffect(() => {
//     if (typeof window === "undefined") return; // Ensure code runs only in client-side
//     const cart = localStorage.getItem("cart");
//     console.log(cart);
 
//     const updatedCart = cart ? JSON.parse(cart) : [];
//       console.log(updatedCart);
 
//     // Initialize default quantity if not present
//     updatedCart.forEach((item: ICard) => {
//       if (!item.quantity) {
//         item.quantity = 1;
//       }
//     });
 
//     const title = searchparams.get("title");
//     const price = searchparams.get("price");
//     const imageUrl = searchparams.get("imageUrl");
//     const description = searchparams.get("description");
 
//     if (title && price && imageUrl && description) {
//       const isDuplicate = updatedCart.some((item: ICard) => item.title === title);
//       if (!isDuplicate) {
//         updatedCart.push({
//           title,
//           price: parseFloat(price),
//           imageUrl,
//           description,
//           quantity: 1,
//         });
//       }
//       localStorage.setItem("cart", JSON.stringify(updatedCart));
//     }
 
//     setCartItem(updatedCart);
//   }, [searchparams, router]);
 
//   function handleRemoveItem(index: number) {
//     const updatedCart = [...cartItem];
//     updatedCart.splice(index, 1);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//     setCartItem(updatedCart);
//   }
 
//   function handleQuantity(index: number, num: string) {
//     const updatedCart = [...cartItem];
//     updatedCart[index].quantity = Math.max(1, parseInt(num)); // Ensure at least 1
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//     setCartItem(updatedCart);
//   }
 
//   function calculateSubtotal() {
//     return cartItem.reduce((total, item) => total + item.price * item.quantity, 0);
//   }
 
//   return (
    
//    <Suspense fallback={<div>Loading cart...</div>}>
//       <div className="md:h-[316px] h-auto w-auto">
//         <Image
//           src="/Group 78 (1).png"
//           alt="Banner"
//           width={1360}
//           height={316}
//         />
//       </div>
//       <div className="flex  gap-2 pt-10 pl-7  rounded-lg shadow-lg ">
//         <p>Free delivery</p>
//               <Link href={"/shipment"}>
//               <button className="">
//               view
//               </button>
//               </Link>
//             </div>
//       <div className="pt-7">
//         <div className="md:w-[1240px] h-auto w-auto md:flex pl-2">
//           <div className="md:h-[65px] md:w-[817px] w-auto h-auto p-3 bg-[#F9F1E7] gap-4">
//             <ul className="flex gap-32 pl-4">
//               <li>Product</li>
//               <li>Price</li>
//               <li className="hidden md:block">Quantity</li>
//               <li className="hidden md:block">Subtotal</li>
//             </ul>
//           </div>
//         </div>
 
//         <div className="md:w-full w-auto flex justify-between items-center px-10 md:flex flex-col">
//           <div className="space-y-6 pt-10">
//             {cartItem.map((item: ICard, index: number) => (
//               <Card key={index}>
//                 <CardContent className="p-6">
//                   <div className="flex gap-6">
//                     <div className="w-24 h-24 bg-gray-100 rounded-md">
//                       <Image
//                         src={item.imageUrl}
//                         alt={item.title}
//                         width={96}
//                         height={96}
//                         className="bg-[#F9F1E7] shadow-lg"
//                       />
//                     </div>
                   
//                       <div className="">
//                         <div>
//                           <h3 className="font-medium">{item.title}</h3>
//                         </div>
//                         <div className="mt-2 space-y-1">
//                           <p className="text-sm">Quantity:</p>
//                           <input
//                             className="bg-slate-200 rounded-lg text-black w-12"
//                             type="number"
//                             min={1}
//                             value={item.quantity}
//                             onChange={(e) => handleQuantity(index, e.target.value)}
//                           />
//                         </div>
                      
//                       <p>Price: Rs. {item.price}</p>
//                       <p>Subtotal: Rs. {item.price * item.quantity}</p>
//                     </div>
//                     <div>
//                       <Button variant="ghost" size="sm">
//                         <Heart className="w-4 h-4 hover:bg-pink-500" />
//                       </Button>
//                       <Button
//                         variant="ghost"
//                         size="sm"
//                         onClick={() => handleRemoveItem(index)}
//                       >
//                         <Trash2 className="w-4 h-4" />
//                       </Button>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
 
//           <div className="md:w-[393px] md:h-[390px] w-auto h-auto lg:mt-2 border-2 ml-4 bg-[#F9F1E7] sm:mt-2 md:mt-2 mt-8 rounded-lg ">
//             <h1 className="flex justify-center mt-2">Cart Summary</h1>
//             <div className="flex justify-center gap-2 pt-7 pl-7">
//               <p>Subtotal</p>
//               <p className="text-gray-400">Rs. {calculateSubtotal().toLocaleString()}</p>
//             </div>
//             <br />
//             <div className="flex justify-center gap-2 pt-7 pl-7">
//               <p>Total</p>
//               <p className="text-[#B88E2F]">Rs. {calculateSubtotal().toLocaleString()}</p>
//             </div>
//             <div className="flex justify-center gap-2 pt-10 pl-7">
//               <Link href={"/Checkout"}>
//               <button className="border-2 border-black rounded-lg h-[64px] w-[215px] mx-6">
//                 Proceed to Checkout
//               </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Suspense>
    
//   );
// }
"use client";
import Image from "next/image";
import { Heart, Trash2, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";


interface Iproduct{
  name: string
  price : string
  description : string 
  imageUrl: string
  quantity: number
}

export default function ShoppingCart() {

  const router = useRouter()
  const searchParam = useSearchParams();
  const [cartItem, setCartItem] = useState<Iproduct[]>([]);




  useEffect(()=>{
    const cart = localStorage.getItem("cart")
    const updatedCart = cart ? JSON.parse(cart) : []
    
    const name = searchParam.get("name");
    const price = searchParam.get("price");
    const description = searchParam.get("description");
    const imageUrl = searchParam.get("image");

    if(name && price && description && imageUrl){
      const isDuplicate: boolean =  updatedCart.some((item: Iproduct) => item.name === name);
    
      if(!isDuplicate){
        updatedCart.push({name, price, description, imageUrl, quantity: 1})
      }

      localStorage.setItem("cart", JSON.stringify(updatedCart))
      setCartItem(updatedCart)
      router.replace("/cart")
    }  
  },[searchParam, router])

  function handleRemoveItem(index: number){
    const removeCard = [...cartItem]
    removeCard.splice(index, 1)

    localStorage.setItem("cart", JSON.stringify(removeCard))
    setCartItem(removeCard)
  }

  function handleQuantity(index: number, e_target_value: number){
    const copyWalaArray = [...cartItem]
    copyWalaArray[index].quantity = e_target_value

    localStorage.setItem("cart", JSON.stringify(copyWalaArray))
    setCartItem(copyWalaArray)
  }


  return (
    <div className="container mx-auto px-4 py-8 mt-[99px]">
      {/* Free Delivery Banner */}
      <div className="mb-8 bg-gray-50 p-4 rounded-lg">
        <div className="flex items-center gap-2">
          <p className="text-sm font-medium">Free Delivery</p>
          <p className="text-sm text-gray-600">
            Applies to orders of ₹ 14,000.00 or more.
          </p>
         <Link href={"/shipment"}>
            <Button variant="link" className="text-sm">
              View details
            </Button>
         </Link>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-2xl font-medium mb-6">Bag</h1>

          {/* Cart Items */}
          <div className="space-y-6">
            {cartItem.map((item: Iproduct, index: number) => {
              return (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex gap-6">
                      <div className="w-24 h-24 bg-gray-100 rounded-md">
                        <Image
                          src={item.imageUrl}
                          alt={item.price}
                          width={96}
                          height={96}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <div>
                            <h3 className="font-medium">
                              {item.name}
                            </h3>
                            <p className="text-sm text-gray-600">
                              Men&apos;s Short-Sleeve Running Top
                            </p>
                            <p className="text-sm text-gray-600">
                              Ashen Slate/Cobalt Bliss
                            </p>
                            <div className="mt-2 space-y-1">
                              <p className="text-sm">Size: L</p>
                              <div className="flex gap-4">
                                <p className="text-sm">Quantity:</p>
                                <input className="bg-slate-200 rounded pl-2 text-black w-12" type="number" min={1} value={item.quantity} onChange={(e)=>{handleQuantity(index, +e.target.value)}}/>
                              </div>
                            </div>
                          </div>
                          <p className="text-sm">
                            MRP: ₹ {+item.price * item.quantity}
                          </p>
                        </div>
                        <div className="flex gap-4 mt-4">
                          <Button variant="ghost" size="sm">
                            <Heart className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" onClick={()=>{handleRemoveItem(index)}}>
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Favorites */}
          <div className="mt-12">
            <h2 className="text-xl font-medium mb-4">Favourites</h2>
            <p className="text-sm text-gray-600">
              There are no items saved to your favourites.
            </p>
          </div>

          {/* You Might Also Like */}
          <div className="mt-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-medium">You Might Also Like</h2>
              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-0">
                  <div className="aspect-square bg-gray-100">
                    <Image
                      src="/cart/pic2.png"
                      alt="Air Jordan"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium">Air Jordan 1 Mid SE Craft</h3>
                    <p className="text-sm text-gray-600">Men&apos;s Shoes</p>
                    <p className="text-sm font-medium mt-2">MRP: ₹ 12,295.00</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div>
          <Card className="sticky top-8">
            <CardContent className="p-6">
              <h2 className="text-xl font-medium mb-4">Summary</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm">Subtotal</span>
                  <span className="text-sm">₹ {cartItem.reduce((total, object)=>{return total + (+object.price * object.quantity)  }, 0)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Estimated Delivery & Handling</span>
                  <span className="text-sm">Free</span>
                </div>
                <Separator />
                <div className="flex justify-between font-medium">
                  <span>Total</span>
                  <span>₹ {cartItem.reduce((total, item)=> total + Number(item.price) * item.quantity, 0).toFixed(2).toLocaleString()}</span>
                </div>
                <Link href={"/Checkout"}>
                  <Button className="w-full">Member Checkout</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
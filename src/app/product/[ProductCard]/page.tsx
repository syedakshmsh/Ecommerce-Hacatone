
"use client"; // Enable Client Component for interactivity
 
import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";
 
 
export default function ProductCard({
  searchParams,
}: {
  searchParams: Promise<{
    title: string;
    description: string;
    price: number;
    imageUrl: string;
    id: string;
    productImage: {
      assest: {
        _ref: string;
      };
    };
    discountPercentage: string;
  }>;
}) {
  const [data, setData] = useState<{
    title: string;
    description: string;
    price: number;
    imageUrl: string;
  } | null>(null);
 
  useEffect(() => {
    async function fetchData() {
      const resolvedParams = await searchParams;
      setData(resolvedParams);
    }
    fetchData();
  }, [searchParams]);
 
  if (!data) {
    return <p>Loading...</p>; // Fallback while data is being resolved
  }
 
 
 
  const { title, description, price, imageUrl } = data;
 
  
  const handleAddToCart = () => {

    const previouseData: any = localStorage.getItem("cart");

    if (previouseData === null) {
      localStorage.setItem('cart', JSON.stringify([{ title, description, price, imageUrl }]))
      window.location.href = '/cart'
      return;
    }
    const parseData = JSON.parse(previouseData);


    // To prevent to add the dublicate item by title
    let toBeAdd = []

    if (parseData.length === 0) {
      localStorage.setItem('cart', JSON.stringify([{ title, description, price, imageUrl }]))
      window.location.href = '/cart'
      return;
    }
    if (parseData.find((data: any, i: any) => data.title !== title)) {
      // parseData.push({ title, description, price, imageUrl });
      toBeAdd.push({ title, description, price, imageUrl })
    }
    localStorage.setItem('cart', JSON.stringify([...parseData, ...toBeAdd]));
    window.location.href = '/cart'
  };

  return (
    <div className="min-h-screen bg-white p-6 mt-[30px]">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="relative aspect-square rounded-lg bg-white p-8">
            <Image
              src={imageUrl}
              alt={title}
              width={500}
              height={500}
              className="bg-[#F9F1E7] shadow-lg"
            />
          </div>
 
          <div className="flex flex-col justify-center space-y-2 text-black lg:pt-0">
            <h2 className="fonts-bold text-4xl font-medium leading-tight md:text-5xl">
              {title}
            </h2>
 
            <p className="max-w-xl text-xs leading-relaxed">{description}</p>
 
            <div className="space-y-4">
              <p className="fonts-poppies text-2xl font-medium leading-tight md:text-4xl">
                ${price.toLocaleString()}0
              </p>
 
              <div>
                <Button
                  onClick={handleAddToCart} // Add the onClick handler here
                  className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
                >
                  Add To Cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
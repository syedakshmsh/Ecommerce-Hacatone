"use client"

import React, { useEffect, useState } from "react";
import { createClient } from '@sanity/client';
import Image from "next/image";
import Link from 'next/link'; 
import { client } from "@/sanity/lib/client";





const sanity = createClient({
  projectId: "ysut65f2",
  dataset: "productionpt",
  apiVersion: "2023-01-01",
  useCdn: true,
});




const ProductCards: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);

  const fetchProducts = async () => {
    try {
      const query  = 
      
      (`*[_type == "product" ]{
        title,
        "imageUrl": productImage.asset->url,
        price,
        discountPercentage,
        tags,
        description,
        isNew,
        "slug": slug.current,
       
        _id
      }`)
    
      
      const data =  await sanity.fetch(query);
      
      setProducts(data);
    } catch (error) {
      console.log("Error Fetching Products:", error);
    }
  };


 

  const addCart = (product: Product) => {
    if (!cart.some(item => item._id === product._id)) {
      setCart((prevCart) => [...prevCart, product]);
      alert(`${product.title} has been added to your cart!`);
    } else {
      alert(`${product.title} is already in the cart.`);
      console.log(product);
      
    }
  };

  const truncateDescription = (description: string) => {
    return description.length > 100 ? description.substring(0, 100) + "..." : description;
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    
      <div className="p-4">
       
      <h2 className="text-center text-slate-800 mt-4 mb-4">Products From API Data</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
           
          
          <div
            key={product._id} 
            className="bg-white shadow-md round-lg p-4 hover:shadow-lg transition-shadow duration-300"
          >   <Link href={`/product/ProductCard?title=${product.title}&description=${product.description}&price=${product.price}&imageUrl=${product.imageUrl}`}>
            <Image
              src={product.imageUrl}
              alt={product.title}
              width={300}
              height={300}
              className="w-full h-48 object-cover rounded-md"
            />
            </Link>
            <div className="mt-4">
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p className="text-slate-800 mt-3 text-sm">{truncateDescription(product.description)}</p>
              <div className="flex justify-between items-center mt-4">
                <div>
                  <p className="text">${product.price.toFixed(2)}</p>
                  {product.discountPercentage > 0 && (
                    <p className="text-sm text-green-600">
                      {product.discountPercentage} % OFF
                    </p>
                  )}
                </div>
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs bg-slate-400 text-black rounded-full px-2 py-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link href={"#"}>
              <button 
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                onClick={() => addCart(product)}
              >
                Add To Cart
              </button>
              </Link>
            </div>
            
            
          </div>
        
        
        ))}
        
      </div>
     
       


      <div className="mt-8 bg-slate-100 p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-black text-red-500">Cart Summary</h2>
        {cart.length > 0 ? (
          <ul className="space-y-4">
            {cart.map((item, index) => (
              <li key={index} className="flex justify-between items-center bg-white shadow-sm p-4 rounded-md">
                <div>
                  <p className="font-medium text-slate-900">{item.title}</p>
                  <p className="text-sm text-blue-300">${item.price.toFixed(2)}</p>
                </div>
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  width={50}
                  height={50}
                  className="rounded-md"
                />
              </li>
            ))}
          </ul>
         
        ) : (
          <p className="text-black text-center">Your cart is empty. Please add products.</p>
        )}
      </div>
    </div>
    
     
   
  
  );
};

export default ProductCards;
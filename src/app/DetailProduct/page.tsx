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
              
            </div>
            
            
          </div>
        
        
        ))}
        
      </div>
     
       


    </div>
    
     
   
  
  );
};

export default ProductCards;
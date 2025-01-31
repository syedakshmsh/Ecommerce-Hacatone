interface Product {
  title: string;
  price: number;
  _id: string;
  description: string;
  discountPercentage: number;
 imageUrl : string;
 productImage:{
  assest:{
    _ref:string;
  }
 }
  
  tags: string[];
  isNew: boolean;
  slug:string;
 
}
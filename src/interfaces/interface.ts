export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  description: string;
  rating :{
    count : number;
    rate : number;
  }
}

export interface Cart extends Product{
    quantity : number;
}


export interface ShippingAddress {
   name : string;
   phone : string;
   address : string;
   city : string;
   state ?: string;
   zip ?: string;
}
export interface Order {
  items : Cart[];
  shippingAddress : ShippingAddress;
  total : number;
  discount : number;
  subtotal : number;
}
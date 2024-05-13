// models/Product.ts
export interface Product {
    id: number;
    name: string;
    description: string;
    category: string;
    stock: number;
    price: number;
    cost: number;
  }
  
  // models/Order.ts
  export interface Order {
    id: number;
    userId: number;
    shippingId: number;
  }
  
  // models/OrderDetail.ts
  export interface OrderDetail {
    id: number;
    orderId: number;
    productId: number;
    salePrice: number;
    quantity: number;
    discount: number;
  }
  
  // models/ShippingMethod.ts
  export interface ShippingMethod {
    id: number;
    method: string;
    cost: number;
  }
  
  // models/Shipping.ts
  export interface Shipping {
    shippingMethodId: number;
    department: string;
    province: string;
    district: string;
    address: string;
  }

export interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
  category: string;
  size: 'large' | 'normal';
}

export interface User {
  name: string;
  email: string;
  avatar?: string;
  role?: 'user' | 'superadmin';
}

export interface OrderItem {
  product: Product;
  quantity: number;
}

export interface Order {
  id: string;
  date: string;
  status: 'Processing' | 'Shipped' | 'Delivered';
  items: OrderItem[];
  total: number;
}

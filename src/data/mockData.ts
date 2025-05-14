
// Client Types
export interface Client {
  id: string;
  companyName: string;
  contactPerson: string;
  phoneNumber: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  status: 'active' | 'inactive';
  createdAt: string;
}

// Product Types
export interface Product {
  id: string;
  name: string;
  category: string;
  sku: string;
  stockQuantity: number;
  pricePerUnit: number;
  image: string;
  description?: string;
}

// Order Types
export interface OrderItem {
  productId: string;
  productName: string;
  quantity: number;
  unitPrice: number;
}

export interface Order {
  id: string;
  clientId: string;
  clientName: string;
  orderDate: string;
  items: OrderItem[];
  totalAmount: number;
  status: 'pending' | 'shipped' | 'completed' | 'cancelled';
}

// Mock Clients Data
export const clients: Client[] = [
  {
    id: '1',
    companyName: 'Fashion Retail Co.',
    contactPerson: 'John Smith',
    phoneNumber: '(555) 123-4567',
    email: 'john@fashionretail.com',
    address: '123 Market Street',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
    status: 'active',
    createdAt: '2023-01-15',
  },
  {
    id: '2',
    companyName: 'Style Boutique',
    contactPerson: 'Emma Johnson',
    phoneNumber: '(555) 987-6543',
    email: 'emma@styleboutique.com',
    address: '456 Fashion Ave',
    city: 'Los Angeles',
    state: 'CA',
    zipCode: '90001',
    status: 'active',
    createdAt: '2023-02-20',
  },
  {
    id: '3',
    companyName: 'Trendy Threads',
    contactPerson: 'Michael Brown',
    phoneNumber: '(555) 456-7890',
    email: 'michael@trendythreads.com',
    address: '789 Designer Blvd',
    city: 'Chicago',
    state: 'IL',
    zipCode: '60007',
    status: 'inactive',
    createdAt: '2023-03-05',
  },
  {
    id: '4',
    companyName: 'Urban Apparel',
    contactPerson: 'Sarah Davis',
    phoneNumber: '(555) 321-6548',
    email: 'sarah@urbanapparel.com',
    address: '101 Cityscape Road',
    city: 'Miami',
    state: 'FL',
    zipCode: '33101',
    status: 'active',
    createdAt: '2023-04-12',
  },
  {
    id: '5',
    companyName: 'Classic Clothing Co.',
    contactPerson: 'Robert Wilson',
    phoneNumber: '(555) 789-0123',
    email: 'robert@classicclothing.com',
    address: '202 Heritage Lane',
    city: 'Boston',
    state: 'MA',
    zipCode: '02108',
    status: 'active',
    createdAt: '2023-05-22',
  },
];

// Mock Products Data
export const products: Product[] = [
  {
    id: '1',
    name: 'Classic White T-Shirt',
    category: 'Shirts',
    sku: 'SH-WT-001',
    stockQuantity: 250,
    pricePerUnit: 12.99,
    image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820',
    description: 'Premium cotton classic white t-shirt for everyday wear.'
  },
  {
    id: '2',
    name: 'Black Denim Jeans',
    category: 'Pants',
    sku: 'PT-BJ-002',
    stockQuantity: 180,
    pricePerUnit: 29.99,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d',
    description: 'Stylish black denim jeans with straight fit.'
  },
  {
    id: '3',
    name: 'Navy Blue Blazer',
    category: 'Outerwear',
    sku: 'OW-NBB-003',
    stockQuantity: 75,
    pricePerUnit: 89.99,
    image: 'https://images.unsplash.com/photo-1598808503746-f34cfb6675ff',
    description: 'Professional navy blue blazer suitable for formal occasions.'
  },
  {
    id: '4',
    name: 'Floral Summer Dress',
    category: 'Dresses',
    sku: 'DR-FSD-004',
    stockQuantity: 120,
    pricePerUnit: 34.99,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8',
    description: 'Lightweight floral pattern dress perfect for summer.'
  },
  {
    id: '5',
    name: 'Striped Polo Shirt',
    category: 'Shirts',
    sku: 'SH-SP-005',
    stockQuantity: 200,
    pricePerUnit: 24.99,
    image: 'https://images.unsplash.com/photo-1622470953794-aa9c70b0fb9d',
    description: 'Casual striped polo shirt made from breathable cotton.'
  },
  {
    id: '6',
    name: 'Slim Fit Chinos',
    category: 'Pants',
    sku: 'PT-SFC-006',
    stockQuantity: 150,
    pricePerUnit: 39.99,
    image: 'https://images.unsplash.com/photo-1584865288642-42078afe6942',
    description: 'Modern slim fit chinos available in khaki color.'
  },
  {
    id: '7',
    name: 'Leather Bomber Jacket',
    category: 'Outerwear',
    sku: 'OW-LBJ-007',
    stockQuantity: 60,
    pricePerUnit: 129.99,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5',
    description: 'Classic leather bomber jacket with quilted lining.'
  },
  {
    id: '8',
    name: 'Wool Winter Coat',
    category: 'Outerwear',
    sku: 'OW-WWC-008',
    stockQuantity: 80,
    pricePerUnit: 149.99,
    image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3',
    description: 'Warm wool coat perfect for cold winter weather.'
  }
];

// Mock Orders Data
export const orders: Order[] = [
  {
    id: '1',
    clientId: '1',
    clientName: 'Fashion Retail Co.',
    orderDate: '2023-06-15',
    items: [
      {
        productId: '1',
        productName: 'Classic White T-Shirt',
        quantity: 50,
        unitPrice: 12.99
      },
      {
        productId: '2',
        productName: 'Black Denim Jeans',
        quantity: 30,
        unitPrice: 29.99
      }
    ],
    totalAmount: 1549.50,
    status: 'completed'
  },
  {
    id: '2',
    clientId: '2',
    clientName: 'Style Boutique',
    orderDate: '2023-07-02',
    items: [
      {
        productId: '4',
        productName: 'Floral Summer Dress',
        quantity: 25,
        unitPrice: 34.99
      },
      {
        productId: '5',
        productName: 'Striped Polo Shirt',
        quantity: 20,
        unitPrice: 24.99
      }
    ],
    totalAmount: 1374.75,
    status: 'shipped'
  },
  {
    id: '3',
    clientId: '4',
    clientName: 'Urban Apparel',
    orderDate: '2023-07-18',
    items: [
      {
        productId: '7',
        productName: 'Leather Bomber Jacket',
        quantity: 10,
        unitPrice: 129.99
      },
      {
        productId: '8',
        productName: 'Wool Winter Coat',
        quantity: 15,
        unitPrice: 149.99
      }
    ],
    totalAmount: 3549.75,
    status: 'pending'
  },
  {
    id: '4',
    clientId: '5',
    clientName: 'Classic Clothing Co.',
    orderDate: '2023-08-05',
    items: [
      {
        productId: '1',
        productName: 'Classic White T-Shirt',
        quantity: 100,
        unitPrice: 12.99
      },
      {
        productId: '6',
        productName: 'Slim Fit Chinos',
        quantity: 50,
        unitPrice: 39.99
      }
    ],
    totalAmount: 3298.50,
    status: 'pending'
  },
  {
    id: '5',
    clientId: '3',
    clientName: 'Trendy Threads',
    orderDate: '2023-08-12',
    items: [
      {
        productId: '3',
        productName: 'Navy Blue Blazer',
        quantity: 15,
        unitPrice: 89.99
      },
      {
        productId: '5',
        productName: 'Striped Polo Shirt',
        quantity: 40,
        unitPrice: 24.99
      }
    ],
    totalAmount: 2349.45,
    status: 'completed'
  }
];

// Dashboard Analytics Data
export const dashboardData = {
  totalClients: clients.length,
  activeClients: clients.filter(client => client.status === 'active').length,
  totalProducts: products.length,
  totalOrders: orders.length,
  revenue: orders.reduce((sum, order) => sum + order.totalAmount, 0),
  pendingOrders: orders.filter(order => order.status === 'pending').length,
  
  // Top selling products calculation
  topProducts: [
    { name: 'Classic White T-Shirt', sold: 150, revenue: 1948.50 },
    { name: 'Black Denim Jeans', sold: 80, revenue: 2399.20 },
    { name: 'Striped Polo Shirt', sold: 60, revenue: 1499.40 },
    { name: 'Slim Fit Chinos', sold: 50, revenue: 1999.50 },
  ],
  
  // Recent orders are just the 5 most recent orders
  recentOrders: orders.slice(0, 5),
};

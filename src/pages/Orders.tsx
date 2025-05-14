
import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { OrderTable } from '@/components/orders/OrderTable';
import { orders, Order } from '@/data/mockData';
import { useToast } from '@/hooks/use-toast';

const Orders = () => {
  const [orderData] = useState<Order[]>(orders);
  const { toast } = useToast();
  
  // Handler for viewing order details
  const handleViewOrder = (order: Order) => {
    toast({
      title: "Feature Coming Soon",
      description: "Order details view will be available in the next update."
    });
  };
  
  // Handler for adding a new order
  const handleAddOrder = () => {
    toast({
      title: "Feature Coming Soon",
      description: "Order creation will be available in the next update."
    });
  };
  
  // Handler for generating an invoice
  const handleGenerateInvoice = (order: Order) => {
    toast({
      title: "Feature Coming Soon",
      description: "Invoice generation will be available in the next update."
    });
  };
  
  return (
    <Layout title="Orders">
      <OrderTable 
        orders={orderData}
        onView={handleViewOrder}
        onAdd={handleAddOrder}
        onGenerateInvoice={handleGenerateInvoice}
      />
    </Layout>
  );
};

export default Orders;

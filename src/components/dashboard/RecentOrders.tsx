
import { Order } from '@/data/mockData';
import { Link } from 'react-router-dom';

interface RecentOrdersProps {
  orders: Order[];
}

export function RecentOrders({ orders }: RecentOrdersProps) {
  // Function to format the status as a badge
  const renderStatusBadge = (status: Order['status']) => {
    const statusStyles = {
      pending: 'bg-yellow-100 text-yellow-800',
      shipped: 'bg-blue-100 text-blue-800',
      completed: 'bg-green-100 text-green-800',
      cancelled: 'bg-red-100 text-red-800',
    };
    
    return (
      <span className={`px-2 py-1 text-xs rounded-full ${statusStyles[status]}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };
  
  return (
    <div className="bg-white rounded-lg shadow border border-slate-100">
      <div className="flex items-center justify-between p-4 border-b border-slate-200">
        <h2 className="text-lg font-medium text-slate-800">Recent Orders</h2>
        <Link to="/orders" className="text-sm text-blue-600 hover:underline">
          View all
        </Link>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-50">
              <th className="px-4 py-3 text-left font-medium text-slate-500">Order ID</th>
              <th className="px-4 py-3 text-left font-medium text-slate-500">Client</th>
              <th className="px-4 py-3 text-left font-medium text-slate-500">Date</th>
              <th className="px-4 py-3 text-left font-medium text-slate-500">Amount</th>
              <th className="px-4 py-3 text-left font-medium text-slate-500">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-t border-slate-200 hover:bg-slate-50">
                <td className="px-4 py-3">
                  <Link to={`/orders/${order.id}`} className="text-blue-600 hover:underline">
                    #{order.id}
                  </Link>
                </td>
                <td className="px-4 py-3">{order.clientName}</td>
                <td className="px-4 py-3">{new Date(order.orderDate).toLocaleDateString()}</td>
                <td className="px-4 py-3">${order.totalAmount.toLocaleString()}</td>
                <td className="px-4 py-3">{renderStatusBadge(order.status)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

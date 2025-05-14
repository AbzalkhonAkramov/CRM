
import { useState } from 'react';
import { Order } from '@/data/mockData';
import { Eye, Plus, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

interface OrderTableProps {
  orders: Order[];
  onView: (order: Order) => void;
  onAdd: () => void;
  onGenerateInvoice: (order: Order) => void;
}

export function OrderTable({ orders, onView, onAdd, onGenerateInvoice }: OrderTableProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'pending' | 'shipped' | 'completed' | 'cancelled'>('all');
  
  // Filter orders based on search term and status
  const filteredOrders = orders.filter(order => {
    const matchesSearch = 
      order.id.includes(searchTerm) || 
      order.clientName.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (statusFilter === 'all') return matchesSearch;
    return matchesSearch && order.status === statusFilter;
  });
  
  // Format date string to local date
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString();
  };
  
  // Function to render status badge
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
    <div className="bg-white rounded-lg shadow">
      {/* Header and filters */}
      <div className="p-4 border-b border-slate-200">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h2 className="text-lg font-medium text-slate-800">Order Management</h2>
          
          <div className="flex flex-col sm:flex-row gap-2">
            {/* Search input */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search orders..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full sm:w-64 pl-3 pr-10 py-2 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            
            {/* Status filter */}
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as any)}
              className="px-3 py-2 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="all">All Statuses</option>
              <option value="pending">Pending</option>
              <option value="shipped">Shipped</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
            
            {/* Add order button */}
            <button
              onClick={onAdd}
              className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition-colors"
            >
              <Plus className="h-4 w-4 mr-1" />
              New Order
            </button>
          </div>
        </div>
      </div>
      
      {/* Order table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead>
            <tr className="bg-slate-50">
              <th className="px-4 py-3 text-slate-500 font-medium">Order ID</th>
              <th className="px-4 py-3 text-slate-500 font-medium">Client</th>
              <th className="px-4 py-3 text-slate-500 font-medium">Date</th>
              <th className="px-4 py-3 text-slate-500 font-medium">Amount</th>
              <th className="px-4 py-3 text-slate-500 font-medium">Status</th>
              <th className="px-4 py-3 text-slate-500 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.length > 0 ? (
              filteredOrders.map((order) => (
                <tr key={order.id} className="border-t border-slate-200 hover:bg-slate-50">
                  <td className="px-4 py-3 font-medium text-slate-800">#{order.id}</td>
                  <td className="px-4 py-3">{order.clientName}</td>
                  <td className="px-4 py-3">{formatDate(order.orderDate)}</td>
                  <td className="px-4 py-3">${order.totalAmount.toLocaleString()}</td>
                  <td className="px-4 py-3">{renderStatusBadge(order.status)}</td>
                  <td className="px-4 py-3">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => onView(order)}
                        className="p-1 text-blue-600 hover:text-blue-800 flex items-center"
                        title="View Order"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => onGenerateInvoice(order)}
                        className="p-1 text-green-600 hover:text-green-800 flex items-center"
                        title="Generate Invoice"
                      >
                        <FileText className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="px-4 py-6 text-center text-slate-500">
                  No orders found. Try adjusting your search or filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

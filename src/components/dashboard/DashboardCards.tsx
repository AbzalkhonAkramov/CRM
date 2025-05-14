
import { BarChart3, ShoppingBag, Users, ClipboardList } from 'lucide-react';

interface DashboardCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  description?: string;
  change?: number;
}

function DashboardCard({ title, value, icon, description, change }: DashboardCardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-5 border border-slate-100">
      <div className="flex justify-between">
        <div>
          <h3 className="text-sm font-medium text-slate-500">{title}</h3>
          <div className="mt-1 text-2xl font-semibold text-slate-800">{value}</div>
          
          {description && (
            <p className="mt-1 text-xs text-slate-500">{description}</p>
          )}
          
          {change !== undefined && (
            <div className={`mt-2 text-xs font-medium ${change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {change >= 0 ? '↑' : '↓'} {Math.abs(change)}% from last month
            </div>
          )}
        </div>
        
        <div className="rounded-full bg-blue-50 p-3 text-blue-600">
          {icon}
        </div>
      </div>
    </div>
  );
}

interface DashboardCardsProps {
  totalClients: number;
  activeClients: number;
  totalProducts: number;
  totalOrders: number;
  pendingOrders: number;
  revenue: number;
}

export function DashboardCards({
  totalClients,
  activeClients,
  totalProducts,
  totalOrders,
  pendingOrders,
  revenue
}: DashboardCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <DashboardCard
        title="Total Clients"
        value={totalClients}
        icon={<Users className="h-5 w-5" />}
        description={`${activeClients} active clients`}
        change={8}
      />
      
      <DashboardCard
        title="Total Products"
        value={totalProducts}
        icon={<ShoppingBag className="h-5 w-5" />}
        change={5}
      />
      
      <DashboardCard
        title="Total Orders"
        value={totalOrders}
        icon={<ClipboardList className="h-5 w-5" />}
        description={`${pendingOrders} pending orders`}
        change={12}
      />
      
      <DashboardCard
        title="Total Revenue"
        value={`$${revenue.toLocaleString()}`}
        icon={<BarChart3 className="h-5 w-5" />}
        change={-3}
      />
    </div>
  );
}


import { Layout } from '@/components/layout/Layout';
import { DashboardCards } from '@/components/dashboard/DashboardCards';
import { RecentOrders } from '@/components/dashboard/RecentOrders';
import { TopProducts } from '@/components/dashboard/TopProducts';
import { dashboardData, orders } from '@/data/mockData';

const Dashboard = () => {
  return (
    <Layout title="Dashboard">
      <div className="space-y-6">
        {/* Dashboard Cards */}
        <DashboardCards
          totalClients={dashboardData.totalClients}
          activeClients={dashboardData.activeClients}
          totalProducts={dashboardData.totalProducts}
          totalOrders={dashboardData.totalOrders}
          pendingOrders={dashboardData.pendingOrders}
          revenue={dashboardData.revenue}
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Orders */}
          <RecentOrders orders={orders.slice(0, 5)} />
          
          {/* Top Products */}
          <TopProducts products={dashboardData.topProducts} />
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;

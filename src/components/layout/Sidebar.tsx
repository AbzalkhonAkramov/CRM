
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  ShoppingBag, 
  ClipboardList,
  Settings,
  Menu,
  X
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';

const navItems = [
  { 
    name: 'Dashboard', 
    path: '/', 
    icon: <LayoutDashboard className="h-5 w-5" /> 
  },
  { 
    name: 'Clients', 
    path: '/clients', 
    icon: <Users className="h-5 w-5" /> 
  },
  { 
    name: 'Products', 
    path: '/products', 
    icon: <ShoppingBag className="h-5 w-5" /> 
  },
  { 
    name: 'Orders', 
    path: '/orders', 
    icon: <ClipboardList className="h-5 w-5" /> 
  },
  { 
    name: 'Settings', 
    path: '/settings', 
    icon: <Settings className="h-5 w-5" /> 
  },
];

export function Sidebar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Mobile toggle */}
      <button 
        className="lg:hidden fixed z-20 top-4 left-4 p-2 bg-white rounded-md shadow-md"
        onClick={toggleSidebar}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
      
      {/* Sidebar */}
      <div className={cn(
        "fixed inset-y-0 left-0 z-10 w-64 bg-slate-800 text-white transform transition-transform duration-200 ease-in-out lg:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="p-4 border-b border-slate-700">
          <h1 className="text-xl font-bold">Attire Wholesale</h1>
          <p className="text-xs text-slate-400">Clothing CRM</p>
        </div>
        
        <nav className="mt-6">
          <ul className="space-y-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={cn(
                      "flex items-center px-4 py-3 text-sm",
                      isActive 
                        ? "bg-blue-600 text-white" 
                        : "text-slate-300 hover:bg-slate-700"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="mr-3">{item.icon}</span>
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        
        <div className="absolute bottom-0 w-full p-4 border-t border-slate-700">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium">
              A
            </div>
            <div className="ml-2">
              <p className="text-sm font-medium">Admin User</p>
              <p className="text-xs text-slate-400">admin@attire.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

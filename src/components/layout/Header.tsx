
import { Bell, Search } from 'lucide-react';

export function Header({ title }: { title: string }) {
  return (
    <header className="bg-white border-b border-slate-200">
      <div className="flex justify-between items-center px-4 py-3">
        <h1 className="text-xl font-semibold text-slate-800">{title}</h1>
        
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="hidden md:flex items-center relative">
            <Search className="absolute left-2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-8 pr-4 py-1 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          
          {/* Notifications */}
          <button className="p-1 rounded-full hover:bg-slate-100">
            <Bell className="h-5 w-5 text-slate-600" />
          </button>
          
          {/* User Menu (Mobile only) */}
          <div className="lg:hidden">
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium">
              A
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

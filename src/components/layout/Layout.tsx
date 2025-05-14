
import { ReactNode } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';

interface LayoutProps {
  children: ReactNode;
  title: string;
}

export function Layout({ children, title }: LayoutProps) {
  return (
    <div className="flex h-screen bg-slate-50">
      <Sidebar />
      
      <main className="flex-1 lg:ml-64">
        <Header title={title} />
        <div className="p-4 md:p-6">
          {children}
        </div>
      </main>
    </div>
  );
}


interface TopProduct {
  name: string;
  sold: number;
  revenue: number;
}

interface TopProductsProps {
  products: TopProduct[];
}

export function TopProducts({ products }: TopProductsProps) {
  return (
    <div className="bg-white rounded-lg shadow border border-slate-100">
      <div className="flex items-center justify-between p-4 border-b border-slate-200">
        <h2 className="text-lg font-medium text-slate-800">Top Selling Products</h2>
        <a href="/products" className="text-sm text-blue-600 hover:underline">
          View all products
        </a>
      </div>
      
      <div className="p-4">
        {products.map((product, index) => (
          <div 
            key={product.name} 
            className={`flex items-center justify-between py-3 ${
              index < products.length - 1 ? 'border-b border-slate-200' : ''
            }`}
          >
            <div>
              <p className="font-medium text-slate-800">{product.name}</p>
              <p className="text-sm text-slate-500">{product.sold} units sold</p>
            </div>
            <p className="font-medium text-slate-800">${product.revenue.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

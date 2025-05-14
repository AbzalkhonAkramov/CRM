
import { Product } from '@/data/mockData';
import { Edit, Trash2 } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onEdit: (product: Product) => void;
  onDelete: (id: string) => void;
}

export function ProductCard({ product, onEdit, onDelete }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow border border-slate-100 overflow-hidden">
      {/* Product Image */}
      <div className="aspect-square bg-slate-100 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            // Fallback to placeholder if image fails to load
            (e.target as HTMLImageElement).src = 'https://via.placeholder.com/300';
          }}
        />
      </div>
      
      {/* Product Info */}
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-md font-medium text-slate-800">{product.name}</h3>
          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
            {product.category}
          </span>
        </div>
        
        <p className="mt-1 text-xs text-slate-500">SKU: {product.sku}</p>
        
        <div className="mt-3 flex justify-between items-center">
          <p className="text-lg font-semibold text-slate-800">${product.pricePerUnit.toFixed(2)}</p>
          <p className={`text-sm ${product.stockQuantity > 50 ? 'text-green-600' : 'text-orange-600'}`}>
            {product.stockQuantity} in stock
          </p>
        </div>
        
        {/* Actions */}
        <div className="mt-4 flex justify-between items-center border-t border-slate-100 pt-3">
          <button
            onClick={() => onEdit(product)}
            className="flex items-center text-sm text-blue-600 hover:text-blue-800"
          >
            <Edit className="h-4 w-4 mr-1" />
            Edit
          </button>
          
          <button
            onClick={() => onDelete(product.id)}
            className="flex items-center text-sm text-red-600 hover:text-red-800"
          >
            <Trash2 className="h-4 w-4 mr-1" />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

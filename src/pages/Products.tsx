
import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { ProductGrid } from '@/components/products/ProductGrid';
import { products, Product } from '@/data/mockData';
import { useToast } from '@/hooks/use-toast';

const Products = () => {
  const [productData, setProductData] = useState<Product[]>(products);
  const { toast } = useToast();
  
  // Handler for adding a new product
  const handleAddProduct = () => {
    toast({
      title: "Feature Coming Soon",
      description: "Product creation will be available in the next update."
    });
  };
  
  // Handler for editing a product
  const handleEditProduct = (product: Product) => {
    toast({
      title: "Feature Coming Soon",
      description: "Product editing will be available in the next update."
    });
  };
  
  // Handler for deleting a product
  const handleDeleteProduct = (id: string) => {
    if (confirm('Are you sure you want to delete this product?')) {
      const updatedProducts = productData.filter(product => product.id !== id);
      setProductData(updatedProducts);
      
      toast({
        title: "Product Deleted",
        description: "The product has been deleted successfully."
      });
    }
  };
  
  return (
    <Layout title="Products">
      <ProductGrid 
        products={productData}
        onAdd={handleAddProduct}
        onEdit={handleEditProduct}
        onDelete={handleDeleteProduct}
      />
    </Layout>
  );
};

export default Products;

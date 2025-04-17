
import { ProductCard } from "./ProductCard";
import { Product } from "@/data/products";

interface ProductGridProps {
  products: Product[];
  compact?: boolean;
}

export function ProductGrid({ products, compact }: ProductGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} compact={compact} />
      ))}
    </div>
  );
}


import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { Product } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCartStore } from "@/stores/cartStore";

interface ProductCardProps {
  product: Product;
  compact?: boolean;
}

export function ProductCard({ product, compact = false }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);
  
  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity: 1,
      size: product.sizes[0],
    });
  };

  return (
    <div className={`group relative ${compact ? "" : "h-full"}`}>
      {/* Product image */}
      <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-90">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.images[0]}
            alt={product.name}
            className="h-full w-full object-cover product-zoom"
          />
        </Link>

        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {product.newArrival && (
            <Badge className="bg-primary">New</Badge>
          )}
          {product.bestSeller && (
            <Badge variant="secondary">Best Seller</Badge>
          )}
        </div>

        {/* Wishlist button */}
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-2 right-2 h-9 w-9 rounded-full bg-white/80 opacity-0 shadow-sm backdrop-blur transition-opacity group-hover:opacity-100"
        >
          <Heart className="h-5 w-5" />
        </Button>
        
        {!compact && (
          <Button
            className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 transition-opacity group-hover:opacity-100 btn-bounce"
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
        )}
      </div>

      {/* Product info */}
      <div className="mt-3">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-medium text-sm sm:text-base tracking-tight text-gray-900">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 text-sm sm:text-base font-medium text-primary">${product.price.toFixed(2)}</p>
        
        {!compact && (
          <div className="mt-1 flex items-center">
            {/* Rating stars */}
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`h-3 w-3 ${
                    i < Math.floor(product.rating) ? "text-amber-500" : "text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z"
                  />
                </svg>
              ))}
            </div>
            <span className="ml-1 text-xs text-gray-500">({product.reviewCount})</span>
          </div>
        )}
      </div>
    </div>
  );
}

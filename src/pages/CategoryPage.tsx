
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { ProductGrid } from "@/components/products/ProductGrid";
import { getProductsByCategory, products, Product } from "@/data/products";
import { Button } from "@/components/ui/button";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronDown, ChevronUp, SlidersHorizontal } from "lucide-react";

export default function CategoryPage() {
  const { categoryName } = useParams();
  const [sortBy, setSortBy] = useState("featured");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);
  const [showFilters, setShowFilters] = useState(false);
  
  let categoryProducts = categoryName 
    ? getProductsByCategory(categoryName) 
    : products;
  
  // Category title formatting
  const formatCategoryTitle = (category: string | undefined): string => {
    if (!category) return "All Products";
    
    switch(category) {
      case "new-arrivals": return "New Arrivals";
      case "best-sellers": return "Best Sellers";
      case "featured": return "Featured Products";
      default: return category.charAt(0).toUpperCase() + category.slice(1);
    }
  };
  
  // Apply sorting
  const sortProducts = (items: Product[]): Product[] => {
    switch(sortBy) {
      case "price-asc":
        return [...items].sort((a, b) => a.price - b.price);
      case "price-desc":
        return [...items].sort((a, b) => b.price - a.price);
      case "newest":
        return [...items].filter(item => item.newArrival).concat(
          [...items].filter(item => !item.newArrival)
        );
      case "best-selling":
        return [...items].filter(item => item.bestSeller).concat(
          [...items].filter(item => !item.bestSeller)
        );
      case "featured":
      default:
        return [...items].filter(item => item.featured).concat(
          [...items].filter(item => !item.featured)
        );
    }
  };
  
  // Apply price filter
  const filterByPrice = (items: Product[]): Product[] => {
    return items.filter(
      item => item.price >= priceRange[0] && item.price <= priceRange[1]
    );
  };
  
  // Apply all filters and sorting
  const displayedProducts = sortProducts(filterByPrice(categoryProducts));
  
  return (
    <Layout>
      <div className="container py-8">
        <h1 className="text-2xl md:text-3xl font-semibold mb-6">
          {formatCategoryTitle(categoryName)}
        </h1>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="w-full md:w-auto mb-4 md:mb-0">
            <Button
              variant="outline"
              className="flex items-center gap-2 md:hidden w-full"
              onClick={() => setShowFilters(!showFilters)}
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
              {showFilters ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </Button>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Sort by:</span>
            <Select defaultValue={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[160px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="best-selling">Best Selling</SelectItem>
                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                <SelectItem value="price-desc">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Filters - Desktop */}
          <div className="hidden md:block">
            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-3">Price Range</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">${priceRange[0]}</span>
                    <span className="text-sm">${priceRange[1]}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    step="10"
                    className="w-full"
                    value={priceRange[1]}
                    onChange={(e) => 
                      setPriceRange([priceRange[0], parseInt(e.target.value)])
                    }
                  />
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-3">Size</h3>
                <div className="grid grid-cols-2 gap-2">
                  {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                    <Button
                      key={size}
                      variant="outline"
                      size="sm"
                      className="justify-center"
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-3">Color</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    { name: 'Black', value: '#000000' },
                    { name: 'White', value: '#FFFFFF' },
                    { name: 'Navy', value: '#0A2463' },
                    { name: 'Red', value: '#FF0000' },
                    { name: 'Green', value: '#556B2F' },
                  ].map((color) => (
                    <button
                      key={color.name}
                      className="h-8 w-8 rounded-full border hover:ring-2 hover:ring-primary hover:ring-offset-2"
                      style={{ backgroundColor: color.value }}
                      aria-label={`Filter by ${color.name} color`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile Filters */}
          {showFilters && (
            <div className="md:hidden mb-6 border rounded-lg p-4 bg-background">
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-3">Price Range</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">${priceRange[0]}</span>
                      <span className="text-sm">${priceRange[1]}</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      step="10"
                      className="w-full"
                      value={priceRange[1]}
                      onChange={(e) => 
                        setPriceRange([priceRange[0], parseInt(e.target.value)])
                      }
                    />
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-3">Size</h3>
                  <div className="grid grid-cols-5 gap-2">
                    {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                      <Button
                        key={size}
                        variant="outline"
                        size="sm"
                        className="justify-center"
                      >
                        {size}
                      </Button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-3">Color</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { name: 'Black', value: '#000000' },
                      { name: 'White', value: '#FFFFFF' },
                      { name: 'Navy', value: '#0A2463' },
                      { name: 'Red', value: '#FF0000' },
                      { name: 'Green', value: '#556B2F' },
                    ].map((color) => (
                      <button
                        key={color.name}
                        className="h-8 w-8 rounded-full border hover:ring-2 hover:ring-primary hover:ring-offset-2"
                        style={{ backgroundColor: color.value }}
                        aria-label={`Filter by ${color.name} color`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Products */}
          <div className="md:col-span-3">
            {displayedProducts.length > 0 ? (
              <>
                <ProductGrid products={displayedProducts} />
                <div className="mt-8 flex justify-center">
                  <Button variant="outline">Load More</Button>
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <h3 className="font-medium text-lg mb-2">No products found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your filters or browse our other categories.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

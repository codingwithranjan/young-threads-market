
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronLeft, Heart, Truck, Shield, RotateCcw, Star } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCartStore } from "@/stores/cartStore";
import { getProductById, Product, products } from "@/data/products";
import { ProductGrid } from "@/components/products/ProductGrid";

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id ?? "") as Product;
  const relatedProducts = products.filter((p) => 
    p.category === product.category && p.id !== product.id
  ).slice(0, 4);
  
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || "");
  const [selectedColor, setSelectedColor] = useState(product?.colors[0]?.value || "");
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  
  const addItem = useCartStore((state) => state.addItem);
  
  const handleAddToCart = () => {
    if (product) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        quantity,
        size: selectedSize,
        color: selectedColor,
      });
    }
  };
  
  if (!product) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="text-2xl font-semibold mb-4">Product Not Found</h1>
          <p className="mb-6">Sorry, the product you are looking for does not exist.</p>
          <Link to="/">
            <Button>Return to Home</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container py-8">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link to={`/category/${product.category}`} className="hover:text-primary capitalize">
            {product.category}
          </Link>
          <span className="mx-2">/</span>
          <span>{product.name}</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Product images */}
          <div>
            <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 mb-4">
              <img 
                src={product.images[activeImage]} 
                alt={product.name} 
                className="h-full w-full object-cover"
              />
            </div>
            
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <div 
                  key={index} 
                  className={`aspect-square cursor-pointer overflow-hidden rounded-md bg-gray-100 hover:opacity-75 ${
                    index === activeImage ? "ring-2 ring-primary" : ""
                  }`}
                  onClick={() => setActiveImage(index)}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} ${index + 1}`}
                    className="h-full w-full object-cover" 
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Product info */}
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold">{product.name}</h1>
            
            <div className="mt-3 flex items-center">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(product.rating) ? "text-amber-500 fill-amber-500" : "text-muted"
                    }`}
                  />
                ))}
              </div>
              <span className="ml-2 text-sm text-muted-foreground">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>
            
            <div className="mt-5">
              <p className="text-2xl font-semibold">${product.price.toFixed(2)}</p>
              <p className="text-sm text-muted-foreground mt-1">
                Tax included. Shipping calculated at checkout.
              </p>
            </div>
            
            <div className="mt-6">
              <h3 className="text-sm font-medium mb-2">Size</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className={`min-w-[3rem] px-3 py-2 text-sm font-medium rounded-md border ${
                      selectedSize === size
                        ? "bg-primary text-white border-primary"
                        : "bg-background hover:bg-muted"
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="text-sm font-medium mb-2">Color</h3>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color.value}
                    className={`h-10 w-10 rounded-full border ${
                      selectedColor === color.value ? "ring-2 ring-primary ring-offset-2" : ""
                    }`}
                    style={{ backgroundColor: color.value }}
                    onClick={() => setSelectedColor(color.value)}
                    aria-label={`Select ${color.name} color`}
                  />
                ))}
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="text-sm font-medium mb-2">Quantity</h3>
              <div className="flex h-10 w-32">
                <button
                  type="button"
                  className="flex items-center justify-center rounded-l-md border border-r-0 px-3 hover:bg-muted"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </button>
                <div className="flex w-full items-center justify-center border px-3">
                  {quantity}
                </div>
                <button
                  type="button"
                  className="flex items-center justify-center rounded-r-md border border-l-0 px-3 hover:bg-muted"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="flex-1 btn-bounce" onClick={handleAddToCart}>
                Add to Cart
              </Button>
              <Button size="lg" variant="outline" className="flex-1">
                <Heart className="mr-2 h-5 w-5" />
                Add to Wishlist
              </Button>
            </div>
            
            <div className="mt-8 space-y-4">
              <div className="flex gap-3">
                <Truck className="h-6 w-6 text-muted-foreground" />
                <div>
                  <h4 className="font-medium">Free Delivery</h4>
                  <p className="text-sm text-muted-foreground">Free shipping on all orders over $50</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Shield className="h-6 w-6 text-muted-foreground" />
                <div>
                  <h4 className="font-medium">Quality Guarantee</h4>
                  <p className="text-sm text-muted-foreground">
                    If you're not satisfied with the quality, return it for a full refund
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <RotateCcw className="h-6 w-6 text-muted-foreground" />
                <div>
                  <h4 className="font-medium">Easy Returns</h4>
                  <p className="text-sm text-muted-foreground">30 days return policy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <Tabs defaultValue="description">
            <TabsList className="w-full border-b rounded-none justify-start mb-6 bg-transparent">
              <TabsTrigger value="description" className="text-base">
                Description
              </TabsTrigger>
              <TabsTrigger value="details" className="text-base">
                Details & Care
              </TabsTrigger>
              <TabsTrigger value="reviews" className="text-base">
                Reviews
              </TabsTrigger>
            </TabsList>
            <TabsContent value="description">
              <p className="text-muted-foreground">{product.description}</p>
            </TabsContent>
            <TabsContent value="details">
              <div className="space-y-4">
                <h3 className="font-medium">Product Details</h3>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>High-quality materials for durability</li>
                  <li>Comfortable fit for all-day wear</li>
                  <li>Machine washable</li>
                  <li>Imported</li>
                </ul>
                
                <h3 className="font-medium mt-6">Care Instructions</h3>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>Machine wash cold</li>
                  <li>Tumble dry low</li>
                  <li>Do not bleach</li>
                  <li>Iron on low if needed</li>
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="reviews">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="text-5xl font-semibold">{product.rating.toFixed(1)}</div>
                    <div className="flex mt-1 justify-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating) ? "text-amber-500 fill-amber-500" : "text-muted"
                          }`}
                        />
                      ))}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">{product.reviewCount} reviews</div>
                  </div>
                  
                  <div className="flex-1">
                    {/* Sample review distribution */}
                    {[5, 4, 3, 2, 1].map((star) => (
                      <div key={star} className="flex items-center gap-2">
                        <div className="text-sm w-3">{star}</div>
                        <Star className="h-3 w-3 text-amber-500 fill-amber-500" />
                        <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-amber-500 rounded-full"
                            style={{
                              width: `${
                                star === 5 ? 70 : star === 4 ? 20 : star === 3 ? 7 : star === 2 ? 3 : 0
                              }%`,
                            }}
                          />
                        </div>
                        <div className="text-xs text-muted-foreground w-8">
                          {star === 5 ? 70 : star === 4 ? 20 : star === 3 ? 7 : star === 2 ? 3 : 0}%
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Button>Write a Review</Button>
                
                <div className="space-y-8 mt-10">
                  {/* Sample reviews */}
                  <div className="border-b pb-8">
                    <div className="flex justify-between mb-2">
                      <h4 className="font-medium">Great quality!</h4>
                      <span className="text-muted-foreground text-sm">3 days ago</span>
                    </div>
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < 5 ? "text-amber-500 fill-amber-500" : "text-muted"}`}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      My son loves this! The fabric is really nice quality and it washes well. Will definitely buy more.
                    </p>
                    <div className="text-sm mt-2">
                      <span className="font-medium">Sarah T.</span> - Verified Buyer
                    </div>
                  </div>
                  
                  <div className="border-b pb-8">
                    <div className="flex justify-between mb-2">
                      <h4 className="font-medium">Perfect fit</h4>
                      <span className="text-muted-foreground text-sm">1 week ago</span>
                    </div>
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < 4 ? "text-amber-500 fill-amber-500" : "text-muted"}`}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      The sizing is accurate and the style is exactly as pictured. Very happy with this purchase.
                    </p>
                    <div className="text-sm mt-2">
                      <span className="font-medium">Michael R.</span> - Verified Buyer
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Related products */}
        <div className="mt-20">
          <h2 className="text-2xl font-semibold mb-6">You May Also Like</h2>
          <ProductGrid products={relatedProducts} />
        </div>
      </div>
    </Layout>
  );
}

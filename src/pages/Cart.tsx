
import { useState } from "react";
import { Link } from "react-router-dom";
import { Trash2, X, ChevronLeft, ShoppingBag, ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/stores/cartStore";

export default function Cart() {
  const { items, removeItem, updateQuantity, totalPrice } = useCartStore();
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  
  const discount = promoApplied ? totalPrice() * 0.1 : 0;
  const subtotal = totalPrice();
  const shippingEstimate = subtotal > 50 ? 0 : 5.99;
  const taxEstimate = subtotal * 0.08;
  const total = subtotal - discount + shippingEstimate + taxEstimate;
  
  const handleApplyPromo = () => {
    if (promoCode.toLowerCase() === "welcome10") {
      setPromoApplied(true);
    }
  };
  
  if (items.length === 0) {
    return (
      <Layout>
        <div className="container py-16 md:py-24 text-center">
          <div className="mx-auto max-w-md">
            <ShoppingBag className="h-20 w-20 mx-auto mb-6 text-muted-foreground" strokeWidth={1} />
            <h1 className="text-2xl font-semibold mb-4">Your cart is empty</h1>
            <p className="text-muted-foreground mb-8">
              Looks like you haven't added any items to your cart yet.
            </p>
            <Link to="/category/new-arrivals">
              <Button className="btn-bounce">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container py-8 md:py-12">
        <h1 className="text-2xl md:text-3xl font-semibold mb-6">Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="border rounded-md">
              <div className="bg-muted p-4 rounded-t-md">
                <div className="grid grid-cols-6 text-sm font-medium">
                  <div className="col-span-3">Product</div>
                  <div className="text-center">Price</div>
                  <div className="text-center">Quantity</div>
                  <div className="text-right">Total</div>
                </div>
              </div>
              
              <div className="divide-y">
                {items.map((item) => (
                  <div key={`${item.id}-${item.size}`} className="p-4">
                    <div className="grid grid-cols-6 items-center gap-4">
                      <div className="col-span-3 flex items-center gap-4">
                        <div className="h-20 w-20 bg-muted rounded-md overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-medium">
                            <Link to={`/product/${item.id}`}>{item.name}</Link>
                          </h3>
                          <div className="mt-1 flex text-xs text-muted-foreground">
                            {item.size && <div className="mr-2">Size: {item.size}</div>}
                            {item.color && (
                              <div className="flex items-center">
                                <span className="mr-1">Color:</span>
                                <span
                                  className="h-3 w-3 rounded-full"
                                  style={{ backgroundColor: item.color }}
                                />
                              </div>
                            )}
                          </div>
                          <button
                            className="mt-2 flex items-center text-xs text-red-500 hover:text-red-600"
                            onClick={() => removeItem(item.id, item.size)}
                          >
                            <Trash2 className="h-3 w-3 mr-1" />
                            Remove
                          </button>
                        </div>
                      </div>
                      
                      <div className="text-center">
                        ${item.price.toFixed(2)}
                      </div>
                      
                      <div className="flex justify-center">
                        <div className="flex h-8 w-24">
                          <button
                            type="button"
                            className="flex items-center justify-center rounded-l border border-r-0 px-2 hover:bg-muted text-sm"
                            onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1), item.size)}
                          >
                            -
                          </button>
                          <div className="flex w-full items-center justify-center border text-sm">
                            {item.quantity}
                          </div>
                          <button
                            type="button"
                            className="flex items-center justify-center rounded-r border border-l-0 px-2 hover:bg-muted text-sm"
                            onClick={() => updateQuantity(item.id, item.quantity + 1, item.size)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      
                      <div className="text-right font-medium">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-8 flex justify-between items-center">
              <Link to="/" className="flex items-center text-sm hover:text-primary">
                <ChevronLeft className="h-4 w-4 mr-1" />
                Continue Shopping
              </Link>
            </div>
          </div>
          
          <div>
            <div className="border rounded-md p-6 bg-muted/50">
              <h2 className="text-lg font-medium mb-6">Order Summary</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-sm text-green-600">
                    <span>Discount (WELCOME10)</span>
                    <span>-${discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm">
                  <span>Shipping estimate</span>
                  {shippingEstimate > 0 ? (
                    <span>${shippingEstimate.toFixed(2)}</span>
                  ) : (
                    <span className="text-green-600">Free</span>
                  )}
                </div>
                <div className="flex justify-between text-sm">
                  <span>Tax estimate</span>
                  <span>${taxEstimate.toFixed(2)}</span>
                </div>
                
                <div className="my-4 border-t pt-4">
                  <div className="flex justify-between font-medium">
                    <span>Order total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
                
                <div className="pt-2">
                  <Link to="/checkout">
                    <Button className="w-full btn-bounce">
                      Checkout
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              
              {!promoApplied && (
                <div className="mt-8">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Promo code"
                      className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                    />
                    <Button 
                      variant="outline" 
                      className="shrink-0"
                      onClick={handleApplyPromo}
                    >
                      Apply
                    </Button>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">
                    Try "WELCOME10" for 10% off your first order
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

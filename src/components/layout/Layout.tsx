
import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useCartStore } from "@/stores/cartStore";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const cartItems = useCartStore((state) => state.items);
  
  return (
    <div className="flex min-h-screen flex-col">
      <Header cartItemsCount={cartItems.length} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

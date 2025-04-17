
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, ShoppingBag, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const categories = [
  { name: "New Arrivals", href: "/category/new-arrivals" },
  { name: "T-Shirts", href: "/category/t-shirts" },
  { name: "Jeans", href: "/category/jeans" },
  { name: "Jackets", href: "/category/jackets" },
  { name: "Shoes", href: "/category/shoes" },
  { name: "Accessories", href: "/category/accessories" },
];

export function Header({ cartItemsCount = 0 }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between">
        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="font-bold text-lg md:text-xl bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-transparent bg-clip-text transform hover:scale-105 transition-transform">
            GENZ FASHION
          </span>
        </Link>

        {/* Desktop Navigation - Centered */}
        <div className="hidden md:flex items-center justify-center flex-1">
          <NavigationMenu>
            <NavigationMenuList>
              {categories.map((category) => (
                <NavigationMenuItem key={category.name}>
                  <Link to={category.href}>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      {category.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Search and Actions */}
        <div className="flex items-center gap-2">
          <div className={cn("relative", isSearchOpen ? "flex" : "hidden md:flex")}>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-1.5 top-1.5 z-10 h-7 w-7 md:hidden"
              onClick={() => setIsSearchOpen(false)}
            >
              <X size={18} />
            </Button>
            <Input
              type="search"
              placeholder="Search..."
              className={cn(
                "w-full md:w-[200px] pl-8 md:pl-10",
                isSearchOpen ? "pl-10" : ""
              )}
            />
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "absolute right-1 top-1.5 h-7 w-7 text-muted-foreground", 
                isSearchOpen ? "" : "md:left-1.5 md:right-auto"
              )}
            >
              <Search size={18} />
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className={cn("md:hidden", isSearchOpen ? "hidden" : "flex")}
            onClick={() => setIsSearchOpen(true)}
          >
            <Search size={20} />
          </Button>

          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => navigate(user ? "/account" : "/auth")}
          >
            <User size={20} />
          </Button>
          
          <Link to="/cart" className="relative">
            <Button variant="ghost" size="icon">
              <ShoppingBag size={20} />
            </Button>
            {cartItemsCount > 0 && (
              <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 rounded-full">
                {cartItemsCount}
              </Badge>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container py-4">
            <nav className="grid gap-2">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  to={category.href}
                  className="flex items-center py-2 hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

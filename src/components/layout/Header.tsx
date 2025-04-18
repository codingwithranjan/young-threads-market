
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
      <div className="container flex h-14 md:h-16 items-center justify-between">
        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-base md:text-xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-transparent bg-clip-text transform hover:scale-105 transition-transform">
            GENZ FASHION
          </span>
        </Link>

        {/* Desktop Navigation - Centered */}
        <nav className="hidden md:flex items-center justify-center flex-1">
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
        </nav>

        {/* Search and Actions */}
        <div className="flex items-center gap-1 md:gap-2">
          <div className={cn(
            "relative",
            isSearchOpen ? "flex w-full absolute left-0 top-0 h-14 md:h-16 px-4 bg-background items-center" : "hidden md:flex"
          )}>
            {isSearchOpen && (
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7 mr-1"
                onClick={() => setIsSearchOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            )}
            <Input
              type="search"
              placeholder="Search..."
              className={cn(
                "w-full md:w-[200px]",
                isSearchOpen ? "pl-2" : "pl-8"
              )}
            />
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "absolute h-7 w-7 text-muted-foreground",
                isSearchOpen ? "right-4" : "left-1.5"
              )}
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className={cn("md:hidden", isSearchOpen ? "hidden" : "flex")}
            onClick={() => setIsSearchOpen(true)}
          >
            <Search className="h-5 w-5" />
          </Button>

          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => navigate(user ? "/account" : "/auth")}
          >
            <User className="h-5 w-5" />
          </Button>
          
          <Link to="/cart" className="relative">
            <Button variant="ghost" size="icon">
              <ShoppingBag className="h-5 w-5" />
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
          <nav className="container py-4">
            <ul className="space-y-4">
              {categories.map((category) => (
                <li key={category.name}>
                  <Link
                    to={category.href}
                    className="flex items-center py-2 text-base hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

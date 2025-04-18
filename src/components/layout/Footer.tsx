
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted">
      <div className="container py-8 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div className="text-center sm:text-left">
            <h3 className="font-bold text-lg mb-3 md:mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-transparent bg-clip-text">GENZ FASHION</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Stylish, comfortable, and trendy fashion for the Gen Z lifestyle.
            </p>
            <div className="flex gap-4 justify-center sm:justify-start">
              <a href="https://instagram.com" className="hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" className="hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div className="text-center sm:text-left mt-6 sm:mt-0">
            <h3 className="font-bold text-sm uppercase tracking-wider mb-3 md:mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/category/new-arrivals" className="hover:text-primary transition-colors">New Arrivals</Link>
              </li>
              <li>
                <Link to="/category/t-shirts" className="hover:text-primary transition-colors">T-Shirts</Link>
              </li>
              <li>
                <Link to="/category/jeans" className="hover:text-primary transition-colors">Jeans</Link>
              </li>
              <li>
                <Link to="/category/jackets" className="hover:text-primary transition-colors">Jackets</Link>
              </li>
              <li>
                <Link to="/category/shoes" className="hover:text-primary transition-colors">Shoes</Link>
              </li>
            </ul>
          </div>
          
          <div className="text-center sm:text-left mt-6 md:mt-0">
            <h3 className="font-bold text-sm uppercase tracking-wider mb-3 md:mb-4">Help</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/shipping" className="hover:text-primary transition-colors">Shipping</Link>
              </li>
              <li>
                <Link to="/returns" className="hover:text-primary transition-colors">Returns</Link>
              </li>
              <li>
                <Link to="/size-guide" className="hover:text-primary transition-colors">Size Guide</Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          <div className="text-center sm:text-left mt-6 md:mt-0">
            <h3 className="font-bold text-sm uppercase tracking-wider mb-3 md:mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/sustainability" className="hover:text-primary transition-colors">Sustainability</Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-6 md:pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground mb-4 sm:mb-0">
            &copy; {new Date().getFullYear()} GENZ FASHION. All rights reserved.
          </p>
          <div className="flex gap-4">
            <img src="/visa.svg" alt="Visa" className="h-5 w-auto" />
            <img src="/mastercard.svg" alt="Mastercard" className="h-5 w-auto" />
            <img src="/paypal.svg" alt="PayPal" className="h-5 w-auto" />
          </div>
        </div>
      </div>
    </footer>
  );
}

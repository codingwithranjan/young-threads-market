
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Young Threads</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Stylish, comfortable, and durable fashion for boys of all ages.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com" className="hover:text-primary" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" className="hover:text-primary" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="hover:text-primary" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/category/new-arrivals" className="hover:text-primary">New Arrivals</Link>
              </li>
              <li>
                <Link to="/category/t-shirts" className="hover:text-primary">T-Shirts</Link>
              </li>
              <li>
                <Link to="/category/jeans" className="hover:text-primary">Jeans</Link>
              </li>
              <li>
                <Link to="/category/jackets" className="hover:text-primary">Jackets</Link>
              </li>
              <li>
                <Link to="/category/shoes" className="hover:text-primary">Shoes</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-4">Help</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/shipping" className="hover:text-primary">Shipping</Link>
              </li>
              <li>
                <Link to="/returns" className="hover:text-primary">Returns</Link>
              </li>
              <li>
                <Link to="/size-guide" className="hover:text-primary">Size Guide</Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-primary">FAQ</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-primary">About Us</Link>
              </li>
              <li>
                <Link to="/sustainability" className="hover:text-primary">Sustainability</Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-primary">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-primary">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground mb-4 sm:mb-0">
            &copy; {new Date().getFullYear()} Young Threads. All rights reserved.
          </p>
          <div className="flex gap-4">
            <img src="/visa.svg" alt="Visa" className="h-6 w-auto" />
            <img src="/mastercard.svg" alt="Mastercard" className="h-6 w-auto" />
            <img src="/paypal.svg" alt="PayPal" className="h-6 w-auto" />
          </div>
        </div>
      </div>
    </footer>
  );
}

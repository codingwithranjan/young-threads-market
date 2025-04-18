
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted">
      <div className="container py-8 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Branding Section */}
          <div className="text-center sm:text-left space-y-4">
            <h3 className="font-bold text-lg md:text-xl bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-transparent bg-clip-text">
              GENZ FASHION
            </h3>
            <p className="text-sm text-muted-foreground">
              Stylish, comfortable, and trendy fashion for the Gen Z lifestyle.
            </p>
            <div className="flex gap-4 justify-center sm:justify-start">
              <a 
                href="https://instagram.com" 
                className="hover:text-primary transition-colors p-2" 
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://facebook.com" 
                className="hover:text-primary transition-colors p-2" 
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com" 
                className="hover:text-primary transition-colors p-2" 
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Shop Links */}
          <div className="text-center sm:text-left">
            <h3 className="font-bold text-sm uppercase tracking-wider mb-4">Shop</h3>
            <ul className="space-y-3">
              {[
                ["New Arrivals", "/category/new-arrivals"],
                ["T-Shirts", "/category/t-shirts"],
                ["Jeans", "/category/jeans"],
                ["Jackets", "/category/jackets"],
                ["Shoes", "/category/shoes"]
              ].map(([name, href]) => (
                <li key={name}>
                  <Link 
                    to={href} 
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Help Links */}
          <div className="text-center sm:text-left">
            <h3 className="font-bold text-sm uppercase tracking-wider mb-4">Help</h3>
            <ul className="space-y-3">
              {[
                ["Shipping", "/shipping"],
                ["Returns", "/returns"],
                ["Size Guide", "/size-guide"],
                ["FAQ", "/faq"],
                ["Contact Us", "/contact"]
              ].map(([name, href]) => (
                <li key={name}>
                  <Link 
                    to={href} 
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company Links */}
          <div className="text-center sm:text-left">
            <h3 className="font-bold text-sm uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-3">
              {[
                ["About Us", "/about"],
                ["Sustainability", "/sustainability"],
                ["Terms & Conditions", "/terms"],
                ["Privacy Policy", "/privacy"]
              ].map(([name, href]) => (
                <li key={name}>
                  <Link 
                    to={href} 
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="border-t mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground text-center sm:text-left">
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


import React from 'react';
import { Layout } from './layout/Layout';

export function SiteArchitecture() {
  return (
    <Layout>
      <div className="container py-16">
        <h1 className="text-3xl font-bold mb-8">Website Architecture</h1>
        
        <div className="flex justify-center">
          <div className="max-w-5xl w-full bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="/site-architecture.svg" 
              alt="Website Architecture Diagram" 
              className="w-full h-auto"
            />
          </div>
        </div>
        
        <div className="mt-8 max-w-3xl mx-auto">
          <h2 className="text-xl font-semibold mb-4">Architecture Overview</h2>
          <p className="text-gray-700 mb-4">
            This diagram illustrates the structure of our GENZ FASHION e-commerce website, 
            showing how different pages are connected and the user flow through the application.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Home Page</strong> - The main landing page with featured products and categories</li>
            <li><strong>Categories</strong> - Various product category pages like T-Shirts, Jeans, etc.</li>
            <li><strong>Product Detail</strong> - Individual product information and purchase options</li>
            <li><strong>Cart</strong> - Shopping cart for reviewing selected items</li>
            <li><strong>Auth</strong> - User authentication (login/signup) functionality</li>
            <li><strong>Account</strong> - User profile and account management (protected route)</li>
            <li><strong>Information Pages</strong> - Various static pages like About, FAQ, etc.</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}

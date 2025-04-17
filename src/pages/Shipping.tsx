
import { Layout } from "@/components/layout/Layout";

export default function Shipping() {
  return (
    <Layout>
      <div className="container py-16">
        <h1 className="text-3xl font-bold mb-8">Shipping Information</h1>
        
        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold mt-8 mb-4">Shipping Policy</h2>
          <p className="mb-4">
            At Young Threads, we strive to deliver your orders as quickly and efficiently as possible. We offer various shipping options to meet your needs.
          </p>
          
          <h3 className="text-xl font-medium mt-6 mb-3">Domestic Shipping</h3>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">Standard Shipping: 3-5 business days (Free for orders over $50)</li>
            <li className="mb-2">Express Shipping: 1-2 business days ($12.99)</li>
            <li className="mb-2">Next Day Shipping: Delivered next business day ($19.99)</li>
          </ul>
          
          <h3 className="text-xl font-medium mt-6 mb-3">International Shipping</h3>
          <p className="mb-4">
            We ship to most countries worldwide. International shipping typically takes 7-14 business days, depending on the destination and customs clearance.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Order Tracking</h2>
          <p className="mb-4">
            Once your order has been dispatched, you will receive a confirmation email with a tracking number. You can use this number to track your package on our website or the courier's website.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Shipping Restrictions</h2>
          <p>
            Some items may be restricted for shipping to certain countries due to local laws and regulations. We reserve the right to cancel orders that violate these restrictions.
          </p>
        </div>
      </div>
    </Layout>
  );
}

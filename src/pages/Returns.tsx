
import { Layout } from "@/components/layout/Layout";

export default function Returns() {
  return (
    <Layout>
      <div className="container py-16">
        <h1 className="text-3xl font-bold mb-8">Returns & Exchanges</h1>
        
        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold mt-8 mb-4">Return Policy</h2>
          <p className="mb-4">
            We want you to be completely satisfied with your purchase. If you're not happy with your order for any reason, you can return it within 30 days of delivery.
          </p>
          
          <h3 className="text-xl font-medium mt-6 mb-3">Return Eligibility</h3>
          <p className="mb-4">To be eligible for a return, your item must be:</p>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">In the same condition that you received it</li>
            <li className="mb-2">Unworn and unwashed</li>
            <li className="mb-2">With all tags attached</li>
            <li className="mb-2">In the original packaging</li>
          </ul>
          
          <h3 className="text-xl font-medium mt-6 mb-3">Non-Returnable Items</h3>
          <p className="mb-4">The following items cannot be returned:</p>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">Gift cards</li>
            <li className="mb-2">Sale items (unless defective)</li>
            <li className="mb-2">Personal items like underwear and swimwear</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Exchange Process</h2>
          <p className="mb-4">
            If you need to exchange an item for a different size or color, please return the original item and place a new order for the desired item. This ensures the fastest processing time.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Refund Process</h2>
          <p className="mb-4">
            Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund.
          </p>
          <p>
            If approved, your refund will be processed, and a credit will automatically be applied to your original payment method within 5-7 business days.
          </p>
        </div>
      </div>
    </Layout>
  );
}

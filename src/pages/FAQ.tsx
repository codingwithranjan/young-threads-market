
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Layout } from "@/components/layout/Layout";

export default function FAQ() {
  return (
    <Layout>
      <div className="container py-16">
        <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How long does shipping take?</AccordionTrigger>
              <AccordionContent>
                Standard domestic shipping takes 3-5 business days. Express shipping is 1-2 business days. 
                International shipping typically takes 7-14 business days, depending on the destination 
                and customs clearance.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger>What is your return policy?</AccordionTrigger>
              <AccordionContent>
                We accept returns within 30 days of delivery. Items must be in their original condition 
                with tags attached. For more details, please visit our <Link to="/returns">Returns</Link> page.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger>How do I find the right size?</AccordionTrigger>
              <AccordionContent>
                We recommend using our <Link to="/size-guide">Size Guide</Link> to find the perfect fit. 
                If you're between sizes, we generally recommend sizing up for growing kids.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger>Do you offer gift wrapping?</AccordionTrigger>
              <AccordionContent>
                Yes, we offer gift wrapping for an additional $5. You can select this option 
                during checkout and include a personalized message.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger>How can I track my order?</AccordionTrigger>
              <AccordionContent>
                Once your order has been shipped, you'll receive a confirmation email with 
                a tracking number. You can use this number to track your package on our website 
                or the courier's website.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-6">
              <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
              <AccordionContent>
                We accept all major credit cards (Visa, MasterCard, American Express), PayPal, 
                and Shop Pay. All transactions are secure and encrypted.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-7">
              <AccordionTrigger>Are your clothes sustainable?</AccordionTrigger>
              <AccordionContent>
                We're committed to sustainability and ethical manufacturing. Many of our products 
                are made from organic cotton and recycled materials. Visit our <Link to="/sustainability">
                Sustainability</Link> page to learn more about our eco-friendly practices.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-8">
              <AccordionTrigger>Do you have physical stores?</AccordionTrigger>
              <AccordionContent>
                Currently, we operate exclusively online. This allows us to offer better prices 
                and reach customers worldwide. However, we're considering opening physical 
                locations in the future.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </Layout>
  );
}

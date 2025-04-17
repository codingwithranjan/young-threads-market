
import { Layout } from "@/components/layout/Layout";

export default function Privacy() {
  return (
    <Layout>
      <div className="container py-16">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose max-w-none">
          <p className="mb-6">
            At Young Threads, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or make a purchase.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
          <p className="mb-4">We collect information that you provide directly to us, including:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Personal information (name, email address, shipping address, phone number)</li>
            <li>Payment information (credit card details, billing address)</li>
            <li>Account information (username, password)</li>
            <li>Order history and preferences</li>
            <li>Communications with us (customer service inquiries, feedback)</li>
          </ul>
          <p className="mb-4">We also automatically collect certain information when you visit our website:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Device information (IP address, browser type, operating system)</li>
            <li>Browsing activity (pages viewed, time spent, clicks)</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
          <p className="mb-4">We use your information for various purposes, including to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Process and fulfill your orders</li>
            <li>Communicate with you about your orders, products, and services</li>
            <li>Manage your account and provide customer support</li>
            <li>Improve our website, products, and services</li>
            <li>Personalize your shopping experience</li>
            <li>Send marketing communications (if you've opted in)</li>
            <li>Prevent fraud and enhance security</li>
            <li>Comply with legal obligations</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Information Sharing</h2>
          <p className="mb-4">We may share your information with:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Service providers who perform services on our behalf (payment processors, shipping companies)</li>
            <li>Professional advisors (lawyers, accountants, insurers)</li>
            <li>Regulatory authorities, law enforcement, or other third parties when required by law</li>
            <li>A buyer or successor in the event of a merger, acquisition, or sale of assets</li>
          </ul>
          <p className="mb-4">
            We do not sell your personal information to third parties for their marketing purposes.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Cookies and Tracking Technologies</h2>
          <p className="mb-4">
            We use cookies and similar technologies to collect information about your browsing activities. 
            You can manage your cookie preferences through your browser settings, but please note that 
            disabling certain cookies may impact your experience on our website.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Data Security</h2>
          <p className="mb-4">
            We implement appropriate technical and organizational measures to protect your personal 
            information. However, no method of transmission over the Internet or electronic storage 
            is 100% secure, and we cannot guarantee absolute security.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Children's Privacy</h2>
          <p className="mb-4">
            Our website is not intended for children under 16 years of age. We do not knowingly collect 
            personal information from children under 16. If you are a parent or guardian and believe 
            your child has provided us with personal information, please contact us.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Your Rights</h2>
          <p className="mb-4">
            Depending on your location, you may have certain rights regarding your personal information, including:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Access to your personal information</li>
            <li>Correction of inaccurate data</li>
            <li>Deletion of your personal information</li>
            <li>Restriction of processing</li>
            <li>Data portability</li>
            <li>Objection to processing</li>
            <li>Withdrawal of consent</li>
          </ul>
          <p className="mb-4">
            To exercise these rights, please contact us using the information provided below.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">8. International Data Transfers</h2>
          <p className="mb-4">
            Your information may be transferred to and processed in countries other than your country 
            of residence. These countries may have different data protection laws. We will take appropriate 
            measures to ensure that your personal information remains protected.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Changes to This Privacy Policy</h2>
          <p className="mb-4">
            We may update this Privacy Policy from time to time. The updated version will be indicated 
            by an updated "Last Updated" date and will be effective immediately upon posting. We 
            encourage you to review this Privacy Policy regularly to stay informed about our information practices.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">10. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:<br />
            Email: privacy@youngthreads.com<br />
            Phone: (123) 456-7890<br />
            Address: 123 Kids Fashion Street, New York, NY 10001, United States
          </p>
          
          <p className="mt-8 text-sm text-muted-foreground">
            Last updated: April 17, 2025
          </p>
        </div>
      </div>
    </Layout>
  );
}

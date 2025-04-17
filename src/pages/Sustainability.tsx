
import { Layout } from "@/components/layout/Layout";
import { Check, Leaf, Recycle, Factory, Package, Heart, Water, Globe } from "lucide-react";

export default function Sustainability() {
  return (
    <Layout>
      <div className="container py-16">
        <h1 className="text-3xl font-bold mb-8">Our Sustainability Commitment</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Building a Better Future</h2>
            <p className="mb-4">
              At Young Threads, we believe that creating high-quality clothing for boys shouldn't come 
              at the expense of our planet. We're committed to sustainable practices throughout our 
              entire production process, from design to delivery.
            </p>
            <p className="mb-4">
              Our journey towards sustainability is ongoing. We're constantly looking for new ways to 
              reduce our environmental footprint while maintaining the durability and style that our 
              customers expect.
            </p>
            <p>
              We believe in transparency and accountability. That's why we share our sustainability 
              practices and progress with our customers, allowing you to make informed choices about 
              the clothes you buy for your children.
            </p>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80" 
              alt="Sustainable clothing production" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold mb-8 text-center">Our Sustainable Practices</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-muted p-6 rounded-lg">
            <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Leaf className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-bold text-lg mb-3">Eco-Friendly Materials</h3>
            <p>
              We prioritize organic cotton, recycled polyester, and other sustainable 
              fabrics that reduce water usage and chemical pollution.
            </p>
          </div>
          
          <div className="bg-muted p-6 rounded-lg">
            <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Factory className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-bold text-lg mb-3">Ethical Manufacturing</h3>
            <p>
              All our factories adhere to strict labor standards, ensuring fair wages, 
              safe working conditions, and no child labor.
            </p>
          </div>
          
          <div className="bg-muted p-6 rounded-lg">
            <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Package className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-bold text-lg mb-3">Sustainable Packaging</h3>
            <p>
              Our packaging is made from recycled and biodegradable materials, 
              minimizing plastic use and waste.
            </p>
          </div>
          
          <div className="bg-muted p-6 rounded-lg">
            <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Recycle className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-bold text-lg mb-3">Circular Economy</h3>
            <p>
              We design our clothes to last and offer recycling programs to give used 
              garments a second life.
            </p>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Our Environmental Impact</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start">
              <div className="mr-4">
                <Water className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold mb-2">Water Conservation</h3>
                <p>
                  Our production processes use 60% less water compared to conventional 
                  manufacturing methods. We partner with factories that treat and recycle 
                  wastewater to minimize pollution.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-4">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold mb-2">Carbon Footprint</h3>
                <p>
                  We're committed to reducing our carbon emissions throughout our supply 
                  chain. We offset our shipping emissions and use renewable energy in our 
                  warehouses.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-4">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold mb-2">Social Responsibility</h3>
                <p>
                  We donate 1% of our annual profits to environmental organizations 
                  and children's charities, supporting both our planet and communities.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-muted p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Our Sustainability Goals</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="mr-4 mt-1">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p><strong>2023:</strong> Achieve 80% use of sustainable materials across our entire collection.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="mr-4 mt-1">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p><strong>2024:</strong> Implement a garment recycling program in all major markets.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="mr-4 mt-1">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p><strong>2025:</strong> Reduce carbon emissions by 50% compared to our 2020 baseline.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="mr-4 mt-1">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p><strong>2027:</strong> Achieve plastic-free packaging across our entire supply chain.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="mr-4 mt-1">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p><strong>2030:</strong> Reach carbon neutrality in all our operations.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}


import { Layout } from "@/components/layout/Layout";

export default function About() {
  return (
    <Layout>
      <div className="container py-16">
        <h1 className="text-3xl font-bold mb-8">About Young Threads</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="mb-4">
              Young Threads was born in 2018 when our founder, a parent of two energetic boys, 
              struggled to find stylish, durable clothing that could keep up with their adventures. 
              Frustrated by the limited options that sacrificed either quality or style, we set out 
              to create a brand specifically designed for boys who live life to the fullest.
            </p>
            <p>
              What started as a small collection of durable t-shirts and pants has grown into a 
              comprehensive range of clothing and accessories that boys love to wear and parents 
              love to buy. Our mission is simple: create high-quality, stylish clothing that can 
              withstand the active lifestyle of growing boys.
            </p>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80" 
              alt="Young Threads team" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-center">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">Quality</h3>
              <p>
                We use premium materials and rigorous testing to ensure our clothes can withstand 
                the rough and tumble of active boys' lives, from playground adventures to sports 
                and everything in between.
              </p>
            </div>
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">Sustainability</h3>
              <p>
                We're committed to reducing our environmental impact by using eco-friendly materials, 
                ethical manufacturing processes, and recyclable packaging. We believe in creating 
                clothes that are good for kids and good for the planet.
              </p>
            </div>
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">Inclusivity</h3>
              <p>
                We design clothes for all boys, regardless of size, ability, or background. We 
                celebrate diversity and aim to create products that make every child feel confident 
                and comfortable in what they wear.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Our Team</h2>
          <p className="mb-6">
            Young Threads is powered by a passionate team of designers, parents, and clothing experts 
            who understand what boys need from their wardrobes. Our diverse team brings together 
            expertise from the worlds of fashion, childrenswear, sustainability, and e-commerce.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="aspect-square mb-4 overflow-hidden rounded-full">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300&q=80" 
                  alt="Michael Carter" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold">Michael Carter</h3>
              <p className="text-sm text-muted-foreground">Founder & CEO</p>
            </div>
            <div className="text-center">
              <div className="aspect-square mb-4 overflow-hidden rounded-full">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300&q=80" 
                  alt="Sarah Johnson" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold">Sarah Johnson</h3>
              <p className="text-sm text-muted-foreground">Head of Design</p>
            </div>
            <div className="text-center">
              <div className="aspect-square mb-4 overflow-hidden rounded-full">
                <img 
                  src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300&q=80" 
                  alt="David Nguyen" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold">David Nguyen</h3>
              <p className="text-sm text-muted-foreground">Product Manager</p>
            </div>
            <div className="text-center">
              <div className="aspect-square mb-4 overflow-hidden rounded-full">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300&q=80" 
                  alt="Emma Rodriguez" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold">Emma Rodriguez</h3>
              <p className="text-sm text-muted-foreground">Sustainability Director</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

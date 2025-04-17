
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
} from "@/components/ui/carousel";
import { ProductGrid } from "@/components/products/ProductGrid";
import { 
  getFeaturedProducts, 
  getBestSellerProducts, 
  getNewArrivalProducts 
} from "@/data/products";

export default function Index() {
  const featuredProducts = getFeaturedProducts().slice(0, 4);
  const bestSellerProducts = getBestSellerProducts().slice(0, 4);
  const newArrivalProducts = getNewArrivalProducts().slice(0, 4);

  const categories = [
    { 
      name: "T-Shirts", 
      image: "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
      href: "/category/t-shirts" 
    },
    { 
      name: "Pants", 
      image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
      href: "/category/pants" 
    },
    { 
      name: "Jackets", 
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
      href: "/category/jackets" 
    },
    { 
      name: "Shoes", 
      image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
      href: "/category/shoes" 
    },
  ];

  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&h=900&q=80",
      title: "New Season, New Style",
      description: "Discover our latest collection for the coolest kids on the block",
      buttonText: "Shop Now",
      buttonLink: "/category/new-arrivals"
    },
    {
      image: "https://images.unsplash.com/photo-1618517351616-38fb9c5210c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&h=900&q=80",
      title: "Summer Adventures Await",
      description: "Gear up with our durable and stylish outdoor collection",
      buttonText: "Explore Collection",
      buttonLink: "/category/jackets"
    },
    {
      image: "https://images.unsplash.com/photo-1615939975344-27ee76cb7ad5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&h=900&q=80",
      title: "Trending Outfits",
      description: "Boy's fashion that stands out from the crowd",
      buttonText: "View Collection",
      buttonLink: "/category/featured"
    },
    {
      image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&h=900&q=80",
      title: "Back To School",
      description: "Prepare for the new school year with our stylish uniforms",
      buttonText: "Shop School Essentials",
      buttonLink: "/category/school"
    },
    {
      image: "https://images.unsplash.com/photo-1505692433770-36f19f51681d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&h=900&q=80",
      title: "Sport Collection",
      description: "Performance wear for active kids who love sports",
      buttonText: "Shop Sportswear",
      buttonLink: "/category/sportswear"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative">
        <Carousel className="w-full">
          <CarouselContent>
            {heroSlides.map((slide, index) => (
              <CarouselItem key={index}>
                <div className="relative h-[500px] md:h-[600px]">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
                    <div className="container">
                      <div className="max-w-lg text-white">
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">{slide.title}</h1>
                        <p className="text-lg mb-6">
                          {slide.description}
                        </p>
                        <Link to={slide.buttonLink}>
                          <Button size="lg" className="hover-lift">
                            {slide.buttonText}
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      {/* Categories Section */}
      <section className="container py-16 md:py-24">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">Shop By Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={category.href}
              className="relative overflow-hidden rounded-lg group hover-lift"
            >
              <div className="aspect-square">
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <h3 className="text-xl font-medium text-white">{category.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="bg-muted py-16">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold">Featured Products</h2>
            <Link
              to="/category/featured"
              className="text-primary hover:underline flex items-center"
            >
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <ProductGrid products={featuredProducts} />
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="container py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold">New Arrivals</h2>
          <Link
            to="/category/new-arrivals"
            className="text-primary hover:underline flex items-center"
          >
            View All <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <ProductGrid products={newArrivalProducts} />
      </section>

      {/* Promotion Banner */}
      <section className="bg-navy-800 py-16 md:py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                Back to School Collection
              </h2>
              <p className="mb-6 text-white/80">
                Get ready for the new school year with our durable and stylish collection.
                All uniforms and school essentials at one place.
              </p>
              <Link to="/category/school">
                <Button size="lg" variant="secondary" className="hover-lift">
                  Shop Now
                </Button>
              </Link>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1543269664-56d93c1b41a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80"
                alt="Back to School"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="container py-16 md:py-24">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold">Best Sellers</h2>
          <Link
            to="/category/best-sellers"
            className="text-primary hover:underline flex items-center"
          >
            View All <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <ProductGrid products={bestSellerProducts} />
      </section>

      {/* Newsletter Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Join Our Newsletter
            </h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to get special offers, free giveaways, and new arrival notifications.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm"
              />
              <Button className="btn-bounce">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

import React, { useState } from "react";
import {
  ShoppingBag,
  Menu,
  X,
  ChevronRight,
  Star,
  Users,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  Award,
  Shield,
  Truck,
  Clock,
} from "lucide-react";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { id: "home", label: "Home" },
    { id: "products", label: "Collection" },
    { id: "about", label: "Heritage" },
    { id: "team", label: "Artisans" },
    { id: "contact", label: "Connect" },
  ];

  const NavigationBar = () => (
    <nav className="bg-white/90 backdrop-blur-xl border-b border-amber-100/50 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <img src="/assets/logo.png" alt="trypik logo" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`text-sm font-semibold tracking-wide transition-all duration-300 relative group ${
                  currentPage === item.id
                    ? "text-amber-700"
                    : "text-gray-700 hover:text-amber-700"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-amber-600 to-amber-700 transform transition-transform duration-300 ${
                    currentPage === item.id
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                ></span>
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-amber-700 transition-colors p-2"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-amber-100/50 bg-white/95 backdrop-blur-xl">
            <div className="px-4 pt-4 pb-6 space-y-3">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-3 text-base font-semibold rounded-xl transition-all duration-300 ${
                    currentPage === item.id
                      ? "text-amber-700 bg-amber-50"
                      : "text-gray-700 hover:text-amber-700 hover:bg-amber-50/50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );

  const HomePage = () => (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-emerald-50"></div>
        <div className="absolute inset-0 bg-[url('/assets/background.jpeg')] bg-cover bg-center opacity-5"></div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-amber-200/30 to-amber-300/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-emerald-200/30 to-emerald-300/30 rounded-full blur-3xl"></div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-8">
            <span className="inline-block px-6 py-2 bg-gradient-to-r from-amber-100 to-emerald-100 text-amber-800 text-sm font-semibold rounded-full border border-amber-200/50 shadow-sm">
              ✨ Crafted with Heritage, Served with Pride
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Exquisite
            </span>
            <br />
            <span className="bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 bg-clip-text text-transparent">
              Indian Pickles
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto font-light">
            Where centuries-old traditions meet contemporary excellence. Each
            jar tells a story of
            <span className="text-amber-700 font-medium">
              {" "}
              authentic flavors
            </span>
            ,
            <span className="text-emerald-700 font-medium">
              {" "}
              premium ingredients
            </span>
            , and
            <span className="text-gray-800 font-medium">
              {" "}
              uncompromising quality
            </span>
            .
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => setCurrentPage("products")}
              className="group relative px-10 py-4 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-semibold rounded-2xl transition-all duration-500 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              <span className="relative z-10 flex items-center">
                Explore Our Collection
                <ChevronRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-700 to-amber-800 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button
              onClick={() => setCurrentPage("about")}
              className="px-10 py-4 border-2 border-gray-300 hover:border-amber-600 text-gray-700 hover:text-amber-700 font-semibold rounded-2xl transition-all duration-300 hover:bg-amber-50"
            >
              Our Heritage
            </button>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-amber-50/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                label: "Premium Quality",
                desc: "Certified Excellence",
              },
              { icon: Shield, label: "100% Natural", desc: "No Preservatives" },
              {
                icon: Truck,
                label: "Fast Delivery",
                desc: "Nationwide Shipping",
              },
              { icon: Clock, label: "1+ Years", desc: "Trusted Experience" },
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <item.icon className="h-8 w-8 text-amber-700" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{item.label}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-amber-100 text-amber-800 text-sm font-semibold rounded-full mb-4">
              Why Choose TryPik
            </span>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              The Art of Perfect Pickles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Every jar represents our unwavering commitment to authenticity,
              quality, and the rich culinary heritage of India
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {[
              {
                title: "Heritage Recipes",
                description:
                  "Time-honored formulations passed down through generations, preserving the taste of traditional Indian pickles.",
                image:
                  "/assets/1.jpeg",
                gradient: "from-amber-500 to-orange-600",
              },
              {
                title: "Premium Sourcing",
                description:
                  "Handpicked ingredients from the finest farms across India, ensuring exceptional quality and unmatched flavor profiles",
                image:
                  "/assets/2.jpeg",
                gradient: "from-emerald-500 to-teal-600",
              },
              {
                title: "Artisan Craftsmanship",
                description:
                  "Meticulously crafted in small batches by master artisans who understand the nuances of perfect pickle making",
                image:
                  "/assets/3.jpeg",
                gradient: "from-rose-500 to-pink-600",
              },
            ].map((feature, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-4">
                  <div className="h-80 relative overflow-hidden">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${feature.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
                    ></div>
                  </div>
                  <div className="p-8 bg-white">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  <div className="absolute top-6 right-6 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <ChevronRight className="h-6 w-6 text-gray-700" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-gradient-to-br from-amber-50 via-white to-emerald-50">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-8 w-8 text-amber-500 fill-current" />
              ))}
            </div>
            <blockquote className="text-3xl md:text-4xl font-light text-gray-800 leading-relaxed mb-8">
              "TryPik has redefined what premium pickles should taste like. The
              authenticity and quality are simply unmatched."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <img
                src="/assets/priya.jpg"
                alt="Customer"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="text-left">
                <p className="font-semibold text-gray-900">Arpitha Kumar</p>
                <p className="text-gray-600">Food Enthusiast</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/background.jpeg')] bg-cover bg-center opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-white mb-8">
            Experience Culinary Excellence
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Join our community of discerning food lovers who appreciate the
            finest Indian pickles. Taste the difference that passion and
            tradition make.
          </p>
          <button
            onClick={() => setCurrentPage("contact")}
            className="inline-flex items-center px-12 py-5 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            Start Your Journey
            <ChevronRight className="ml-3 h-6 w-6" />
          </button>
        </div>
      </section>
    </div>
  );

  const ProductsPage = () => (
    <div className="bg-gradient-to-br from-gray-50 to-amber-50/30 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-amber-100 text-amber-800 text-sm font-semibold rounded-full mb-4">
            Premium Collection
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Curated Excellence
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Each pickle in our collection represents the pinnacle of Indian
            culinary artistry, crafted with meticulous attention to detail and
            uncompromising quality standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <img src="/assets/pik.jpg" alt="" />
          </div>
          <div>
            <img src="/assets/pik4.jpg" alt="" />
          </div>
          <div>
            <img src="/assets/pik2.jpg" alt="" />
          </div>
          <div>
            <img src="/assets/pik3.jpg" alt="" />
          </div>

          {/* {[
            {
              name: "Mango Pickle",
              description:
                "Homemade Pickles",
              price: "₹46",
              // originalPrice: "₹46",
              image:
                "/assets/Mango.jpg",
              rating: 4.9,
              badge: "Bestseller",
              gradient: "from-amber-500 to-orange-600",
            },
            {
              name: "Heritage Mixed Vegetable",
              description:
                "A symphony of seasonal vegetables marinated in our signature blend of premium spices and pure mustard oil",
              price: "₹349",
              originalPrice: "₹429",
              image:
                "https://images.pexels.com/photos/4226806/pexels-photo-4226806.jpeg",
              rating: 4.8,
              badge: "Premium",
              gradient: "from-emerald-500 to-teal-600",
            },
            {
              name: "Artisan Lemon Pickle",
              description:
                "Sun-dried lemons infused with rare spices, creating the perfect balance of tangy and aromatic flavors",
              price: "₹299",
              originalPrice: "₹369",
              image:
                "https://images.pexels.com/photos/4198015/pexels-photo-4198015.jpeg",
              rating: 4.7,
              badge: "Classic",
              gradient: "from-yellow-500 to-amber-600",
            },
            {
              name: "Gourmet Garlic Pickle",
              description:
                "Premium garlic cloves slow-cooked with exotic spices, delivering an intense and unforgettable taste experience",
              price: "₹379",
              originalPrice: "₹459",
              image:
                "https://images.pexels.com/photos/4226825/pexels-photo-4226825.jpeg",
              rating: 4.9,
              badge: "Signature",
              gradient: "from-purple-500 to-indigo-600",
            },
            {
              name: "Fiery Chili Pickle",
              description:
                "Bold red chilies combined with traditional spices for those who appreciate authentic heat and complex flavors",
              price: "₹329",
              originalPrice: "₹399",
              image:
                "https://images.pexels.com/photos/4792373/pexels-photo-4792373.jpeg",
              rating: 4.6,
              badge: "Spicy",
              gradient: "from-red-500 to-rose-600",
            },
            {
              name: "Wellness Amla Pickle",
              description:
                "Nutrient-rich gooseberries preserved with healing spices, combining health benefits with exceptional taste",
              price: "₹359",
              originalPrice: "₹439",
              image:
                "https://images.pexels.com/photos/4226806/pexels-photo-4226806.jpeg",
              rating: 4.8,
              badge: "Healthy",
              gradient: "from-green-500 to-emerald-600",
            },
          ].map((product, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-white rounded-3xl shadow-xl hover:shadow-3xl transition-all duration-700 overflow-hidden transform hover:-translate-y-2">
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${product.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
                  ></div>


                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-bold rounded-full">
                      {product.badge}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                    <Star className="h-4 w-4 text-amber-500 fill-current" />
                    <span className="text-sm font-semibold">
                      {product.rating}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-3xl font-bold text-gray-900">
                        {product.price}
                      </span>
                      <span className="text-lg text-gray-500 line-through">
                        {product.originalPrice}
                      </span>
                    </div>
                    <a href="https://wa.me/918137062619">
                    <button className="px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                     Whatsapp
                    </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))} */}
        </div>
        <div className="mt-16 text-center text-gray-600 italic ">
          <p>
            "Homemade Pickles at ₹49 per jar. Order now and experience the authentic
            taste of India with TryPik's collection"
          </p>
        </div>
        <div className="mt-12 flex justify-center">
          <a href="https://wa.me/918137062619">
            <button className="px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
              Order Now
            </button>
          </a>
        </div>
      </div>
    </div>
  );

  const AboutPage = () => (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-amber-50 via-white to-emerald-50 relative overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-amber-200/30 to-amber-300/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-emerald-200/30 to-emerald-300/30 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-6 lg:px-8">
          <span className="inline-block px-4 py-2 bg-amber-100 text-amber-800 text-sm font-semibold rounded-full mb-6">
            Our Heritage
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Crafting Tradition
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            A legacy of excellence spanning generations, where every jar tells a
            story of passion, authenticity, and the timeless art of Indian
            pickle making.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-200/50 to-emerald-200/50 rounded-3xl blur-2xl"></div>
              <img
                src="../public/assets/Trypik.png"
                alt="Traditional pickle making"
                className="relative rounded-3xl shadow-2xl"
              />
            </div>
            <div>
              <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-800 text-sm font-semibold rounded-full mb-6">
                Since 2025
              </span>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Our Journey
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>
                  Trypik is a fresh, homegrown food brand founded by three
                  family members with a shared passion for authentic, handmade
                  flavors. What started as a simple idea after graduation soon
                  turned into a flavorful journey rooted in love and tradition.
                  Every product is crafted daily with care, honesty, and a
                  dedication to quality. At Trypik, we believe real food should
                  taste like home.
                </p>
                <p>
                  Made for young, flavor-loving explorers, Trypik offers a wide
                  variety of homemade food products to satisfy every craving.
                  Each jar is packed with the taste of true freshness and the
                  essence of homemade goodness. We’re here to bring you bold,
                  memorable flavors that keep you coming back.{" "}
                  <span className="font-bold">
                    Try it once — pick it forever.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-amber-50/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-amber-100 text-amber-800 text-sm font-semibold rounded-full mb-4">
              Our Philosophy
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Values That Define Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our pursuit of excellence and shape
              every aspect of our craft
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Uncompromising Quality",
                description:
                  "Every ingredient is carefully selected and every process meticulously monitored to ensure perfection",
                icon: Award,
                gradient: "from-amber-500 to-orange-600",
              },
              {
                title: "Authentic Heritage",
                description:
                  "Traditional recipes and time-tested methods preserve the true essence of Indian flavors",
                icon: Shield,
                gradient: "from-emerald-500 to-teal-600",
              },
              {
                title: "Sustainable Practices",
                description:
                  "We support local communities and employ eco-friendly methods in our production",
                icon: Users,
                gradient: "from-green-500 to-emerald-600",
              },
              {
                title: "Continuous Innovation",
                description:
                  "Blending traditional wisdom with modern techniques to create exceptional products",
                icon: Star,
                gradient: "from-purple-500 to-indigo-600",
              },
            ].map((value, index) => (
              <div key={index} className="group text-center">
                <div className="relative mb-8">
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${value.gradient} rounded-3xl flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 transition-transform duration-300`}
                  >
                    <value.icon className="h-10 w-10 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  const TeamPage = () => (
    <div className="bg-white min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-amber-100 text-amber-800 text-sm font-semibold rounded-full mb-4">
            Our Artisans
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Masters of Craft
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Meet the passionate artisans and visionaries who bring TryPik's
            exceptional pickles to life, each contributing their unique
            expertise to our legacy of excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {[
            {
              name: "Abhinav K",
              position: "Manager",
              description:
                "With over 25 years of expertise, Rajesh has dedicated his life to perfecting the art of traditional Indian pickle making",
              image: "/assets/Abhinav.png",
              gradient: "from-amber-500 to-orange-600",
            },
            {
              name: "Rasik",
              position: "Brand Experience Director",
              description:
                "Ensures every jar meets our exacting standards through meticulous quality control and innovative testing methods",
              image: "/assets/Rasik.png",
              gradient: "from-emerald-500 to-teal-600",
            },
            // {
            //   name: "Amit Patel",
            //   position: "Head of Culinary Innovation",
            //   description:
            //     "Blends traditional recipes with contemporary techniques to create our signature flavor profiles",
            //   image:
            //     "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg",
            //   gradient: "from-purple-500 to-indigo-600",
            // },
            // {
            //   name: "Sunita Rao",
            //   position: "Operations Excellence Manager",
            //   description:
            //     "Orchestrates our production processes to ensure consistent quality and timely delivery nationwide",
            //   image:
            //     "https://images.pexels.com/photos/3783725/pexels-photo-3783725.jpeg",
            //   gradient: "from-rose-500 to-pink-600",
            // },
            // {
            //   name: "Vikram Singh",
            //   position: "Brand Experience Director",
            //   description:
            //     "Crafts compelling narratives that connect our heritage with modern consumers across India and beyond",
            //   image:
            //     "https://images.pexels.com/photos/2422280/pexels-photo-2422280.jpeg",
            //   gradient: "from-blue-500 to-cyan-600",
            // },
            // {
            //   name: "Meera Joshi",
            //   position: "Customer Delight Specialist",
            //   description:
            //     "Ensures every customer interaction reflects our commitment to excellence and authentic hospitality",
            //   image:
            //     "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg",
            //   gradient: "from-green-500 to-emerald-600",
            // },
          ].map((member, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-3xl shadow-xl hover:shadow-3xl transition-all duration-700 overflow-hidden transform hover:-translate-y-2">
                <div className="relative h-92 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${member.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
                  ></div>
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-amber-700 font-semibold mb-4">
                    {member.position}
                  </p>
                  {/* <p className="text-gray-600 leading-relaxed">
                    {member.description}
                  </p> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // --- ContactPage with Google Apps Script integration ---
  const ContactPage = () => {
    const [form, setForm] = useState({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx20dE-6ZPAiCI3FnV2gxnNofD1XuD8m-ApKpg2vTPjt0v0_VVM0NGonKuaXWmL5io0/exec";

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setLoading(true);
      try {
        await fetch(GOOGLE_SCRIPT_URL, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams(form).toString(),
        });
        setSubmitted(true);
        setForm({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      } catch (error) {
        alert("There was an error submitting the form. Please try again.");
      }
      setLoading(false);
    };

    return (
      <div className="bg-gradient-to-br from-gray-50 to-amber-50/30 min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-amber-100 text-amber-800 text-sm font-semibold rounded-full mb-4">
              Connect With Us
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Let's Start a Conversation
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're here to answer your questions, share our passion for authentic
              pickles, and help you discover the perfect flavors for your palate.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-2xl p-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Send us a message
              </h2>
              {submitted ? (
                <div className="text-green-600 text-lg font-semibold text-center py-8">
                  Thank you for contacting us! We will get back to you soon.
                </div>
              ) : (
                <form className="space-y-8" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300"
                        placeholder="Enter your first name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                        className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300"
                        placeholder="Enter your last name"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 resize-none"
                      placeholder="Tell us how we can help you discover the perfect pickles"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-3xl shadow-2xl p-10">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Get in Touch
                </h2>
                <div className="space-y-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg mb-2">
                        Visit Our Heritage Center
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        TRYPIK HOME MADE FOODS
                        <br /> (PICKLES AND REPACKING),
                        <br />
                        KADUNGUMTHODI HOUSE,
                        <br /> VILAYIL PO, Kondotty Circle,
                        <br />
                        Malappuram, Kerala - 673641
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg mb-2">
                        Call Our Experts
                      </h3>
                      <a href="tel:+918137062619" className="block">
                        <p className="text-gray-600">+91 81370 62619</p>
                      </a>
                      <p className="text-sm text-gray-500">
                        Mon-Sat, 9:00 AM - 7:00 PM
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg mb-2">
                        Email Us
                      </h3>
                      <p className="text-gray-600">trypik290@gmail.com</p>
                      <p className="text-sm text-gray-500">
                        We'll respond within 24 hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl shadow-2xl p-10">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Follow Our Journey
                </h2>
                <div className="flex space-x-4">
                  {[
                    {
                      icon: Instagram,
                      gradient: "from-pink-500 to-rose-600",
                      href: "https://www.instagram.com/try.pik_/",
                    },
                  ].map((social, index) => (
                    <button
                      key={index}
                      className={`p-4 bg-gradient-to-br ${social.gradient} text-white rounded-2xl transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl`}
                    >
                      <a href={social.href}>
                        <social.icon className="h-6 w-6" />
                      </a>
                    </button>
                  ))}
                </div>
                <p className="text-gray-600 mt-6 leading-relaxed">
                  Stay connected with us for the latest updates, recipes, and
                  behind-the-scenes glimpses of our pickle-making process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const Footer = () => (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-5"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left: Logo & Description */}
          <div className="lg:w-2/3">
            <div className="mb-6">
              <img
                src="../public/assets/logo 1.png"
                alt="TryPik Logo"
                className="h-12 w-auto mb-4"
              />
            </div>
            <p className="text-gray-300 leading-relaxed mb-8 max-w-md">
              Crafting exceptional Indian pickles with traditional recipes,
              premium ingredients, and an unwavering commitment to authenticity.
              Experience the taste of heritage.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Instagram, gradient: "from-pink-500 to-rose-600" },
                // { icon: Facebook, gradient: "from-blue-500 to-blue-600" },
                // { icon: Twitter, gradient: "from-sky-500 to-blue-600" }
              ].map((social, index) => (
                <button
                  key={index}
                  className={`p-3 bg-gradient-to-br ${social.gradient} rounded-xl transition-all duration-300 transform hover:scale-110 shadow-lg`}
                >
                  <a href="https://www.instagram.com/try.pik_/">
                    <social.icon className="h-5 w-5 text-white" />
                  </a>
                </button>
              ))}
            </div>
          </div>

          {/* Right: Quick Links */}
          <div className="lg:w-1/3 flex flex-col items-start lg:items-end">
            <div>
              <h3 className="text-xl font-bold mb-6 text-amber-400">
                Quick Links
              </h3>
              <ul className="space-y-4">
                {navigation.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => setCurrentPage(item.id)}
                      className="text-gray-300 hover:text-amber-400 transition-colors duration-300 font-medium"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            {/* Uncomment and add more sections here if needed */}
          </div>
        </div>

        <div className="border-t border-gray-700 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 TryPik Premium Pickles. All rights reserved. Crafted with
            passion in India.
          </p>
          {/* <div className="flex space-x-8 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-amber-400 transition-colors text-sm font-medium"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-amber-400 transition-colors text-sm font-medium"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-amber-400 transition-colors text-sm font-medium"
            >
              Quality Guarantee
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "products":
        return <ProductsPage />;
      case "about":
        return <AboutPage />;
      case "team":
        return <TeamPage />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <NavigationBar />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;

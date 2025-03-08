import React from "react";
import { images } from "../assets/images";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <img
          src={images.home.hero.src}
          alt={images.home.hero.alt}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
        <div className="relative h-full flex items-center justify-center text-center text-white px-4">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Welcome to RD Builders
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Building Excellence, Delivering Dreams
            </p>
            <Link to="/projects" className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
              View Our Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="mb-4 overflow-hidden rounded-lg">
                <img
                  src={images.home.features.quality.src}
                  alt={images.home.features.quality.alt}
                  className="w-full h-48 object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Quality Construction
              </h3>
              <p className="text-gray-600">
                We deliver the highest quality construction using premium
                materials and expert craftsmanship.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="mb-4 overflow-hidden rounded-lg">
                <img
                  src={images.home.features.team.src}
                  alt={images.home.features.team.alt}
                  className="w-full h-48 object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4">Expert Team</h3>
              <p className="text-gray-600">
                Our team of experienced professionals ensures your project is
                completed to perfection.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="mb-4 overflow-hidden rounded-lg">
                <img
                  src={images.home.features.delivery.src}
                  alt={images.home.features.delivery.alt}
                  className="w-full h-48 object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4">Timely Delivery</h3>
              <p className="text-gray-600">
                We commit to completing your projects on time and within budget.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

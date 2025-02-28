import React, { useState, useEffect } from "react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);

  return (
    <div className={`bg-[#FFFBF5] min-h-screen ${isVisible ? 'page-transition-active' : 'page-transition'}`}>
      <div className="container mx-auto px-4 md:px-16 max-w-7xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left Images */}
          <div className="relative flex gap-4">
            {/* First image */}
            <div className="w-[300px] h-[450px] rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
              <img 
                src="/image1.jpeg" 
                alt="First Dish" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Second image - offset by 150px (1/3 of 450px) */}
            <div className="w-[300px] h-[450px] rounded-lg overflow-hidden self-start mt-[150px] transform transition duration-300 hover:scale-105">
              <img 
                src="/PHO – Noodlebar (1).jpeg" 
                alt="Second Dish" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Form Section */}
          <div className="md:pl-8 mt-[500px] md:mt-0">
            <h2 className="font-['Rokkitt'] text-5xl font-bold mb-16">
              Contact Us
            </h2>
            <form 
              action="https://formspree.io/f/xanqvynn" 
              method="POST" 
              className="space-y-12"
            >
              <div className="transform transition duration-300 hover:-translate-y-1">
                <p className="text-lg mb-2">Your Name</p>
                <input 
                  type="text" 
                  name="customer_name" 
                  required 
                  className="w-full border-0 border-b-2 border-black focus:outline-none focus:ring-0 focus:border-[#1B3735] bg-transparent pb-1 transition-all duration-300 selection:bg-transparent"
                  style={{ WebkitAppearance: 'none', appearance: 'none' }}
                />
              </div>
              <div className="transform transition duration-300 hover:-translate-y-1">
                <p className="text-lg mb-2">Your Email</p>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  className="w-full border-0 border-b-2 border-black focus:outline-none focus:ring-0 focus:border-[#1B3735] bg-transparent pb-1 transition-all duration-300 selection:bg-transparent"
                  style={{ WebkitAppearance: 'none', appearance: 'none' }}
                />
              </div>
              <div className="transform transition duration-300 hover:-translate-y-1">
                <p className="text-lg mb-2">Your Phone Number</p>
                <input 
                  type="tel" 
                  name="phone" 
                  className="w-full border-0 border-b-2 border-black focus:outline-none focus:ring-0 focus:border-[#1B3735] bg-transparent pb-1 transition-all duration-300 selection:bg-transparent"
                  style={{ WebkitAppearance: 'none', appearance: 'none' }}
                />
              </div>
              <div className="transform transition duration-300 hover:-translate-y-1">
                <p className="text-lg mb-2">Your Message</p>
                <input 
                  type="text"
                  name="message" 
                  required 
                  className="w-full border-0 border-b-2 border-black focus:outline-none focus:ring-0 focus:border-[#1B3735] bg-transparent pb-1 transition-all duration-300 selection:bg-transparent"
                  style={{ WebkitAppearance: 'none', appearance: 'none' }}
                />
              </div>
              <div className="pt-8">
                <button 
                  type="submit" 
                  className="w-[200px] bg-[#1B3735] text-white py-3 rounded-full text-lg font-medium hover:bg-[#1B3735]/90 transition duration-200 transform hover:scale-105"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

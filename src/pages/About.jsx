import { useEffect, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);

  return (
    <div className={`bg-[#FFFBF5] ${isVisible ? 'page-transition-active' : 'page-transition'}`}>
      {/* Our Journey Section */}
      <section className="py-16">
        <div className="container mx-auto px-16 max-w-7xl">
          <h2 className="font-['Rokkitt'] text-4xl font-bold mb-8">
            Our <span className="text-[#5D6E5C]">Journey</span>
          </h2>
          
          <div className="grid grid-cols-2 gap-12">
            <div className="max-w-xl">
              <p className="font-['Outfit'] text-gray-600 mb-6 font-bold">
                The idea for Bun & Bowl started with a simple question: What if the rich heritage of Vietnamese 
                cuisine could be reimagined in a way that resonates with today's fast-paced world?
              </p>
              <p className="font-['Outfit'] text-gray-600 mb-6">
                Combining the timeless allure of Vietnamese pho and vermicelli bowls with the universal love for 
                burgers, we set out to create a dining experience like no other.
              </p>
              <p className="font-['Outfit'] text-gray-600">
                Since opening our doors in 2017, we have been on a mission to redefine how people enjoy Vietnamese 
                food. From our signature Wagyu Beef Burger to our Traditional Beef Pho, every dish is a testament 
                to our commitment to quality, innovation, and authenticity.
              </p>
            </div>
            <div className="grid grid-cols-6 grid-rows-6 gap-4 h-[300px]">
              <div className="col-span-4 row-span-6 transform transition duration-300 hover:scale-105">
                <img 
                  src="/Chef Cooking Dinner.jpeg" 
                  alt="Chef preparing food" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="col-span-2 row-span-3 col-start-5 row-start-1">
                <img 
                  src="/Vietnamese Pho Recipe.jpeg" 
                  alt="Vietnamese Pho" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="col-span-2 row-span-3 col-start-5 row-start-4">
                <img 
                  src="/Grilled Lemongrass Chicken.jpeg" 
                  alt="Grilled Lemongrass Chicken" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Unique Section */}
      <section className="py-16">
        <div className="container mx-auto px-16 max-w-7xl">
          <div className="grid grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="/PHO – Noodlebar (1).jpeg" 
                alt="Bun & Bowl experience" 
                className="w-full h-[400px] object-cover rounded-lg transform transition duration-300 hover:scale-105"
              />
            </div>
            <div>
              <h2 className="font-['Rokkitt'] text-4xl font-bold mb-8">
                What makes us <span className="text-[#5D6E5C]">unique</span>?
              </h2>
              <div className="space-y-6">
                <p className="font-['Outfit'] text-gray-600">
                  At Bun & Bowl, every detail is thoughtfully crafted to deliver more than just a meal:
                </p>
                <div>
                  <h3 className="font-['Outfit'] text-xl font-bold mb-2">We deliver an experience!</h3>
                  <p className="font-['Outfit'] text-gray-600">
                    Our modern yet inviting ambiance is designed for everyone, whether you're on the go, 
                    dining solo, or sharing a meal with friends and family. We use only the freshest 
                    ingredients and timeless cooking techniques to ensure every bite tells a story of care and passion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 
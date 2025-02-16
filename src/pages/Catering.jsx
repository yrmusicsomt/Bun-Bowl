import { useEffect, useState } from 'react';

const Catering = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);

  return (
    <div className={`bg-[#FFFBF5] ${isVisible ? 'page-transition-active' : 'page-transition'}`}>
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-16 max-w-7xl">
          <h2 className="font-['Rokkitt'] text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">
            Catering?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
            {/* Left Image */}
            <div className="md:col-span-1 h-[200px] md:h-[300px]">
              <img 
                src="/Chef Cooking Dinner.jpeg" 
                alt="Chef preparing food" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Center Text */}
            <div className="md:col-span-2 flex flex-col items-center justify-center px-0 md:px-8">
              <p className="font-['Outfit'] text-gray-600 mb-4 md:mb-6 font-bold text-center">
                The idea for Bun & Bowl started with a simple question: What if the rich heritage of Vietnamese 
                cuisine could be reimagined in a way that resonates with today's fast-paced world?
              </p>
              <p className="font-['Outfit'] text-gray-600 mb-4 md:mb-6 text-center">
                Combining the timeless allure of Vietnamese pho and vermicelli bowls with the universal love for 
                burgers, we set out to create a dining experience like no other.
              </p>
              <p className="font-['Outfit'] text-gray-600 text-center">
                Since opening our doors in 2017, we have been on a mission to redefine how people enjoy Vietnamese 
                food. From our signature Wagyu Beef Burger to our Traditional Beef Pho, every dish is a testament 
                to our commitment to quality, innovation, and authenticity.
              </p>
            </div>

            {/* Right Images */}
            <div className="md:col-span-1 grid grid-cols-2 md:grid-cols-1 gap-4">
              <div className="h-[140px] md:h-[145px]">
                <img 
                  src="/Vietnamese Pho Recipe.jpeg" 
                  alt="Vietnamese Pho" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="h-[140px] md:h-[145px]">
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
    </div>
  );
};

export default Catering; 
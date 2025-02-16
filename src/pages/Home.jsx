import { Link } from 'react-router-dom';
import HighlightCard from '../components/HighlightCard';
import { useState, useEffect } from 'react';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);

  const highlights = [
    {
      title: "Burgers & Pho, Reinvented",
      description: "Where east and west collide - our burgers elegantly blending hints of traditional pho.",
      image: "/PHO – Noodlebar (1).jpeg"
    },
    {
      title: "Fresh, Local Ingredients",
      description: "Sourced daily to ensure maximum flavor and quality.",
      image: "/Traditional Homemade Vietnamese Chicken Pho (Pho Ga) - Cooking Therapy.jpeg"
    },
    {
      title: "Catering for Every Occasion",
      description: "From corporate events to intimate gatherings, our catering services bring the flavor of Bun & Bowl to you.",
      image: "/Unveiling the Flavors of Vietnam with an Authentic Pho Recipe - A Step-by-Step Guide.jpeg"
    },
    {
      title: "Online Convenience",
      description: "Order your favorites from the comfort of your home with just one click.",
      image: "/braised beef rice noodle soup.jpeg"
    }
  ];

  const menuCategories = [
    { 
      name: "Burgers", 
      icon: "/crack burgers -.jpeg",
      sectionId: "burgers-section"
    },
    { 
      name: "Mains", 
      icon: "/Beef Pho Noodle Soup.jpeg",
      sectionId: "mains-section"
    },
    { 
      name: "Cold Drinks", 
      icon: "/How to Make an Iced Americano better than Starbucks.jpeg",
      sectionId: "drinks-section"
    },
    { 
      name: "Desserts", 
      icon: "/Tiramisu.jpeg",
      sectionId: "desserts-section"
    }
  ];

  const menuItems = {
    burgers: [
      {
        name: "Wagyu Beef Burger",
        price: 16.50,
        description: "Wagyu patty, cheese, lettuce, beetroot, onion, and mustard aioli.",
        tag: "#3 most liked",
        image: "/Wagyu Burger.jpeg"
      },
      {
        name: "Chicken Fillet Burger",
        price: 14.50,
        description: "Portuguese seasoning or lettuce, tomato, relish, and aioli.",
        image: "/chicken.jpeg"
      },
      {
        name: "Schnitzel Burger",
        price: 14.50,
        description: "Lettuce, tomato, and aioli.",
        image: "/Chicken Schnitzel Burger.jpeg"
      },
      {
        name: "Pull-Pork Burger",
        price: 14.50,
        description: "Lettuce, carrot, aioli, and BBQ sauce.",
        image: "/pull-pork.jpeg"
      },
      {
        name: "Halloumi Burger",
        price: 14.50,
        description: "Roasted pumpkin, baby spinach, onion, tomato relish, and aioli.",
        image: "/halloumi.jpeg"
      },
      {
        name: "Fish Burger",
        price: 14.50,
        description: "Battered fish, lettuce, tomato, and tartare sauce.",
        image: "/fish-burger.jpeg"
      }
    ],
    mains: [
      {
        name: "Beef Pho",
        price: 21.00,
        description: "Vietnamese Beef noodle soup.",
        tag: "#1 most liked",
        image: "/Beef Pho Noodle Soup.jpeg"
      },
      {
        name: "Lemongrass Vermicelli Bowl",
        price: 21.00,
        tag: "#2 most liked",
        image: "/Lemongrass Vermicelli Salad.jpeg"
      },
      {
        name: "Crispy Fried Spring Roll",
        price: 4.50,
        description: "Pork & Vegetable filling with sweet chili sauce dipping.",
        image: "/Crispy Air-Fried Spring Rolls.jpeg"
      },
      {
        name: "Grilled Chicken Pho",
        price: 21.00,
        image: "/Quick Chicken Pho.jpeg"
      },
      {
        name: "PHO Salad",
        price: 21.00,
        description: "Light and refreshing without broth.",
        image: "/Vietnamese Noodles.jpeg"
      },
      {
        name: "Beef Balls Pho",
        price: 21.00,
        image: "/Beef Ball Pho.jpg"
      }
    ],
    drinks: [
      {
        name: "Soft Drink Can",
        price: 4.00,
        description: "330 mL.",
        image: "/Coca Cola.jpeg"
      },
      {
        name: "Still Water",
        price: 4.00,
        description: "600 mL.",
        image: "/water.jpeg"
      }
    ],
    desserts: [
      {
        name: "Muffin Blueberry",
        price: 6.00,
        description: "Each.",
        image: "/muffin.jpeg"
      }
    ]
  };

  // Add scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`${isVisible ? 'page-transition-active' : 'page-transition'}`}>
      {/* Hero Section */}
      <section id="hero-section" className="relative h-[600px] bg-orange-500">
        <img 
          src="/header_img.png"
          alt="Featured salmon dish with broccoli" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="text-white max-w-2xl animate-fadeIn">
            <h1 className="font-['Rokkitt'] text-7xl font-bold mb-6 leading-tight">
              WELCOME TO
              <br />
              BUN & BOWL!
            </h1>
            <p className="font-['Outfit'] text-xl mb-8 leading-relaxed">
              Born out of a love for authentic Vietnamese flavors and a passion for creating 
              something uniquely modern, Bun & Bowl brings you the perfect fusion of East and 
              West, right in the heart of the community.
            </p>
            <a 
              href="https://www.ubereats.com/store/bun-%26-bowl/PZbzukCGRkCgymQc-uWcvg?utm_source=menu-maker"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-gray-800 px-8 py-4 rounded-full font-['Outfit'] font-medium hover:bg-gray-100 transition-colors"
            >
              Order Now
            </a>
          </div>
        </div>
      </section>

      

      {/* Highlights Section */}
      <section className="py-16 bg-[#FDF6F1]">
        <div className="container mx-auto px-16 max-w-7xl">
          <h2 className="font-['Rokkitt'] text-4xl font-bold mb-12">
            <span className="text-[#5D6E5C]">Highlights</span> of Bun & Bowl
          </h2>
          <div className="grid grid-cols-4 gap-8">
            <div className="bg-white rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <img 
                src="/PHO – Noodlebar (1).jpeg"
                alt="Burgers & Pho" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-['Outfit'] text-lg font-bold mb-2">Burgers & Pho, Reinvented</h3>
                <p className="font-['Outfit'] text-gray-600 text-sm">
                  Where else can you find gourmet burgers alongside steaming bowls of traditional pho?
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <img 
                src="/Traditional Homemade Vietnamese Chicken Pho (Pho Ga) - Cooking Therapy.jpeg"
                alt="Fresh Ingredients" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-['Outfit'] text-lg font-bold mb-2">Fresh, Local Ingredients</h3>
                <p className="font-['Outfit'] text-gray-600 text-sm">
                  Sourced daily to ensure maximum flavor and quality.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <img 
                src="/Unveiling the Flavors of Vietnam with an Authentic Pho Recipe - A Step-by-Step Guide.jpeg"
                alt="Catering" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-['Outfit'] text-lg font-bold mb-2">Catering for Every Occasion</h3>
                <p className="font-['Outfit'] text-gray-600 text-sm">
                  From corporate events to private gatherings, our catering services bring the flavors of Bun & Bowl to you.{' '}
                  <a 
                    href="https://www.ubereats.com/store/bun-%26-bowl/PZbzukCGRkCgymQc-uWcvg?utm_source=menu-maker"
                    className="text-gray-600 underline hover:opacity-80"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Request catering orders now!
                  </a>
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <img 
                src="/braised beef rice noodle soup.jpeg"
                alt="Online Ordering" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-['Outfit'] text-lg font-bold mb-2">Online Convenience</h3>
                <p className="font-['Outfit'] text-gray-600 text-sm">
                  Order your favorites from the comfort of your home with just a few clicks.{' '}
                  <a 
                    href="https://www.ubereats.com/store/bun-%26-bowl/PZbzukCGRkCgymQc-uWcvg?utm_source=menu-maker"
                    className="text-gray-600 underline hover:opacity-80"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Order now!
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu-section" className="py-16 bg-[#F2E2D1]">
        <div className="container mx-auto px-16 max-w-7xl">
          <h2 className="font-['Rokkitt'] text-4xl font-bold">
            Explore Our Delicious <span className="text-[#5D6E5C]">Menu Selections</span>
          </h2>
          <p className="font-['Outfit'] text-gray-600 mt-2 mb-8">
            Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate 
            your dining experience, one delicious meal at a time.
          </p>

          {/* Menu Categories */}
          <div className="flex justify-center gap-16 mb-12">
            {menuCategories.map((category, index) => (
              <div 
                key={index} 
                className="text-center cursor-pointer transform transition duration-300 hover:scale-110" 
                onClick={() => scrollToSection(category.sectionId)}
              >
                <img 
                  src={category.icon} 
                  alt={category.name} 
                  className="w-16 h-16 mx-auto mb-2 rounded-full object-cover"
                />
                <span className="font-['Outfit'] text-sm">{category.name}</span>
              </div>
            ))}
          </div>

          {/* Menu Items */}
          {Object.entries(menuItems).map(([category, items]) => (
            <div key={category} id={`${category}-section`} className="mb-16">
              <h3 className="font-['Outfit'] text-2xl font-bold mb-8 capitalize">{category}</h3>
              <div className="grid grid-cols-3 gap-6">
                {items.map((item, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
                    <div className="relative">
                      <img 
                        src={item.image}
                        alt={item.name}
                        className="w-full h-48 object-cover"
                      />
                      <button className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center text-xl font-light">
                        +
                      </button>
                    </div>
                    <div className="p-4">
                      <div className="flex text-yellow-400 mb-2">★★★★★</div>
                      <h4 className="font-['Outfit'] text-lg font-bold mb-2">{item.name}</h4>
                      <div className="flex items-center">
                        <span className="text-yellow-400 font-bold">$</span>
                        <span className="font-['Outfit'] text-lg font-bold">{item.price.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home; 
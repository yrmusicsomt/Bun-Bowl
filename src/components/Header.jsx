import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Header = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if there's a hash in the URL
    if (location.hash) {
      // Remove the '#' and scroll to that element
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const handleNavigation = (sectionId) => {
    if (location.pathname !== '/') {
      // If not on home page, navigate to home with hash
      window.location.href = `/${sectionId}`;
    } else {
      // If on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const scrollToFooter = () => {
    const footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-[#1B3735] py-4">
      <nav className="container mx-auto px-16 max-w-7xl flex items-center">
        {/* Logo and Brand Name */}
        <div className="flex items-center gap-4">
          <img 
            src="/logo.png" 
            alt="Bun & Bowl Logo" 
            className="w-12 h-12 rounded-full object-cover"
          />
          <Link to="/" className="font-['Rokkitt'] text-[#F7F0D6] text-3xl font-extrabold">
            BUN & BOWL
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-8 ml-auto font-['Outfit']">
          <Link 
            to="/" 
            className="text-[#F7F0D6] hover:text-[#F7F0D6]/80 transition duration-300 transform hover:scale-105"
          >
            home
          </Link>
          <Link to="/about" className="text-[#F7F0D6] hover:text-[#F7F0D6]/80">
            about
          </Link>
          <Link 
            to="/#menu-section" 
            className="text-[#F7F0D6] hover:text-[#F7F0D6]/80"
          >
            menu
          </Link>
          <a 
            href="https://www.ubereats.com/store/bun-%26-bowl/PZbzukCGRkCgymQc-uWcvg?utm_source=menu-maker"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F7F0D6] hover:text-[#F7F0D6]/80"
          >
            delivery
          </a>
          <Link to="/catering" className="text-[#F7F0D6] hover:text-[#F7F0D6]/80">
            catering
          </Link>
          <button 
            onClick={scrollToFooter}
            className="text-[#F7F0D6] hover:text-[#F7F0D6]/80"
          >
            contact us
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header; 
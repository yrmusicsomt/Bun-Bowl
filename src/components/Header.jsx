import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Header = () => {
  const location = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <header className="bg-[#1B3735] py-4 relative z-50">
      <nav className="container mx-auto px-4 md:px-16 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo and Brand Name */}
          <div className="flex items-center gap-4">
            <img 
              src="/logo.png" 
              alt="Bun & Bowl Logo" 
              className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
            />
            <Link to="/" className="font-['Rokkitt'] text-[#F7F0D6] text-2xl md:text-3xl font-extrabold">
              BUN & BOWL
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[#F7F0D6] p-2 relative z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 ml-auto font-['Outfit']">
            <Link to="/" className="text-[#F7F0D6] hover:text-[#F7F0D6]/80">
              home
            </Link>
            <Link to="/about" className="text-[#F7F0D6] hover:text-[#F7F0D6]/80">
              about
            </Link>
            <Link to="/#menu-section" className="text-[#F7F0D6] hover:text-[#F7F0D6]/80">
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
            <button onClick={scrollToFooter} className="text-[#F7F0D6] hover:text-[#F7F0D6]/80">
              contact us
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          } md:hidden fixed inset-0 bg-[#1B3735] transition-all duration-300 ease-in-out`}
          style={{ top: '0', left: '0', right: '0', bottom: '0' }}
        >
          <div className="flex flex-col gap-4 font-['Outfit'] pt-24 px-4">
            <Link 
              to="/" 
              className="text-[#F7F0D6] hover:text-[#F7F0D6]/80 py-2 text-xl"
              onClick={() => setIsMenuOpen(false)}
            >
              home
            </Link>
            <Link 
              to="/about" 
              className="text-[#F7F0D6] hover:text-[#F7F0D6]/80 py-2 text-xl"
              onClick={() => setIsMenuOpen(false)}
            >
              about
            </Link>
            <Link 
              to="/#menu-section" 
              className="text-[#F7F0D6] hover:text-[#F7F0D6]/80 py-2 text-xl"
              onClick={() => setIsMenuOpen(false)}
            >
              menu
            </Link>
            <a 
              href="https://www.ubereats.com/store/bun-%26-bowl/PZbzukCGRkCgymQc-uWcvg?utm_source=menu-maker"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F7F0D6] hover:text-[#F7F0D6]/80 py-2 text-xl"
              onClick={() => setIsMenuOpen(false)}
            >
              delivery
            </a>
            <Link 
              to="/catering" 
              className="text-[#F7F0D6] hover:text-[#F7F0D6]/80 py-2 text-xl"
              onClick={() => setIsMenuOpen(false)}
            >
              catering
            </Link>
            <button 
              onClick={() => {
                scrollToFooter();
                setIsMenuOpen(false);
              }} 
              className="text-[#F7F0D6] hover:text-[#F7F0D6]/80 py-2 text-left text-xl"
            >
              contact us
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header; 
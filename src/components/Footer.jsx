import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Footer = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const scrollToFooter = () => {
    const footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="footer" className="bg-[#1B3735] text-white py-16">
      <div className="container mx-auto px-16 max-w-7xl">
        <div className="grid grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="font-['Rokkitt'] text-3xl font-extrabold mb-4">Bun & Bowl</h3>
            <div className="flex gap-4 mt-4">
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" className="w-6 h-6 invert" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" className="w-6 h-6 invert" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" className="w-6 h-6 invert" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" className="w-6 h-6 invert" />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="font-['Rokkitt'] text-3xl font-extrabold mb-4">Shop</h3>
            <ul className="space-y-2 font-['Outfit']">
              <li>
                <Link to="/" className="hover:opacity-80">
                  Home
                </Link>
              </li>
              <li><Link to="/about" className="hover:opacity-80">About</Link></li>
              <li>
                <Link to="/#menu-section" className="hover:opacity-80">
                  Menu
                </Link>
              </li>
              <li>
                <a 
                  href="https://www.ubereats.com/store/bun-%26-bowl/PZbzukCGRkCgymQc-uWcvg?utm_source=menu-maker" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-80"
                >
                  Delivery
                </a>
              </li>
              <li><Link to="/catering" className="hover:opacity-80">Catering</Link></li>
              <li>
                <button 
                  onClick={scrollToFooter}
                  className="hover:opacity-80"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-['Rokkitt'] text-3xl font-extrabold mb-4">Get in touch</h3>
            <ul className="space-y-2 font-['Outfit']">
              <li>+61 123 456 789</li>
              <li>contact@bunbowl.com</li>
              <li>564 Box Rd, Jannali NSW 2226</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/20 text-sm font-['Outfit']">
          Bun & Bowl © 2023. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
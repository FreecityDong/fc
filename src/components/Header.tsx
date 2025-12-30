import { Link, useLocation } from 'react-router-dom';
import imgLogo1 from "../assets/83355803525a6978565c2af8a9f0438fd4508523.png";

export function Header() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white w-full sticky top-0 z-50 shadow-sm font-['Noto_Sans_SC',sans-serif]">
      <div className="max-w-[1920px] mx-auto px-4 md:px-8 lg:px-16 h-[80px] md:h-[100px] lg:h-[127px] flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="h-[50px] md:h-[65px] lg:h-[82px] w-auto flex-shrink-0">
          <img 
            alt="FruitCore Tech Logo" 
            className="h-full w-auto object-contain" 
            src={imgLogo1} 
          />
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-4 md:gap-8 lg:gap-12">
          <Link 
            to="/" 
            className={`text-[16px] leading-[50px] transition-colors hover:text-[#f9883c] ${
              isActive('/') ? 'text-[#f9883c] font-black' : 'text-black font-normal'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/team" 
            className={`text-[16px] leading-[50px] transition-colors hover:text-[#f9883c] ${
              isActive('/team') ? 'text-[#f9883c] font-black' : 'text-black font-normal'
            }`}
          >
            Team
          </Link>
          <Link 
            to="/product" 
            className={`text-[16px] leading-[50px] transition-colors hover:text-[#f9883c] ${
              isActive('/product') ? 'text-[#f9883c] font-black' : 'text-black font-normal'
            }`}
          >
            Product
          </Link>
          <Link 
            to="/about" 
            className={`text-[16px] leading-[50px] transition-colors hover:text-[#f9883c] ${
              isActive('/about') ? 'text-[#f9883c] font-black' : 'text-black font-normal'
            }`}
          >
            About Us
          </Link>
        </nav>
      </div>
    </header>
  );
}
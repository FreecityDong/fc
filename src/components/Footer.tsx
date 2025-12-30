import { Link } from "react-router-dom";
import img7A87Dbf17738378Aef5F79703737Bb392 from "../assets/cdf43fbaf0e2eb21d59add48c3166f6bc7cfcd15.png";

export function Footer() {
  return (
    <footer className="bg-black w-full font-['Noto_Sans_SC',sans-serif]">
      <div className="max-w-[1920px] mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <div className="w-[92px] h-[92px]">
              <img
                alt="FruitCore Tech Logo"
                className="w-full h-full object-cover"
                src={img7A87Dbf17738378Aef5F79703737Bb392}
              />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="text-white text-center md:text-left">
            <nav className="flex flex-col gap-3 capitalize text-[16px] leading-[50px] font-medium">
              <Link to="/" className="hover:text-[#f9883c] transition-colors">
                Home
              </Link>
              <Link
                to="/team"
                className="hover:text-[#f9883c] transition-colors"
              >
                Team
              </Link>
              <Link
                to="/product"
                className="hover:text-[#f9883c] transition-colors"
              >
                Product
              </Link>

              <Link
                to="/about"
                className="hover:text-[#f9883c] transition-colors"
              >
                About us
              </Link>
            </nav>
          </div>

          {/* Contact Information */}
          <div className="text-white text-center md:text-left text-[16px] leading-[50px] font-medium">
            <div className="flex flex-col gap-3">
              <p>Email: fruitcore.tech@outlook.com</p>
              <p>Telephone: 19357170700</p>
              <p>
                Address: Xinhu Business Building, Xihu District, Hangzhou City,
                Zhejiang Province, China
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

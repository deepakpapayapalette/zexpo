import logo from "../assets/images/logo-white.png";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-webprimary text-white pt-16 pb-8 mt-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="flex flex-col items-start">
            <img src={logo} alt="ZEXPO" className="h-12 mb-6" />
            <p className="text-white text-sm leading-relaxed opacity-90">
              Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Product</h4>
            <ul className="text-white space-y-3 text-sm opacity-90">
              <li>
                <Link to="/local-taste" className="hover:underline">
                  Local Taste
                </Link>
              </li>
              <li>
                <Link to="/articles" className="hover:underline">
                  Article
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:underline">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/news" className="hover:underline">
                  News
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Company</h4>
            <ul className="text-white space-y-3 text-sm opacity-90">
              <li>
                <Link to="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/terms-of-use" className="hover:underline">
                  Terms Of Use
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Support</h4>
            <ul className="text-white space-y-3 text-sm opacity-90">
              <li>
                <Link to="/contact" className="hover:underline">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/help-center" className="hover:underline">
                  Help center
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contacts us</h4>
            <ul className="text-white space-y-4 text-sm opacity-90">
              <li className="flex items-center gap-3">
                <FaPhoneAlt />
                <span>+91 8562325956</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope />
                <span>rairavi209@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1" />
                <span>Lucknow City Center, Uttar Pradesh</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-8">
          <p className="text-white text-sm opacity-90">
            © {currentYear} ZEXPO All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

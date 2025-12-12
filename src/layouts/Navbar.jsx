import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";

import Logo from "../assets/images/logo.png";
import ThemeButton from "../components/UI/ThemeButton";

import "../assets/styles/website/navbar.css";

const Navbar = () => {
  const location = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  const toggleDropdown = (key) =>
    setActiveDropdown((prev) => (prev === key ? null : key));

  const navLinksData = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Exhibition", href: "/exhibition" },
    { name: "News & Articles", href: "/news" },
    { name: "Contact Us", href: "/contact" },
  ];

  // Shared link classes
  const baseLinkClasses =
    "block px-3 py-3 rounded-md text-base font-medium transition-colors duration-200";

  const activeClasses = "text-webprimary font-semibold";
  const inactiveClasses = "text-gray-700 hover:text-webprimary";

  const linkClass = ({ isActive }) =>
    `${baseLinkClasses} ${isActive ? activeClasses : inactiveClasses}`;

  return (
    <nav className="sticky top-0 bg-white shadow-sm border-b border-gray-200 z-[1001] flex items-center">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <NavLink to="/">
            <img src={Logo} alt="Logo" className="max-w-[130px]" />
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-4">
            {navLinksData.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className={linkClass}
                onClick={closeMenu}
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/cart">
              <button className="py-2 px-3 bg-gray-200 text-gray-800 rounded-md text-lg hover:bg-websecondary hover:text-white flex items-center gap-1">
                Cart <IoCartOutline size={20} />
              </button>
            </Link>

            <Link to="/login">
              <ThemeButton variant="fill" className="py-1">
                Login
              </ThemeButton>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              className="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-[73px] right-0 bg-white w-4/5 h-[calc(100vh-73px)] border-gray-200 transition-all duration-500 ease-in-out shadow-md ${isMenuOpen
            ? "opacity-100 max-h-screen"
            : "opacity-0 max-h-0 overflow-hidden"
            }`}
        >
          <div className="px-4 py-6 space-y-1">
            {navLinksData.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className={linkClass}
                onClick={closeMenu}
              >
                {link.name}
              </NavLink>
            ))}

            {/* Mobile CTA */}
            <div className="pt-6 flex flex-col gap-4">
              <Link to="/cart">
                <button className="py-2 px-3 bg-gray-200 text-gray-800 rounded-md text-lg hover:bg-websecondary hover:text-white flex items-center gap-1">
                  Cart <IoCartOutline size={20} />
                </button>
              </Link>

              <Link to="/login">
                <ThemeButton variant="fill" className="py-1">
                  Login
                </ThemeButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

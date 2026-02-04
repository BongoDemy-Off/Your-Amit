import React, { useState, useEffect } from 'react';
import { Menu, X, Flag } from 'lucide-react';
import { NavLink } from '../types';
import { VolunteerModal } from './VolunteerModal';

const links: NavLink[] = [
  { label: 'হোম', href: '#home' },
  { label: 'ঐতিহ্য ও অবদান', href: '#legacy' },
  { label: 'আমাদের সম্পর্কে', href: '#about' },
  { label: 'ইশতেহার', href: '#manifesto' },
  { label: 'পোস্টার', href: '#poster' },
  { label: 'যোগাযোগ', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const handleJoinClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
    setIsOpen(false);
  };

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 backdrop-blur-md py-4'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a 
              href="#home" 
              onClick={(e) => scrollToSection(e, '#home')}
              className="flex items-center space-x-2 text-bnp-green hover:opacity-80 transition"
            >
              <Flag className="h-8 w-8 text-bnp-red" fill="currentColor" />
              <div className="flex flex-col">
                <span className="font-bold text-xl leading-none">অনিন্দ্য ইসলাম অমিত</span>
                <span className="text-sm text-gray-600">যশোর-৩</span>
              </div>
            </a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-8">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-gray-700 hover:text-bnp-green font-semibold transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
              <button 
                onClick={handleJoinClick}
                className="bg-bnp-green text-white px-6 py-2 rounded-full font-bold hover:bg-green-700 transition shadow-lg"
              >
                যোগ দিন
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-700 focus:outline-none"
              onClick={toggleMenu}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-100">
              <div className="flex flex-col space-y-4 pt-4">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-gray-700 hover:text-bnp-green font-medium px-2"
                  >
                    {link.label}
                  </a>
                ))}
                <button 
                  onClick={handleJoinClick}
                  className="bg-bnp-green text-white px-4 py-2 rounded-lg font-bold hover:bg-green-700 transition w-full text-center mt-2"
                >
                  যোগ দিন
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Volunteer Modal */}
      <VolunteerModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};
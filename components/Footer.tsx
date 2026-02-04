import React from 'react';
import { Facebook, Twitter, Youtube, Flag } from 'lucide-react';
import { SocialLink } from '../types';

const socialLinks: SocialLink[] = [
  { platform: 'Facebook', href: '#', icon: Facebook },
  { platform: 'Twitter', href: '#', icon: Twitter },
  { platform: 'Youtube', href: '#', icon: Youtube },
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Flag className="h-8 w-8 text-bnp-red" fill="currentColor" />
              <div>
                <h3 className="text-2xl font-bold">অনিন্দ্য ইসলাম অমিত</h3>
                <p className="text-gray-400 text-sm">যশোর-৩</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md">
              গণতন্ত্র, উন্নয়ন এবং সুশাসনের লক্ষ্যে আমাদের পথচলা। আপনার মূল্যবান ভোট ও সমর্থন দিয়ে পাশে থাকুন।
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2 inline-block">দ্রুত লিঙ্ক</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-bnp-green transition">হোম</a></li>
              <li><a href="#manifesto" className="text-gray-400 hover:text-bnp-green transition">ইশতেহার</a></li>
              <li><a href="#poster" className="text-gray-400 hover:text-bnp-green transition">পোস্টার তৈরি</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-bnp-green transition">যোগাযোগ</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2 inline-block">সোশ্যাল মিডিয়া</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a 
                  key={link.platform}
                  href={link.href}
                  className="bg-gray-800 p-3 rounded-full hover:bg-bnp-green transition duration-300"
                  aria-label={link.platform}
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Aninda Islam Amit Campaign. All rights reserved.</p>
          <p className="mt-2">Developed for Digital Campaign MVP.</p>
        </div>
      </div>
    </footer>
  );
};
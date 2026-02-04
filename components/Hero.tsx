import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative pt-24 pb-12 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-br from-green-50 via-white to-gray-100">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-bnp-green/5 to-transparent skew-x-12 transform origin-top-right"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left space-y-6">
            <div className="inline-flex items-center space-x-2 bg-bnp-green/10 text-bnp-green px-4 py-1.5 rounded-full text-sm font-bold border border-bnp-green/20">
              <span className="w-2 h-2 rounded-full bg-bnp-red animate-pulse"></span>
              <span>আসন্ন জাতীয় সংসদ নির্বাচন</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900 font-sans">
              উন্নয়ন ও গণতন্ত্রের পক্ষে, <br />
              <span className="text-bnp-green">ধানের শীষে</span> ভোট দিন
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto md:mx-0 leading-relaxed font-medium">
              অনিন্দ্য ইসলাম অমিত - যশোর-৩ আসনের মাটি ও মানুষের নেতা।
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4">
              <a 
                href="#poster" 
                className="w-full sm:w-auto px-8 py-3 bg-bnp-green text-white rounded-lg font-bold shadow-lg hover:bg-green-700 transition flex items-center justify-center gap-2 transform hover:-translate-y-1 duration-200"
              >
                পোস্টার তৈরি করুন <ArrowRight className="h-5 w-5" />
              </a>
              <a 
                href="#manifesto" 
                className="w-full sm:w-auto px-8 py-3 border-2 border-gray-900 text-gray-900 rounded-lg font-bold hover:bg-gray-900 hover:text-white transition"
              >
                আমাদের ইশতেহার
              </a>
            </div>

            <div className="pt-8 flex items-center justify-center md:justify-start space-x-6 text-sm font-medium text-gray-600">
              <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-full shadow-sm">
                <CheckCircle2 className="h-4 w-4 text-bnp-green" />
                <span>ন্যায়বিচার</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-full shadow-sm">
                <CheckCircle2 className="h-4 w-4 text-bnp-green" />
                <span>উন্নয়ন</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-full shadow-sm">
                <CheckCircle2 className="h-4 w-4 text-bnp-green" />
                <span>গণতন্ত্র</span>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="flex-1 w-full max-w-lg">
            <div className="relative">
              {/* Decorative Circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-bnp-green/20 to-bnp-red/10 rounded-full blur-3xl -z-10"></div>
              
              <img 
                src="https://picsum.photos/seed/aninda/600/700" 
                alt="Aninda Islam Amit" 
                className="relative w-full h-auto rounded-2xl shadow-2xl border-4 border-white object-cover aspect-[4/5]"
              />
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border-l-4 border-bnp-green hidden md:block">
                <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">আপনার প্রার্থী</p>
                <p className="text-xl font-bold text-gray-900">যশোর-৩ আসন</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
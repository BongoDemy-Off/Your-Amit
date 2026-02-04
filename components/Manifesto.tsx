import React from 'react';
import { BookOpen, Users, Briefcase, GraduationCap, Heart, Leaf } from 'lucide-react';
import { ManifestoItem } from '../types';

const manifestoItems: ManifestoItem[] = [
  {
    title: "শিক্ষা উন্নয়ন",
    description: "যশোরের প্রতিটি স্কুল ও কলেজে আধুনিক ল্যাব এবং লাইব্রেরি স্থাপন। দরিদ্র মেধাবী শিক্ষার্থীদের জন্য বিশেষ বৃত্তি।",
    icon: GraduationCap
  },
  {
    title: "স্বাস্থ্যসেবা",
    description: "সকলের জন্য সুচিকিৎসা নিশ্চিত করতে প্রতিটি ইউনিয়নে কমিউনিটি ক্লিনিক আধুনিকায়ন ও অ্যাম্বুলেন্স সুবিধা।",
    icon: Heart
  },
  {
    title: "কর্মসংস্থান",
    description: "আইটি পার্ক স্থাপন এবং ক্ষুদ্র ও মাঝারি শিল্পের বিকাশের মাধ্যমে হাজারো বেকারের কর্মসংস্থান সৃষ্টি।",
    icon: Briefcase
  },
  {
    title: "যুব সমাজ",
    description: "মাদকমুক্ত সমাজ গঠন এবং যুবকদের জন্য কারিগরি প্রশিক্ষণ কেন্দ্র স্থাপন।",
    icon: Users
  },
  {
    title: "কৃষি ও কৃষক",
    description: "ন্যায্য মূল্যে সার ও বীজ বিতরণ, এবং কৃষিপণ্য সংরক্ষণে হিমাগার স্থাপন।",
    icon: Leaf
  },
  {
    title: "আইনের শাসন",
    description: "রাজনৈতিক হয়রানি বন্ধ এবং দলমত নির্বিশেষে সকলের জন্য ন্যায়বিচার নিশ্চিত করা।",
    icon: BookOpen
  }
];

export const Manifesto: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">আমাদের নির্বাচনী <span className="text-bnp-red">ইশতেহার</span></h2>
        <p className="text-lg text-gray-600">
          একটি উন্নত, সমৃদ্ধ ও নিরাপদ যশোর গড়তে আমাদের অঙ্গীকারনামা। আপনাদের সমর্থনই আমাদের শক্তি।
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {manifestoItems.map((item, index) => (
          <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition duration-300 border border-gray-100 group">
            <div className="w-14 h-14 bg-green-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-bnp-green transition-colors duration-300">
              <item.icon className="h-7 w-7 text-bnp-green group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
            <p className="text-gray-600 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
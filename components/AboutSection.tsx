import React from 'react';
import { Target, Eye, History } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      {/* Header */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-sans">
          আমাদের <span className="text-bnp-green">সম্পর্কে</span>
        </h2>
        <div className="h-1.5 w-24 bg-bnp-green mx-auto rounded-full mb-6"></div>
        <p className="text-lg text-gray-600 leading-relaxed">
          অনিন্দ্য ইসলাম অমিতের নেতৃত্বে আমরা একটি আধুনিক, গণতান্ত্রিক এবং বৈষম্যহীন যশোর গড়ার লক্ষ্যে কাজ করছি। আমাদের রাজনীতি ক্ষমতার জন্য নয়, মানুষের অধিকার আদায়ের জন্য।
        </p>
      </div>

      {/* Mission & Vision Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Mission */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border-l-8 border-bnp-green hover:-translate-y-2 transition-transform duration-300">
          <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-6">
            <Target className="w-8 h-8 text-bnp-green" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">আমাদের লক্ষ্য (Mission)</h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex gap-2">
              <span className="text-bnp-green font-bold">✓</span>
              গণতন্ত্র পুনরুদ্ধার ও মানুষের ভোটাধিকার নিশ্চিত করা।
            </li>
            <li className="flex gap-2">
              <span className="text-bnp-green font-bold">✓</span>
              যশোরকে সন্ত্রাস, মাদক ও চাঁদাবাজ মুক্ত জনপদ হিসেবে গড়ে তোলা।
            </li>
            <li className="flex gap-2">
              <span className="text-bnp-green font-bold">✓</span>
              তৃণমূলের মানুষের কাছে জবাবদিহিমূলক নেতৃত্ব পৌঁছে দেওয়া।
            </li>
          </ul>
        </div>

        {/* Vision */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border-l-8 border-bnp-red hover:-translate-y-2 transition-transform duration-300">
          <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-6">
            <Eye className="w-8 h-8 text-bnp-red" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">আমাদের ভিশন (Vision)</h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex gap-2">
              <span className="text-bnp-red font-bold">✓</span>
              আগামীর যশোর হবে একটি 'স্মার্ট সিটি' যেখানে প্রযুক্তি ও নাগরিক সুবিধা সবার জন্য উন্মুক্ত থাকবে।
            </li>
            <li className="flex gap-2">
              <span className="text-bnp-red font-bold">✓</span>
              শিক্ষা ও স্বাস্থ্যখাতে যশোরকে বাংলাদেশের মডেল জেলায় রূপান্তর করা।
            </li>
            <li className="flex gap-2">
              <span className="text-bnp-red font-bold">✓</span>
              পরিবেশবান্ধব ও টেকসই উন্নয়নের মাধ্যমে ভৈরব নদের নাব্য ফিরিয়ে আনা।
            </li>
          </ul>
        </div>
      </div>

      {/* History Section */}
      <div className="bg-gray-900 text-white rounded-3xl p-8 md:p-12 mb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-bnp-green opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-bnp-green font-bold text-sm">
              <History className="w-4 h-4" />
              <span>সংগ্রামের ইতিহাস</span>
            </div>
            <h3 className="text-3xl font-bold">প্রজন্ম থেকে প্রজন্মে <br/>মানবিক রাজনীতির ধারা</h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              যশোরের রাজনীতিতে তরিকুল ইসলামের পরিবার কেবল একটি নাম নয়, একটি প্রতিষ্ঠান। স্বৈরাচার বিরোধী আন্দোলন থেকে শুরু করে গণতন্ত্র পুনরুদ্ধারের প্রতিটি লড়াইয়ে এই পরিবার সামনের সারিতে থেকে নেতৃত্ব দিয়েছে। বর্তমানে অনিন্দ্য ইসলাম অমিত সেই মশাল বহন করছেন। গত দেড় দশকে শত শত মিথ্যা মামলা ও নির্যাতন সহ্য করেও তিনি যশোরবাসীর পাশ থেকে সরে যাননি।
            </p>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4">
            <div className="bg-gray-800 p-6 rounded-xl text-center">
              <span className="block text-4xl font-bold text-bnp-green mb-2">৫০+</span>
              <span className="text-gray-400 text-sm">বছরের রাজনৈতিক ঐতিহ্য</span>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl text-center">
              <span className="block text-4xl font-bold text-white mb-2">১০০০+</span>
              <span className="text-gray-400 text-sm">সামাজিক উন্নয়ন প্রকল্প</span>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl text-center">
              <span className="block text-4xl font-bold text-white mb-2">লক্ষাধিক</span>
              <span className="text-gray-400 text-sm">নিবেদিত নেতাকর্মী</span>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl text-center">
              <span className="block text-4xl font-bold text-bnp-red mb-2">২৪/৭</span>
              <span className="text-gray-400 text-sm">জনগণের সেবায় নিয়োজিত</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
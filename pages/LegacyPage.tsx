import React, { useState, useEffect } from 'react';
import { 
  Building, 
  GraduationCap, 
  Globe2, 
  HeartHandshake, 
  Users2, 
  Lightbulb, 
  Quote,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

const API_URL = "https://script.google.com/macros/s/AKfycby71Mnt0KdUO2D-pDeBAop9hb_Fs6OP2ui-iLgTbsJqI_PhW_a4db8BnMvYQ53MNqIT/exec";

// Default images to show while loading or on error
const DEFAULT_IMAGES = {
  tariqul: "https://upload.wikimedia.org/wikipedia/en/2/23/Tariqul_Islam.jpg",
  amit: "https://pbs.twimg.com/profile_images/1610996884638760962/8Lq4vJ6X_400x400.jpg"
};

/**
 * Converts a Google Drive sharing link to a direct CDN link.
 * Using lh3.googleusercontent.com avoids 403 rate limits common with export=download.
 */
const getGoogleDriveDirectLink = (url: string): string => {
  if (!url) return '';
  
  // Extract ID from patterns like: /file/d/ID/view or id=ID
  const idMatch = url.match(/\/d\/([a-zA-Z0-9_-]+)/) || url.match(/id=([a-zA-Z0-9_-]+)/);
  
  if (idMatch && idMatch[1]) {
    return `https://lh3.googleusercontent.com/d/${idMatch[1]}`;
  }
  
  // If it's not a drive link, return as is (e.g. if user put a direct jpg link)
  return url;
};

export const LegacyPage: React.FC = () => {
  const [images, setImages] = useState(DEFAULT_IMAGES);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        
        setImages(prev => ({
          tariqul: data.Tariqul_Islam_Portrait_Link 
            ? getGoogleDriveDirectLink(data.Tariqul_Islam_Portrait_Link) 
            : prev.tariqul,
          amit: data.Aninda_Islam_Amit_Portrait_Link 
            ? getGoogleDriveDirectLink(data.Aninda_Islam_Amit_Portrait_Link) 
            : prev.amit
        }));
      } catch (error) {
        console.error("Error fetching legacy page images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="container mx-auto px-4">
      {/* Page Header */}
      <div className="text-center max-w-5xl mx-auto mb-20">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-100 text-gray-600 font-semibold text-sm mb-6 border border-gray-200">
          <span className="w-2 h-2 rounded-full bg-gray-500"></span>
          ঐতিহ্য ও ভবিষ্যৎ
        </div>
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-sans tracking-tight">
          উন্নয়নের <span className="text-bnp-green">রূপকার</span> ও আগামীর <span className="text-bnp-green">কান্ডারি</span>
        </h2>
        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          যশোরের ইতিহাসে তরিকুল ইসলামের অবদান যেমন অবিস্মরণীয়, তেমনি অনিন্দ্য ইসলাম অমিতের মানবিক নেতৃত্ব আগামীর নতুন সম্ভাবনার দ্বার উন্মোচন করছে।
        </p>
      </div>

      <div className="space-y-24">
        {/* Tariqul Islam Section */}
        <div className="relative bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-gray-100 overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gray-50 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Profile Info */}
            <div className="lg:w-1/3 text-center lg:text-left">
              <div className="relative inline-block mb-6 group">
                <div className="absolute inset-0 bg-gray-900 rounded-full blur-md opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <img 
                  src={images.tariqul} 
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=Tariqul+Islam&background=1f2937&color=fff&size=256';
                  }}
                  alt="Tariqul Islam" 
                  className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-8 border-white shadow-xl relative z-10"
                />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">তরিকুল ইসলাম</h3>
              <p className="text-lg font-medium text-gray-500 mb-6">সাবেক মন্ত্রী ও জাতীয় নেতা</p>
              
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 text-left">
                <Quote className="w-8 h-8 text-gray-300 mb-2" />
                <p className="text-gray-600 italic leading-relaxed">
                  তিনি ছিলেন আধুনিক যশোরের ভৌত অবকাঠামোর স্থপতি। তার হাত ধরেই যশোর একটি আধুনিক জেলা শহরে রূপান্তরিত হয়েছে।
                </p>
              </div>
            </div>

            {/* Contributions Grid */}
            <div className="lg:w-2/3 grid gap-8">
              
              {/* Infrastructure */}
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center shrink-0">
                    <Building className="w-6 h-6 text-gray-700" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">অবকাঠামো উন্নয়ন (Infrastructure)</h4>
                    <ul className="space-y-3">
                      <li className="flex gap-3 text-gray-600">
                        <CheckCircle2 className="w-5 h-5 text-gray-400 shrink-0" />
                        <span><strong>যশোর বিমানবন্দর:</strong> রানওয়ে সম্প্রসারণ ও আধুনিকায়ন করে বড় বিমান চলাচলের উপযোগী করা।</span>
                      </li>
                      <li className="flex gap-3 text-gray-600">
                        <CheckCircle2 className="w-5 h-5 text-gray-400 shrink-0" />
                        <span><strong>ভৈরব নদ সংস্কার:</strong> শহরের জলাবদ্ধতা নিরসনে ঐতিহাসিক নদী সংস্কার প্রকল্প গ্রহণ।</span>
                      </li>
                      <li className="flex gap-3 text-gray-600">
                        <CheckCircle2 className="w-5 h-5 text-gray-400 shrink-0" />
                        <span><strong>মহাসড়ক:</strong> যশোর-বেনাপোল ও যশোর-খুলনা মহাসড়ক আন্তর্জাতিক মানে উন্নীতকরণ।</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Education & Health */}
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center shrink-0">
                    <GraduationCap className="w-6 h-6 text-gray-700" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">শিক্ষা ও স্বাস্থ্য (Education & Health)</h4>
                    <ul className="space-y-3">
                      <li className="flex gap-3 text-gray-600">
                        <CheckCircle2 className="w-5 h-5 text-gray-400 shrink-0" />
                        <span><strong>বিশ্ববিদ্যালয় স্থাপন:</strong> যশোর বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়ের (JUST) স্বপ্নদ্রষ্টা ও রূপকার।</span>
                      </li>
                      <li className="flex gap-3 text-gray-600">
                        <CheckCircle2 className="w-5 h-5 text-gray-400 shrink-0" />
                        <span><strong>মেডিকেল কলেজ:</strong> যশোর মেডিকেল কলেজ স্থাপন ও ২৫০ শয্যা বিশিষ্ট হাসপাতালের আধুনিকায়ন।</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* National Impact */}
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center shrink-0">
                    <Globe2 className="w-6 h-6 text-gray-700" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">জাতীয় প্রভাব (National Impact)</h4>
                    <p className="text-gray-600 mb-2">
                      পরিবেশ ও বন মন্ত্রী হিসেবে বাংলাদেশে <strong>পলিথিন শপিং ব্যাগ নিষিদ্ধকরণে</strong> তার সাহসী সিদ্ধান্ত আন্তর্জাতিকভাবে প্রশংসিত হয়েছিল। এছাড়াও তথ্য ও খাদ্য মন্ত্রণালয়ে তিনি যুগান্তকারী সংস্কার এনেছিলেন।
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Aninda Islam Amit Section */}
        <div className="relative bg-gradient-to-br from-green-50 to-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-green-100 overflow-hidden">
           <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-100/50 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2"></div>

          <div className="flex flex-col lg:flex-row-reverse gap-12 items-start">
             {/* Profile Info */}
             <div className="lg:w-1/3 text-center lg:text-right">
              <div className="relative inline-block mb-6 group">
                <div className="absolute inset-0 bg-bnp-green rounded-full blur-md opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <img 
                  src={images.amit} 
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=Aninda+Islam&background=006a4e&color=fff&size=256';
                  }}
                  alt="Aninda Islam Amit" 
                  className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-8 border-white shadow-xl relative z-10"
                />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">অনিন্দ্য ইসলাম অমিত</h3>
              <p className="text-lg font-medium text-bnp-green mb-6">সাংগঠনিক সম্পাদক, বিএনপি (খুলনা)</p>
              
              <div className="bg-white p-6 rounded-2xl border border-green-100 text-left lg:text-right shadow-sm">
                <Quote className="w-8 h-8 text-emerald-200 mb-2 ml-auto rotate-180" />
                <p className="text-gray-600 italic leading-relaxed">
                  ক্ষমতার বাইরে থেকেও যে মানুষের সেবা করা যায়, তিনি তার উজ্জ্বল দৃষ্টান্ত। তিনি গড়ে তুলছেন মানুষের আস্থার ভিত্তি।
                </p>
              </div>
            </div>

            {/* Contributions Grid */}
            <div className="lg:w-2/3 grid gap-8">
              
              {/* Humanitarian Aid */}
              <div className="bg-white p-6 rounded-2xl border border-green-100 shadow-sm hover:shadow-md transition-shadow group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-bnp-green transition-colors">
                    <HeartHandshake className="w-6 h-6 text-bnp-green group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-bnp-green transition-colors">মানবিক সহায়তা (Humanitarian Aid)</h4>
                    <ul className="space-y-3">
                      <li className="flex gap-3 text-gray-600">
                        <ArrowRight className="w-5 h-5 text-bnp-green shrink-0 mt-0.5" />
                        <span><strong>করোনা হেল্প সেল:</strong> মহামারীর সময় বাড়ি বাড়ি অক্সিজেন সিলিন্ডার, ওষুধ ও খাদ্য সহায়তা পৌঁছে দিয়েছেন।</span>
                      </li>
                      <li className="flex gap-3 text-gray-600">
                        <ArrowRight className="w-5 h-5 text-bnp-green shrink-0 mt-0.5" />
                        <span><strong>সেফটি নেট:</strong> লকডাউন ও বিভিন্ন দুর্যোগে কর্মহীন মানুষের জন্য নিয়মিত গোপন খাদ্য সহায়তা কার্যক্রম।</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Youth Development */}
              <div className="bg-white p-6 rounded-2xl border border-green-100 shadow-sm hover:shadow-md transition-shadow group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-bnp-green transition-colors">
                    <Users2 className="w-6 h-6 text-bnp-green group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-bnp-green transition-colors">যুব উন্নয়ন (Youth Development)</h4>
                    <ul className="space-y-3">
                      <li className="flex gap-3 text-gray-600">
                        <ArrowRight className="w-5 h-5 text-bnp-green shrink-0 mt-0.5" />
                        <span><strong>নেতৃত্ব সৃষ্টি:</strong> গতানুগতিক রাজনীতির বাইরে এসে শিক্ষিত ও মার্জিত তরুণদের রাজনীতিতে সম্পৃক্ত করেছেন।</span>
                      </li>
                      <li className="flex gap-3 text-gray-600">
                        <ArrowRight className="w-5 h-5 text-bnp-green shrink-0 mt-0.5" />
                        <span><strong>শিক্ষা ও ক্রীড়া:</strong> মেধাবী শিক্ষার্থীদের বৃত্তি প্রদান এবং মাদক থেকে যুবসমাজকে দূরে রাখতে ক্রীড়া টুর্নামেন্টের আয়োজন।</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Future Vision */}
              <div className="bg-white p-6 rounded-2xl border border-green-100 shadow-sm hover:shadow-md transition-shadow group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-bnp-green transition-colors">
                    <Lightbulb className="w-6 h-6 text-bnp-green group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-bnp-green transition-colors">ভবিষ্যৎ পরিকল্পনা (Future Vision)</h4>
                    <p className="text-gray-600 mb-2">
                      যশোরকে একটি <strong>'স্মার্ট সিটি'</strong> হিসেবে গড়ে তোলার পরিকল্পনা, যেখানে থাকবে আইটি পার্ক, ফ্রি ওয়াইফাই জোন এবং একটি সম্পূর্ণ সন্ত্রাস ও চাদাবাজ মুক্ত নিরাপদ জনপদ।
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
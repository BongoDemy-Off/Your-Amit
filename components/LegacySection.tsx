import React from 'react';
import { 
  Building2, 
  GraduationCap, 
  HeartPulse, 
  Leaf, 
  Wifi, 
  Users, 
  ShieldCheck, 
  Stethoscope, 
  Plane, 
  Quote
} from 'lucide-react';

export const LegacySection: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      {/* Section Header */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-sans">
          পিতা ও পুত্রের <span className="text-bnp-green">যুগান্তকারী অবদান</span>
        </h2>
        <div className="h-1.5 w-32 bg-bnp-green mx-auto rounded-full mb-6"></div>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          তরিকুল ইসলাম তৈরি করেছেন <span className="font-bold text-gray-800">"ইট-পাথরের ভিত্তি"</span>, আর অনিন্দ্য ইসলাম অমিত তৈরি করছেন <span className="font-bold text-gray-800">"মানুষের আস্থার ভিত্তি"</span>। আধুনিক যশোর বিনির্মাণে পিতা ও পুত্রের অনন্য পথচলা।
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
        
        {/* --- Father's Column --- */}
        <div className="flex flex-col h-full">
          <div className="bg-white rounded-3xl shadow-xl border-t-8 border-gray-700 overflow-hidden h-full flex flex-col hover:shadow-2xl transition-shadow duration-300">
            
            {/* Header Profile */}
            <div className="bg-gray-50 p-8 border-b border-gray-100">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="w-28 h-28 rounded-full border-4 border-white shadow-lg overflow-hidden shrink-0">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/en/2/23/Tariqul_Islam.jpg" 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=Tariqul+Islam&background=374151&color=fff&size=200';
                    }}
                    alt="Tariqul Islam" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-2xl font-bold text-gray-900">তরিকুল ইসলাম</h3>
                  <p className="text-gray-600 font-semibold mt-1">আধুনিক যশোরের রূপকার</p>
                  <p className="text-xs text-gray-500 mt-2 bg-gray-200 inline-block px-3 py-1 rounded-full">
                    সাবেক মন্ত্রী (তথ্য, খাদ্য, পরিবেশ ও বন)
                  </p>
                </div>
              </div>
            </div>

            {/* Contributions Body */}
            <div className="p-8 space-y-8 flex-grow">
              
              {/* Education & Health */}
              <div>
                <div className="flex items-center gap-2 mb-3 text-gray-800">
                  <GraduationCap className="w-6 h-6 text-gray-600" />
                  <h4 className="font-bold text-lg border-b-2 border-gray-200 pb-1 w-full">শিক্ষা ও স্বাস্থ্যখাত</h4>
                </div>
                <ul className="space-y-2 text-gray-600 text-sm md:text-base list-disc list-inside marker:text-gray-400">
                  <li><span className="font-semibold text-gray-800">যশোর বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয় (JUST):</span> বিশ্ববিদ্যালয় স্থাপনের স্বপ্নদ্রষ্টা ও বাস্তবায়নে অগ্রণী ভূমিকা।</li>
                  <li><span className="font-semibold text-gray-800">মেডিকেল কলেজ:</span> যশোরবাসীর দীর্ঘদিনের দাবি পূরণ করে মেডিকেল কলেজ ও ২৫০ শয্যা হাসপাতাল আধুনিকায়ন।</li>
                  <li><span className="font-semibold text-gray-800">এম.এম. কলেজ:</span> অনার্স-মাস্টার্স কোর্স চালু, একাডেমিক ভবন ও ছাত্রাবাস নির্মাণ।</li>
                </ul>
              </div>

              {/* Infrastructure */}
              <div>
                <div className="flex items-center gap-2 mb-3 text-gray-800">
                  <Building2 className="w-6 h-6 text-gray-600" />
                  <h4 className="font-bold text-lg border-b-2 border-gray-200 pb-1 w-full">অবকাঠামো ও যোগাযোগ</h4>
                </div>
                <ul className="space-y-2 text-gray-600 text-sm md:text-base list-disc list-inside marker:text-gray-400">
                  <li><span className="font-semibold text-gray-800">যশোর বিমানবন্দর:</span> রানওয়ে সম্প্রসারণ ও আধুনিকায়ন, যার ফলে বড় বিমান চলাচল সম্ভব হয়েছে।</li>
                  <li><span className="font-semibold text-gray-800">সড়ক উন্নয়ন:</span> যশোর-বেনাপোল মহাসড়ক আন্তর্জাতিক মানে উন্নীতকরণ ও গ্রামীন রাস্তা পাকাকরণ।</li>
                  <li><span className="font-semibold text-gray-800">ভৈরব নদ:</span> শহরের জলাবদ্ধতা নিরসনে নদী সংস্কারের প্রথম কার্যকর উদ্যোগ।</li>
                </ul>
              </div>

              {/* National Impact */}
              <div>
                <div className="flex items-center gap-2 mb-3 text-gray-800">
                  <Leaf className="w-6 h-6 text-gray-600" />
                  <h4 className="font-bold text-lg border-b-2 border-gray-200 pb-1 w-full">রাষ্ট্রীয় অবদান</h4>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg text-sm text-gray-600 border border-gray-100">
                  পরিবেশ মন্ত্রী থাকাকালে <span className="font-bold">পলিথিন শপিং ব্যাগ নিষিদ্ধকরণ</span> এবং সামাজিক বনায়ন কর্মসূচিতে বৈপ্লবিক পরিবর্তন আনেন, যা আন্তর্জাতিকভাবে প্রশংসিত।
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* --- Son's Column --- */}
        <div className="flex flex-col h-full">
          <div className="bg-white rounded-3xl shadow-xl border-t-8 border-bnp-green overflow-hidden h-full flex flex-col hover:shadow-2xl transition-shadow duration-300">
            
             {/* Header Profile */}
             <div className="bg-green-50 p-8 border-b border-green-100">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="w-28 h-28 rounded-full border-4 border-white shadow-lg overflow-hidden shrink-0">
                  <img 
                    src="https://pbs.twimg.com/profile_images/1610996884638760962/8Lq4vJ6X_400x400.jpg" 
                    onError={(e) => {
                       (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=Aninda+Islam&background=006a4e&color=fff&size=200';
                    }}
                    alt="Aninda Islam Amit" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-2xl font-bold text-gray-900">অনিন্দ্য ইসলাম অমিত</h3>
                  <p className="text-bnp-green font-semibold mt-1">মানবিক নেতা ও আগামীর স্বপ্নদ্রষ্টা</p>
                  <p className="text-xs text-green-700 mt-2 bg-green-100 inline-block px-3 py-1 rounded-full">
                    সাংগঠনিক সম্পাদক, বিএনপি (খুলনা বিভাগ)
                  </p>
                </div>
              </div>
            </div>

            {/* Contributions Body */}
            <div className="p-8 space-y-8 flex-grow">
              
              {/* Humanitarian */}
              <div>
                <div className="flex items-center gap-2 mb-3 text-emerald-800">
                  <HeartPulse className="w-6 h-6 text-bnp-green" />
                  <h4 className="font-bold text-lg border-b-2 border-green-100 pb-1 w-full">মানবিক সহায়তা ও করোনা মোকাবেলা</h4>
                </div>
                <ul className="space-y-2 text-gray-600 text-sm md:text-base list-disc list-inside marker:text-bnp-green">
                  <li><span className="font-semibold text-gray-800">অক্সিজেন ব্যাংক ও টেলিমেডিসিন:</span> করোনায় ‘হেল্প সেল’ গঠন করে বাড়ি বাড়ি অক্সিজেন ও ওষুধ পৌঁছে দিয়েছেন।</li>
                  <li><span className="font-semibold text-gray-800">সেফটি নেট:</span> লকডাউনে কর্মহীন মানুষের ঘরে গোপনে খাদ্য সহায়তা প্রদান।</li>
                  <li><span className="font-semibold text-gray-800">ডেঙ্গু প্রতিরোধ:</span> রক্তদান কর্মসূচি ও মশা নিধন কার্যক্রম পরিচালনা।</li>
                </ul>
              </div>

               {/* Politics & Organization */}
               <div>
                <div className="flex items-center gap-2 mb-3 text-emerald-800">
                  <ShieldCheck className="w-6 h-6 text-bnp-green" />
                  <h4 className="font-bold text-lg border-b-2 border-green-100 pb-1 w-full">রাজনৈতিক সংস্কার</h4>
                </div>
                <ul className="space-y-2 text-gray-600 text-sm md:text-base list-disc list-inside marker:text-bnp-green">
                  <li><span className="font-semibold text-gray-800">আইনি লড়াইয়ের সারথি:</span> গায়েবি মামলার শিকার হাজারো নেতাকর্মীর আইনি খরচ ও জামিনের ব্যবস্থা গ্রহণ।</li>
                  <li><span className="font-semibold text-gray-800">মাদকমুক্ত রাজনীতি:</span> দলের মধ্যে মাদকের বিরুদ্ধে ‘জিরো টলারেন্স’ নীতি বাস্তবায়ন।</li>
                </ul>
              </div>

              {/* Future Vision */}
              <div>
                <div className="flex items-center gap-2 mb-3 text-emerald-800">
                  <Wifi className="w-6 h-6 text-bnp-green" />
                  <h4 className="font-bold text-lg border-b-2 border-green-100 pb-1 w-full">আগামীর ভিশন</h4>
                </div>
                <div className="bg-green-50 p-3 rounded-lg text-sm text-gray-600 border border-green-100 flex flex-col gap-2">
                  <p>🚀 <span className="font-bold text-gray-800">স্মার্ট সিটি ও আইটি ভিলেজ:</span> ফ্রিল্যান্সারদের জন্য হাব তৈরি এবং ফ্রি ওয়াইফাই জোন স্থাপন।</p>
                  <p>🛡️ <span className="font-bold text-gray-800">সন্ত্রাসমুক্ত জনপদ:</span> যশোরকে চাঁদাবাজি ও ক্যাডার মুক্ত শান্তির শহরে রূপান্তর।</p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* Footer Quote */}
      <div className="mt-16 text-center">
        <div className="inline-block relative max-w-2xl mx-auto">
          <Quote className="w-8 h-8 text-bnp-green/20 absolute -top-4 -left-6 transform -scale-x-100" />
          <p className="text-xl md:text-2xl font-serif italic text-gray-700 leading-relaxed">
            "বাবার দেখানো পথে, আধুনিক ও নিরাপদ যশোর গড়াই আমার একমাত্র লক্ষ্য। আপনাদের দোয়াই আমার শক্তি।"
          </p>
          <Quote className="w-8 h-8 text-bnp-green/20 absolute -bottom-4 -right-6" />
          <p className="mt-4 font-bold text-bnp-green">— অনিন্দ্য ইসলাম অমিত</p>
        </div>
      </div>
    </div>
  );
};
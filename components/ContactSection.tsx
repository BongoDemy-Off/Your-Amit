import React, { useState, useEffect } from 'react';
import { Mail, Phone, Send, Loader2, CheckCircle, AlertTriangle, MapPin, Youtube, ExternalLink, PlayCircle } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    location: '',
    problemType: 'রাস্তাঘাট ও ড্রেনেজ',
    details: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  // Video Section State
  const [videoId, setVideoId] = useState<string | null>(null);
  const [loadingVideo, setLoadingVideo] = useState(true);

  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycby71Mnt0KdUO2D-pDeBAop9hb_Fs6OP2ui-iLgTbsJqI_PhW_a4db8BnMvYQ53MNqIT/exec";

  // Fetch Config (Video ID) on Mount
  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const response = await fetch(GOOGLE_SCRIPT_URL);
        const data = await response.json();
        if (data && data.youtube_video_id) {
          setVideoId(data.youtube_video_id);
        }
      } catch (error) {
        console.error("Error fetching video config:", error);
      } finally {
        setLoadingVideo(false);
      }
    };

    fetchConfig();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify(formData),
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
      });

      // In no-cors mode, we cannot access the response status. 
      // We assume if fetch doesn't throw, the request was sent.
      setStatus('success');
      setFormData({
        name: '',
        contact: '',
        location: '',
        problemType: 'রাস্তাঘাট ও ড্রেনেজ',
        details: ''
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);

    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus('error');
    }
  };

  return (
    <div className="container mx-auto px-4">
       <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">আমাদের সাথে <span className="text-bnp-green">যুক্ত হোন</span></h2>
        <p className="text-lg text-gray-600">
          আপনার মতামত এবং অংশগ্রহণ আমাদের জন্য অত্যন্ত গুরুত্বপূর্ণ।
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        
        {/* Left Column: Dynamic Video Section */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-bnp-green flex flex-col h-full min-h-[600px]">
          <div className="p-6 bg-green-50 border-b border-green-100">
            <div className="flex items-center gap-3">
              <div className="bg-white p-2 rounded-full shadow-sm">
                 <Youtube className="text-red-600 h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">সরাসরি সমস্যার সমাধান</h3>
                <p className="text-xs text-gray-500 mt-1">জনগণের অভিযোগের প্রেক্ষিতে তাৎক্ষণিক পদক্ষেপ</p>
              </div>
            </div>
          </div>
          
          <div className="flex-grow p-6 bg-white flex flex-col">
            <div className="text-gray-600 mb-6 leading-relaxed">
               <p>
                 অনিন্দ্য ইসলাম অমিত নিয়মিত জনগণের অভিযোগ শোনেন এবং সরাসরি ঘটনাস্থলে গিয়ে সমস্যার সমাধান করেন। নিচে আমাদের সাম্প্রতিক কার্যক্রমের ভিডিও দেখুন।
               </p>
            </div>

            {/* Video Player Container */}
            <div className="w-full aspect-video bg-gray-100 rounded-xl overflow-hidden shadow-md relative group">
              {loadingVideo ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center space-y-3 bg-gray-100 animate-pulse">
                  <PlayCircle className="w-12 h-12 text-gray-300" />
                  <span className="text-gray-400 text-sm font-medium">ভিডিও লোড হচ্ছে...</span>
                </div>
              ) : videoId ? (
                <iframe 
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`} 
                  title="Aninda Islam Amit Campaign Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-gray-50">
                  <Youtube className="w-12 h-12 text-gray-300 mb-2" />
                  <p className="text-gray-500 text-sm">এই মুহূর্তে কোনো ভিডিও পাওয়া যাচ্ছে না।</p>
                </div>
              )}
            </div>

            <div className="mt-8 flex justify-center">
              <a 
                href="#" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 font-bold rounded-full hover:bg-red-50 hover:text-red-600 transition-colors duration-300 group"
              >
                <span>আরও ভিডিও দেখুন</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Custom Complaint & Feedback Form */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-bnp-red flex flex-col h-full min-h-[600px]">
          <div className="p-6 bg-red-50 border-b border-red-100">
            <div className="flex items-center gap-3 mb-2">
              <Mail className="text-bnp-red h-6 w-6" />
              <h3 className="text-xl font-bold text-gray-800">আপনার মতামত ও অভিযোগ</h3>
            </div>
            <p className="text-sm text-gray-600 ml-9">সরাসরি প্রার্থীর কাছে পৌঁছাবে</p>
          </div>
          
          <div className="p-6 flex-grow flex flex-col">
            {/* Special Alert Badge */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-lg p-4 mb-6 flex gap-3 shadow-sm relative overflow-hidden">
               <div className="absolute top-0 right-0 -mt-1 -mr-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
               <div className="bg-white p-2 rounded-full shrink-0 shadow-sm border border-red-100 h-fit">
                 <Phone className="h-5 w-5 text-red-600" />
               </div>
               <p className="text-sm text-gray-800 leading-relaxed font-medium">
                 <span className="text-red-600 font-bold mr-1">📢 ঘোষণা:</span> 
                 অভিযোগকারীদের মধ্যে প্রতিদিন নির্বাচিত কয়েকজনের সাথে <span className="text-red-700 font-bold underline decoration-red-300 underline-offset-2">সরাসরি ফোনে কথা বলবেন</span> অনিন্দ্য ইসলাম অমিত এবং তাৎক্ষণিকভাবে সমস্যা সমাধানের উদ্যোগ নেবেন।
               </p>
            </div>

            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center space-y-4 animate-fade-in">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-2">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">ধন্যবাদ!</h3>
                <p className="text-gray-600 max-w-xs">
                  আপনার অভিযোগ সফলভাবে জমা হয়েছে। আমরা শীঘ্রই বিষয়টি খতিয়ে দেখব।
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-6 px-6 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold hover:bg-gray-200 transition"
                >
                  নতুন অভিযোগ করুন
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">আপনার নাম</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="আপনার পূর্ণ নাম লিখুন"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition bg-gray-50 focus:bg-white"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Contact */}
                  <div>
                    <label htmlFor="contact" className="block text-sm font-semibold text-gray-700 mb-1">মোবাইল নম্বর</label>
                    <input
                      type="tel"
                      id="contact"
                      name="contact"
                      required
                      value={formData.contact}
                      onChange={handleChange}
                      placeholder="017..."
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition bg-gray-50 focus:bg-white"
                    />
                  </div>

                  {/* Location */}
                  <div>
                    <label htmlFor="location" className="block text-sm font-semibold text-gray-700 mb-1">এলাকা / ঠিকানা</label>
                    <div className="relative">
                      <input
                        type="text"
                        id="location"
                        name="location"
                        required
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="যেমন: উপশহর, সেক্টর-৩"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition bg-gray-50 focus:bg-white"
                      />
                      <MapPin className="absolute right-3 top-3.5 h-5 w-5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Problem Type */}
                <div>
                  <label htmlFor="problemType" className="block text-sm font-semibold text-gray-700 mb-1">সমস্যার ধরন</label>
                  <select
                    id="problemType"
                    name="problemType"
                    value={formData.problemType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition bg-gray-50 focus:bg-white"
                  >
                    <option value="রাস্তাঘাট ও ড্রেনেজ">রাস্তাঘাট ও ড্রেনেজ</option>
                    <option value="আইনশৃঙ্খল ও নিরাপত্তা">আইনশৃঙ্খল ও নিরাপত্তা</option>
                    <option value="পানীয় জল">পানীয় জল</option>
                    <option value="বিদ্যুৎ ও গ্যাস">বিদ্যুৎ ও গ্যাস</option>
                    <option value="দুর্নীতি ও চাঁদাবাজি">দুর্নীতি ও চাঁদাবাজি</option>
                    <option value="অন্যান্য">অন্যান্য</option>
                  </select>
                </div>

                {/* Details */}
                <div>
                  <label htmlFor="details" className="block text-sm font-semibold text-gray-700 mb-1">বিস্তারিত অভিযোগ</label>
                  <textarea
                    id="details"
                    name="details"
                    required
                    rows={4}
                    value={formData.details}
                    onChange={handleChange}
                    placeholder="সমস্যার বিস্তারিত বিবরণ দিন..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition bg-gray-50 focus:bg-white resize-none"
                  ></textarea>
                </div>

                {/* Error Message */}
                {status === 'error' && (
                  <div className="bg-red-50 text-red-600 text-sm p-3 rounded-lg flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4" />
                    দুঃখিত, কোথাও একটি সমস্যা হয়েছে। আবার চেষ্টা করুন।
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-4 bg-bnp-green text-white font-bold rounded-lg shadow-lg hover:bg-green-700 transition transform active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      জমা দেওয়া হচ্ছে...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      অভিযোগ জমা দিন
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
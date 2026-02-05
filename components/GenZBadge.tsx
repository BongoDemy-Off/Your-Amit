import React, { useRef, useState, useCallback } from 'react';
import { Sparkles, X, Download, Share2, CheckCircle2, Fingerprint } from 'lucide-react';
import { toPng } from 'html-to-image';

export const GenZBadge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  
  const badgeRef = useRef<HTMLDivElement>(null);

  const handleOpen = () => {
    setIsOpen(true);
    // Generate immediately after opening (small delay to ensure DOM is ready)
    setTimeout(generateBadge, 500);
  };

  const handleClose = () => {
    setIsOpen(false);
    setGeneratedImage(null);
    setIsGenerating(false);
  };

  const generateBadge = useCallback(async () => {
    if (badgeRef.current === null) return;
    
    setIsGenerating(true);
    try {
      // Force a specific size for the generation to ensure high quality 1080x1080
      const dataUrl = await toPng(badgeRef.current, { 
        cacheBust: true,
        width: 1080,
        height: 1080,
        pixelRatio: 1, // Since we are setting explicit dimensions, 1 is fine
        style: {
            transform: 'scale(1)', // Reset any transforms
            transformOrigin: 'top left'
        }
      });
      setGeneratedImage(dataUrl);
    } catch (err) {
      console.error('Failed to generate badge', err);
    } finally {
      setIsGenerating(false);
    }
  }, [badgeRef]);

  const downloadBadge = () => {
    if (!generatedImage) return;
    const link = document.createElement('a');
    link.download = 'my-vote-my-power.png';
    link.href = generatedImage;
    link.click();
  };

  const shareBadge = async () => {
    if (generatedImage && navigator.share) {
      try {
        // We need to convert base64 to blob to share
        const res = await fetch(generatedImage);
        const blob = await res.blob();
        const file = new File([blob], "vote-badge.png", { type: "image/png" });
        
        await navigator.share({
          title: 'My Vote, My Power',
          text: 'আমি শপথ নিয়েছি, আগামীর যশোর গড়ার লক্ষে আমার প্রথম ভোট আমি দেব। #Jessore3 #GenZVote',
          files: [file]
        });
      } catch (err) {
        console.log('Error sharing:', err);
        // Fallback or silence
      }
    } else {
      // Fallback for desktop/unsupported browsers
      alert("ছবিটি ডাউনলোড করে আপনার সোশ্যাল মিডিয়ায় শেয়ার করুন!");
    }
  };

  return (
    <div className="container mx-auto px-4">
      {/* --- 1. Teaser UI (Visible) --- */}
      <div className="bg-emerald-50 rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 border border-emerald-100 shadow-sm">
        
        {/* Decorative BG elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-200/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="relative z-10 text-center md:text-left space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
             <Sparkles className="w-3 h-3" /> তরুণ ভোটার
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            আমি নতুন ভোটার, <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">আমি পরিবর্তনের পক্ষে।</span>
          </h2>
          <p className="text-lg text-gray-600 font-medium">
             আপনার প্রথম ভোট হোক দেশের উন্নয়নের জন্য। আজই শপথ নিন।
          </p>
        </div>

        <div className="relative z-10">
          <button 
            onClick={handleOpen}
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 font-bold text-white transition-all duration-200 bg-[#006a4e] rounded-full hover:bg-emerald-800 hover:shadow-lg hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-600"
          >
            <Sparkles className="w-5 h-5 animate-pulse" />
            <span>শপথ নিন</span>
            <div className="absolute inset-0 rounded-full ring-2 ring-white/20 group-hover:ring-white/40"></div>
          </button>
        </div>
      </div>

      {/* --- 2. Hidden Generation Canvas (1080x1080) --- */}
      {/* Positioned fixed off-screen to ensure it renders correctly for capture but isn't seen */}
      <div className="fixed -left-[9999px] top-0 pointer-events-none">
          <div 
            ref={badgeRef} 
            className="w-[1080px] h-[1080px] relative flex flex-col items-center justify-center text-center overflow-hidden"
            style={{
                background: 'radial-gradient(circle at center, #1a2f26 0%, #020617 100%)',
            }}
          >
             {/* Cyber/Grid Background Effect */}
             <div className="absolute inset-0 opacity-10" 
                  style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
             </div>
             
             {/* Glow Effect */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[100px]"></div>

             <div className="relative z-10 flex flex-col items-center gap-4 border-4 border-emerald-500/30 p-16 rounded-[4rem] backdrop-blur-sm bg-white/5">
                
                {/* Fingerprint Icon */}
                <Fingerprint className="w-32 h-32 text-emerald-400 mb-8 opacity-80" strokeWidth={1} />

                <h1 className="text-[120px] leading-[0.9] font-black text-white tracking-tighter drop-shadow-2xl font-sans">
                    MY VOTE
                </h1>
                <h1 className="text-[120px] leading-[0.9] font-black text-emerald-400 tracking-tighter drop-shadow-[0_0_25px_rgba(52,211,153,0.5)] font-sans">
                    MY POWER
                </h1>

                <div className="w-32 h-2 bg-emerald-500 rounded-full my-8"></div>

                <h2 className="text-5xl font-bold text-white font-serif tracking-wide mb-8">
                    আগামীর যশোর আমার হাতে
                </h2>

                <div className="flex items-center gap-4 bg-emerald-900/40 px-8 py-4 rounded-full border border-emerald-500/30 mt-8">
                    <div className="bg-emerald-500 text-black p-1 rounded-full">
                        <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <div className="text-left">
                        <p className="text-emerald-400 font-bold text-xl uppercase tracking-widest">Verified Citizen</p>
                        <p className="text-white/60 text-lg uppercase tracking-wide">Jessore-3 | First Time Voter</p>
                    </div>
                </div>
             </div>

             {/* Footer inside Badge */}
             <div className="absolute bottom-12 text-white/40 font-medium text-2xl tracking-widest uppercase">
                Supported by Aninda Islam Amit
             </div>
          </div>
      </div>

      {/* --- 3. Modal --- */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" onClick={handleClose}></div>
          
          <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl z-10 overflow-hidden flex flex-col animate-fade-in relative">
            <button 
                onClick={handleClose}
                className="absolute top-4 right-4 z-20 bg-black/10 hover:bg-black/20 p-2 rounded-full transition-colors"
            >
                <X className="w-5 h-5 text-gray-600" />
            </button>

            <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {isGenerating ? 'ব্যাজ তৈরি হচ্ছে...' : 'আপনার ব্যাজ রেডি!'}
                </h3>
                <p className="text-sm text-gray-500 mb-6">
                    {isGenerating ? 'অনুগ্রহ করে অপেক্ষা করুন' : 'এটি ডাউনলোড করে শেয়ার করুন'}
                </p>

                {/* Preview Area */}
                <div className="aspect-square w-full bg-gray-100 rounded-xl overflow-hidden mb-6 relative flex items-center justify-center border border-gray-200">
                    {isGenerating ? (
                        <div className="flex flex-col items-center gap-3">
                             <div className="w-10 h-10 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
                             <p className="text-xs text-emerald-600 font-medium animate-pulse">Generating...</p>
                        </div>
                    ) : generatedImage ? (
                        <img src={generatedImage} alt="Generated Badge" className="w-full h-full object-contain" />
                    ) : null}
                </div>

                {/* Actions */}
                <div className="space-y-3">
                    <button 
                        onClick={downloadBadge}
                        disabled={isGenerating || !generatedImage}
                        className="w-full flex items-center justify-center gap-2 bg-[#006a4e] text-white py-3 rounded-xl font-bold hover:bg-emerald-800 transition active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-emerald-900/10"
                    >
                        <Download className="w-5 h-5" />
                        সেভ করুন (Download)
                    </button>
                    
                    <button 
                         onClick={shareBadge}
                         disabled={isGenerating || !generatedImage}
                         className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-900/10"
                    >
                        <Share2 className="w-5 h-5" />
                        শেয়ার করুন
                    </button>
                    
                    <p className="text-[10px] text-gray-400 mt-2">
                        *সোশ্যাল মিডিয়ায় শেয়ার করার আগে ছবিটি ডাউনলোড করে নিন।
                    </p>
                </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
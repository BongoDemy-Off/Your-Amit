'use client';

import React, { useState, useRef, useCallback, useEffect } from 'react';
import { toPng } from 'html-to-image';
import { Upload, Download, RefreshCw, Move } from 'lucide-react';

export const PosterMaker = () => {
  const [mounted, setMounted] = useState(false);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const posterRef = useRef(null);
  const fileInputRef = useRef(null);

  // Position and Scale state
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleImageUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setImage(event.target.result);
          setPosition({ x: 0, y: 0 });
          setScale(1);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const downloadPoster = useCallback(() => {
    if (posterRef.current === null) {
      return;
    }
    setLoading(true);

    toPng(posterRef.current, { cacheBust: true, pixelRatio: 2 })
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = 'aninda-support-poster.png';
        link.href = dataUrl;
        link.click();
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
        alert('Failed to generate poster. Please try again.');
      });
  }, [posterRef]);

  const handleReset = () => {
    setImage(null);
    setPosition({ x: 0, y: 0 });
    setScale(1);
  };

  const handleMouseDown = (e) => {
    if (!image) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !image) return;
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  if (!mounted) return null;

  return (
    <div className="flex flex-col lg:flex-row gap-12 items-center justify-center max-w-6xl mx-auto">
      
      {/* Left: Controls */}
      <div className="w-full lg:w-[480px] bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm shadow-xl">
        
        {/* Step 1 */}
        <h3 className="text-emerald-300 font-semibold mb-4 text-sm tracking-wide">১. আপনার ছবি সিলেক্ট করুন</h3>
        
        <div 
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed border-emerald-500/30 hover:border-emerald-400 bg-emerald-500/5 hover:bg-emerald-500/10 rounded-xl h-40 flex flex-col items-center justify-center cursor-pointer transition-all group mb-6"
        >
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              accept="image/*"
              onChange={handleImageUpload}
            />
            <div className="bg-emerald-500/20 p-3 rounded-full mb-3 group-hover:scale-110 transition-transform">
                <Upload className="w-6 h-6 text-emerald-400" />
            </div>
            <p className="text-white/80 font-medium text-sm">ছবি পরিবর্তন করতে ক্লিক করুন</p>
        </div>
        
        {/* Zoom Control */}
        <div className={`transition-opacity duration-300 ${image ? 'opacity-100' : 'opacity-40 pointer-events-none'}`}>
            <div className="flex justify-between text-xs text-white/60 font-medium uppercase tracking-wider mb-2">
                <span>জুম আউট</span>
                <span>জুম ইন</span>
            </div>
            <input 
                type="range"
                min="0.5"
                max="2.5"
                step="0.05"
                value={scale}
                onChange={(e) => setScale(parseFloat(e.target.value))}
                className="w-full h-2 bg-emerald-900 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
             <div className="bg-emerald-500/10 rounded px-3 py-2 mt-3 flex items-center gap-2 text-xs text-emerald-300 border border-emerald-500/20">
                <Move className="w-3 h-3" />
                <span>ছবির উপর ক্লিক করে ড্র্যাগ করে পজিশন ঠিক করুন</span>
            </div>
        </div>

        {/* Step 2 */}
        <h3 className="text-emerald-300 font-semibold mt-8 mb-4 text-sm tracking-wide">২. পোস্টার ডাউনলোড করুন</h3>
        
        <button
            onClick={downloadPoster}
            disabled={!image || loading}
            className={`w-full py-4 rounded-xl font-bold text-lg text-white flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/20 transition-all active:scale-95
              ${!image || loading 
                ? 'bg-gray-600 opacity-50 cursor-not-allowed' 
                : 'bg-emerald-500 hover:bg-emerald-400'
              }`}
        >
            {loading ? <RefreshCw className="animate-spin h-5 w-5" /> : <Download className="h-5 w-5" />}
            পোস্টার ডাউনলোড করুন
        </button>

        <button 
            onClick={handleReset}
            className="w-full mt-4 py-2 text-white/50 hover:text-white text-sm font-medium flex items-center justify-center gap-2 transition-colors hover:bg-white/5 rounded-lg"
        >
            <RefreshCw className="w-3 h-3" /> রিসেট করুন
        </button>
      </div>

      {/* Right: Preview */}
      <div className="relative group">
        <div className="p-3 border-2 border-emerald-500/30 rounded-2xl bg-white/5 backdrop-blur-sm shadow-2xl">
            <div className="relative overflow-hidden rounded-xl bg-gray-800" style={{ width: '400px', height: '400px' }}>
                <div 
                    ref={posterRef}
                    className="w-full h-full relative bg-gray-900 overflow-hidden cursor-move"
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                >
                     {/* Image Layer */}
                     {image ? (
                         <div 
                            className="absolute origin-center"
                            style={{
                              transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                              width: '100%',
                              height: '100%',
                            }}
                          >
                            <img 
                              src={image} 
                              alt="User" 
                              className="w-full h-full object-cover"
                              draggable={false} 
                            />
                         </div>
                     ) : (
                         <div className="absolute inset-0 flex flex-col items-center justify-center text-white/10">
                             <span className="text-7xl mb-4">👤</span>
                             <p className="text-sm font-medium">এখানে ছবি দেখা যাবে</p>
                         </div>
                     )}

                     {/* Overlay Layer */}
                     <div className="absolute inset-0 pointer-events-none flex flex-col justify-end">
                        <div className="bg-gradient-to-t from-black/90 via-black/60 to-transparent pt-24 pb-8 px-4 text-center">
                            <p className="text-white text-sm font-bold tracking-widest mb-1 opacity-90 drop-shadow-md uppercase">I Support</p>
                            <h2 className="text-white text-3xl font-bold mb-3 drop-shadow-xl font-sans tracking-tight leading-none">
                                Aninda Islam Amit
                            </h2>
                            <div className="flex items-center justify-center gap-3">
                                <span className="text-2xl filter drop-shadow-lg">🌾</span>
                                <div className="bg-[#006a4e] text-white text-xs font-bold px-4 py-1.5 rounded-full border border-yellow-500/50 shadow-lg tracking-wide">
                                    Jessore-3 | <span className="text-yellow-400">ধানের শীষ</span>
                                </div>
                                <span className="text-2xl filter drop-shadow-lg transform scale-x-[-1]">🌾</span>
                            </div>
                        </div>
                     </div>
                </div>
            </div>
        </div>
        <p className="text-center text-emerald-500/40 text-xs mt-4">
           * ভালো ফলাফলের জন্য স্কোয়ার ছবি ব্যবহার করুন
        </p>
      </div>
    </div>
  );
};
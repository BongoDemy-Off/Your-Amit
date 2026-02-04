import React, { useState, useEffect } from 'react';
import { X, UserPlus, Loader2, CheckCircle, AlertTriangle } from 'lucide-react';

interface VolunteerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VolunteerModal: React.FC<VolunteerModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    location: '',
    details: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycby71Mnt0KdUO2D-pDeBAop9hb_Fs6OP2ui-iLgTbsJqI_PhW_a4db8BnMvYQ53MNqIT/exec";

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    const payload = {
      action: 'volunteer',
      ...formData
    };

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify(payload),
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Assume success in no-cors mode
      setStatus('success');
      setFormData({
        name: '',
        contact: '',
        email: '',
        location: '',
        details: ''
      });
      
      // Close modal after success message shown briefly or keep it open to show thanks
      setTimeout(() => {
        // Optional: auto close? Let's leave it for user to close or see the message
      }, 2000);

    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus('error');
    }
  };

  const handleClose = () => {
    if (status === 'submitting') return;
    setStatus('idle'); // Reset status when reopening
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={handleClose}
      />

      {/* Modal Card */}
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl z-10 overflow-hidden transform transition-all scale-100 flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-bnp-green px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-white">
            <UserPlus className="h-6 w-6" />
            <h2 className="text-xl font-bold">স্বেচ্ছাসেবক হিসেবে যোগ দিন</h2>
          </div>
          <button 
            onClick={handleClose}
            className="text-white/80 hover:text-white hover:bg-white/10 p-1 rounded-full transition"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          {status === 'success' ? (
            <div className="flex flex-col items-center justify-center py-8 text-center animate-fade-in">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">ধন্যবাদ!</h3>
              <p className="text-gray-600 mb-6">
                আপনার তথ্য সফলভাবে জমা হয়েছে। আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।
              </p>
              <button 
                onClick={handleClose}
                className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition"
              >
                বন্ধ করুন
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-sm text-gray-500 mb-4">
                অনিন্দ্য ইসলাম অমিতের নির্বাচনী প্রচারাভিযানে অংশ নিতে নিচের ফর্মটি পূরণ করুন।
              </p>

              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">আপনার নাম <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="আপনার পূর্ণ নাম"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                />
              </div>

              {/* Contact */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">মোবাইল নম্বর <span className="text-red-500">*</span></label>
                <input
                  type="tel"
                  name="contact"
                  required
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder="017..."
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">ইমেইল (ঐচ্ছিক)</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@mail.com"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                />
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">এলাকা / ঠিকানা <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="location"
                  required
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="আপনার বর্তমান ঠিকানা"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                />
              </div>

              {/* Details */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">বিস্তারিত / মন্তব্য (ঐচ্ছিক)</label>
                <textarea
                  name="details"
                  rows={3}
                  value={formData.details}
                  onChange={handleChange}
                  placeholder="আপনি কিভাবে সাহায্য করতে চান? আপনার সম্পর্কে বলুন..."
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition resize-none"
                ></textarea>
              </div>

              {/* Error State */}
              {status === 'error' && (
                <div className="bg-red-50 text-red-600 text-sm p-3 rounded-lg flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4" />
                  দুঃখিত, তথ্য জমা দিতে সমস্যা হয়েছে। আবার চেষ্টা করুন।
                </div>
              )}

              {/* Actions */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-3 bg-bnp-green text-white font-bold rounded-lg shadow-md hover:bg-green-700 transition transform active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      জমা দেওয়া হচ্ছে...
                    </>
                  ) : (
                    "জমা দিন"
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
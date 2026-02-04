import React, { useState, useEffect } from 'react';
import { Clock, MapPin, RefreshCw, AlertCircle, Calendar } from 'lucide-react';

interface ScheduleItem {
  time: string;
  event: string;
  location: string;
  date?: string;
}

export const LiveSchedule: React.FC = () => {
  const [schedule, setSchedule] = useState<ScheduleItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchSchedule = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycby71Mnt0KdUO2D-pDeBAop9hb_Fs6OP2ui-iLgTbsJqI_PhW_a4db8BnMvYQ53MNqIT/exec?action=schedule');
      const data = await response.json();
      
      if (Array.isArray(data)) {
        setSchedule(data);
      } else {
        setSchedule([]);
      }
    } catch (err) {
      console.error("Error fetching schedule:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSchedule();
  }, []);

  return (
    <div className="container mx-auto px-4">
      {/* Header Section */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-3 animate-pulse">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          লাইভ আপডেট
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-sans">
          আজকের কর্মসূচি
        </h2>
      </div>

      {/* Schedule Card */}
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        {/* Card Header */}
        <div className="px-6 py-4 border-b border-gray-100 bg-gray-50/50 flex items-center justify-between">
          <h3 className="font-semibold text-gray-700 flex items-center gap-2">
            <span className="text-emerald-500">📅</span>
            রিয়েল-টাইম শিডিউল
          </h3>
          <button 
            onClick={fetchSchedule} 
            disabled={loading}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium text-emerald-700 hover:bg-emerald-50 transition-colors disabled:opacity-50"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            <span>রিফ্রেশ</span>
          </button>
        </div>

        {/* Card Body */}
        <div className="p-6 md:p-8 min-h-[300px]">
          {loading ? (
             <div className="space-y-8 pl-4 border-l-2 border-gray-100 ml-3">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="relative pl-8">
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-200 ring-4 ring-white"></div>
                        <div className="h-5 w-20 bg-gray-200 rounded mb-3 animate-pulse"></div>
                        <div className="h-6 w-48 bg-gray-100 rounded mb-2 animate-pulse"></div>
                        <div className="h-4 w-32 bg-gray-50 rounded animate-pulse"></div>
                    </div>
                ))}
             </div>
          ) : error ? (
            <div className="flex flex-col items-center justify-center h-full py-10 text-center">
              <AlertCircle className="w-12 h-12 text-red-200 mb-3" />
              <p className="text-gray-500 font-medium">তথ্য লোড করা সম্ভব হয়নি</p>
              <button onClick={fetchSchedule} className="mt-2 text-emerald-600 font-semibold hover:underline">
                আবার চেষ্টা করুন
              </button>
            </div>
          ) : schedule.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full py-10 text-center text-gray-400">
               <Calendar className="w-16 h-16 mb-4 text-gray-200" />
               <p className="text-lg">আজকের কোনো কর্মসূচি নেই</p>
            </div>
          ) : (
            <div className="space-y-10 pl-4 border-l-2 border-emerald-100 ml-3 relative">
              {schedule.map((item, index) => (
                <div key={index} className="relative pl-8 group">
                  {/* Dot */}
                  <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-emerald-500 ring-4 ring-white shadow-sm transition-transform group-hover:scale-110"></div>
                  
                  {/* Time */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-50 text-emerald-700 text-sm font-bold border border-emerald-100 mb-2">
                    <Clock className="w-3.5 h-3.5" />
                    {item.time}
                  </div>
                  
                  {/* Content */}
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-1.5 group-hover:text-emerald-700 transition-colors">
                      {item.event}
                    </h4>
                    <div className="flex items-center gap-2 text-gray-500 text-sm md:text-base font-medium">
                      <MapPin className="w-4 h-4 text-gray-400 shrink-0" />
                      {item.location}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
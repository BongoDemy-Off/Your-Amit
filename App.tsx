import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LiveSchedule } from './components/LiveSchedule';
import { Manifesto } from './components/Manifesto';
import { PosterMaker } from './components/PosterMaker';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LegacyPage } from './pages/LegacyPage';
import { AboutSection } from './components/AboutSection';
import { GenZBadge } from './components/GenZBadge';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-grow">
        <section id="home">
          <Hero />
        </section>

        <section id="schedule" className="py-16 bg-white">
          <LiveSchedule />
        </section>

        <section id="legacy" className="py-16 md:py-24 bg-gray-50">
          <LegacyPage />
        </section>

        <section id="about" className="py-16 md:py-24 bg-white">
          <AboutSection />
        </section>

        <section id="manifesto" className="py-16 md:py-24 bg-gray-50">
          <Manifesto />
        </section>

        <section id="poster" className="py-16 md:py-24 bg-[#0B4F3A]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 space-y-3">
                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-sm font-medium border border-emerald-500/30">
                    <span>📷</span> <span>ক্যাম্পেইন</span>
                 </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white">
                  আপনার ছবিতে <span className="text-emerald-400">ধানের শীষের ফ্রেম</span>
                </h2>
                <p className="text-emerald-100/80 text-lg max-w-2xl mx-auto">
                    আপনার ছবি আপলোড করে সমর্থন জানান। ছবিটি জুম এবং মুভ করে এডজাস্ট করুন।
                </p>
            </div>
            <PosterMaker />
          </div>
        </section>

        <section id="contact" className="py-16 md:py-24 bg-gray-100">
          <ContactSection />
        </section>

        {/* New Gen Z Badge Section */}
        <section className="py-16 bg-white">
           <GenZBadge />
        </section>

      </main>

      <Footer />
    </div>
  );
}
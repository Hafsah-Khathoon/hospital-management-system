
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Clock, Users, ChevronRight, Award, Star } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-purple-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 z-10 text-center md:text-left">
            <span className="inline-block px-4 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              Care You Can Trust – Premium & Modern Healthcare
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-purple-950 mb-6 leading-tight">
              Advanced <span className="text-purple-600">Medicine</span> With a Human Touch.
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-xl mx-auto md:mx-0 leading-relaxed">
              Lumina provides world-class clinical expertise with a focus on patient comfort and the most advanced medical technology available in the region.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <Link 
                to="/appointment" 
                className="px-8 py-4 bg-purple-700 text-white rounded-2xl font-bold hover:bg-purple-800 transition-all shadow-xl shadow-purple-200 flex items-center justify-center space-x-2"
              >
                <span>Book Appointment</span>
                <ArrowRight size={20} />
              </Link>
              <Link 
                to="/services" 
                className="px-8 py-4 bg-white text-purple-900 border border-purple-100 rounded-2xl font-bold hover:bg-purple-50 transition-all flex items-center justify-center"
              >
                View Departments
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 mt-16 md:mt-0 relative">
            <div className="absolute -top-12 -right-12 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>
            <div className="absolute -bottom-12 -left-12 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse delay-700"></div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1000" 
                alt="State-of-the-art Medical Facility" 
                className="rounded-[3rem] shadow-2xl object-cover h-[500px] w-full border-[12px] border-white"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl border border-purple-50 hidden md:block max-w-xs">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-2xl flex items-center justify-center text-yellow-600">
                    <Star size={28} fill="currentColor" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-tighter">Patient Satisfaction</p>
                    <p className="text-xl font-bold text-gray-900">4.9 / 5.0 Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-around gap-8 grayscale opacity-50">
             <div className="flex items-center space-x-2"><Award size={32} /> <span className="font-bold text-xl font-display">NABH Accredited</span></div>
             <div className="flex items-center space-x-2"><ShieldCheck size={32} /> <span className="font-bold text-xl font-display">ISO 9001:2015</span></div>
             <div className="flex items-center space-x-2"><Users size={32} /> <span className="font-bold text-xl font-display">1M+ Patient Base</span></div>
             <div className="flex items-center space-x-2"><Award size={32} /> <span className="font-bold text-xl font-display">JCI Certified</span></div>
          </div>
        </div>
      </section>

      {/* Middle Banner: Specialty Focus */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-purple-950 rounded-[4rem] p-10 md:p-20 text-white relative flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">Excellence in Robotic Surgery & Diagnostics.</h2>
              <p className="text-purple-200 text-lg leading-relaxed mb-10">
                Lumina is at the forefront of medical technology. Our Bandra Kurla Complex facility houses the Da Vinci Xi Robotic system and South Asia's most advanced molecular laboratory.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {[
                  "Robotic-Assisted Surgery",
                  "Molecular Oncology",
                  "Advanced Transplant Unit",
                  "24/7 Level-1 Trauma Care",
                  "Hybrid OT Suites",
                  "Pediatric ICU (NICU)"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-purple-600/30 rounded-full flex items-center justify-center text-purple-400">
                      <ChevronRight size={14} />
                    </div>
                    <span className="font-medium text-purple-100">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/services" className="inline-flex items-center space-x-3 px-10 py-5 bg-purple-600 hover:bg-purple-500 rounded-2xl font-bold transition-all shadow-2xl shadow-purple-900/40">
                <span>Explore Departments</span>
                <ArrowRight size={20} />
              </Link>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="absolute inset-0 bg-purple-600/30 blur-[100px] rounded-full"></div>
              <img 
                src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800" 
                className="relative rounded-[3rem] shadow-2xl w-full h-[500px] object-cover contrast-110 border-2 border-purple-800" 
                alt="Technology"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

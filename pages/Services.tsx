
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, iconMap } from '../constants';
import { Calendar } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="py-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <span className="text-purple-600 font-bold tracking-widest uppercase text-sm mb-4 block">Medical Specialties</span>
          <h2 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-8">World-Class Centers of Excellence</h2>
          <p className="text-gray-500 max-w-3xl mx-auto text-xl leading-relaxed">
            Our multi-disciplinary team utilizes state-of-the-art trauma facilities and precision diagnostics to provide compassionate, world-standard treatment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {SERVICES.map((service) => (
            <div key={service.id} className="group bg-white p-12 rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-700 relative overflow-hidden border border-gray-100">
              <div className="absolute top-0 right-0 w-40 h-40 bg-purple-50 rounded-bl-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 bg-purple-100 rounded-[1.5rem] flex items-center justify-center text-purple-700 mb-10 transform group-hover:rotate-6 transition-transform">
                  {iconMap[service.icon]}
                </div>
                <h3 className="text-3xl font-display font-bold text-gray-900 mb-6">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed mb-10 text-lg">
                  {service.description}
                </p>
                <div className="flex items-center justify-between border-t border-gray-50 pt-8">
                  <Link 
                    to="/appointment" 
                    className="flex items-center space-x-2 text-purple-700 font-bold hover:text-purple-900 transition-colors"
                  >
                    <Calendar size={18} />
                    <span>Book Now</span>
                  </Link>
                  <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-gray-400 group-hover:bg-purple-700 group-hover:text-white transition-all">
                    <span className="text-xl">→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic CTA */}
        <div className="mt-32 bg-gradient-to-br from-purple-900 to-indigo-950 rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden shadow-3xl">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px]"></div>
          <div className="max-w-3xl relative z-10">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">Can't find what you're looking for?</h2>
            <p className="text-purple-200 text-xl mb-12 leading-relaxed">
              Our patient relations team is available 24/7 to guide you to the right specialist for your specific health needs.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link to="/contact" className="px-10 py-5 bg-white text-purple-950 rounded-2xl font-bold hover:bg-purple-50 transition-all shadow-xl">
                Contact Admissions
              </Link>
              <button className="px-10 py-5 bg-purple-800/50 text-white border border-purple-700 rounded-2xl font-bold hover:bg-purple-800 transition-all">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

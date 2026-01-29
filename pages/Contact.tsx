
import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="py-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-purple-600 font-bold uppercase tracking-widest text-sm">Get in Touch</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mt-4 mb-6">We're Here for India's Health</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Reach out to our Mumbai center for appointments, emergencies, or general health inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Methods */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-all border border-gray-100 group">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-700 shrink-0 group-hover:bg-purple-700 group-hover:text-white transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Central Helpline</h4>
                  <p className="text-gray-600 text-sm mb-4">Direct helpline for emergency & IPD queries.</p>
                  <p className="text-purple-700 font-bold text-xl tracking-wide">+91 22 4567 8900</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-all border border-gray-100 group">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-700 shrink-0 group-hover:bg-blue-700 group-hover:text-white transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Email Enquiries</h4>
                  <p className="text-gray-600 text-sm mb-4">Documentation and corporate medical tie-ups.</p>
                  <p className="text-blue-700 font-bold tracking-tight">care@lumina.health.in</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-all border border-gray-100 group">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-700 shrink-0 group-hover:bg-green-700 group-hover:text-white transition-colors">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">OPD Hours</h4>
                  <p className="text-gray-600 text-sm mb-1 font-medium">Mon - Sat: 08:30 AM - 09:00 PM</p>
                  <p className="text-gray-600 text-sm">Sunday: 09:00 AM - 02:00 PM</p>
                  <div className="mt-3 flex items-center space-x-2 text-red-600 font-bold text-sm">
                    <span className="w-2 h-2 bg-red-600 rounded-full animate-ping"></span>
                    <span>Emergency: 24 Hours Open</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map and Address */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-4 rounded-[2.5rem] shadow-sm border border-gray-100 h-[450px] overflow-hidden relative">
              {/* Map centered on Bandra Kurla Complex, Mumbai */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15082.490045435905!2d72.85871987824888!3d19.069324671408383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8e5470d0691%3A0x6003c0f1cc288cba!2sBandra%20Kurla%20Complex%2C%20Bandra%20East%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1711200000000!5m2!1sen!2sin" 
                className="w-full h-full rounded-[2rem] grayscale-[30%] contrast-[1.1] hover:grayscale-0 transition-all duration-700"
                style={{ border: 0 }} 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute bottom-8 left-8 right-8 md:right-auto bg-white/95 backdrop-blur-md p-6 rounded-3xl shadow-2xl max-w-sm border border-purple-50">
                <div className="flex items-center space-x-3 text-purple-700 mb-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <MapPin size={18} />
                  </div>
                  <span className="font-bold text-lg">Lumina Mumbai HQ</span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed font-medium">
                  Block G, 5th Floor, Trade Center, Bandra Kurla Complex, Bandra (E), Mumbai - 400051, Maharashtra, India.
                </p>
              </div>
            </div>

            <div className="bg-purple-900 rounded-[2.5rem] p-10 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-purple-200">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">Patient Services WhatsApp</h3>
                <p className="text-purple-200">Connect instantly for report collections or billing queries.</p>
              </div>
              <button className="px-8 py-4 bg-white text-purple-900 rounded-2xl font-bold flex items-center space-x-3 hover:bg-purple-50 transition-all group">
                <MessageCircle size={22} className="group-hover:scale-110 transition-transform" />
                <span>Chat on WhatsApp</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;

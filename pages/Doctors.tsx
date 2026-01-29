
import React, { useState, useMemo } from 'react';
import { Search, Calendar, User, Clock, Award } from 'lucide-react';
import { DOCTORS } from '../constants';

const Doctors: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Enhanced mock data with Indian medical context
  const medicalStaff = [
    { ...DOCTORS[0], credentials: "MD, AIIMS New York Alumnus", language: "English, Hindi, Marathi" },
    { ...DOCTORS[1], credentials: "MS, MCh (Neurology)", language: "English, Hindi" },
    { ...DOCTORS[2], credentials: "MD (Pediatrics), DCH", language: "English, Hindi, Bengali" },
    { ...DOCTORS[3], credentials: "MS (Ortho), Fellow (Singapore)", language: "English, Hindi, Gujarati" },
    { ...DOCTORS[4], credentials: "MD (Derm), DVD", language: "English, Hindi, Tamil" },
  ];

  const filteredDoctors = useMemo(() => {
    return medicalStaff.filter(doc => 
      doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.specialization.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="py-20 px-4 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-8 md:space-y-0">
          <div className="max-w-xl">
            <span className="text-purple-600 font-bold uppercase tracking-widest text-sm">Medical Directory</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-purple-950 mt-4 mb-4">India's Finest Specialists</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Book consultations with world-class specialists having decades of experience in their respective medical fields.
            </p>
          </div>
          <div className="relative w-full md:w-96 group">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-purple-600 transition-colors" size={22} />
            <input 
              type="text" 
              placeholder="Search by name, specialty, or condition..." 
              className="w-full pl-14 pr-6 py-4 rounded-[1.5rem] border-none focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all bg-white shadow-sm hover:shadow-md"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {filteredDoctors.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
            {filteredDoctors.map((doc) => (
              <div key={doc.id} className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group border border-gray-100">
                <div className="h-72 overflow-hidden relative">
                  <img 
                    src={doc.image} 
                    alt={doc.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md text-purple-700 px-4 py-2 rounded-2xl text-xs font-bold uppercase tracking-wider shadow-lg">
                    {doc.specialization}
                  </div>
                  <div className="absolute bottom-6 left-6 text-white translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all">
                    <p className="text-xs font-bold text-purple-200">Languages</p>
                    <p className="text-sm font-semibold">{doc.language}</p>
                  </div>
                </div>
                <div className="p-10">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors">{doc.name}</h3>
                      <p className="text-purple-600 font-bold text-sm flex items-center mt-1">
                        <Award size={14} className="mr-1" />
                        {doc.credentials}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-10 pt-4 border-t border-gray-50">
                    <div className="flex items-center text-gray-600 space-x-3">
                      <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600">
                        <Clock size={18} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-bold uppercase">Availability</p>
                        <p className="text-sm font-semibold">{doc.availability}</p>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-600 space-x-3">
                      <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center text-green-600">
                        <User size={18} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-bold uppercase">Experience</p>
                        <p className="text-sm font-semibold">{doc.experience} Clinical Experience</p>
                      </div>
                    </div>
                  </div>

                  <button className="w-full py-4 bg-purple-50 text-purple-700 rounded-2xl font-bold hover:bg-purple-700 hover:text-white transition-all flex items-center justify-center space-x-3 shadow-sm active:scale-95">
                    <Calendar size={20} />
                    <span>Book Consultation</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-[3rem] p-24 text-center shadow-sm border border-gray-100">
            <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-8 border border-slate-100">
              <Search className="text-gray-300" size={48} />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-3">No Specialists Found</h3>
            <p className="text-gray-500 max-w-md mx-auto text-lg leading-relaxed">
              We couldn't find a doctor matching your current criteria. Please try searching for a different specialty or department.
            </p>
            <button 
              onClick={() => setSearchTerm('')}
              className="mt-8 px-8 py-3 bg-purple-700 text-white rounded-2xl font-bold hover:bg-purple-800 transition-all shadow-xl shadow-purple-100"
            >
              Reset Search
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Doctors;


import React, { useState } from 'react';
import { CalendarCheck, ChevronRight, Info } from 'lucide-react';
import { DOCTORS } from '../constants';

const Appointment: React.FC = () => {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    doctorId: '',
    date: '',
    time: '',
    reason: ''
  });
  const [isBooked, setIsBooked] = useState(false);

  const handleNext = () => setStep(step + 1);
  const handlePrev = () => setStep(step - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsBooked(true);
  };

  if (isBooked) {
    return (
      <div className="py-32 px-4 text-center bg-slate-50 min-h-screen">
        <div className="max-w-md mx-auto bg-white p-12 rounded-3xl shadow-xl">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8 text-green-600">
            <CalendarCheck size={40} />
          </div>
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">Confirmed!</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Your appointment with <strong>{DOCTORS.find(d => d.id.toString() === bookingData.doctorId)?.name}</strong> has been scheduled for <strong>{bookingData.date}</strong> at <strong>{bookingData.time}</strong>.
          </p>
          <button 
            onClick={() => window.location.hash = "/"}
            className="w-full py-4 bg-purple-700 text-white rounded-xl font-bold hover:bg-purple-800 transition-all"
          >
            Return to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 px-4 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Left Panel: Info */}
          <div className="md:col-span-1 space-y-6">
            <div className="bg-purple-700 text-white p-8 rounded-3xl shadow-lg">
              <h3 className="text-xl font-bold mb-6">Booking Steps</h3>
              <div className="space-y-8">
                {[
                  { n: 1, t: 'Select Specialist' },
                  { n: 2, t: 'Pick Time & Date' },
                  { n: 3, t: 'Finalize Details' }
                ].map((s) => (
                  <div key={s.n} className="flex items-center space-x-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                      step === s.n ? 'bg-white text-purple-700' : 'bg-purple-600 text-purple-200'
                    }`}>
                      {s.n}
                    </div>
                    <span className={step === s.n ? 'font-bold' : 'text-purple-200'}>{s.t}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 flex items-start space-x-3">
              <Info className="text-blue-500 flex-shrink-0 mt-1" size={20} />
              <p className="text-sm text-blue-700">
                You will receive a confirmation SMS and Email within 15 minutes of booking.
              </p>
            </div>
          </div>

          {/* Right Panel: Form */}
          <div className="md:col-span-2 bg-white rounded-3xl shadow-sm p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {step === 1 && (
                <div className="animate-fadeIn">
                  <h3 className="text-2xl font-bold mb-8 text-gray-900">Choose your Specialist</h3>
                  <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                    {DOCTORS.map((doc) => (
                      <label key={doc.id} className={`flex items-center p-4 rounded-2xl border-2 transition-all cursor-pointer ${
                        bookingData.doctorId === doc.id.toString() 
                          ? 'border-purple-600 bg-purple-50' 
                          : 'border-gray-100 hover:border-purple-200'
                      }`}>
                        <input 
                          type="radio" 
                          name="doctor" 
                          className="hidden" 
                          value={doc.id}
                          checked={bookingData.doctorId === doc.id.toString()}
                          onChange={(e) => setBookingData({...bookingData, doctorId: e.target.value})}
                        />
                        <img src={doc.image} alt="" className="w-12 h-12 rounded-full object-cover mr-4" />
                        <div className="flex-grow">
                          <p className="font-bold text-gray-900">{doc.name}</p>
                          <p className="text-sm text-gray-500">{doc.specialization}</p>
                        </div>
                        {bookingData.doctorId === doc.id.toString() && (
                          <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-white">
                            <ChevronRight size={14} />
                          </div>
                        )}
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="animate-fadeIn">
                  <h3 className="text-2xl font-bold mb-8 text-gray-900">Select Date & Time</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">Preferred Date</label>
                      <input 
                        type="date" 
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-500 outline-none"
                        value={bookingData.date}
                        onChange={(e) => setBookingData({...bookingData, date: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">Preferred Time</label>
                      <select 
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-500 outline-none bg-white"
                        value={bookingData.time}
                        onChange={(e) => setBookingData({...bookingData, time: e.target.value})}
                      >
                        <option value="">Select a slot</option>
                        <option value="09:00 AM">09:00 AM</option>
                        <option value="11:30 AM">11:30 AM</option>
                        <option value="02:00 PM">02:00 PM</option>
                        <option value="04:45 PM">04:45 PM</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="animate-fadeIn">
                  <h3 className="text-2xl font-bold mb-8 text-gray-900">Tell us more</h3>
                  <div className="space-y-4">
                    <label className="text-sm font-semibold text-gray-700">Reason for visit</label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-500 outline-none resize-none"
                      placeholder="Symptoms, general checkup, follow-up, etc."
                      value={bookingData.reason}
                      onChange={(e) => setBookingData({...bookingData, reason: e.target.value})}
                    />
                  </div>
                </div>
              )}

              <div className="flex justify-between pt-6 border-t border-gray-100">
                {step > 1 && (
                  <button 
                    type="button"
                    onClick={handlePrev}
                    className="px-6 py-3 font-bold text-gray-500 hover:text-purple-700 transition-colors"
                  >
                    Back
                  </button>
                )}
                <div className="ml-auto flex space-x-4">
                  {step < 3 ? (
                    <button 
                      type="button"
                      disabled={step === 1 && !bookingData.doctorId || step === 2 && (!bookingData.date || !bookingData.time)}
                      onClick={handleNext}
                      className="px-8 py-3 bg-purple-700 text-white rounded-xl font-bold hover:bg-purple-800 transition-all disabled:opacity-50"
                    >
                      Continue
                    </button>
                  ) : (
                    <button 
                      type="submit"
                      className="px-10 py-3 bg-purple-700 text-white rounded-xl font-bold hover:bg-purple-800 transition-all shadow-lg shadow-purple-200"
                    >
                      Confirm Booking
                    </button>
                  )}
                </div>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;

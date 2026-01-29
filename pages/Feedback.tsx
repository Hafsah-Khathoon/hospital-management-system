
import React, { useState } from 'react';
import { Star, MessageSquareQuote, CheckCircle2, Heart } from 'lucide-react';

const Feedback: React.FC = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) {
      alert("Please provide a star rating.");
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="py-32 px-4 text-center bg-slate-50 min-h-screen flex items-center justify-center">
        <div className="max-w-md mx-auto bg-white p-12 rounded-[3rem] shadow-2xl animate-in zoom-in-95 duration-500">
          <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-8 text-purple-600">
            <CheckCircle2 size={48} />
          </div>
          <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">Namaste!</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            Thank you for sharing your experience. Your feedback is vital in helping Lumina achieve healthcare excellence in India.
          </p>
          <button 
            onClick={() => window.location.hash = "/"}
            className="w-full py-4 bg-purple-700 text-white rounded-2xl font-bold shadow-xl shadow-purple-100 hover:bg-purple-800 transition-all"
          >
            Return to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-24 px-4 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-20">
        
        <div className="lg:w-2/5">
          <div className="w-16 h-16 bg-purple-700 text-white rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-purple-200">
            <MessageSquareQuote size={32} />
          </div>
          <h2 className="text-5xl font-display font-bold text-gray-900 mb-8 leading-tight">Your Voice <br/><span className="text-purple-600">Matters.</span></h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-10">
            Help us refine our medical care. At Lumina, we listen to every patient's journey to ensure we are always improving.
          </p>
          
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-purple-50 flex items-start space-x-4">
              <div className="p-3 bg-purple-50 text-purple-600 rounded-xl">
                <Heart size={24} fill="currentColor" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Patient-First Philosophy</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  We review feedback weekly to make systemic changes in our hospital operations.
                </p>
              </div>
            </div>
            <div className="bg-purple-900 p-8 rounded-3xl shadow-xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Star size={64} fill="white" />
              </div>
              <p className="text-purple-100 italic mb-4">"The care I received at Lumina was world-class. The staff were professional and the facility is top-notch."</p>
              <p className="font-bold">— Amit K., Patient</p>
            </div>
          </div>
        </div>

        <div className="lg:w-3/5 bg-white rounded-[3rem] shadow-2xl p-10 md:p-14 border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="space-y-6">
              <label className="text-2xl font-bold text-gray-900 block">Overall Experience</label>
              <div className="flex space-x-3">
                {[1, 2, 3, 4, 5].map((s) => (
                  <button
                    key={s}
                    type="button"
                    className="focus:outline-none transition-transform hover:scale-110 active:scale-90"
                    onMouseEnter={() => setHoverRating(s)}
                    onMouseLeave={() => setHoverRating(0)}
                    onClick={() => setRating(s)}
                  >
                    <Star 
                      size={48} 
                      className={`transition-all duration-300 ${
                        (hoverRating || rating) >= s ? 'text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.4)]' : 'text-gray-100'
                      }`} 
                      fill={(hoverRating || rating) >= s ? 'currentColor' : 'none'}
                    />
                  </button>
                ))}
              </div>
              <p className="text-sm font-bold uppercase tracking-widest text-purple-600 h-6">
                {rating === 5 ? 'Excellent Care!' : rating === 4 ? 'Good Experience' : rating === 3 ? 'Average' : rating === 2 ? 'Needs Improvement' : rating === 1 ? 'Poor Experience' : ''}
              </p>
            </div>

            <div className="space-y-4">
              <label className="text-sm font-bold text-gray-700 ml-1">Tell us more about your visit</label>
              <textarea 
                rows={6}
                required
                className="w-full px-6 py-5 bg-gray-50 border border-transparent focus:border-purple-500 focus:bg-white rounded-3xl outline-none transition-all resize-none shadow-inner"
                placeholder="Share your thoughts on the treatment, staff behavior, or facility cleanliness..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Department Visited</label>
                <select className="w-full px-5 py-4 bg-gray-50 rounded-2xl border-none outline-none focus:ring-2 focus:ring-purple-500 transition-all font-medium text-gray-700">
                  <option>Cardiology</option>
                  <option>Emergency Care</option>
                  <option>General Medicine</option>
                  <option>Pediatrics</option>
                  <option>Diagnostics</option>
                </select>
              </div>
              <div className="space-y-2 flex flex-col justify-end">
                <label className="flex items-center space-x-3 cursor-pointer group p-2">
                  <div className="relative">
                    <input type="checkbox" id="anon" className="sr-only" />
                    <div className="w-12 h-6 bg-gray-200 rounded-full group-hover:bg-gray-300 transition-colors"></div>
                    <div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform"></div>
                  </div>
                  <span className="text-sm font-bold text-gray-500 group-hover:text-purple-700 transition-colors">Stay Anonymous</span>
                </label>
              </div>
            </div>

            <button 
              type="submit"
              disabled={rating === 0}
              className="w-full py-5 bg-purple-700 text-white rounded-[2rem] font-bold text-xl hover:bg-purple-800 transition-all shadow-2xl shadow-purple-100 disabled:opacity-50 active:scale-95"
            >
              Submit Feedback
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Feedback;

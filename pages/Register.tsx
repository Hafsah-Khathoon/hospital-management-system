
import React, { useState } from 'react';
import { UserPlus, CheckCircle, AlertCircle } from 'lucide-react';

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    phone: '',
    email: '',
    gender: 'Other'
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.email) {
      setStatus('error');
      setMessage('Please fill in all required fields.');
      return;
    }

    if (formData.phone.length < 10) {
      setStatus('error');
      setMessage('Please enter a valid 10-digit mobile number.');
      return;
    }

    // Simulate success
    setStatus('success');
    setMessage('Patient registered successfully! Redirecting to appointment booking...');
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', age: '', phone: '', email: '', gender: 'Other' });
      setStatus('idle');
    }, 3000);
  };

  return (
    <div className="py-20 px-4 bg-slate-50 min-h-screen">
      <div className="max-w-2xl mx-auto bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-gray-100">
        <div className="bg-purple-700 p-10 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
          <UserPlus size={48} className="mx-auto mb-4" />
          <h2 className="text-3xl font-display font-bold">Patient Registration</h2>
          <p className="text-purple-100 mt-2">Create your digital health profile at Lumina.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="p-10 space-y-6">
          {status !== 'idle' && (
            <div className={`flex items-center space-x-3 p-4 rounded-2xl animate-in fade-in slide-in-from-top-2 ${
              status === 'success' ? 'bg-green-50 text-green-700 border border-green-100' : 'bg-red-50 text-red-700 border border-red-100'
            }`}>
              {status === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
              <span className="font-bold">{message}</span>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-1">Full Name *</label>
              <input 
                type="text" 
                required
                className="w-full px-5 py-4 rounded-2xl bg-gray-50 text-gray-900 border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all"
                placeholder="Rahul Sharma"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-1">Age</label>
              <input 
                type="number" 
                className="w-full px-5 py-4 rounded-2xl bg-gray-50 text-gray-900 border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all"
                placeholder="28"
                value={formData.age}
                onChange={(e) => setFormData({...formData, age: e.target.value})}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-1">Mobile Number *</label>
              <div className="relative">
                <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 font-bold border-r pr-3">+91</span>
                <input 
                  type="tel" 
                  required
                  className="w-full pl-16 pr-5 py-4 rounded-2xl bg-gray-50 text-gray-900 border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all"
                  placeholder="98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value.replace(/\D/g, '')})}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-1">Email Address *</label>
              <input 
                type="email" 
                required
                className="w-full px-5 py-4 rounded-2xl bg-gray-50 text-gray-900 border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all"
                placeholder="rahul@example.in"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <label className="text-sm font-bold text-gray-700 ml-1">Gender</label>
            <div className="flex flex-wrap gap-4">
              {['Male', 'Female', 'Other'].map((g) => (
                <label key={g} className={`flex items-center space-x-3 px-6 py-3 rounded-2xl border-2 cursor-pointer transition-all ${
                  formData.gender === g ? 'border-purple-600 bg-purple-50 text-purple-700' : 'border-gray-50 bg-gray-50 text-gray-500 hover:border-purple-200'
                }`}>
                  <input 
                    type="radio" 
                    name="gender" 
                    className="hidden" 
                    checked={formData.gender === g}
                    onChange={() => setFormData({...formData, gender: g})}
                  />
                  <span className="font-bold">{g}</span>
                </label>
              ))}
            </div>
          </div>

          <button 
            type="submit" 
            className="w-full py-5 bg-purple-700 text-white rounded-[1.5rem] font-bold text-lg hover:bg-purple-800 transition-all shadow-xl shadow-purple-100 mt-6 active:scale-95"
          >
            Create Patient Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;

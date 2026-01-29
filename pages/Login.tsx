
import React, { useState } from 'react';
import { Lock, User, Eye, EyeOff } from 'lucide-react';

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (credentials.username === 'admin' && credentials.password === 'password') {
      window.location.hash = "/inventory";
    } else {
      setError('Invalid username or password. (Hint: admin/password)');
    }
  };

  return (
    <div className="py-20 px-4 min-h-screen flex items-center justify-center bg-slate-100 relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-20 -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20 -ml-48 -mb-48"></div>

      <div className="max-w-md w-full bg-white rounded-[2.5rem] shadow-2xl p-10 md:p-12 z-10">
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-purple-700 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-purple-200">
            <Lock size={32} />
          </div>
          <h2 className="text-3xl font-display font-bold text-gray-900">Staff Portal</h2>
          <p className="text-gray-500 mt-2">Access hospital management system</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          {error && (
            <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm font-medium border border-red-100">
              {error}
            </div>
          )}

          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 ml-1">Username</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="text"
                required
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-transparent focus:border-purple-500 focus:bg-white rounded-2xl outline-none transition-all"
                placeholder="Hospital ID"
                value={credentials.username}
                onChange={(e) => setCredentials({...credentials, username: e.target.value})}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 ml-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type={showPassword ? 'text' : 'password'}
                required
                className="w-full pl-12 pr-12 py-4 bg-gray-50 border border-transparent focus:border-purple-500 focus:bg-white rounded-2xl outline-none transition-all"
                placeholder="••••••••"
                value={credentials.password}
                onChange={(e) => setCredentials({...credentials, password: e.target.value})}
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-purple-600 transition-colors"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between py-2">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded text-purple-600 focus:ring-purple-500" />
              <span className="text-sm text-gray-500">Remember me</span>
            </label>
            <button type="button" className="text-sm font-bold text-purple-600 hover:text-purple-700">
              Forgot password?
            </button>
          </div>

          <button 
            type="submit"
            className="w-full py-4 bg-purple-700 text-white rounded-2xl font-bold text-lg hover:bg-purple-800 transition-all shadow-xl shadow-purple-100"
          >
            Sign In to Dashboard
          </button>
        </form>

        <div className="mt-8 pt-8 border-t border-gray-100 text-center">
          <p className="text-gray-500 text-sm">
            Need access? <button className="text-purple-600 font-bold">Contact IT Support</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

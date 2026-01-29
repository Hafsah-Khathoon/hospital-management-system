
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, MapPin, Phone, Mail } from 'lucide-react';
import AIAssistant from './AIAssistant';

interface NavItem {
  name: string;
  path: string;
}

const navItems: NavItem[] = [
  { name: 'Home', path: '/' },
  { name: 'Register', path: '/register' },
  { name: 'Doctors', path: '/doctors' },
  { name: 'Appointment', path: '/appointment' },
  { name: 'Services', path: '/services' },
  { name: 'Inventory', path: '/inventory' },
  { name: 'Feedback', path: '/feedback' },
  { name: 'Contact', path: '/contact' },
  { name: 'Staff Login', path: '/login' },
];

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Heart className="text-purple-700" fill="currentColor" />
                </div>
                <span className="text-2xl font-display font-bold text-purple-900 tracking-tight">Lumina</span>
              </Link>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-xs font-semibold transition-colors uppercase tracking-wider ${
                    location.pathname === item.path
                      ? 'text-purple-700 bg-purple-50'
                      : 'text-gray-500 hover:text-purple-700 hover:bg-purple-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-gray-400 hover:text-purple-700 hover:bg-purple-50 focus:outline-none"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-700 hover:bg-purple-50"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow relative">
        {children}
        <AIAssistant />
      </main>

      {/* Footer */}
      <footer className="bg-purple-950 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-purple-400 rounded-lg flex items-center justify-center">
                  <Heart className="text-purple-950" fill="currentColor" size={18} />
                </div>
                <span className="text-xl font-display font-bold">Lumina</span>
              </div>
              <p className="text-purple-200 leading-relaxed">
                Experience world-class healthcare in India with a personal touch. Our dedicated team of specialists is here to serve you 24/7.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-4 text-purple-200">
                <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
                <li><Link to="/doctors" className="hover:text-white transition-colors">Find a Doctor</Link></li>
                <li><Link to="/appointment" className="hover:text-white transition-colors">Book Appointment</Link></li>
                <li><Link to="/register" className="hover:text-white transition-colors">Register</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
              <ul className="space-y-4 text-purple-200">
                <li className="flex items-start space-x-3">
                  <MapPin size={18} className="text-purple-400 mt-1 shrink-0" />
                  <span>Sector 5, Bandra Kurla Complex, Mumbai, Maharashtra 400051</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone size={18} className="text-purple-400 shrink-0" />
                  <span>+91 22 4567 8900</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail size={18} className="text-purple-400 shrink-0" />
                  <span>care@lumina.health.in</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Health Tips</h4>
              <p className="text-purple-200 mb-4">Subscribe to our weekly health newsletter for tips by our doctors.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-purple-900 border border-purple-800 rounded-l-lg px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-purple-400"
                />
                <button className="bg-purple-600 hover:bg-purple-500 px-4 py-2 rounded-r-lg transition-colors">Join</button>
              </div>
            </div>
          </div>
          <div className="border-t border-purple-900 pt-8 text-center text-purple-300 text-sm">
            <p>&copy; {new Date().getFullYear()} Lumina Healthcare India. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

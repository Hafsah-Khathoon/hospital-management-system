
import React, { useState, useMemo } from 'react';
import { MEDICINES } from '../constants';
import { Medicine } from '../types';
import { SortAsc, SortDesc, Pill, Package, Search, Filter } from 'lucide-react';

const Inventory: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortKey, setSortKey] = useState<keyof Medicine>('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [showLowStockOnly, setShowLowStockOnly] = useState(false);

  const handleSort = (key: keyof Medicine) => {
    const order = sortKey === key && sortOrder === 'asc' ? 'desc' : 'asc';
    setSortKey(key);
    setSortOrder(order);
  };

  const filteredData = useMemo(() => {
    let result = MEDICINES.filter(item => 
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (showLowStockOnly) {
      result = result.filter(item => item.stock < 500);
    }

    return result.sort((a, b) => {
      const valA = a[sortKey];
      const valB = b[sortKey];
      if (typeof valA === 'string' && typeof valB === 'string') {
        return sortOrder === 'asc' ? valA.localeCompare(valB) : valB.localeCompare(valA);
      }
      if (typeof valA === 'number' && typeof valB === 'number') {
        return sortOrder === 'asc' ? valA - valB : valB - valA;
      }
      return 0;
    });
  }, [searchTerm, sortKey, sortOrder, showLowStockOnly]);

  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-12 gap-8">
        <div>
          <h2 className="text-4xl font-display font-bold text-gray-900 mb-3">Medical Inventory</h2>
          <p className="text-gray-500 text-lg">Central repository for pharmaceutical stock management.</p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Search medicines..." 
              className="w-full pl-12 pr-4 py-3 bg-white rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button 
            onClick={() => setShowLowStockOnly(!showLowStockOnly)}
            className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-bold transition-all border ${
              showLowStockOnly ? 'bg-red-50 text-red-600 border-red-200' : 'bg-white text-gray-600 border-gray-200 hover:border-purple-200'
            }`}
          >
            <Filter size={18} />
            <span>Low Stock Only</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <div className="bg-purple-50 p-8 rounded-3xl border border-purple-100">
           <div className="text-purple-600 font-bold uppercase tracking-widest text-xs mb-2">Total Categories</div>
           <div className="text-3xl font-bold text-gray-900">12 Departments</div>
        </div>
        <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100">
           <div className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-2">Items to Restock</div>
           <div className="text-3xl font-bold text-gray-900">{MEDICINES.filter(m => m.stock < 500).length} Medicines</div>
        </div>
        <div className="bg-green-50 p-8 rounded-3xl border border-green-100">
           <div className="text-green-600 font-bold uppercase tracking-widest text-xs mb-2">Total Inventory Value</div>
           <div className="text-3xl font-bold text-gray-900">₹4.2 Cr</div>
        </div>
      </div>

      <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50/50 border-b border-gray-100">
                {[
                  { label: 'Item Name', key: 'name' },
                  { label: 'Category', key: 'category' },
                  { label: 'Stock Level', key: 'stock' },
                  { label: 'Expiry Control', key: 'expiry' }
                ].map((col) => (
                  <th 
                    key={col.key}
                    onClick={() => handleSort(col.key as keyof Medicine)}
                    className="px-8 py-5 text-sm font-bold text-gray-600 cursor-pointer hover:bg-gray-100 transition-colors group"
                  >
                    <div className="flex items-center space-x-2">
                      <span>{col.label}</span>
                      {sortKey === col.key ? (
                        sortOrder === 'asc' ? <SortAsc size={16} /> : <SortDesc size={16} />
                      ) : (
                        <SortAsc size={16} className="opacity-0 group-hover:opacity-30" />
                      )}
                    </div>
                  </th>
                ))}
                <th className="px-8 py-5 text-sm font-bold text-gray-600">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filteredData.map((item) => (
                <tr key={item.id} className="hover:bg-purple-50/20 transition-colors">
                  <td className="px-8 py-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600">
                        <Pill size={16} />
                      </div>
                      <span className="font-bold text-gray-900">{item.name}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                      {item.category}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex-grow w-32 bg-gray-100 h-2 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full transition-all duration-500 ${item.stock < 500 ? 'bg-red-500' : 'bg-green-500'}`}
                          style={{ width: `${Math.min((item.stock / 2000) * 100, 100)}%` }}
                        ></div>
                      </div>
                      <span className={`font-bold tabular-nums ${item.stock < 500 ? 'text-red-600' : 'text-gray-900'}`}>
                        {item.stock}
                      </span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-gray-500 font-medium">{item.expiry}</td>
                  <td className="px-8 py-6">
                    <button className="px-4 py-2 text-purple-700 font-bold text-sm border border-purple-100 rounded-lg hover:bg-purple-700 hover:text-white transition-all">
                      Update
                    </button>
                  </td>
                </tr>
              ))}
              {filteredData.length === 0 && (
                <tr>
                  <td colSpan={5} className="py-20 text-center text-gray-400 italic">
                    No medicines matching your search criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Inventory;

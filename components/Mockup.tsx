
import React from 'react';
import { Info, Plus, ChevronRight, RefreshCw } from 'lucide-react';

const Mockup: React.FC = () => {
  return (
    <div className="relative w-[280px] h-[580px] md:w-[320px] md:h-[660px] bg-[#000] rounded-[50px] p-3 border-[12px] border-[#222] shadow-[0_0_100px_-20px_rgba(245,151,115,0.4)]">
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-20 flex items-center justify-center">
        <div className="w-10 h-1 bg-[#111] rounded-full" />
      </div>

      {/* Internal Screen Content */}
      <div className="w-full h-full bg-[#1A120D] rounded-[38px] overflow-hidden flex flex-col p-6 pt-10 text-white font-sans overflow-y-auto no-scrollbar">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold font-['Outfit']">Overview</h2>
          <div className="flex gap-2">
            <div className="px-3 py-1 bg-[#4A2D25] text-[#F59773] rounded-full text-xs font-bold border border-[#F59773]/30">5 / 5</div>
            <div className="w-8 h-8 flex flex-col justify-center items-center gap-1">
                <div className="w-5 h-0.5 bg-white/80 rounded-full" />
                <div className="w-5 h-0.5 bg-white/80 rounded-full" />
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-[#332E2B] rounded-3xl p-4 aspect-square flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center text-white/40 text-[10px] uppercase font-bold tracking-wider mb-2">
                <span className="flex items-center gap-1"><Info size={10} /> Average</span>
              </div>
              <div className="text-lg font-bold font-['Outfit']">$718.53</div>
            </div>
            <div className="pt-2 border-t border-white/5">
              <div className="text-[9px] text-white/40 uppercase mb-1 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500" /> Due month
              </div>
              <div className="text-sm font-bold">$567.00</div>
            </div>
          </div>

          <div className="bg-[#332E2B] rounded-3xl p-4 aspect-square flex flex-col justify-between items-center overflow-hidden">
            <div className="relative w-full h-full flex items-center justify-center">
                {/* Bubble Chart Mockup */}
                <div className="relative w-16 h-16">
                    <div className="absolute top-0 left-0 w-10 h-10 bg-red-400 rounded-full flex items-center justify-center font-bold text-xs">H</div>
                    <div className="absolute top-6 right-0 w-8 h-8 bg-[#F59773] rounded-full border-2 border-[#332E2B] flex items-center justify-center font-bold text-[10px] text-[#1A120D]">N</div>
                    <div className="absolute bottom-0 right-2 w-7 h-7 bg-blue-400 rounded-full border-2 border-[#332E2B] flex items-center justify-center font-bold text-[10px]">B</div>
                    <div className="absolute bottom-2 left-0 w-6 h-6 bg-green-400 rounded-full border-2 border-[#332E2B] flex items-center justify-center font-bold text-[8px]">S</div>
                </div>
            </div>
            <div className="text-center">
                <div className="text-xl font-bold">5</div>
                <div className="text-[10px] text-white/40 uppercase">Active</div>
            </div>
          </div>
        </div>

        {/* Add New Button */}
        <button className="w-full py-4 bg-white text-[#1A120D] rounded-2xl flex items-center justify-center gap-2 font-bold text-sm mb-6 shadow-xl">
          <Plus size={18} /> Add new
        </button>

        {/* Up Next */}
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-3 font-['Outfit']">Up next</h3>
          <div className="bg-[#332E2B] rounded-3xl p-5 flex flex-col gap-4 border border-white/5 shadow-lg">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#D19D5C] rounded-2xl flex items-center justify-center font-bold text-xl">H</div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold">Hulu</span>
                  <span className="text-[10px] flex items-center gap-1 text-white/40">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400" /> in 1 day
                  </span>
                </div>
                <span className="text-sm text-white/40">$25.00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Subscriptions List */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-bold font-['Outfit'] flex items-center gap-1">
              Subscriptions <ChevronRight size={16} />
            </h3>
            <span className="text-[10px] text-white/40 flex items-center gap-1">Status <RefreshCw size={8} /></span>
          </div>

          <div className="space-y-3">
            <div className="bg-[#4A2D25] rounded-3xl p-4 flex items-center gap-4 border border-[#F59773]/20">
              <div className="w-10 h-10 bg-red-500 rounded-2xl flex items-center justify-center font-bold text-lg">H</div>
              <div className="flex-1 flex justify-between items-center">
                <div>
                  <div className="font-bold text-sm">Hostinger</div>
                  <div className="text-[10px] text-white/60">Renews on Jan 8</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-sm">$542.00</div>
                  <div className="text-[10px] text-white/60 flex items-center justify-end gap-1">Monthly <RefreshCw size={8} /></div>
                </div>
              </div>
            </div>

            <div className="bg-[#332E2B] rounded-3xl p-4 flex items-center gap-4 border border-white/5 opacity-50">
              <div className="w-10 h-10 bg-orange-400 rounded-2xl flex items-center justify-center font-bold text-lg">H</div>
              <div className="flex-1 flex justify-between items-center">
                <div>
                  <div className="font-bold text-sm">Hulu</div>
                  <div className="text-[10px] text-white/60">Renews on Jan 11</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-sm">$25.00</div>
                  <div className="text-[10px] text-white/60">Weekly</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mockup;

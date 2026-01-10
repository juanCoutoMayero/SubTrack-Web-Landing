import React from 'react';

const Mockup: React.FC = () => {
  return (
    <div className="relative w-[280px] h-[580px] md:w-[320px] md:h-[660px] bg-black rounded-[50px] p-2 border-[10px] border-[#1f1f1f] shadow-[0_0_80px_-20px_rgba(245,151,115,0.3)] ring-1 ring-white/10">
      {/* Dynamic Island */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-20 flex items-center justify-center border border-white/5">
        <div className="w-1.5 h-1.5 rounded-full bg-[#111] absolute right-4" />
      </div>

      {/* Screen Container */}
      <div className="relative w-full h-full bg-[#1A120D] rounded-[42px] overflow-hidden">
        <img
          src="/images/app-overflow.png"
          alt="SubTrack App Overview"
          className="w-full h-full object-cover"
        />

        {/* Subtle Screen Overlay for depth */}
        <div className="absolute inset-0 pointer-events-none ring-inset ring-1 ring-white/5 rounded-[42px]" />
      </div>

      {/* Side Buttons - Left (Volume) */}
      <div className="absolute left-[-12px] top-24 w-1 h-8 bg-[#1f1f1f] rounded-l-md" />
      <div className="absolute left-[-12px] top-36 w-1 h-12 bg-[#1f1f1f] rounded-l-md" />
      <div className="absolute left-[-12px] top-52 w-1 h-12 bg-[#1f1f1f] rounded-l-md" />

      {/* Side Button - Right (Power) */}
      <div className="absolute right-[-12px] top-40 w-1 h-16 bg-[#1f1f1f] rounded-r-md" />
    </div>
  );
};

export default Mockup;

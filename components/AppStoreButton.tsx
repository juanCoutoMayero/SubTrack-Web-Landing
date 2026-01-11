
import React from 'react';
import { Smartphone } from 'lucide-react';

const AppStoreButton: React.FC = () => {
  return (
    <a
      href="https://apps.apple.com/us/app/subb/id6756507119"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 bg-white text-[#1A120D] px-8 py-4 rounded-2xl hover:bg-[#F59773] transition-all duration-300 shadow-xl hover:shadow-[#F59773]/20 group"
    >
      <div className="bg-black text-white p-2 rounded-lg group-hover:scale-110 transition-transform">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
        </svg>
      </div>
      <div className="flex flex-col items-start">
        <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">Download on the</span>
        <span className="text-xl font-bold -mt-1 font-['Outfit']">App Store</span>
      </div>
    </a>
  );
};

export default AppStoreButton;

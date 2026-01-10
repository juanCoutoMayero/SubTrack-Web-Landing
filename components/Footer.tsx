
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1A120D] pt-20 pb-10 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#F59773] flex items-center justify-center font-bold text-[#1A120D] text-xl">
                S
              </div>
              <span className="text-2xl font-bold font-['Outfit']">SubTrack</span>
            </div>
            <p className="text-white/40 max-w-sm mb-6">
              The professional subscription manager designed to help you Track, Manage, and Save your recurring expenses effortlessly.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-[#F59773]">Product</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Roadmap</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-[#F59773]">Legal</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
            <div className="space-y-4">
              <h5 className="font-bold text-white/80">Terms & Conditions Summary</h5>
              <p className="text-xs text-white/40 leading-relaxed">
                By using SubTrack, you agree that the application is provided "as is" without any warranties of any kind. 
                Users are solely responsible for the accuracy of data entered. All intellectual property related to 
                SubTrack, including code, design, and branding, is owned by SubTrack. For the full legal details, 
                please review our complete terms and privacy policy documents.
              </p>
            </div>
            <div className="text-sm text-white/20 lg:text-right">
              &copy; {new Date().getFullYear()} SubTrack Inc. Built with ❤️ for your wallet.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

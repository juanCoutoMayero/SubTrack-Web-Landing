
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Eye, FileText, ChevronLeft } from 'lucide-react';

interface PrivacyProps {
  onBack: () => void;
}

const Privacy: React.FC<PrivacyProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      icon: <Eye className="w-6 h-6 text-[#F59773]" />,
      title: "Data Collection",
      content: "We collect minimal information required to provide our services. This include subscription names, costs, and billing periods that you manually enter. We do not automatically track your bank accounts or credit cards."
    },
    {
      icon: <Lock className="w-6 h-6 text-[#F59773]" />,
      title: "Security",
      content: "Your data is stored securely and encrypted. We prioritize your privacy and ensure that only you have access to your subscription details. We use industry-standard security protocols to protect your information."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#F59773]" />,
      title: "Third-Party Sharing",
      content: "We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. Your data remains yours alone."
    },
    {
      icon: <FileText className="w-6 h-6 text-[#F59773]" />,
      title: "Policy Updates",
      content: "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page."
    }
  ];

  return (
    <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
      <motion.button
        onClick={onBack}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-2 text-white/50 hover:text-[#F59773] transition-colors mb-12 group"
      >
        <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        Back to Home
      </motion.button>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h1 className="text-5xl md:text-6xl font-black font-['Outfit'] mb-6 tracking-tight">
          Privacy <span className="text-[#F59773]">Policy</span>
        </h1>
        <p className="text-xl text-white/60 mb-16 leading-relaxed max-w-2xl">
          At SubTrack, we take your privacy seriously. This policy explains how we handle your data and our commitment to keeping your information safe.
        </p>

        <div className="grid gap-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + (index * 0.1) }}
              className="p-8 rounded-3xl glass border border-white/5 hover:border-white/10 transition-all"
            >
              <div className="flex items-start gap-6">
                <div className="p-3 rounded-2xl bg-[#F59773]/10 shrink-0">
                  {section.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold font-['Outfit'] mb-3 text-white">
                    {section.title}
                  </h3>
                  <p className="text-white/50 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-20 p-8 rounded-3xl bg-[#F59773]/5 border border-[#F59773]/10 text-center"
        >
          <p className="text-white/60 text-sm">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
          <p className="text-white/40 text-xs mt-2">
            Questions? Contact us at privacy@subtrack.app
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Privacy;

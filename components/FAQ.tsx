
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Is my data secure?",
    answer: "Absolutely. SubTrack uses industry-standard encryption and we never sell your data to third parties. All financial data is handled through secure, read-only integrations."
  },
  {
    question: "How does trial tracking work?",
    answer: "Simply add your trial's start date and duration. SubTrack calculates the end date and pushes a notification to your device 48 hours and 24 hours before the first charge is due."
  },
  {
    question: "Can I sync across devices?",
    answer: "Yes! SubTrack uses iCloud sync by default. As long as you are signed into the same Apple ID, your subscription data will be perfectly synced between your iPhone, iPad, and Mac."
  },
  {
    question: "Can I track local currency subscriptions?",
    answer: "SubTrack supports over 160 currencies. You can set a primary currency for your totals and track individual subscriptions in their original billing currency."
  }
];

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:text-[#F59773] transition-colors"
      >
        <span className="text-lg font-bold font-['Outfit']">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="text-white/40"
        >
          <ChevronDown size={24} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-white/60 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-['Outfit'] mb-4">Common Questions</h2>
          <p className="text-white/60">Everything you need to know about SubTrack.</p>
        </div>
        <div className="glass rounded-[40px] p-8 md:p-12">
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

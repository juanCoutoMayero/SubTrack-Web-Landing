import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, AlertCircle, Coins, Scale, ChevronLeft } from 'lucide-react';

const Terms: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const sections = [
        {
            icon: <CheckCircle className="w-6 h-6 text-[#F59773]" />,
            title: "Acceptable Use",
            content: "SubTrack is designed for personal subscription management. Users agree not to use the service for any unlawful purposes or to engage in any activity that disrupts or interferes with the service."
        },
        {
            icon: <AlertCircle className="w-6 h-6 text-[#F59773]" />,
            title: "Data Accuracy",
            content: "While we strive for excellence, SubTrack relies on the information you provide. You are responsible for ensuring that the subscription data, costs, and dates you enter are accurate."
        },
        {
            icon: <Coins className="w-6 h-6 text-[#F59773]" />,
            title: "No Financial Advice",
            content: "The information provided by SubTrack is for informational purposes only. It does not constitute financial, legal, or tax advice. Always consult with a professional for financial planning."
        },
        {
            icon: <Scale className="w-6 h-6 text-[#F59773]" />,
            title: "Intellectual Property",
            content: "All content, features, and functionality of SubTrack, including but not limited to text, graphics, logos, and code, are the exclusive property of SubTrack and are protected by international copyright laws."
        }
    ];

    return (
        <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
            <Link
                to="/"
                className="flex items-center gap-2 text-white/50 hover:text-[#F59773] transition-colors mb-12 group"
            >
                <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                Back to Home
            </Link>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
            >
                <h1 className="text-5xl md:text-6xl font-black font-['Outfit'] mb-6 tracking-tight">
                    Terms of <span className="text-[#F59773]">Service</span>
                </h1>
                <p className="text-xl text-white/60 mb-16 leading-relaxed max-w-2xl">
                    Please read these terms carefully before using SubTrack. By using our application, you agree to be bound by these terms.
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
                        By using the app, you acknowledge that you have read and understood these terms.
                    </p>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Terms;

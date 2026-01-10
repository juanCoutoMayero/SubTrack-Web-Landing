
import React from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, Bell, CalendarClock, PieChart } from 'lucide-react';

const features = [
  {
    icon: <LayoutDashboard className="w-8 h-8 text-[#F59773]" />,
    title: "Centralized Tracking",
    description: "Connect all your streaming, SaaS, and monthly bills in one intuitive dashboard. Never lose sight of where your money goes."
  },
  {
    icon: <Bell className="w-8 h-8 text-[#F59773]" />,
    title: "Smart Reminders",
    description: "Get notified days before a renewal hits your bank account. Take action before it's too late."
  },
  {
    icon: <CalendarClock className="w-8 h-8 text-[#F59773]" />,
    title: "Trial Management",
    description: "Know exactly when your free trials end. We'll alert you 24 hours prior so you can decide whether to keep or cancel."
  },
  {
    icon: <PieChart className="w-8 h-8 text-[#F59773]" />,
    title: "Spending Analytics",
    description: "View monthly averages and upcoming payment insights. Visualize your subscription 'bloat' and start saving."
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 px-6 bg-[#332E2B]/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-['Outfit'] mb-6"
          >
            Track. Manage. <span className="text-[#F59773]">Save.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/60 max-w-2xl mx-auto"
          >
            Everything you need to regain control of your digital recurring expenses.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-8 rounded-[32px] glass hover:bg-[#F59773]/5 transition-all duration-300 group"
            >
              <div className="mb-6 p-4 bg-[#F59773]/10 w-fit rounded-2xl group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 font-['Outfit']">{feature.title}</h3>
              <p className="text-white/60 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

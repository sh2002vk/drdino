'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface UserData {
  name: string;
}

export default function MenuScreen() {
  const router = useRouter();
  const [userName, setUserName] = useState<string>('');

  useEffect(() => {
    const userData = localStorage.getItem('userData');
    if (userData) {
      const { name } = JSON.parse(userData) as UserData;
      setUserName(name);
    }
  }, []);

  const menuItems = [
    {
      title: 'Visit Dr. Dino! 🦕',
      description: "Let's see how you're feeling today!",
      path: '/doctor-visit'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-[#A8E6CF] via-[#DCEDC1] to-[#FFD3B6] relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating shapes */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 8 + Math.random() * 4,
              delay: Math.random() * 2,
            }}
          >
            <div className={`
              ${i % 4 === 0 ? 'w-8 h-8' : 'w-6 h-6'}
              ${i % 3 === 0 ? 'bg-[#FFB5A7]/20' :
              i % 3 === 1 ? 'bg-[#BDE0FE]/20' :
              'bg-[#A8E6CF]/20'}
              ${i % 2 === 0 ? 'rounded-xl rotate-45' : 'rounded-full'}
            `} />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto pt-10 px-6">
        {/* Dr. Dino Greeting */}
        <motion.div 
          className="text-center mb-12"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <motion.div
            className="relative w-64 h-64 mx-auto mb-6"
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 2, 0, -2, 0]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 4,
              ease: "easeInOut"
            }}
          >
            <Image
              src="/images/dr_dino_v2.png"
              alt="Dr. Dino"
              width={256}
              height={256}
              className="object-contain drop-shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white/90 p-8 rounded-2xl shadow-lg border-3 border-[#2F5C8F] max-w-2xl mx-auto"
          >
            <h1 className="text-4xl font-bold text-[#2F5C8F] mb-3">
              Hey {userName}! 👋
            </h1>
            <p className="text-2xl text-[#2F5C8F] font-medium">
              Good to see you again! How can I help you today?
            </p>
          </motion.div>
        </motion.div>

        {/* Menu Options */}
        <div className="grid grid-cols-1 gap-6 max-w-3xl mx-auto">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.5 }}
              whileHover={{ 
                scale: 1.02,
                y: -3,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => router.push(item.path)}
              className="bg-white/90 p-8 rounded-2xl shadow-lg cursor-pointer border-3 border-[#2F5C8F] hover:shadow-xl hover:border-[#1B365C] transition-all"
            >
              <h2 className="text-3xl font-bold text-[#2F5C8F] mb-3 text-center">
                {item.title}
              </h2>
              <p className="text-xl text-[#2F5C8F] text-center font-medium">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Fun decorative elements */}
        <motion.div
          className="absolute bottom-6 right-6 text-6xl"
          animate={{ rotate: [0, 8, 0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          🌟
        </motion.div>
        <motion.div
          className="absolute bottom-6 left-6 text-6xl"
          animate={{ rotate: [0, -8, 0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
        >
          ⭐️
        </motion.div>
      </div>
    </motion.div>
  );
} 
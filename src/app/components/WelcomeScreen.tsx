'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-[#BDE0FE] via-[#A2D2FF] to-[#CDB4DB] relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Bubbles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white/30 rounded-full"
            style={{
              width: `${Math.random() * 40 + 20}px`,
              height: `${Math.random() * 40 + 20}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4 + Math.random() * 4,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center p-8">
        <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl">
          <motion.div
            className="relative w-64 h-64 flex-shrink-0"
            animate={{
              rotate: [0, 5, 0, -5, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/images/dr_dino_v2.png"
              alt="Dr. Dino"
              width={256}
              height={256}
              className="object-contain drop-shadow-xl"
            />
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white/90 p-8 rounded-3xl shadow-xl border-4 border-[#2F5C8F] max-w-2xl"
          >
            <h2 className="text-4xl font-bold text-[#2F5C8F] mb-6">Hi there! 👋</h2>
            <p className="text-2xl text-[#2F5C8F] leading-relaxed mb-8">
              My name is Dr. Dino, welcome to my clinic! I'm here to help you stay healthy and fit!
              Before we start, I'd love to know a little bit about you so I can help you better.
            </p>
            <motion.button
              onClick={() => router.push('/user-form')}
              className="bg-[#2F5C8F] text-white px-10 py-4 rounded-2xl text-xl font-bold shadow-lg border-2 border-[#1B365C] w-full"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Tell Me About Yourself! 🌟
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
} 
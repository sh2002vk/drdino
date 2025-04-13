'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function IntroScreen() {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-[#FFB5A7] via-[#FCD5CE] to-[#F8EDEB] relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Clouds */}
        <motion.div
          className="absolute top-20 left-[10%] w-24 h-16 bg-white/40 rounded-full"
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-[15%] w-32 h-20 bg-white/30 rounded-full"
          animate={{
            y: [0, -20, 0],
            x: [0, -15, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 7,
            ease: "easeInOut",
          }}
        />
        
        {/* Sparkles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-yellow-200 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              repeat: Infinity,
              duration: 2 + Math.random() * 2,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto h-screen flex flex-col items-center justify-center p-4">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-6xl font-bold text-[#2F5C8F] mb-4 drop-shadow-lg" style={{ WebkitTextStroke: '1px #1B365C' }}>
            Dr. Dino's Clinic!
          </h1>
          <p className="text-2xl text-[#2F5C8F] font-medium">Your friendly health companion</p>
        </motion.div>

        <motion.div
          className="relative w-72 h-72 mb-8"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0, -5, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/images/dr_dino_v2.png"
            alt="Dr. Dino"
            width={288}
            height={288}
            className="object-contain drop-shadow-xl"
          />
        </motion.div>

        <motion.button
          onClick={() => router.push('/welcome')}
          className="bg-white/90 text-[#2F5C8F] px-12 py-6 rounded-2xl text-2xl font-bold shadow-xl border-4 border-[#2F5C8F]"
          whileHover={{ 
            scale: 1.05,
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
          }}
          whileTap={{ scale: 0.95 }}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Start Your Adventure! 🌟
        </motion.button>
      </div>
    </motion.div>
  );
} 
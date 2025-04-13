'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface UserData {
  name: string;
  age: string;
  gender: string;
  location: string;
}

export default function UserForm() {
  const router = useRouter();
  const [userData, setUserData] = useState<UserData>({
    name: '',
    age: '',
    gender: '',
    location: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('userData', JSON.stringify(userData));
    router.push('/menu');
  };

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
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 8 + Math.random() * 4,
              delay: Math.random() * 2,
            }}
          >
            <div className={`w-8 h-8 ${
              i % 3 === 0 ? 'bg-[#FFB5A7]/20' :
              i % 3 === 1 ? 'bg-[#BDE0FE]/20' :
              'bg-[#A8E6CF]/20'
            } rounded-lg rotate-45`} />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center p-8">
        <motion.form
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white/90 p-10 rounded-3xl shadow-xl border-4 border-[#2F5C8F] w-full max-w-2xl"
          onSubmit={handleSubmit}
        >
          <h2 className="text-4xl font-bold text-[#2F5C8F] mb-8 text-center">Tell me about yourself!</h2>
          
          <div className="space-y-6">
            <div>
              <label className="block text-[#2F5C8F] mb-3 text-xl font-medium">What&apos;s your name?</label>
              <input
                type="text"
                required
                className="w-full px-6 py-4 text-lg border-4 border-[#2F5C8F]/30 rounded-2xl focus:outline-none focus:border-[#2F5C8F] transition-colors bg-white/80"
                value={userData.name}
                onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                placeholder="Your awesome name"
              />
            </div>

            <div>
              <label className="block text-[#2F5C8F] mb-3 text-xl font-medium">How old are you?</label>
              <input
                type="number"
                required
                min="1"
                max="120"
                className="w-full px-6 py-4 text-lg border-4 border-[#2F5C8F]/30 rounded-2xl focus:outline-none focus:border-[#2F5C8F] transition-colors bg-white/80"
                value={userData.age}
                onChange={(e) => setUserData({ ...userData, age: e.target.value })}
                placeholder="Your age"
              />
            </div>

            <div>
              <label className="block text-[#2F5C8F] mb-3 text-xl font-medium">Are you a...</label>
              <select
                required
                className="w-full px-6 py-4 text-lg border-4 border-[#2F5C8F]/30 rounded-2xl focus:outline-none focus:border-[#2F5C8F] transition-colors bg-white/80"
                value={userData.gender}
                onChange={(e) => setUserData({ ...userData, gender: e.target.value })}
              >
                <option value="">Choose one</option>
                <option value="boy">Boy</option>
                <option value="girl">Girl</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-[#2F5C8F] mb-3 text-xl font-medium">Where do you live?</label>
              <input
                type="text"
                required
                className="w-full px-6 py-4 text-lg border-4 border-[#2F5C8F]/30 rounded-2xl focus:outline-none focus:border-[#2F5C8F] transition-colors bg-white/80"
                value={userData.location}
                onChange={(e) => setUserData({ ...userData, location: e.target.value })}
                placeholder="Your city"
              />
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full mt-10 bg-[#2F5C8F] text-white py-5 rounded-2xl text-2xl font-bold shadow-lg border-2 border-[#1B365C] hover:bg-[#1B365C] transition-colors"
          >
            Let&apos;s Begin! 🌟
          </motion.button>
        </motion.form>
      </div>
    </motion.div>
  );
} 
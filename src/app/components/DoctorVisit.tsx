'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

interface SymptomOption {
  id: number;
  text: string;
  response: string;
  nextOptions?: SymptomOption[];
}

const initialOptions: SymptomOption[] = [
  {
    id: 1,
    text: "I have a headache",
    response: "How long have you had the headache? Is it on one side or both sides?",
    nextOptions: [
      { id: 11, text: "Just started today", response: "Is the pain sharp or dull?" },
      { id: 12, text: "A few days", response: "Have you been under any stress lately?" },
      { id: 13, text: "More than a week", response: "Have you noticed any changes in your vision?" }
    ]
  },
  {
    id: 2,
    text: "I feel tired all the time",
    response: "Have you been sleeping well? How many hours do you sleep at night?",
    nextOptions: [
      { id: 21, text: "Less than 6 hours", response: "Do you have trouble falling asleep?" },
      { id: 22, text: "6-8 hours", response: "Do you wake up feeling refreshed?" },
      { id: 23, text: "More than 8 hours", response: "Do you feel sleepy during the day?" }
    ]
  }
];

export default function DoctorVisit() {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [doctorResponse, setDoctorResponse] = useState<string>('');
  const [currentOptions, setCurrentOptions] = useState<SymptomOption[]>(initialOptions);
  const [currentPanel, setCurrentPanel] = useState<number>(0);

  const handleOptionClick = (option: SymptomOption) => {
    setSelectedOption(option.id);
    setDoctorResponse(option.response);
    
    if (option.nextOptions) {
      setTimeout(() => {
        setCurrentOptions(option.nextOptions!);
        setCurrentPanel(prev => prev + 1);
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/background-pattern.svg')] opacity-10"></div>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-yellow-200 rounded-full opacity-20"
        />
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-green-200 rounded-full opacity-20"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto h-screen flex flex-col justify-end pb-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPanel}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border-2 border-green-200"
          >
            {/* Doctor Avatar Section */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="flex items-center gap-6 mb-8"
            >
              <motion.div
                className="relative w-32 h-32"
                animate={{ 
                  rotate: [0, 3, 0, -3, 0]
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
                  width={128}
                  height={128}
                  className="object-contain"
                />
              </motion.div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-green-600 mb-2">Dr. Dino</h2>
                <p className="text-lg text-gray-600">How can I help you today?</p>
              </div>
            </motion.div>

            {/* Doctor's Response */}
            {doctorResponse && (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="mb-8 p-6 bg-green-50 rounded-xl border-2 border-green-200"
              >
                <p className="text-lg text-gray-700">{doctorResponse}</p>
              </motion.div>
            )}

            {/* Options Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentOptions.map((option) => (
                <motion.div
                  key={option.id}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleOptionClick(option)}
                  className={`p-6 rounded-xl cursor-pointer transition-all ${
                    selectedOption === option.id
                      ? 'bg-green-500 text-white shadow-lg border-2 border-green-400'
                      : 'bg-white text-gray-700 hover:shadow-lg border-2 border-green-200 hover:border-green-300'
                  }`}
                >
                  <p className="text-lg font-medium">{option.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
} 
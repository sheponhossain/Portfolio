import React, { useState, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

export default function Contact({ isRGBActive }) {
  const containerRef = useRef(null); // এটি সেকশনে অবশ্যই থাকতে হবে
  const [isSent, setIsSent] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSent(true);
    if (formRef.current) formRef.current.reset();
    setTimeout(() => setIsSent(false), 5000);
  };

  // স্ক্রল ট্র্যাকিং আরও নিখুঁত করা হয়েছে
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'], // সেকশন স্ক্রিনে আসার সাথে সাথে শুরু হবে
  });

  // চিঠিটি নিচ থেকে উপরে উঠার দূরত্ব বাড়ানো হয়েছে (60 থেকে -40)
  const letterY = useTransform(scrollYProgress, [0.2, 0.7], [60, -40]);

  const letterMove = useSpring(letterY, {
    stiffness: 80, // একটু ধীরে এবং স্মুথ মুভমেন্টের জন্য
    damping: 25,
  });

  const lightGradient =
    'conic-gradient(from 90deg at 50% 50%, #FAD0C4 0%, #FF9A9E 25%, #A1C4FD 50%, #FF9A9E 75%, #FAD0C4 100%)';
  const darkGradient =
    'conic-gradient(from 90deg at 50% 50%, #E2E8F0 0%, #8E7CDB 25%, #55B4E4 50%, #8E7CDB 75%, #E2E8F0 100%)';
  const darkBtn = 'linear-gradient(to right, #8E7CDB, #55B4E4)';
  const lightBtn = 'linear-gradient(to right, #FF9A9E, #A1C4FD)';

  const inputStyles = isRGBActive
    ? 'bg-white/30 text-gray-900 border-black/5 placeholder:text-gray-600 font-medium'
    : 'bg-black/20 dark:bg-white/5 text-gray-900 dark:text-white border-white/10 dark:border-gray-700/50 placeholder:text-gray-400 dark:placeholder:text-gray-300';

  return (
    <section
      id="contact"
      ref={containerRef} // এই Ref টি এখানে থাকা আবশ্যিক
      className="w-full min-h-screen bg-[#F8FAFC] dark:bg-base-300 py-24 transition-colors duration-500 font-sans flex items-center"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white uppercase tracking-tighter">
            CONTACT <span className="text-[#3AB5C9]"> ME?</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Left Side: Large Illustration */}
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <div className="relative w-full max-w-[450px]">
              <svg
                viewBox="0 0 400 350"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto drop-shadow-2xl overflow-visible"
              >
                {/* ১. চিঠির কাগজ (Letter) - মুভমেন্ট রেঞ্জ বাড়ানো হয়েছে */}
                <motion.rect
                  x="70"
                  y="50"
                  width="260"
                  height="200"
                  rx="6"
                  fill="white"
                  stroke="#3AB5C9"
                  strokeWidth="2"
                  style={{ y: letterMove }}
                  className="shadow-sm"
                />
                <motion.g style={{ y: letterMove }} opacity="0.6">
                  <rect
                    x="100"
                    y="90"
                    width="200"
                    height="4"
                    rx="2"
                    fill="#E2E8F0"
                  />
                  <rect
                    x="100"
                    y="115"
                    width="200"
                    height="4"
                    rx="2"
                    fill="#E2E8F0"
                  />
                  <rect
                    x="100"
                    y="140"
                    width="200"
                    height="4"
                    rx="2"
                    fill="#E2E8F0"
                  />
                  <rect
                    x="100"
                    y="165"
                    width="120"
                    height="4"
                    rx="2"
                    fill="#E2E8F0"
                  />
                </motion.g>

                {/* ২. খামের পেছনের অংশ (Body) */}
                <path
                  d="M30 120 V300 H370 V120"
                  fill="white"
                  stroke="#3AB5C9"
                  strokeWidth="3.5"
                  strokeLinejoin="round"
                />

                {/* ৩. খামের সামনের ভাঁজ (Front Flaps) */}
                <path
                  d="M30 120 L200 230 L370 120"
                  stroke="#3AB5C9"
                  strokeWidth="3.5"
                  fill="white"
                  strokeLinejoin="round"
                />
                <path
                  d="M30 300 L160 190"
                  stroke="#3AB5C9"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M370 300 L240 190"
                  stroke="#3AB5C9"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          {/* Right Side: Contact Form Card */}
          <div className="w-full md:w-[450px]">
            <div className="relative p-[1.5px] rounded-3xl overflow-hidden shadow-2xl">
              <div
                className="absolute inset-[-1000%] animate-border-spin opacity-50"
                style={{
                  background: isRGBActive ? lightGradient : darkGradient,
                }}
              ></div>
              <div className="relative bg-white/40 dark:bg-gray-900/40 backdrop-blur-2xl p-8 rounded-[22px] border border-white/30 dark:border-gray-800/30">
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <input
                    type="text"
                    required
                    placeholder="First Name"
                    className={`w-full px-5 py-4 rounded-xl border focus:outline-none transition-all text-sm ${inputStyles}`}
                  />
                  <input
                    type="text"
                    required
                    placeholder="Last Name"
                    className={`w-full px-5 py-4 rounded-xl border focus:outline-none transition-all text-sm ${inputStyles}`}
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email Address"
                    className={`w-full px-5 py-4 rounded-xl border focus:outline-none transition-all text-sm ${inputStyles}`}
                  />
                  <textarea
                    rows="4"
                    required
                    placeholder="Your questions..."
                    className={`w-full px-5 py-4 rounded-xl border focus:outline-none transition-all text-sm resize-none ${inputStyles}`}
                  ></textarea>

                  <div className="min-h-[24px] flex items-center justify-center">
                    {isSent && (
                      <div className="text-green-500 text-sm font-semibold animate-bounce">
                        ✓ Message successfully sent!
                      </div>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full font-bold uppercase tracking-wider text-white shadow-lg transition-all hover:scale-[1.02]"
                    style={{ background: isRGBActive ? lightBtn : darkBtn }}
                  >
                    SEND MESSAGE
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

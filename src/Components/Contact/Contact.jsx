import React, { useState, useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import emailjs from '@emailjs/browser';

export default function Contact({ isRGBActive }) {
  const containerRef = useRef(null);
  const formRef = useRef(null);
  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        'service_tusi51k',
        'template_klups6d',
        formRef.current,
        'SGFiDR-NopKbFegdI'
      )
      .then(
        (result) => {
          console.log('Success:', result.text);
          setIsSent(true);
          setIsSending(false);
          formRef.current.reset();
          setTimeout(() => setIsSent(false), 5000);
        },
        (error) => {
          console.error('Final Error Check:', error.text);
          alert('Error: ' + error.text);
          setIsSending(false);
        }
      );
  };

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const letterY = useTransform(scrollYProgress, [0.2, 0.7], [60, -40]);
  const letterMove = useSpring(letterY, { stiffness: 80, damping: 25 });

  const greenNeonGradient =
    'conic-gradient(from 90deg at 50% 50%, #10b981 0%, #22c55e 25%, #059669 50%, #22c55e 75%, #10b981 100%)';
  const inputStyles =
    'bg-white/5 text-white border-white/10 focus:border-green-500/50 placeholder:text-gray-500 font-medium transition-all duration-300';

  return (
    <section
      id="contact"
      ref={containerRef}
      className="w-full min-h-screen bg-black py-24 transition-colors duration-500 font-sans flex items-center overflow-hidden"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-24">
          <h2 className="text-4xl font-black text-white uppercase tracking-tighter">
            CONTACT <span className="text-green-500">ME</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <div className="relative w-full max-w-[450px]">
              <div className="absolute inset-0 bg-green-500/10 blur-[100px] rounded-full"></div>
              <svg
                viewBox="0 0 400 350"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto drop-shadow-[0_0_20px_rgba(34,197,94,0.2)] overflow-visible relative z-10"
              >
                <motion.rect
                  x="70"
                  y="50"
                  width="260"
                  height="200"
                  rx="6"
                  fill="#1a1a1a"
                  stroke="#22c55e"
                  strokeWidth="2"
                  style={{ y: letterMove }}
                />
                <motion.g style={{ y: letterMove }} opacity="0.4">
                  <rect
                    x="100"
                    y="90"
                    width="200"
                    height="4"
                    rx="2"
                    fill="#22c55e"
                  />
                  <rect
                    x="100"
                    y="115"
                    width="200"
                    height="4"
                    rx="2"
                    fill="#22c55e"
                  />
                  <rect
                    x="100"
                    y="140"
                    width="200"
                    height="4"
                    rx="2"
                    fill="#22c55e"
                  />
                  <rect
                    x="100"
                    y="165"
                    width="120"
                    height="4"
                    rx="2"
                    fill="#22c55e"
                  />
                </motion.g>
                <path
                  d="M30 120 V300 H370 V120"
                  fill="#0a0a0a"
                  stroke="#22c55e"
                  strokeWidth="3.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M30 120 L200 230 L370 120"
                  stroke="#22c55e"
                  strokeWidth="3.5"
                  fill="#0f0f0f"
                  strokeLinejoin="round"
                />
                <path
                  d="M30 300 L160 190"
                  stroke="#22c55e"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M370 300 L240 190"
                  stroke="#22c55e"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          <div className="w-full md:w-[450px]">
            <div className="relative p-[1.5px] rounded-3xl overflow-hidden shadow-2xl group">
              <div
                className="absolute inset-[-1000%] animate-border-spin opacity-70"
                style={{
                  background: isRGBActive ? greenNeonGradient : '#1f2937',
                }}
              ></div>

              <div className="relative bg-[#0a0a0a]/90 backdrop-blur-2xl p-8 rounded-[22px] border border-white/5">
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  {/* Hidden title field to match {{title}} in your template */}
                  <input type="hidden" name="title" value="Portfolio Message" />

                  <div className="grid grid-cols-1 gap-4">
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="Your Full Name"
                      className={`w-full px-5 py-4 rounded-xl border focus:outline-none text-sm ${inputStyles}`}
                    />
                  </div>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="Email Address"
                    className={`w-full px-5 py-4 rounded-xl border focus:outline-none text-sm ${inputStyles}`}
                  />
                  <textarea
                    name="message"
                    rows="4"
                    required
                    placeholder="Tell me about your project..."
                    className={`w-full px-5 py-4 rounded-xl border focus:outline-none text-sm resize-none ${inputStyles}`}
                  ></textarea>

                  <div className="min-h-[24px] flex items-center justify-center">
                    {isSent && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-green-500 text-sm font-semibold flex items-center gap-2"
                      >
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        Message sent successfully!
                      </motion.div>
                    )}
                  </div>

                  <button
                    disabled={isSending}
                    type="submit"
                    className={`w-full py-4 cursor-pointer rounded-full font-bold uppercase tracking-wider text-black shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all hover:scale-[1.02] active:scale-95 bg-green-500 hover:bg-green-400 ${isSending ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {isSending ? 'SENDING...' : 'SEND MESSAGE'}
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

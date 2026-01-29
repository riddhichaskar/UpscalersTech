"use client";

import { motion, Variants, AnimatePresence } from "framer-motion";
import NeuralBackground from "@/app/components/NeuralBackground";
import { 
  Terminal, 
  Code2, 
  Trophy, 
  Binary, 
  Layers, 
  Monitor, 
  Cpu,
  ArrowRight,
  FileText,
  Activity,
  CheckCircle2
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

const textReveal: Variants = {
  hidden: { y: "100%", opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } 
  }
};

const modules = [
  { id: "MOD-01", title: "Neural Foundations", stack: "NumPy, SciPy", desc: "Linear Algebra and Calculus for Deep Learning. Implementing backpropagation from the ground up." },
  { id: "MOD-02", title: "Computer Vision", stack: "PyTorch, OpenCV", desc: "Convolutional Neural Networks (CNNs), Object Detection, and Image Segmentation at scale." },
  { id: "MOD-03", title: "Sequence Models", stack: "RNN, LSTM, GRU", desc: "Natural Language Processing (NLP) and Time-Series forecasting for financial and industrial data." },
  { id: "MOD-04", title: "Transformer Logic", stack: "BERT, GPT, HuggingFace", desc: "Attention mechanisms and LLM fine-tuning. Building RAG (Retrieval-Augmented Generation) systems." },
  { id: "MOD-05", title: "MLOps Engineering", stack: "Docker, Kubernetes", desc: "Containerization, Model versioning, and cloud-native deployment strategies (AWS/Azure)." },
  { id: "MOD-06", title: "Edge & Real-time AI", stack: "TensorRT, ONNX", desc: "Optimizing models for low-latency inference on mobile and embedded hardware." },
];

export default function AIMLCoursePage() {
  const [textIndex, setTextIndex] = useState(0);
  const words = ["Inference.", "Neural Nets.", "Transformers.", "MLOps."];
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main ref={containerRef} className="relative min-h-screen bg-[#f8fafc] dark:bg-[#090b14] text-slate-900 dark:text-white transition-colors duration-500 overflow-x-hidden">
      <NeuralBackground />

      {/* ================= HERO SECTION ================= */}
      {/* pt-32 for mobile, pt-60 for desktop */}
      <section className="relative pt-32 md:pt-60 pb-20 md:pb-32 px-6 max-w-7xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-4 mb-8">
              <span className="text-[10px] md:text-xs font-mono px-3 py-1 bg-[#6c7cff]/10 text-[#6c7cff] rounded-md border border-[#6c7cff]/20 uppercase tracking-widest">Advanced Track // 2026</span>
            </motion.div>
            
            <div className="overflow-hidden mb-6">
              {/* text-5xl for mobile, text-8xl for desktop */}
              <motion.h1 variants={textReveal} initial="hidden" animate="visible" className="text-5xl md:text-8xl font-black tracking-tight uppercase leading-[0.85]">
                Master <br /> 
                <AnimatePresence mode="wait">
                  <motion.span 
                    key={textIndex}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="text-transparent bg-clip-text bg-gradient-to-r from-[#6c7cff] to-blue-500 inline-block"
                  >
                    {words[textIndex]}
                  </motion.span>
                </AnimatePresence>
              </motion.h1>
            </div>
            <p className="text-lg md:text-xl font-medium text-slate-500 dark:text-gray-400 max-w-xl leading-relaxed">
              Engineering-led training for those who want to build the future of AI, not just use it.
            </p>
          </div>
          
          {/* ENROLLMENT DASHBOARD */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ delay: 0.5 }} 
            className="lg:col-span-5"
          >
            {/* p-6 for mobile, p-10 for desktop */}
            <div className="bg-white dark:bg-white/5 backdrop-blur-3xl border border-slate-200 dark:border-white/10 p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl relative">
              <div className="flex justify-between items-start mb-8 md:mb-12">
                <Terminal className="text-[#6c7cff]" size={32} />
                <div className="flex flex-col items-end gap-2">
                  <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-[#6c7cff] bg-[#6c7cff]/10 px-3 py-1 rounded-full uppercase">
                    <Activity size={10} className="animate-pulse" /> Live Enrolling
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                  <Monitor size={18} className="mb-3 text-[#6c7cff]" />
                  <p className="text-[9px] md:text-[10px] uppercase font-bold opacity-40">Duration</p>
                  <p className="font-bold text-xs md:text-sm">16-Week Sprint</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                  <Trophy size={18} className="mb-3 text-[#6c7cff]" />
                  <p className="text-[9px] md:text-[10px] uppercase font-bold opacity-40">Validation</p>
                  <p className="font-bold text-xs md:text-sm">Expert Certificate</p>
                </div>
              </div>

              <button className="w-full flex items-center justify-center gap-2 text-[10px] md:text-xs font-bold text-slate-400 dark:text-gray-500 hover:text-[#6c7cff] dark:hover:text-[#6c7cff] transition-colors mb-6 group">
                <FileText size={14} className="group-hover:-translate-y-1 transition-transform" />
                Download Full Syllabus & Brochure (PDF)
              </button>

              <button className="w-full py-4 md:py-5 rounded-2xl bg-[#6c7cff] text-white font-black tracking-wide text-base md:text-lg shadow-xl shadow-[#6c7cff]/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3">
                Enroll in Track <ArrowRight size={20} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION: MODULE ARCHITECTURE ================= */}
      
      <section className="relative py-20 md:py-32 px-6 max-w-7xl mx-auto z-10">
        <div className="mb-12 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Module Architecture</h2>
          <p className="text-sm md:text-base text-slate-500 dark:text-gray-400">A structured progression from theoretical calculus to distributed AI deployment.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {modules.map((module, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-white dark:bg-[#0f1220] border border-slate-200 dark:border-white/5 shadow-sm dark:shadow-none hover:border-[#6c7cff]/30 transition-all group"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-[10px] font-bold text-[#6c7cff] bg-[#6c7cff]/10 px-3 py-1 rounded">{module.id}</span>
                <CheckCircle2 size={16} className="text-slate-200 dark:text-white/10 group-hover:text-[#6c7cff] transition-colors" />
              </div>
              <h4 className="text-xl md:text-2xl font-bold mb-3">{module.title}</h4>
              <p className="text-[10px] md:text-[11px] font-mono text-slate-400 mb-6 uppercase tracking-wider">{module.stack}</p>
              <p className="text-xs md:text-sm text-slate-500 dark:text-gray-400 leading-relaxed">
                {module.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= SECTION: THE LAB PROJECT ================= */}
      <section className="relative py-12 md:py-20 px-6 max-w-7xl mx-auto z-10">
        {/* Rounded corners smaller on mobile */}
        <div className="bg-slate-900 rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden p-1 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 md:p-20 text-white flex flex-col justify-center">
              <Binary className="text-[#6c7cff] mb-6" size={40} />
              <h2 className="text-4xl md:text-5xl font-bold mb-6 md:mb-8 tracking-tighter">Capstone <br />Laboratory.</h2>
              <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-8 md:mb-10">
                You will architect a production-ready "Agentic RAG" system, connecting LLMs to live vector databases with zero-latency requirements.
              </p>
              <div className="flex flex-wrap gap-3 md:gap-4">
                  <div className="px-4 py-2 rounded-lg bg-white/10 border border-white/10 text-[10px] md:text-xs font-mono">PyTorch</div>
                  <div className="px-4 py-2 rounded-lg bg-white/10 border border-white/10 text-[10px] md:text-xs font-mono">Kubernetes</div>
              </div>
            </div>

            {/* Hidden on mobile to keep page flow clean */}
            <div className="bg-black/40 backdrop-blur-3xl p-10 font-mono text-[12px] leading-relaxed border-l border-white/5 hidden lg:block">
               <div className="flex items-center justify-between mb-10 opacity-40 uppercase text-[9px] tracking-[0.4em]">
                  <span>Environment: Stable</span>
                  <span className="text-green-500 animate-pulse">Inference_Active</span>
               </div>
               <div className="space-y-3">
                  <p className="text-slate-500">$ python train_agent.py --epochs 100</p>
                  <p className="text-[#6c7cff]">Optimizing Weights... Done.</p>
                  <p className="text-green-400">Embedding Vectors... Done.</p>
                  <p className="text-pink-400 animate-pulse">Running Inference Test...</p>
                  <div className="mt-8 p-6 rounded-2xl bg-white/5 border border-white/10">
                     <p className="text-white">Metric: [Accuracy: 98.4%]</p>
                     <p className="text-white">Status: [DEPLOYMENT_READY]</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL ENROLLMENT CTA */}
      <div className="relative py-24 md:py-40 text-center z-10 px-6">
        {/* text-5xl for mobile, text-8xl for desktop */}
        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8 md:mb-10 leading-none">Ready to <br /> <span className="text-[#6c7cff]">Upscale?</span></h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
          <button className="px-10 md:px-12 py-4 md:py-5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black text-base md:text-lg hover:scale-105 active:scale-95 transition-all shadow-2xl">
            Enroll Now
          </button>
          <button className="px-10 md:px-12 py-4 md:py-5 rounded-full border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/5 font-black text-base md:text-lg transition-all">
            Talk to Instructor
          </button>
        </div>
      </div>
    </main>
  );
}
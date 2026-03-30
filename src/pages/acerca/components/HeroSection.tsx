import { BlurFade } from "../../../components/ui/BlurFade";
import { BlurText } from "../../../components/ui/BlurText";
import { InteractiveButton } from "../../../components/ui/InteractiveButton";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 overflow-hidden bg-white dark:bg-slate-950 pt-20">
      {/* Background soft gradient overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-50/50 dark:bg-blue-900/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-slate-50/50 dark:bg-slate-900/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <BlurFade delay={0.2}>
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-xs font-medium mb-8 tracking-wide uppercase">
            Plataforma Acerca
          </div>
        </BlurFade>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight leading-[1.1]">
          <BlurText 
            text="Acerca lo que" 
            delay={50}
            animateBy="words"
            direction="top"
          />
          <br />
          <BlurText 
            text="más importa." 
            delay={250}
            animateBy="words"
            direction="top"
          />
        </h1>

        <BlurFade delay={0.6}>
          <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Una plataforma que conecta el mundo físico con información digital, en segundos.
            <span className="block mt-2 font-medium text-slate-900 dark:text-slate-200">Sin apps. Sin fricción.</span>
          </p>
        </BlurFade>

        <BlurFade delay={0.8}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <InteractiveButton size="lg" className="px-10 py-5 text-lg font-semibold min-w-[200px]">
              Explorar aplicaciones
            </InteractiveButton>
            <button className="px-8 py-4 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors font-medium">
              Saber más
            </button>
          </div>
        </BlurFade>
      </div>

      {/* Visual representation placeholder - Subtle and abstract */}
      <BlurFade delay={1} className="mt-20 w-full max-w-5xl mx-auto px-4">
        <div className="relative aspect-[21/9] rounded-2xl overflow-hidden bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 shadow-2xl group">
          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-transparent to-blue-500/5 dark:to-blue-400/10 pointer-events-none" />
          
          <div className="flex items-center justify-center h-full">
             <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="flex items-center justify-center"
             >
               <div className="w-24 h-24 rounded-3xl bg-white dark:bg-slate-800 shadow-xl flex items-center justify-center border border-slate-100 dark:border-slate-700">
                 <div className="w-12 h-12 rounded-full border-4 border-blue-100 dark:border-blue-900/50 flex items-center justify-center">
                    <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse" />
                 </div>
               </div>
               <div className="w-16 h-[2px] bg-gradient-to-r from-blue-500 to-transparent mx-2 opacity-30" />
               <div className="w-32 h-56 rounded-[2rem] border-4 border-slate-900/10 dark:border-white/10 flex flex-col p-4">
                  <div className="w-8 h-1 bg-slate-900/10 dark:white/10 rounded-full self-center mb-6" />
                  <div className="flex-1 rounded-xl bg-slate-50 dark:bg-slate-800 animate-pulse" />
               </div>
             </motion.div>
          </div>
        </div>
      </BlurFade>
    </section>
  );
};

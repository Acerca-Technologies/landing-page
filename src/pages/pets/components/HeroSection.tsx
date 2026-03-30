import { Shield, Smartphone } from 'lucide-react';
import { BlurFade } from '../../../components/ui/BlurFade';
import { SplitText } from '../../../components/ui/SplitText';
import { BlurText } from '../../../components/ui/BlurText';
import { InteractiveButton } from '../../../components/ui/InteractiveButton';
import { motion } from 'framer-motion';

export const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden px-6 transition-colors duration-500">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent dark:from-blue-900/20 dark:to-slate-950 -z-10" />
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 text-center lg:text-left">
          <BlurFade delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-8">
              <Shield className="w-4 h-4" />
              <span>La placa inteligente para tu mascota</span>
            </div>
          </BlurFade>
          
          <SplitText 
            text="Si tu mascota se pierde, te llamarán en menos de 60 segundos."
            className="text-5xl lg:text-7xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-[1.1] mb-6 block"
          />
          
          <BlurText
            delay={50}
            text="Una placa inteligente que permite a cualquiera contactarte al instante con solo acercar su celular. Sin apps. Sin fricción."
            className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed justify-center lg:justify-start"
          />

          <BlurFade delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <InteractiveButton size="lg" className="w-full sm:w-auto">
                Consigue la tuya
              </InteractiveButton>
              <InteractiveButton variant="secondary" size="lg" className="w-full sm:w-auto">
                Ver cómo funciona
              </InteractiveButton>
            </div>
          </BlurFade>
        </div>

        <div className="flex-1 w-full max-w-lg lg:max-w-none relative">
          <BlurFade delay={0.5} yOffset={20}>
            <div className="relative rounded-[2.5rem] bg-gradient-to-tr from-blue-100 to-indigo-50 dark:from-blue-900/40 dark:to-indigo-900/40 p-4 shadow-2xl overflow-hidden aspect-square flex items-center justify-center">
              <div className="absolute inset-x-0 bottom-0 top-1/2 bg-white/20 dark:bg-slate-900/20 backdrop-blur-xl -skew-y-6 transform origin-bottom-left" />
              <motion.div 
                initial={{ rotate: -10, scale: 0.9 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ duration: 1, type: "spring", bounce: 0.4 }}
                className="relative z-10 w-48 h-48 bg-gray-900 dark:bg-black rounded-full shadow-2xl border-4 border-gray-800 dark:border-slate-800 flex items-center justify-center overflow-hidden"
              >
                <div className="w-32 h-32 rounded-full border border-gray-700 dark:border-slate-800 flex items-center justify-center">
                   <div className="w-16 h-16 rounded-full border border-gray-600 dark:border-slate-700 flex items-center justify-center">
                      <Smartphone className="w-8 h-8 text-gray-400 dark:text-gray-500" />
                   </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent mix-blend-overlay" />
              </motion.div>
              <div className="absolute top-1/4 right-1/4 bg-white dark:bg-slate-800 p-3 rounded-2xl shadow-xl animate-bounce" style={{ animationDuration: '3s' }}>
                 <div className="flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                   <span className="text-xs font-bold text-gray-700 dark:text-gray-200">Scan!</span>
                 </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
};

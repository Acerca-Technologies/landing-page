import { BlurFade } from '../../../components/ui/BlurFade';
import { BlurText } from '../../../components/ui/BlurText';

export const EmotionalSection = () => {
  return (
    <section className="py-32 bg-[#fafafa] dark:bg-slate-950 px-6 text-center transition-colors duration-500">
      <div className="max-w-4xl mx-auto">
        <BlurFade>
          <h2 className="text-4xl lg:text-6xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter">
            No es un gadget.
          </h2>
          <BlurText 
            text="Es la diferencia entre perderlos... y recuperarlos al instante." 
            className="text-2xl lg:text-3xl text-gray-600 dark:text-gray-400 leading-relaxed font-light"
            delay={50}
            animateBy="words"
          />
        </BlurFade>
      </div>
    </section>
  );
};

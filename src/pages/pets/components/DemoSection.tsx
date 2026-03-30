import { Shield } from 'lucide-react';
import { BlurFade } from '../../../components/ui/BlurFade';
import SpotlightCard from '../../../components/ui/SpotlightCard';

export const DemoSection = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white relative overflow-hidden px-6 transition-colors duration-500">
      <SpotlightCard className="max-w-5xl mx-auto rounded-[3rem] border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 backdrop-blur-sm p-12 lg:p-20 text-center relative z-10 transition-all duration-500">
        <BlurFade>
          <Shield className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-8 opacity-80" />
          <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight tracking-tight">
            Ese es el momento que importa.
          </h2>
          <p className="text-xl lg:text-2xl text-gray-500 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto font-light mb-12">
            El pánico de perder a tu mascota desaparece cuando alguien encuentra la placa. 
            <span className="text-gray-900 dark:text-white font-medium block mt-4">Un toque. Un escaneo. Y estás al teléfono con quien los encontró.</span>
          </p>
        </BlurFade>
      </SpotlightCard>
    </section>
  );
};

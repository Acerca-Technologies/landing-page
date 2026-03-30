import { CheckCircle2 } from 'lucide-react';
import { BlurFade } from '../../../components/ui/BlurFade';
import BorderGlow from '../../../components/ui/BorderGlow';
import { InteractiveButton } from '../../../components/ui/InteractiveButton';

export const PricingSection = () => {
  return (
    <section className="py-24 bg-[#fafafa] dark:bg-slate-950 px-6 transition-colors duration-500">
      <div className="max-w-lg mx-auto">
        <BlurFade>
          <BorderGlow 
            className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 lg:p-12 shadow-[0_20px_50px_rgb(0,0,0,0.05)] border border-gray-100 dark:border-slate-800 text-center relative overflow-hidden"
            glowColor="220 100% 50%"
            backgroundColor="transparent"
            colors={['#3b82f6', '#6366f1', '#2dd4bf']}
          >
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Suscripción Simple</h2>
              <p className="text-gray-500 dark:text-gray-400 mb-8">Tranquilidad absoluta para ti y tu mejor amigo.</p>
              
              <div className="flex items-baseline justify-center gap-1 mb-6">
                <span className="text-gray-500 dark:text-gray-400 text-xl font-medium">Desde</span>
                <span className="text-5xl font-extrabold text-gray-900 dark:text-white">$299</span>
                <span className="text-gray-500 dark:text-gray-400 font-medium">MXN / año</span>
              </div>
              
              <div className="space-y-4 mb-10 text-left">
                {["Placa inteligente incluida", "Perfil digital siempre activo", "Soporte prioritario"].map((feat, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{feat}</span>
                  </div>
                ))}
              </div>

              <InteractiveButton className="w-full" size="lg">
                Comprar ahora
              </InteractiveButton>
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-4">Envío gratis a todo México</p>
            </div>
          </BorderGlow>
        </BlurFade>
      </div>
    </section>
  );
};

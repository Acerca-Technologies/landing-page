import { CheckCircle2 } from 'lucide-react';
import { BlurFade } from '../../../components/ui/BlurFade';
import { BackgroundGradient } from '../../../components/ui/background-gradient';
import { InteractiveButton } from '../../../components/ui/InteractiveButton';

export const PricingSection = () => {
  return (
    <section className="py-24 bg-[#fafafa] px-6">
      <div className="max-w-lg mx-auto">
        <BlurFade>
          <BackgroundGradient className="bg-white rounded-[2.5rem] p-10 lg:p-12 shadow-[0_20px_50px_rgb(0,0,0,0.05)] border border-gray-100 text-center relative overflow-hidden h-full">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-0 opacity-50" />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Suscripción Simple</h2>
              <p className="text-gray-500 mb-8">Tranquilidad absoluta para ti y tu mejor amigo.</p>
              
              <div className="flex items-baseline justify-center gap-1 mb-6">
                <span className="text-gray-500 text-xl font-medium">Desde</span>
                <span className="text-5xl font-extrabold text-gray-900">$299</span>
                <span className="text-gray-500 font-medium">MXN / año</span>
              </div>
              
              <div className="space-y-4 mb-10 text-left">
                {["Placa inteligente incluida", "Perfil digital siempre activo", "Soporte prioritario"].map((feat, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                    <span className="text-gray-700">{feat}</span>
                  </div>
                ))}
              </div>

              <InteractiveButton className="w-full" size="lg">
                Comprar ahora
              </InteractiveButton>
              <p className="text-xs text-gray-400 mt-4">Envío gratis a todo México</p>
            </div>
          </BackgroundGradient>
        </BlurFade>
      </div>
    </section>
  );
};

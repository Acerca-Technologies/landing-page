import { Shield } from 'lucide-react';
import { BlurFade } from '../../../components/ui/BlurFade';
import { Meteors } from '../../../components/ui/meteors';

export const DemoSection = () => {
  return (
    <section className="py-24 bg-gray-900 text-white relative overflow-hidden px-6">
      <Meteors number={15} />
      <div className="absolute top-0 left-0 w-full h-full opacity-10 blur-3xl" style={{ background: 'radial-gradient(circle at 20% 50%, #3b82f6, transparent 50%)' }} />
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <BlurFade>
          <Shield className="w-12 h-12 text-blue-400 mx-auto mb-8 opacity-80" />
          <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight tracking-tight">
            Ese es el momento que importa.
          </h2>
          <p className="text-xl lg:text-2xl text-gray-400 leading-relaxed max-w-3xl mx-auto font-light mb-12">
            El pánico de perder a tu mascota desaparece cuando alguien encuentra la placa. 
            <span className="text-white font-medium block mt-4">Un toque. Un escaneo. Y estás al teléfono con quien los encontró.</span>
          </p>
        </BlurFade>
      </div>
    </section>
  );
};

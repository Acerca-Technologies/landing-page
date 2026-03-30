import { Shield, MapPin, Search, PhoneCall } from 'lucide-react';
import { BlurFade } from '../../../components/ui/BlurFade';

export const HowItWorks = () => {
  return (
    <section className="py-24 bg-[#fafafa] dark:bg-slate-950 px-6 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <BlurFade>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
              Funciona casi por arte de magia
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">En 4 simples pasos, tu mascota estará protegida.</p>
          </BlurFade>
        </div>
 
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Shield, title: "Registra a tu mascota", desc: "Crea su perfil en menos de un minuto." },
            { icon: MapPin, title: "Recibe tu placa", desc: "Te enviamos la placa inteligente directo a tu casa." },
            { icon: Search, title: "Alguien la escanea", desc: "Si se pierde, quien la encuentre acerca su celular." },
            { icon: PhoneCall, title: "Te llaman al instante", desc: "Tu teléfono suena automáticamente. Sin fricción." }
          ].map((step, index) => (
            <BlurFade key={index} delay={index * 0.1} className="h-full">
              <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-gray-50 dark:border-slate-800 h-full flex flex-col relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <step.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{step.desc}</p>
                
                <div className="absolute top-6 right-6 text-9xl font-black text-gray-50 dark:text-gray-800 opacity-50 select-none transition-transform duration-500 group-hover:-translate-y-2 group-hover:translate-x-2">
                  {index + 1}
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
};

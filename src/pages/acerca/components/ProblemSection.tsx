import { BlurFade } from "../../../components/ui/BlurFade";
import { AlertCircle, Clock, ZapOff, type LucideIcon } from "lucide-react";

const ProblemPoint = ({ icon: Icon, title, description }: { icon: LucideIcon, title: string, description: string }) => (
  <div className="flex flex-col items-center text-center p-8 bg-slate-50/50 dark:bg-slate-900/30 rounded-3xl border border-slate-100 dark:border-slate-800 transition-all hover:bg-white dark:hover:bg-slate-900 shadow-sm hover:shadow-md grow">
    <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center mb-6 shadow-sm border border-slate-100 dark:border-slate-700">
      <Icon className="w-7 h-7 text-slate-400 dark:text-slate-500" />
    </div>
    <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4 tracking-tight">{title}</h3>
    <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-light">
      {description}
    </p>
  </div>
);

export const ProblemSection = () => {
  return (
    <section className="py-24 px-6 bg-white dark:bg-slate-950 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <BlurFade>
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6 tracking-tight">
              La información falla cuando más se necesita.
            </h2>
          </BlurFade>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <BlurFade delay={0.2}>
            <ProblemPoint 
              icon={AlertCircle}
              title="Datos fragmentados"
              description="La información crítica está dispersa en sistemas que no se hablan entre sí."
            />
          </BlurFade>
          <BlurFade delay={0.4}>
            <ProblemPoint 
              icon={Clock}
              title="Acceso lento"
              description="Perder tiempo buscando o autenticando datos cuando cada segundo cuenta."
            />
          </BlurFade>
          <BlurFade delay={0.6}>
            <ProblemPoint 
              icon={ZapOff}
              title="Sistemas bloqueados"
              description="Barreras técnicas que impiden que los datos fluyan hacia quien los necesita."
            />
          </BlurFade>
        </div>

        <BlurFade delay={0.8}>
          <div className="text-center pt-8 border-t border-slate-100 dark:border-slate-800/50">
            <p className="text-2xl lg:text-3xl text-slate-400 dark:text-slate-500 font-light italic">
              "Cuando los segundos importan, la fricción es un fracaso."
            </p>
          </div>
        </BlurFade>
      </div>
    </section>
  );
};

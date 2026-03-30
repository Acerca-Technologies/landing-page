import { BlurFade } from "../../../components/ui/BlurFade";
import SpotlightCard from "../../../components/ui/SpotlightCard";
import { InteractiveButton } from "../../../components/ui/InteractiveButton";
import { Dog, HeartPulse, Building2, type LucideIcon } from "lucide-react";

const AppCard = ({ icon: Icon, title, description, status, cta, delay }: { icon: LucideIcon, title: string, description: string, status: string, cta?: string, delay: number }) => (
  <BlurFade delay={delay}>
    <SpotlightCard className="h-full bg-white dark:bg-slate-900/50 p-8 flex flex-col items-start text-left rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm transition-all duration-500">
      <div className="w-full flex justify-between items-start mb-6">
        <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center shadow-inner border border-slate-100/50 dark:border-slate-700/50">
          <Icon className="w-8 h-8 text-slate-800 dark:text-slate-200" />
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase ${status === "Live" ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400" : "bg-slate-50 text-slate-500 dark:bg-slate-800 dark:text-slate-400"}`}>
          {status}
        </span>
      </div>
      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">{title}</h3>
      <p className="text-slate-500 dark:text-slate-400 font-light mb-8 flex-grow leading-relaxed">
        {description}
      </p>
      {cta && (
        <InteractiveButton size="sm" className="w-full font-bold uppercase tracking-widest text-xs py-4">
          {cta}
        </InteractiveButton>
      )}
    </SpotlightCard>
  </BlurFade>
);

export const AppsSection = () => {
  return (
    <section className="py-32 px-6 bg-white dark:bg-slate-950 relative overflow-hidden transition-colors duration-500" id="apps">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <BlurFade>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6 tracking-tight leading-tight">
              Construido sobre Acerca.
            </h2>
            <p className="text-lg lg:text-xl text-slate-500 dark:text-slate-400 font-light max-w-2xl mx-auto tracking-wide">
              Un ecosistema creciente de aplicaciones para el mundo real, conectadas a la identidad de los objetos.
            </p>
          </BlurFade>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AppCard 
            icon={Dog}
            title="Pets"
            description="Si tu mascota se pierde, cualquiera puede contactarte en segundos mediante su placa inteligente Acerca."
            status="Live"
            cta="Explorar"
            delay={0.2}
          />
          <AppCard 
            icon={HeartPulse}
            title="Health"
            description="Información médica crítica de emergencia, accesible de forma instantánea para el personal de socorro."
            status="Próximamente"
            delay={0.4}
          />
          <AppCard 
            icon={Building2}
            title="Building"
            description="Acceso, identidad y servicios conectados a espacios físicos y edificios inteligentes."
            status="Próximamente"
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
};

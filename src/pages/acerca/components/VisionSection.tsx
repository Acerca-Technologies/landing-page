import { BlurFade } from "../../../components/ui/BlurFade";

export const VisionSection = () => {
  return (
    <section className="py-40 px-6 bg-slate-900 dark:bg-blue-900/10 text-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <BlurFade>
          <div className="inline-flex items-center px-4 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold mb-8 tracking-[0.2em] uppercase">
            Nuestra Visión
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-10 tracking-tight leading-tight">
            Menos burocracia.<br />Más acceso.
          </h2>
          <p className="text-xl lg:text-2xl text-slate-400 font-light leading-relaxed max-w-2xl mx-auto mb-10">
            "Creemos que la información debe estar disponible cuando se necesita, no encerrada tras sistemas, aplicaciones o procesos complejos."
          </p>
        </BlurFade>
      </div>

      {/* Background abstract elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-[150px] rounded-full -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-500/10 blur-[150px] rounded-full -ml-48 -mb-48" />
    </section>
  );
};

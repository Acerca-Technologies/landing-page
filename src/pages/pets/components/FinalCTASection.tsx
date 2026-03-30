import { BlurFade } from '../../../components/ui/BlurFade';
import { InteractiveButton } from '../../../components/ui/InteractiveButton';

export const FinalCTASection = () => {
  return (
    <>
      <section className="py-24 bg-blue-600 text-white px-6 text-center overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <BlurFade>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">No esperes a que sea tarde.</h2>
            <p className="text-xl text-blue-100 mb-10 font-light">Protege a tu mascota con la mejor tecnología disponible hoy mismo.</p>
            <InteractiveButton variant="secondary" size="lg" className="w-full sm:w-auto text-blue-600 font-bold px-12 py-5 text-xl">
              Proteger a mi mascota hoy
            </InteractiveButton>
          </BlurFade>
        </div>
      </section>

      {/* STICKY MOBILE CTA */}
      <div className="fixed bottom-0 left-0 w-full p-4 bg-white/80 backdrop-blur-lg border-t border-gray-100 sm:hidden z-50">
        <InteractiveButton size="md" className="w-full">
          Comprar placa inteligente
        </InteractiveButton>
      </div>
    </>
  );
};

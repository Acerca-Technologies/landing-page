import { BlurFade } from '../../../components/ui/BlurFade';
import { TextGenerateEffect } from '../../../components/ui/text-generate-effect';

export const EmotionalSection = () => {
  return (
    <section className="py-32 bg-[#fafafa] px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <BlurFade>
          <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-8 tracking-tighter">
            No es un gadget.
          </h2>
          <TextGenerateEffect 
            words="Es la diferencia entre perderlos... y recuperarlos al instante." 
            className="text-2xl lg:text-3xl text-gray-600 leading-relaxed font-light"
          />
        </BlurFade>
      </div>
    </section>
  );
};

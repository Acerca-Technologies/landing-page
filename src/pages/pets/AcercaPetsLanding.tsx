import { HeroSection } from './components/HeroSection';
import { SocialProofStrip } from './components/SocialProofStrip';
import { HowItWorks } from './components/HowItWorks';
import { DemoSection } from './components/DemoSection';
import { AdvantageSection } from './components/AdvantageSection';
import { EmotionalSection } from './components/EmotionalSection';
import { FeaturesSection } from './components/FeaturesSection';
import { PricingSection } from './components/PricingSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTASection } from './components/FinalCTASection';
import ThemeToggle from '../../components/ui/ThemeToggle';

export default function AcercaPetsLanding() {
  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-slate-950 font-sans selection:bg-blue-100 selection:text-blue-900 transition-colors duration-500">
      <ThemeToggle />
      <HeroSection />
      <SocialProofStrip />
      <HowItWorks />
      <DemoSection />
      <AdvantageSection />
      <EmotionalSection />
      <FeaturesSection />
      <PricingSection />
      <FAQSection />
      <FinalCTASection />
    </div>
  );
}

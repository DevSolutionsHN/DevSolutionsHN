import { Hero } from '../sections/Hero';
import { Problem } from '../sections/Problem';
import { Services } from '../sections/Services';
import { Portfolio } from '../sections/Portfolio';
import { Differential } from '../sections/Differential';
import { Process } from '../sections/Process';
import { PricingSummary } from '../sections/PricingSummary';
import { FAQSummary } from '../sections/FAQSummary';
import { FinalCTA } from '../sections/FinalCTA';

export function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Services />
      <Portfolio />
      <Differential />
      <Process />
      <PricingSummary />
      <FAQSummary />
      <FinalCTA />
    </>
  );
}
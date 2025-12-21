// src/pages/Offer.tsx

import { ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/Button';

export function Offer() {
  return (
    <div className="min-h-screen pt-20 section-padding">
      <div className="container-custom max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          موقع شغال خلال 7 أيام
        </h1>

        <p className="text-xl text-secondary-600 dark:text-secondary-300 mb-10">
          نحوّل فكرتك لموقع حقيقي — أو لا تدفع شيئًا (بنطاق واضح).
        </p>

        <a
          href="https://wa.me/201234567890"
          target="_blank"
          rel="noreferrer"
        >
          <Button size="lg" icon={ArrowLeft}>
            ابدأ على واتساب الآن
          </Button>
        </a>
      </div>
    </div>
  );
}

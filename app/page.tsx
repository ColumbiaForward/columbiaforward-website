import type { Metadata } from 'next';

import { SITE } from '~/config.js';

import Hero from '~/components/widgets/Hero';
import SocialProof from '../src/components/widgets/SocialProof';
import Steps from '~/components/widgets/Steps';
import FAQs2 from '~/components/widgets/FAQs2';
// import CallToAction2 from '~/components/widgets/CallToAction2';
// import Testimonials from '~/components/widgets/Testimonials';

// import content
import Content from '~/components/widgets/Content';


import {
  faqs2Home,
  heroHome,
  socialProofHome,
  stepsHome,
  // callToAction2Home,
  // testimonialsHome,
} from '~/shared/data/pages/home.data';

export const metadata: Metadata = {
  title: SITE.title,
};

export default function Page() {
  return (
    <>
      <Hero {...heroHome} />
      <SocialProof {...socialProofHome} />
      <Steps {...stepsHome} />
      {/* <Testimonials {...testimonialsHome} /> */}
      <FAQs2 {...faqs2Home} />
      {/* <CallToAction2 {...callToAction2Home} /> */}
    </>
  );
}

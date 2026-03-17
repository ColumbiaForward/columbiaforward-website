import type { Metadata } from 'next';

import Hero from '~/components/widgets/Hero';
import Content from '~/components/widgets/Content';
import Features from '~/components/widgets/Features';

import {
  missionAbout,
  empowermentAbout,
  partnershipsAbout,
  impactAbout,
  visionAbout,
} from '~/shared/data/pages/about.data';

export const metadata: Metadata = {
  title: 'About us',
};

const Page = () => {
  return (
    <>
      <Content {...missionAbout} />
      <Content {...empowermentAbout} />
      <Features {...partnershipsAbout} />
      <Content {...impactAbout} />
      <Content {...visionAbout} />
    </>
  );
};

export default Page;

import { HeroProps, ContentProps, FeaturesProps } from '~/shared/types';
import kids1 from '~/assets/images/kids1.jpg';
import kids2 from '~/assets/images/kids2.jpg';
import kids3 from '~/assets/images/kids3.png';


// Our Mission
export const missionAbout: ContentProps = {
  header: {
    title: 'Our Mission',
  },
  content: 'Columbia Forward exists to break the cycle of partisan gridlock that has left our community behind. We believe that most Columbians — regardless of political affiliation — share the same core values: safe neighborhoods, great schools, economic opportunity, and a government that works. Our mission is to organize around those shared values, field candidates who answer to residents rather than party bosses, and build coalitions that actually get things done.',
  image: {
    src: kids1,
    alt: 'Columbia residents coming together',
  },
  isReversed: false,
  isAfterContent: false,
};

// Empowering the Community
export const empowermentAbout: ContentProps = {
  header: {
    title: 'Empowering Our Community',
  },
  content: 'Columbia Forward puts power back in the hands of everyday residents. Through town halls, community forums, and open volunteer programs, we give Columbians a genuine seat at the table. Our model is transparent, bottom-up, and citizen-driven — because lasting change starts with the people who live it every day.',
  image: {
    src: kids2,
    alt: 'Community members at a town hall',
  },
  isReversed: true,
  isAfterContent: false,
};

// Partnerships
export const partnershipsAbout: FeaturesProps = {
  header: {
    title: 'Our Partners',
  },
  columns: 2,
  items: [
    {
      title: 'Forward Party USA',
      description: 'National affiliate',
    },
    {
      title: 'Columbia Community Foundation',
      description: 'Civic Partner',
    },
    {
      title: 'Local Business Alliance',
      description: 'Economic Partner',
    },
    {
      title: 'Columbia Neighborhood Councils',
      description: 'Community Partner',
    },
  ],
};

// The Impact We Seek
export const impactAbout: ContentProps = {
  header: {
    title: 'The Impact We Seek',
  },
  content: 'We plan to field candidates at every level of local government — city council, school board, and beyond — who reflect Columbia\'s diversity and put residents first. We will host regular town halls to keep elected officials accountable, partner with local organizations to address pressing community needs, and build the civic infrastructure that lets every Columbian participate in shaping their future.',
  image: {
    src: kids3,
    alt: 'Columbia Forward impact in the community',
  },
  isReversed: false,
  isAfterContent: false,
};

// Our Vision for the Future
export const visionAbout: ContentProps = {
  header: {
    title: 'Our Vision for the Future',
  },
  content: 'We envision a Columbia where elected officials work across the aisle because their constituents demand it — where policy is driven by evidence and community input, not ideology or donor interests. A Columbia Forward future means ranked-choice voting that gives every voter a real voice, open primaries that end the stranglehold of party extremes, and local leaders bold enough to tackle the real challenges facing our community with honesty and creativity.',
  isReversed: true,
  isAfterContent: false,
};

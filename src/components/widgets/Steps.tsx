import Image from 'next/image';
import { IconCheck } from '@tabler/icons-react';
import { StepsProps } from '~/shared/types';
import WidgetWrapper from '../common/WidgetWrapper';
import Timeline from '../common/Timeline';
import Headline from '../common/Headline';

// Ensure these paths match where you saved the uploaded images
import kids3 from '~/assets/images/kids3.png';
import kids2 from '~/assets/images/kids2.jpg';
import kids1 from '~/assets/images/kids1.jpg';

const Steps = ({
  id,
  header,
  items,
  isImageDisplayed = true,
  isReversed = false,
  hasBackground = false,
}: StepsProps) => (
  <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="max-w-6xl ">
    <div
      className={`flex flex-col gap-8 md:gap-12 ${isReversed ? 'md:flex-row-reverse' : ''} ${
        isImageDisplayed ? 'md:flex-row' : ''
      }`}
    >
      {/* Text/Timeline Section */}
      <div
        className={`md:py-4 ${
          isImageDisplayed ? 'md:pr-16 md:rtl:pr-0 md:rtl:pl-16 md:basis-1/2' : 'max-w-4xl mx-auto md:self-center'
        }`}
      >
        {header && (
          <Headline
            header={header}
            containerClass={isImageDisplayed ? 'text-left rtl:text-right' : ''}
            titleClass="text-3xl sm:text-4xl"
            subtitleClass={isImageDisplayed ? 'text-left rtl:text-right' : ''}
          />
        )}
        <Timeline items={items} defaultIcon={IconCheck} iconClass="text-primary border-primary-900" />
      </div>

      {/* Image Collage Section */}
      {isImageDisplayed && (
        <div className="relative md:basis-1/2">
          {/* Wrapper Changes:
             1. h-[1000px]: Significantly increased height to elongate the pattern.
             2. max-w-lg: Increased width so images appear larger.
          */}
          <div className="relative w-full max-w-lg mx-auto h-[1000px]">
            
            {/* Image 1: Top Left */}
            <div className="absolute top-0 left-0 z-10 w-9/12 transform -rotate-3">
              <Image
                src={kids1}
                alt="Group of excited kids"
                className="rounded-2xl shadow-xl border-4 border-white dark:border-slate-800 object-cover w-full h-auto"
              />
            </div>

            {/* Image 2: Middle Right - Centered vertically (top-1/2) to maximize spacing */}
            <div className="absolute top-1/2 right-0 z-0 w-9/12 transform -translate-y-1/2 rotate-3">
              <Image
                src={kids2}
                alt="Teens repairing devices"
                className="rounded-2xl shadow-xl border-4 border-white dark:border-slate-800 object-cover w-full h-auto"
              />
            </div>

            {/* Image 3: Bottom Left - Anchored to bottom */}
            <div className="absolute bottom-0 left-0 z-20 w-9/12 transform -rotate-2">
              <Image
                src={kids3}
                alt="Excited kid at laptop"
                className="rounded-2xl shadow-2xl border-4 border-white dark:border-slate-800 object-cover w-full h-auto"
              />
            </div>
            
          </div>
        </div>
      )}
    </div>
  </WidgetWrapper>
);

export default Steps;
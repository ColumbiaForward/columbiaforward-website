import Image from 'next/image';
import { IconCheck } from '@tabler/icons-react';
import { StepsProps } from '~/shared/types';
import WidgetWrapper from '../common/WidgetWrapper';
import Timeline from '../common/Timeline';
import Headline from '../common/Headline';

const Steps = ({
  id,
  header,
  items,
  image,
  isImageDisplayed = true,
  isReversed = false,
  hasBackground = false,
}: StepsProps) => (
  <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="max-w-6xl ">
    <div
      className={`flex flex-col gap-8 md:gap-12 ${isReversed ? 'md:flex-row-reverse' : ''} ${isImageDisplayed ? 'md:flex-row' : ''
        }`}
    >
      {/* Text/Timeline Section */}
      <div
        className={`md:py-4 ${isImageDisplayed ? 'md:pr-16 md:rtl:pr-0 md:rtl:pl-16 md:basis-1/2' : 'max-w-4xl mx-auto md:self-center'
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

      {/* Image Section */}
      {isImageDisplayed && image && (
        <div className="relative md:basis-1/2">
          <div className="relative w-full max-w-lg mx-auto">
            <Image
              src={image.src}
              alt={image.alt}
              className="rounded-2xl shadow-xl object-cover w-full h-auto"
            />
          </div>
        </div>
      )}
    </div>
  </WidgetWrapper>
);

export default Steps;
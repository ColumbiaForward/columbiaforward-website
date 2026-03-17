import Image from 'next/image';
import { HeroProps } from '~/shared/types';
import CTA from '../common/CTA';

const Hero = ({ title, subtitle, tagline, callToAction, callToAction2, image }: HeroProps) => {
  return (
    <section 
      id="heroOne" 
      className="
        relative 
        flex 
        min-h-screen 
        items-center 
        justify-center 
        overflow-hidden 
        bg-gray-900 
        pt-20 md:pt-28 /* Adds top spacing to account for the fixed header */
      "
    >
      
      {/* 1. Background Image Layer */}
      {image && (
        <div className="absolute inset-0 z-0">
          <Image
            className="h-full w-full object-cover"
            src={image.src}
            alt={image.alt}
            fill
            sizes="100vw"
            loading="eager"
            placeholder="blur"
            priority
          />
          {/* 2. Dark Overlay Layer - Gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-gray-900" />
        </div>
      )}

      {/* Ambient Glow/Blur for modern feel */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30 pointer-events-none">
         <div className="h-[400px] w-[400px] rounded-full bg-primary-600 blur-[120px]" />
      </div>

      {/* 3. Content Layer */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 w-full text-center">
        <div className="py-12 md:py-20">
          <div className="mx-auto max-w-4xl pb-10 md:pb-16">
            
            {tagline && (
              <p className="mb-4 text-base font-bold uppercase tracking-wide text-primary-200">
                {tagline}
              </p>
            )}
            
            {title && (
              <h1 className="leading-tighter font-heading mb-6 text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl">
                {/* Gradient text effect */}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                  {title}
                </span>
              </h1>
            )}
            
            <div className="mx-auto max-w-3xl">
              {subtitle && (
                <p className="mb-8 text-xl font-normal text-slate-200">
                  {subtitle}
                </p>
              )}
              
              <div className="flex max-w-none flex-col flex-nowrap gap-4 px-4 sm:flex-row sm:justify-center">
                {callToAction && (
                  <CTA callToAction={callToAction} linkClass="btn btn-primary" />
                )}
                {callToAction2 && (
                  <CTA callToAction={callToAction2} linkClass="btn bg-white text-gray-900 hover:bg-gray-100" />
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
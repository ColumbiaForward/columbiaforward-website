'use client';

import { useEffect, useRef } from 'react';
import Script from 'next/script';

export default function ForwardPartyMap() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const hasAutoCenteredRef = useRef(false);
    const lastScrollYRef = useRef(0);
    const isScrollingDownRef = useRef(false);

    useEffect(() => {
        // When the component remounts (e.g. returning to the page), 
        // Next.js won't re-run the external scripts because they are already loaded.
        // We have to manually tell the map to redraw itself into the new DOM elements.
        if (typeof window !== 'undefined' && (window as any).simplemaps_usmap) {
            try {
                (window as any).simplemaps_usmap.load();
            } catch (e) {
                console.error("Error loading map:", e);
            }
        }
    }, []);

    useEffect(() => {
        if (typeof window === 'undefined' || !sectionRef.current) return;

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        const updateScrollDirection = () => {
            const currentY = window.scrollY;
            isScrollingDownRef.current = currentY > lastScrollYRef.current;
            lastScrollYRef.current = currentY;
        };

        lastScrollYRef.current = window.scrollY;
        window.addEventListener('scroll', updateScrollDirection, { passive: true });

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry || hasAutoCenteredRef.current || !isScrollingDownRef.current) return;

                // Trigger when the user reaches the upper half of the map section.
                if (entry.isIntersecting && entry.intersectionRatio >= 0.35) {
                    hasAutoCenteredRef.current = true;
                    sectionRef.current?.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center',
                    });
                }
            },
            {
                threshold: [0.35, 0.5],
                rootMargin: '-10% 0px -15% 0px',
            }
        );

        observer.observe(sectionRef.current);

        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', updateScrollDirection);
        };
    }, []);

    return (
        <section id="forward-map" ref={sectionRef} className="py-10 md:py-14 lg:py-16">
            <div className="mx-auto max-w-5xl px-4 sm:px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        Forward Party Across America
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                        See where the Forward Party is building momentum nationwide.
                    </p>
                </div>
                <div className="flex justify-center">
                    <Script
                        src="https://forwardparty.nationbuilder.com/themes/1/61f5b444c294805d66c8b641/0/attachments/16434926601761604529/default/mapdata041525.js"
                        strategy="afterInteractive"
                    />
                    <Script
                        src="https://forwardparty.nationbuilder.com/themes/1/61f5b444c294805d66c8b641/0/attachments/16434926601714162843/default/usmap.js"
                        strategy="afterInteractive"
                        onLoad={() => {
                            if (typeof window !== 'undefined' && (window as any).simplemaps_usmap) {
                                (window as any).simplemaps_usmap.load();
                            }
                        }}
                    />
                    <div
                        id="map"
                        className="w-full max-w-2xl overflow-x-auto"
                        dangerouslySetInnerHTML={{
                            __html: `
                <div id="map_holder" tabindex="0" style="position: relative; outline: none; width: 552px;">
                  <div id="map_zoom" style="position: absolute; z-index: 1;"></div>
                  <div id="map_outer" style="position: absolute; z-index: 1; display: none; left: 4px; top: 4px;">
                    <svg height="40" version="1.1" width="40" xmlns="http://www.w3.org/2000/svg" style="overflow: hidden; position: relative; left: -0.614594px; top: -0.8125px;">
                      <desc style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">Created with Raphaël 2.1.0</desc>
                      <defs style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></defs>
                      <path fill="#f7f7f7" stroke="#636363" d="M2.158,0.263H7.8420000000000005C8.892000000000001,0.263,9.737,1.108,9.737,2.158V7.8420000000000005C9.737,8.892000000000001,8.892,9.737,7.8420000000000005,9.737H2.1580000000000004C1.1080000000000003,9.737,0.26300000000000034,8.892,0.26300000000000034,7.8420000000000005V2.1580000000000004C0.26300000000000034,1.1080000000000003,1.1080000000000003,0.26300000000000034,2.1580000000000004,0.26300000000000034Z" stroke-width="0.25" stroke-opacity="0" fill-opacity="0" transform="matrix(4,0,0,4,0,0)" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 0; fill-opacity: 0; cursor: pointer; display: none;"></path>
                      <path fill="#f7f7f7" stroke="#636363" d="M7.07,8.721C9.944,7.386,9.08,2.9590000000000005,4.720000000000001,3.0600000000000005V1.2820000000000005L1.2750000000000008,3.9760000000000004L4.720000000000001,6.819000000000001V5.001000000000001C8.358,4.925000000000002,8.192,7.803000000000001,7.07,8.722000000000001Z" stroke-width="0.375" stroke-opacity="1" fill-opacity="1" transform="matrix(4,0,0,4,0,0)" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1; fill-opacity: 1; cursor: pointer; display: none;"></path>
                    </svg>
                  </div>
                  <div id="map_access" style="position: absolute; max-width: 75%; z-index: 1; display: none; right: 0em; top: 0em;">
                    <select style="margin-right: 0.5em; margin-top: 0.5em; float: left;">
                      <option value="-1">Navigate</option>
                      <option value="back">Back</option>
                    </select>
                    <select style="margin-right: 0.5em; margin-top: 0.5em; float: left;">
                      <option value="-1">States</option>
                      <option value="AL">Alabama</option><option value="AK">Alaska</option><option value="AZ">Arizona</option><option value="AR">Arkansas</option><option value="CA">California</option><option value="CO">Colorado</option><option value="CT">Connecticut</option><option value="DE">Delaware</option><option value="DC">District of Columbia</option><option value="FL">Florida</option><option value="GA">Georgia</option><option value="HI">Hawaii</option><option value="ID">Idaho</option><option value="IL">Illinois</option><option value="IN">Indiana</option><option value="IA">Iowa</option><option value="KS">Kansas</option><option value="KY">Kentucky</option><option value="LA">Louisiana</option><option value="ME">Maine</option><option value="MD">Maryland</option><option value="MA">Massachusetts</option><option value="MI">Michigan</option><option value="MN">Minnesota</option><option value="MS">Mississippi</option><option value="MO">Missouri</option><option value="MT">Montana</option><option value="NE">Nebraska</option><option value="NV">Nevada</option><option value="NH">New Hampshire</option><option value="NJ">New Jersey</option><option value="NM">New Mexico</option><option value="NY">New York</option><option value="NC">North Carolina</option><option value="ND">North Dakota</option><option value="OH">Ohio</option><option value="OK">Oklahoma</option><option value="OR">Oregon</option><option value="PA">Pennsylvania</option><option value="RI">Rhode Island</option><option value="SC">South Carolina</option><option value="SD">South Dakota</option><option value="TN">Tennessee</option><option value="TX">Texas</option><option value="UT">Utah</option><option value="VT">Vermont</option><option value="VA">Virginia</option><option value="WA">Washington</option><option value="WV">West Virginia</option><option value="WI">Wisconsin</option><option value="WY">Wyoming</option>
                    </select>
                  </div>
                  <div id="map_inner" style="position: relative; height: 340.032px;"></div>
                </div>
              `,
                        }}
                    />
                </div>
            </div>
        </section>
    );
}

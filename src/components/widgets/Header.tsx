'use client';

import { useRef, useState } from 'react';
import { IconRss } from '@tabler/icons-react';
import { useOnClickOutside } from '~/hooks/useOnClickOutside';
// ToggleDarkMode import removed
import Link from 'next/link';
import Logo from '~/components/atoms/Logo';
import ToggleMenu from '../atoms/ToggleMenu';
import { headerData } from '~/shared/data/global.data';
import CTA from '../common/CTA';
import { CallToActionType } from '~/shared/types';

const Header = () => {
  const { links, actions, position, showRssFeed } = headerData;

  const ref = useRef(null);

  const updatedIsDropdownOpen =
    links &&
    links.map(() => {
      return false;
    });

  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean[]>(updatedIsDropdownOpen as boolean[]);
  const [isToggleMenuOpen, setIsToggleMenuOpen] = useState<boolean>(false);

  const handleDropdownOnClick = (index: number) => {
    setIsDropdownOpen((prevValues) => {
      const newValues = [...(prevValues as boolean[])];
      newValues.forEach((value, i) => {
        if (value === true) {
          newValues[i] = false;
        } else {
          newValues[i] = i === index;
        }
      });
      return newValues;
    });
  };

  const handleCloseDropdownOnClick = (index: number) => {
    setIsDropdownOpen((prevValues) => {
      const newValues = [...(prevValues as boolean[])];
      newValues[index] = false;
      return newValues;
    });
  };

  const handleToggleMenuOnClick = () => {
    setIsToggleMenuOpen(!isToggleMenuOpen);
  };

  useOnClickOutside(ref, () => {
    setIsDropdownOpen(updatedIsDropdownOpen as boolean[]);
  });

  return (
    <header
      className={`
        /* Positioning: Floating & Centered */
        fixed top-6 left-1/2 z-40 -translate-x-1/2
        
        /* Sizing & Spacing */
        mx-auto w-[95%] md:w-auto md:max-w-5xl flex-none 
        
        /* Visuals: Glassmorphism, Borders, Shadows */
        bg-white/80 dark:bg-slate-900/80 backdrop-blur-md 
        border border-gray-200/50 dark:border-slate-700/50 
        shadow-2xl

        /* Shape Logic: Pill by default, Rounded Card if mobile menu is open */
        ${isToggleMenuOpen ? 'h-[80vh] rounded-3xl overflow-y-auto' : 'h-auto rounded-full'}
      `}
      id="header"
    >
      <div className="mx-auto w-full px-4 md:flex md:justify-between md:items-center md:py-2">
        
        {/* Logo Section */}
        <div className={`flex justify-between py-3 md:py-0 ${isToggleMenuOpen ? '' : ''}`}>
          <Link
            className="flex items-center"
            href="/"
            onClick={() =>
              isToggleMenuOpen ? handleToggleMenuOnClick() : setIsDropdownOpen(updatedIsDropdownOpen as boolean[])
            }
          >
            <Logo />
          </Link>
          <div className="flex items-center md:hidden">
            <ToggleMenu handleToggleMenuOnClick={handleToggleMenuOnClick} isToggleMenuOpen={isToggleMenuOpen} />
          </div>
        </div>

        {/* Navigation Links */}
        <nav
          className={`${isToggleMenuOpen ? 'block' : 'hidden'} w-full md:w-auto ${
            position === 'right' ? 'justify-end' : position === 'left' ? 'justify-start' : 'justify-center'
          } dark:text-slate-200 md:mx-6 md:flex md:items-center`}
          aria-label="Main navigation"
        >
          <ul
            ref={ref}
            className="flex w-full flex-col mt-4 mb-10 md:m-0 text-xl md:w-auto md:flex-row md:items-center md:text-base md:gap-1"
          >
            {links &&
              links.map(({ label, href, icon: Icon, links }, index) => (
                <li key={`item-link-${index}`} className={links?.length ? 'dropdown relative' : 'relative'}>
                  {links && links.length ? (
                    <>
                      <button
                        className="flex items-center px-5 py-2 font-medium transition duration-150 ease-in-out hover:bg-gray-100 dark:hover:bg-slate-800 rounded-full text-gray-700 dark:text-slate-200"
                        onClick={() => handleDropdownOnClick(index)}
                      >
                        {label}{' '}
                        {Icon && (
                          <Icon
                            className={`${
                              isDropdownOpen[index] ? 'rotate-180' : ''
                            } ml-0.5 rtl:ml-0 rtl:mr-0.5 hidden h-3.5 w-3.5 md:inline`}
                          />
                        )}
                      </button>
                      <ul
                        className={`${
                          isDropdownOpen[index] ? 'block' : 'md:hidden'
                        } rounded-xl pl-4 font-medium drop-shadow-xl md:absolute md:top-full md:left-0 md:min-w-[200px] md:bg-white/90 md:pl-0 md:backdrop-blur-md dark:md:bg-slate-900/90 md:border md:border-gray-200 md:dark:border-slate-700 mt-2`}
                      >
                        {links.map(({ label: label2, href: href2 }, index2) => (
                          <li key={`item-link-${index2}`}>
                            <Link
                              className="whitespace-no-wrap block py-2 px-5 first:rounded-t-xl last:rounded-b-xl dark:hover:bg-gray-700 md:hover:bg-gray-100"
                              href={href2 as string}
                              onClick={() =>
                                isToggleMenuOpen ? handleToggleMenuOnClick() : handleCloseDropdownOnClick(index)
                              }
                            >
                              {label2}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      className="flex items-center px-5 py-2 font-medium transition duration-150 ease-in-out hover:bg-gray-100 dark:hover:bg-slate-800 rounded-full text-gray-700 dark:text-slate-200"
                      href={href as string}
                      onClick={() => (isToggleMenuOpen ? handleToggleMenuOnClick() : handleDropdownOnClick(index))}
                    >
                      {label}
                    </Link>
                  )}
                </li>
              ))}
          </ul>
        </nav>

        {/* Right Side Actions (Theme, RSS, CTA) */}
        <div
          className={`${
            isToggleMenuOpen ? 'block' : 'hidden'
          } w-full justify-end p-3 md:flex md:w-auto md:self-center md:p-0`}
        >
          <div className="flex w-full items-center justify-between md:w-auto md:gap-2">
            {/* ToggleDarkMode removed from here */}
            {showRssFeed && (
              <Link
                className="text-muted inline-flex items-center rounded-full p-2.5 text-sm hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                aria-label="RSS Feed"
                href=""
              >
                <IconRss className="h-5 w-5" />
              </Link>
            )}
            {actions && actions.length > 0 && (
              <div className="ml-4 rtl:ml-0 rtl:mr-4 flex w-max flex-wrap justify-end">
                {actions.map((callToAction, index) => (
                  <CTA
                    key={`item-action-${index}`}
                    callToAction={callToAction as CallToActionType}
                    linkClass="btn btn-primary py-2 px-5 text-sm font-semibold shadow-none md:px-6"
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
import type { Metadata } from 'next';

import Image from 'next/image';

import { findLatestNews } from '~/utils/news';

export const metadata: Metadata = {
  title: 'News',
};

export default async function NewsList({}) {
  const news = await findLatestNews();
  return (
    <section className="mx-auto max-w-3xl px-6 pt-20 pb-12 sm:px-6 sm:pt-24 sm:pb-16 lg:pt-28 lg:pb-20">
      <header>
        <h1 className="leading-tighter font-heading mb-8 text-center text-4xl font-bold tracking-tighter md:mb-16 md:text-5xl">
          News
        </h1>
      </header>
      <div className="flex flex-col gap-8 p-4 md:p-0">
        {news.map(({ slug, title, image, description }: { slug: string, title: string, image: string, description: string }) => (
          <div key={slug} className="flex flex-col sm:flex-row overflow-hidden rounded-xl border border-slate-200 shadow-lg dark:border-slate-800">
            <div className="sm:w-1/3 md:w-2/5 flex-shrink-0">
              <Image width={650} height={340} alt={title} src={`${image}`} className="h-full w-full object-cover" />
            </div>
            <div className="flex flex-col justify-center p-6 sm:w-2/3 md:w-3/5">
              <h2 className="mb-3 text-xl font-bold">{title}</h2>
              {description && <p className="text-slate-600 dark:text-slate-400">{description}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

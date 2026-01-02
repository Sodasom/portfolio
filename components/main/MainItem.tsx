import Image from "next/image";
import Link from "next/link";

import MainLinkIcon from "@/assets/icons/MainLinkIcon";

export interface MainItemProps {
  id: number;
  title: string;
  subTitle: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  caption?: string;
}

export default function MainItem({
  title,
  subTitle,
  href,
  imageSrc,
  imageAlt,
  caption,
}: MainItemProps) {
  return (
    <section className="group flex w-full items-end justify-between gap-10 px-8 py-10 lg:px-10">
      <div className="flex flex-col">
        <p className="text-xs tracking-widest text-neutral-900">{title}</p>
        <h2 className="mt-1 text-2xl font-bold text-neutral-950">{subTitle}</h2>
        <Link
          href={`/${href}`}
          aria-label={`${title} 페이지 이동`}
          className="mt-6 inline-flex rounded-full text-base-gray transition group-hover:text-point-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-point-blue focus-visible:ring-offset-2"
        >
          <MainLinkIcon />
        </Link>
      </div>
      <div className="relative w-105 max-w-[52%] shrink-0">
        {caption && (
          <p className="pointer-events-none absolute -top-3 right-6 rotate-[-10deg] font-ownglyph text-xs text-neutral-900">
            {caption}
          </p>
        )}
        <Image
          width={360}
          height={360}
          src={`/images/main/${imageSrc}.png`}
          alt={imageAlt}
          className="h-auto w-full object-contain"
          priority={title === "ABOUT"}
        />
      </div>
    </section>
  );
}

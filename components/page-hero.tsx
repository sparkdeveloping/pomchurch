import Image from "next/image";
import { Reveal } from "./reveal";

export function PageHero({
  eyebrow,
  title,
  copy,
  image,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  image?: string;
}) {
  return (
    <section className="relative min-h-[70svh] overflow-hidden bg-[#101010] px-5 pb-12 pt-36 text-white md:px-8 lg:px-12 lg:pb-16 lg:pt-44">
      {image && <Image src={image} alt="" fill priority className="object-cover opacity-35" sizes="100vw" />}
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/15" />
      <div className="relative mx-auto flex min-h-[52svh] max-w-[1600px] flex-col justify-between">
        <Reveal><p className="eyebrow !text-white/60">{eyebrow}</p></Reveal>
        <div className="grid items-end gap-8 lg:grid-cols-[1.45fr_.55fr]">
          <Reveal>
            <h1 className="max-w-[1150px] text-[17vw] font-black uppercase leading-[0.72] tracking-[-0.085em] md:text-[12vw] lg:text-[9.7vw]">{title}</h1>
          </Reveal>
          <Reveal delay={0.1}><p className="max-w-md text-sm leading-6 text-white/70 md:text-base">{copy}</p></Reveal>
        </div>
      </div>
    </section>
  );
}

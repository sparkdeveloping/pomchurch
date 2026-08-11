import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-[#101010] px-5 py-16 text-white md:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid gap-12 border-b border-white/15 pb-16 md:grid-cols-2 lg:grid-cols-[1.4fr_.6fr_.6fr_.6fr]">
          <div className="text-[13vw] font-black uppercase leading-[0.72] tracking-[-0.08em] md:text-[8vw] lg:text-[5.7vw]">
            Life gets<br /><span className="text-[#ff4f32]">better here.</span>
          </div>
          <div className="space-y-4 text-sm text-white/70">
            <p className="eyebrow !text-white/40">Visit</p>
            <p>{site.serviceTime}</p>
            <p>530 Richards Dr.<br />Manhattan, KS 66502</p>
            <a className="inline-block text-white underline decoration-white/30 underline-offset-4" href={site.maps} target="_blank" rel="noreferrer">Get directions ↗</a>
          </div>
          <div className="space-y-3 text-sm text-white/70">
            <p className="eyebrow !text-white/40">Connect</p>
            <Link className="block hover:text-white" href="/connect">Ministries</Link>
            <Link className="block hover:text-white" href="/visit">Plan a visit</Link>
            <Link className="block hover:text-white" href="/contact">Prayer & contact</Link>
            <Link className="block hover:text-white" href="/events">Events</Link>
          </div>
          <div className="space-y-3 text-sm text-white/70">
            <p className="eyebrow !text-white/40">Online</p>
            <a className="block hover:text-white" href={site.instagram} target="_blank" rel="noreferrer">Instagram ↗</a>
            <a className="block hover:text-white" href={site.facebook} target="_blank" rel="noreferrer">Facebook ↗</a>
            <a className="block hover:text-white" href={`mailto:${site.email}`}>{site.email}</a>
            <a className="block hover:text-white" href={site.phoneHref}>{site.phone}</a>
          </div>
        </div>
        <div className="flex flex-col gap-4 pt-6 text-[9px] font-bold uppercase tracking-[0.12em] text-white/35 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} The Pentecostals of Manhattan</p>
          <div className="flex gap-5"><Link href="/privacy">Privacy</Link><span>Manhattan, Kansas</span></div>
        </div>
      </div>
    </footer>
  );
}

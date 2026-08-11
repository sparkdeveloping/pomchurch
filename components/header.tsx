"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled || open
            ? "border-b border-black/10 bg-[#f5f0e8]/90 text-[#101010] backdrop-blur-xl"
            : "text-white"
        }`}
      >
        <div className="mx-auto flex h-[82px] max-w-[1600px] items-center justify-between px-5 md:px-8 lg:px-12">
          <Link href="/" className="group flex items-center gap-3" aria-label={`${site.name} home`}>
            <Image src="/mark.svg" width={38} height={38} alt="" priority />
            <div className="leading-none">
              <div className="text-[13px] font-black uppercase tracking-[-0.02em] md:text-[15px]">The Pentecostals</div>
              <div className="mt-1 text-[9px] font-bold uppercase tracking-[0.19em] opacity-65">of Manhattan · Kansas</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[11px] font-extrabold uppercase tracking-[0.12em] transition-opacity hover:opacity-55 ${
                  pathname === item.href ? "opacity-55" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/visit"
              className="hidden rounded-full border border-current px-5 py-3 text-[10px] font-black uppercase tracking-[0.12em] transition hover:bg-[#ff4f32] hover:text-white md:block"
            >
              Plan your Sunday ↗
            </Link>
            <button
              type="button"
              className="grid h-11 w-11 place-items-center rounded-full border border-current lg:hidden"
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
            >
              <span className="relative h-4 w-5">
                <span className={`absolute left-0 top-1 h-px w-5 bg-current transition ${open ? "translate-y-[3px] rotate-45" : ""}`} />
                <span className={`absolute bottom-1 left-0 h-px w-5 bg-current transition ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#f5f0e8] px-5 pb-8 pt-28 text-[#101010]"
          >
            <nav className="flex flex-col border-t border-black/15">
              {nav.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 * index }}
                >
                  <Link href={item.href} className="flex items-center justify-between border-b border-black/15 py-4 text-[11vw] font-black uppercase leading-[0.9] tracking-[-0.06em]">
                    {item.label}<span className="text-base font-normal">↗</span>
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="absolute bottom-8 left-5 right-5 flex justify-between gap-5 text-[10px] font-bold uppercase tracking-[0.12em] opacity-60">
              <span>Sunday · 10:30 AM</span><span className="text-right">530 Richards Dr.<br />Manhattan, KS</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

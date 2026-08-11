import Link from "next/link";
export default function NotFound(){return <main className="grid min-h-screen place-items-center bg-[#101010] px-5 text-white"><div><p className="eyebrow !text-white/40">404</p><h1 className="mt-6 text-[18vw] font-black uppercase leading-[.7] tracking-[-.09em]">Wrong turn.</h1><Link href="/" className="button button-accent mt-10">Back home ↗</Link></div></main>}

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { ministries, site } from "@/lib/site";

export default function Home() {
  return <main>
    <section className="noise relative min-h-[100svh] overflow-hidden bg-[#101010] px-5 pb-8 pt-28 text-white md:px-8 lg:px-12">
      <Image src="/images/community-wide.jpg" alt="The POM church family together" fill priority className="object-cover object-center opacity-45" sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-black/70" />
      <div className="relative mx-auto flex min-h-[calc(100svh-7rem)] max-w-[1600px] flex-col justify-between">
        <div className="grid gap-4 pt-8 text-[10px] font-black uppercase tracking-[.14em] text-white/70 md:grid-cols-2">
          <p>The Pentecostals of Manhattan</p><p className="md:text-right">Manhattan, Kansas · Sunday 10:30 AM</p>
        </div>
        <div className="pb-4">
          <h1 className="display"><span className="block">Life gets</span><span className="block md:pl-[8vw]">better here.</span></h1>
          <div className="mt-8 flex flex-col gap-6 border-t border-white/30 pt-6 md:flex-row md:items-end md:justify-between">
            <p className="max-w-md text-sm leading-6 text-white/75">A practical, powerful, biblical church where people meet Jesus, find family, and step into purpose.</p>
            <div className="flex flex-wrap gap-3"><Link href="/visit" className="button button-accent">Plan your Sunday ↗</Link><Link href="/watch" className="button text-white">Watch a service ↗</Link></div>
          </div>
        </div>
      </div>
    </section>

    <section className="overflow-hidden border-b border-black/15 bg-[#ff4f32] py-4 text-white">
      <div className="whitespace-nowrap text-[clamp(28px,4vw,66px)] font-black uppercase tracking-[-.055em]">Connect · Experience · Empower · Connect · Experience · Empower · Connect · Experience · Empower ·</div>
    </section>

    <section className="section"><div className="shell grid gap-14 lg:grid-cols-[1.15fr_.85fr] lg:gap-24">
      <Reveal><h2 className="big-heading">More than a service. A people <span className="text-[#ff4f32]">becoming new.</span></h2></Reveal>
      <Reveal delay={.08} className="lg:pt-4"><p className="eyebrow mb-6">This is POM</p><p className="copy">The Pentecostals of Manhattan exists to connect with people, experience Jesus and the Holy Ghost, and empower people to live their Kingdom purpose. Church is not something we simply attend. It is a family we become part of.</p><Link href="/about" className="button mt-8">Our story ↗</Link></Reveal>
      <div className="lg:col-span-2 grid gap-3 md:grid-cols-3">
        {["/images/welcome-team.jpg","/images/worship.jpg","/images/community-couple.jpg"].map((src, i)=><Reveal key={src} delay={i*.06}><div className={`relative overflow-hidden ${i===1?"aspect-[4/5] md:-translate-y-10":"aspect-[4/5]"}`}><Image src={src} alt="POM church community" fill className="object-cover transition duration-700 hover:scale-[1.03]" sizes="(max-width:768px) 100vw, 33vw" /></div></Reveal>)}
      </div>
    </div></section>

    <section className="section bg-[#101010] text-white"><div className="shell"><p className="eyebrow !text-white/45 mb-10">Our mission</p><Reveal><h2 className="big-heading max-w-5xl">A simple rhythm for a life changed by Jesus.</h2></Reveal><div className="mt-16 grid border-t border-white/20 lg:grid-cols-3">
      {[["01 / People","Connect.","Real relationships. Real community. A church family that knows your name and walks with you beyond Sunday."],["02 / Jesus","Experience.","Spirit-filled worship and biblical preaching with room for a genuine encounter with Jesus Christ."],["03 / Purpose","Empower.","Grow as a disciple, discover what God has placed in you, and put your faith to work in everyday life."]].map(([k,t,b],i)=><Reveal key={t} delay={i*.08}><article className="min-h-[360px] border-b border-white/20 py-8 lg:border-b-0 lg:border-r lg:px-8 first:pl-0 last:border-r-0"><p className="eyebrow !text-white/40">{k}</p><div className="mt-28"><h3 className="text-6xl font-black uppercase tracking-[-.06em]">{t}</h3><p className="mt-5 max-w-sm text-sm leading-6 text-white/60">{b}</p></div></article></Reveal>)}
    </div></div></section>

    <section className="section"><div className="shell"><div className="grid gap-8 lg:grid-cols-[.55fr_1.45fr]"><p className="eyebrow">There is a place for you</p><Reveal><h2 className="big-heading">Life happens together.</h2></Reveal></div><div className="mt-16 grid gap-3 md:grid-cols-2 lg:grid-cols-3">{ministries.slice(0,6).map((m,i)=><Reveal key={m.title} delay={(i%3)*.05}><Link href="/connect" className="group relative block aspect-[4/5] overflow-hidden bg-black text-white"><Image src={m.image} alt="" fill className="object-cover opacity-75 transition duration-700 group-hover:scale-[1.04] group-hover:opacity-60" sizes="(max-width:768px)100vw,33vw"/><div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"/><div className="absolute inset-x-0 bottom-0 p-6"><p className="eyebrow !text-white/55">{m.kicker}</p><div className="mt-2 flex items-end justify-between gap-4"><h3 className="text-4xl font-black uppercase tracking-[-.05em]">{m.title}</h3><span>↗</span></div></div></Link></Reveal>)}</div></div></section>

    <section className="section !pt-0"><div className="shell"><a href={site.recentMessage} target="_blank" rel="noreferrer" className="group grid overflow-hidden bg-[#151515] text-white lg:grid-cols-[1.1fr_.9fr]"><div className="relative min-h-[55vw] lg:min-h-[620px]"><Image src="/images/worship-women.jpg" alt="Worship at POM" fill className="object-cover transition duration-700 group-hover:scale-[1.025]" sizes="(max-width:1024px)100vw,55vw" /></div><div className="flex flex-col justify-between gap-20 p-7 md:p-12"><div><p className="eyebrow !text-white/45">Recent message</p><h2 className="mt-6 text-[clamp(48px,7vw,108px)] font-black uppercase leading-[.8] tracking-[-.07em]">Hear the Word.</h2><p className="mt-7 max-w-md text-sm leading-6 text-white/60">Practical, powerful, life-changing teaching from The Pentecostals of Manhattan.</p></div><div className="flex items-center justify-between border-t border-white/20 pt-6"><span className="text-4xl">▶</span><span className="button text-white">Watch now ↗</span></div></div></a></div></section>

    <section className="section bg-[#e9e2d7]"><div className="shell grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center"><Reveal><div className="relative aspect-[4/5]"><Image src="/images/pastors.jpg" alt="Pastors Landon and Katlyn Dillon" fill className="object-cover" sizes="(max-width:1024px)100vw,45vw" /></div></Reveal><Reveal delay={.08}><p className="eyebrow mb-6">Meet the pastors</p><h2 className="big-heading">Landon + Katlyn Dillon.</h2><p className="copy mt-8 max-w-2xl">Landon and Katlyn moved to Manhattan in 2023 to plant The Pentecostals of Manhattan. Their ministry has included Bible teaching, campus ministry, youth ministry, and serving people from every background.</p><Link className="button mt-8" href="/about">Meet POM ↗</Link></Reveal></div></section>

    <section className="section bg-[#ff4f32] text-white"><div className="shell grid gap-12 lg:grid-cols-[1.4fr_.6fr] lg:items-end"><Reveal><h2 className="text-[18vw] font-black uppercase leading-[.7] tracking-[-.09em] lg:text-[11vw]">Your Sunday starts here.</h2></Reveal><Reveal delay={.08}><p className="text-5xl font-black tracking-[-.05em]">10:30 AM</p><p className="mt-5 text-sm leading-6 text-white/75">530 Richards Dr., Manhattan, KS 66502. Friendly people, casual dress, vibrant worship, and a practical biblical message.</p><Link href="/visit" className="button mt-7 text-white">Plan your visit ↗</Link></Reveal></div></section>
  </main>;
}

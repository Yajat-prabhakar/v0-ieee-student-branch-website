'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef, useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

const EVENTS = [
  {
    id: '01', date: 'January 2026', title: 'Inauguration',
    description: 'IEEE BVIMR Student Branch was officially established at Bharati Vidyapeeth Institute of Management and Research, New Delhi, under IEEE Region 10 (Asia Pacific) — inaugurated in a ceremony attended by faculty, Delhi Section members, and the founding student council.',
    images: [
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1280&h=720&fit=crop&auto=format&q=75',
      'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=800&fit=crop&auto=format&q=75',
      'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=800&h=800&fit=crop&auto=format&q=75',
      'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1280&h=720&fit=crop&auto=format&q=75',
      'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=800&fit=crop&auto=format&q=75',
      'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1280&h=720&fit=crop&auto=format&q=75',
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=800&fit=crop&auto=format&q=75',
    ],
  },
  {
    id: '02', date: 'January 2026', title: 'Membership Drive',
    description: 'With the branch newly established, we launched our first membership drive — welcoming students from across BVIMR into the IEEE family and sparking conversations about engineering, technology, and the power of a global professional network.',
    images: [
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1280&h=720&fit=crop&auto=format&q=75',
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=800&fit=crop&auto=format&q=75',
      'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=800&fit=crop&auto=format&q=75',
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1280&h=720&fit=crop&auto=format&q=75',
      'https://images.unsplash.com/photo-1528605105345-5344ea20e269?w=800&h=800&fit=crop&auto=format&q=75',
      'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1280&h=720&fit=crop&auto=format&q=75',
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=800&fit=crop&auto=format&q=75',
    ],
  },
  {
    id: '03', date: 'February 2026', title: "DSSYWLC'25",
    description: "Our members debuted on the IEEE stage at the Delhi Section Student, Young Professionals, WIE & Life Members Congress — representing BVIMR alongside students and professionals from across the Delhi Section.",
    images: [
      'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=1280&h=720&fit=crop&auto=format&q=75',
      'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=800&fit=crop&auto=format&q=75',
      'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=800&fit=crop&auto=format&q=75',
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1280&h=720&fit=crop&auto=format&q=75',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=800&fit=crop&auto=format&q=75',
      'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=1280&h=720&fit=crop&auto=format&q=75',
      'https://images.unsplash.com/photo-1560439514-4e9645039924?w=800&h=800&fit=crop&auto=format&q=75',
    ],
  },
  {
    id: '04', date: 'February 2026', title: 'India AI Expo Summit',
    description: 'IEEE BVIMR members attended the India AI Expo Summit — from live demos to expert panels on cutting-edge AI — returning inspired to build, experiment, and innovate at the intersection of technology and real-world impact.',
    images: [
      'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1280&h=720&fit=crop&auto=format&q=75',
      'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=800&fit=crop&auto=format&q=75',
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=800&fit=crop&auto=format&q=75',
      'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1280&h=720&fit=crop&auto=format&q=75',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=800&fit=crop&auto=format&q=75',
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1280&h=720&fit=crop&auto=format&q=75',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=800&fit=crop&auto=format&q=75',
    ],
  },
  {
    id: '05', date: 'March 2026', title: 'WIE Affinity Group Officialized',
    description: 'A landmark moment — the IEEE Women in Engineering Affinity Group was officially recognized under our branch, providing a dedicated platform for women to lead, connect, and inspire the next generation of engineers in tech.',
    images: [
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1280&h=720&fit=crop&auto=format&q=75',
      'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&h=800&fit=crop&auto=format&q=75',
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=800&fit=crop&auto=format&q=75',
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1280&h=720&fit=crop&auto=format&q=75',
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=800&fit=crop&auto=format&q=75',
      'https://images.unsplash.com/photo-1488716820095-cbe80883c496?w=1280&h=720&fit=crop&auto=format&q=75',
      'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&h=800&fit=crop&auto=format&q=75',
    ],
  },
];

const IMAGE_POSITIONS = [
  '',
  '[&>div]:!-top-[30vh] [&>div]:!left-[5vw] [&>div]:!h-[30vh] [&>div]:!w-[35vw]',
  '[&>div]:!-top-[10vh] [&>div]:!-left-[25vw] [&>div]:!h-[45vh] [&>div]:!w-[20vw]',
  '[&>div]:!left-[27.5vw] [&>div]:!h-[25vh] [&>div]:!w-[25vw]',
  '[&>div]:!top-[27.5vh] [&>div]:!left-[5vw] [&>div]:!h-[25vh] [&>div]:!w-[20vw]',
  '[&>div]:!top-[27.5vh] [&>div]:!-left-[22.5vw] [&>div]:!h-[25vh] [&>div]:!w-[30vw]',
  '[&>div]:!top-[22.5vh] [&>div]:!left-[25vw] [&>div]:!h-[15vh] [&>div]:!w-[15vw]',
];

const SCALES_MAX = [4, 5, 6, 5, 6, 8, 9];

function EventSection({ event }: { event: typeof EVENTS[0] }) {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  const scales = SCALES_MAX.map(max =>
    useTransform(scrollYProgress, [0, 1], [1, max])
  );

  const chapterOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);
  const overlayOpacity = useTransform(scrollYProgress, [0.35, 0.58], [0, 1]);
  const textOpacity    = useTransform(scrollYProgress, [0.50, 0.70], [0, 1]);
  const textY          = useTransform(scrollYProgress, [0.50, 0.70], [20, 0]);

  return (
    <div ref={container} className="relative h-[200vh]">
      <div className="sticky top-0 h-screen overflow-hidden bg-[#030a14]">

        {/* Chapter number watermark */}
        <motion.div
          style={{ opacity: chapterOpacity }}
          className="pointer-events-none absolute inset-0 flex items-center justify-content z-[2] select-none"
        >
          <span className="w-full text-center text-[32vw] font-black leading-none text-[rgba(0,180,216,0.05)]">
            {event.id}
          </span>
        </motion.div>

        {/* Event badge (top-left) */}
        <motion.div
          style={{ opacity: chapterOpacity }}
          className="absolute top-5 left-5 z-[70] flex items-center gap-2"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-full border border-[rgba(0,180,216,0.35)] bg-[rgba(0,180,216,0.12)] text-[8px] font-bold text-[#00b4d8]">
            {event.id}
          </div>
          <span className="text-[8px] tracking-[0.22em] uppercase text-white/25">{event.date}</span>
        </motion.div>

        {/* Zooming images */}
        {event.images.map((src, i) => (
          <motion.div
            key={i}
            style={{ scale: scales[i % scales.length] }}
            className={`absolute inset-0 flex h-full w-full items-center justify-center ${IMAGE_POSITIONS[i] ?? ''}`}
          >
            <div className="relative h-[25vh] w-[25vw] overflow-hidden rounded-sm">
              <img
                src={src}
                alt={`${event.title} ${i + 1}`}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        ))}

        {/* Dark gradient overlay */}
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="pointer-events-none absolute inset-0 z-50"
          style={{
            opacity: overlayOpacity,
            background: 'linear-gradient(to top, rgba(3,10,20,0.97) 0%, rgba(3,10,20,0.55) 38%, transparent 65%)',
          }}
        />

        {/* Text reveal */}
        <motion.div
          style={{ opacity: textOpacity, y: textY }}
          className="absolute bottom-0 left-0 right-0 z-[60] px-10 pb-10 md:px-16 md:pb-12"
        >
          <p className="mb-2 text-[9px] font-semibold tracking-[0.28em] uppercase text-[#00b4d8]">
            {event.date}
          </p>
          <h2 className="mb-3 text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl">
            {event.title}
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-white/50">
            {event.description}
          </p>
        </motion.div>

      </div>
    </div>
  );
}

export function OurJourney() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <section className="bg-[#040c18]">
      {/* Header */}
      <div className="flex h-screen flex-col items-center justify-center text-center">
        <p className="mb-3 text-[9px] tracking-[0.32em] uppercase text-[#00b4d8]">
          IEEE BVIMR Student Branch
        </p>
        <h1 className="mb-4 text-6xl font-extrabold tracking-tight text-white md:text-8xl">
          Our <span className="text-[#00b4d8]">Journey</span>
        </h1>
        <p className="max-w-sm text-sm leading-relaxed text-white/35">
          From inauguration to impact — the milestones that defined us.
        </p>
      </div>

      {/* Event chapters */}
      {EVENTS.map(ev => <EventSection key={ev.id} event={ev} />)}

      {/* Future Forward */}
      <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[rgba(0,180,216,0.28)] px-4 py-1.5 text-[9px] tracking-[0.22em] uppercase text-[#00b4d8]">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#00b4d8]" />
          What lies ahead
        </div>
        <h2 className="mb-3 text-5xl font-black tracking-tight text-white md:text-7xl">
          Building Tomorrow
        </h2>
        <p className="mb-8 max-w-md text-sm leading-relaxed text-white/40">
          With a growing council, planned technical workshops, and upcoming chapters in WIE and Computer Society, IEEE BVIMR is charting an ambitious roadmap to become a leading student branch in the Delhi Section.
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {['⚡ Technical Workshops', '◈ WIE Affinity Group', '◉ Computer Society', '⊕ Global Connections', '▲ Hackathons'].map(c => (
            <span key={c} className="rounded-md border border-[rgba(0,180,216,0.16)] bg-[rgba(0,180,216,0.05)] px-3 py-1.5 text-xs text-white/55">
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

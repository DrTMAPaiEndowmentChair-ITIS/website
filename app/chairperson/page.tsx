import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Bezel, FigCaption, Kicker, Section, SectionHeader } from "@/components/ui/section";
import { CareerTimeline, type TimelineLane } from "@/components/viz/career-timeline";
import { UnitChart } from "@/components/viz/unit-chart";
import {
  GlobeIcon,
  Building01Icon,
  UserGroupIcon,
  ClockIcon,
  FlashIcon,
  DollarCircleIcon,
  ComputerIcon,
  HeartCheckIcon,
  Video01Icon,
  ChipIcon,
  Wifi01Icon,
  Location01Icon,
  AnalyticsUpIcon,
  CloudIcon,
  ArrowRight01Icon,
  Mail01Icon,
} from "@/components/icons";

export const metadata = {
  title: "Dr. Manohara Pai MM | Chair Professor | Dr. TMA Pai Endowment Chair",
  description:
    "Profile of Dr. Manohara Pai MM, Senior Professor at MIT Manipal with 33+ years in teaching, research, and administration.",
};

const heroStats = [
  { value: "33+", label: "Years Experience" },
  { value: "10", label: "Patents Granted" },
  { value: "156", label: "Publications" },
  { value: "14", label: "PhD Scholars" },
];

const patentsAndAwards = [
  {
    image: "/chairperson/patents/NTTA.jpg",
    caption: "National Technical Teachers Award (NTTA 2022)",
  },
  {
    image: "/chairperson/patents/MPAward.jpg",
    caption: "National Technical Best Teacher award from AICTE",
  },
  { image: "/chairperson/patents/newscoverage.jpg", caption: "News coverage of the NTTA award" },
  {
    image: "/chairperson/patents/InnovationPioneers.jpg",
    caption: "Innovation mentoring award from Minister of Science and Technology",
  },
  {
    image: "/chairperson/patents/AustinTX.jpg",
    caption: "Infodev Business Incubation Training, Texas Austin (2010-2011)",
  },
  {
    image: "/chairperson/patents/USPatent1.jpg",
    caption: "US Patent: Adaptive Routing in Wireless Networks",
  },
  {
    image: "/chairperson/patents/USPatent2.jpg",
    caption: "US Patent: Image Processing and Analysis",
  },
  { image: "/chairperson/patents/JapanesePatent.jpg", caption: "Japanese Patent" },
  {
    image: "/chairperson/patents/Patent-OpticalFiber.jpg",
    caption: "Patent: Optical Fiber Inserter Technology",
  },
  {
    image: "/chairperson/patents/diabetic-ulcer.jpg",
    caption: "Indian Patent: Diabetic Ulcer Detection",
  },
  {
    image: "/chairperson/patents/FootCompl.jpg",
    caption: "Indian Patent: Detection of Foot Complications",
  },
];

type AdminPosition = {
  Icon: typeof ClockIcon;
  title: string;
  period: string;
  points: string[];
  metric?: { label: string; from: number; to: number };
};

const adminPositions: AdminPosition[] = [
  {
    Icon: ClockIcon,
    title: "Associate Director (Research and Consultancy), MIT, MAHE",
    period: "Jan 2017 - Dec 2019",
    metric: { label: "Institute publications", from: 347, to: 770 },
    points: [
      "Enhanced institute publications from 347 to 770",
      "Increased PhD registrations to over 200",
      "Reformed PhD progress monitoring process",
    ],
  },
  {
    Icon: FlashIcon,
    title: "Associate Director (Innovation Center), MIT, MAHE",
    period: "March 2008 - Dec 2016",
    points: [
      "Established Central Instrumentation Facility (inaugurated by Dr. Anil Kakodkar)",
      "Set up Central Computing facility with HPC",
      "Started annual 'Innovation Day' event",
      "Established Technology Business Incubator (Rs.5 Crores grant from DST & MAHE)",
      "Set up Intellectual Property services (50+ patents filed, 10+ granted)",
      "Received innovation award from Minister of S&T",
    ],
  },
  {
    Icon: Building01Icon,
    title: "Head of Department of ICT, MIT, MAHE",
    period: "May 2001 - Jan 2008",
    points: [
      "Established new Department with B.Tech(IT) and MCA programs",
      "Started M.Tech(Computer Networking and Engineering) in 2005",
      "Started M.Tech(Software Engineering) in 2006 with TU Eindhoven",
      "Started annual event 'p.i.n.g'",
      "Organized International Conference ICICOT 07 for MIT's Golden Jubilee",
    ],
  },
  {
    Icon: UserGroupIcon,
    title: "CEO, Manipal University Technology Business Incubator (MUTBI)",
    period: "April 2010 - June 2016",
    points: [
      "Set up MUTBI Society as founder Secretary",
      "Built 16,000 sq. ft. incubation facility for 10 start-ups & 10 pre-incubatees",
      "Created Rs.2 crores corpus as seed support grant",
      "Started 'Provenance' Business plan competition (awards of Rs.10 lakhs)",
      "Industrial Collaboration for Incubation supported by TE-Connectivity",
    ],
  },
];

const researchAreas = [
  { name: "AI & ML", Icon: ComputerIcon },
  { name: "Healthcare Tech", Icon: HeartCheckIcon },
  { name: "Video Processing", Icon: Video01Icon },
  { name: "IIOT", Icon: ChipIcon },
  { name: "Wireless Networks", Icon: Wifi01Icon },
  { name: "GPS & Location", Icon: Location01Icon },
  { name: "Data Analytics", Icon: AnalyticsUpIcon },
  { name: "Cloud Computing", Icon: CloudIcon },
];

const keyAwards = [
  {
    title: "Dr. TMA Pai Endowment Chair",
    subtitle: "Intelligent Technologies, Industry 4.0 and Sustainability",
    year: "2023-2025",
  },
  {
    title: "National Technical Teachers Award (NTTA)",
    subtitle: "AICTE, Ministry of Education, Govt. of India",
    year: "2022",
  },
  {
    title: "Dr. TMA Pai Endowment Chair",
    subtitle: "Data Analytics and Cloud Computing",
    year: "2011-2014",
  },
  {
    title: "Indigenous Dental Implants Technology Mentorship Award",
    subtitle: "IUSSTF-INTEL-DST, Hon. Minister of Science & Technology",
    year: "2009",
  },
  {
    title: "Certified Trainer, Infodev, World Bank",
    subtitle: "Business Incubation and Technology Commercialization",
    year: "2012",
  },
];

const NOW = Infinity;

/* Career strands, in fractional years (month / 12). */
const careerLanes: TimelineLane[] = [
  {
    label: "Education",
    rows: [
      [
        {
          label: "B.E.",
          title: "B.E. Electronics & Communication, SJCE Mysore",
          start: 1987,
          period: "1987",
        },
        {
          label: "M.Tech",
          title: "M.Tech Digital Electronics & Advanced Communications, NITK Surathkal",
          start: 1992,
          period: "1992",
        },
        {
          label: "Ph.D.",
          title: "Ph.D. Computer Science & Engineering, University of Mysore",
          start: 2001,
          period: "2001",
        },
      ],
    ],
  },
  {
    label: "Faculty",
    rows: [
      [
        {
          label: "Lecturer",
          title: "Lecturer, MIT Manipal",
          start: 1992.08,
          end: 1995.67,
          period: "Feb 1992 – Sep 1995",
        },
        {
          label: "Reader",
          title: "Reader, MIT Manipal",
          start: 1995.67,
          end: 2001.75,
          period: "Sep 1995 – Oct 2001",
        },
        {
          label: "Professor",
          title: "Professor, MIT Manipal",
          start: 2001.75,
          end: 2023.42,
          period: "Oct 2001 – Jun 2023",
        },
        {
          label: "Sr. Prof.",
          title: "Senior Professor, Department of ICT, MIT, MAHE",
          start: 2023.42,
          end: NOW,
          period: "Jun 2023 – present",
          current: true,
        },
      ],
    ],
  },
  {
    label: "Leadership",
    rows: [
      [
        {
          label: "Head, ICT",
          title: "Head of Department of ICT, MIT, MAHE",
          start: 2001.33,
          end: 2008,
          period: "May 2001 – Jan 2008",
        },
        {
          label: "Assoc. Director, Innovation",
          title: "Associate Director (Innovation Center), MIT, MAHE",
          start: 2008.17,
          end: 2016.92,
          period: "Mar 2008 – Dec 2016",
        },
        {
          label: "AD Research",
          title: "Associate Director (Research and Consultancy), MIT, MAHE",
          start: 2017,
          end: 2019.92,
          period: "Jan 2017 – Dec 2019",
        },
      ],
      [
        {
          label: "CEO, MUTBI",
          title: "CEO, Manipal University Technology Business Incubator",
          start: 2010.25,
          end: 2016.42,
          period: "Apr 2010 – Jun 2016",
        },
      ],
    ],
  },
  {
    label: "Endowed chair",
    rows: [
      [
        {
          label: "Data Analytics & Cloud",
          title: "Dr. TMA Pai Endowment Chair in Data Analytics and Cloud Computing",
          start: 2011,
          end: 2015,
          period: "2011 – 2014",
        },
        {
          label: "ITIS",
          title:
            "Dr. TMA Pai Endowment Chair in Intelligent Technologies, Industry 4.0 and Sustainability",
          start: 2023,
          end: NOW,
          period: "2023 – present",
          current: true,
        },
      ],
    ],
  },
  {
    label: "International",
    rows: [
      [
        {
          label: "Visiting Professor, ESIGELEC",
          title: "Visiting Professor, ESIGELEC, France",
          start: 2006,
          end: NOW,
          period: "2006 – present",
          current: true,
        },
      ],
      [
        {
          label: "TU/e",
          title: "Collaboration with TU Eindhoven, Netherlands",
          start: 2007,
          end: 2010.99,
          period: "2007 – 2010",
        },
        {
          label: "Helsinki",
          title: "Global Forum on Innovation & Technology Entrepreneurship, Helsinki",
          start: 2011.5,
          period: "2011",
        },
      ],
    ],
  },
  {
    label: "Awards",
    rows: [
      [
        {
          label: "IUSSTF mentor",
          title: "Indigenous Dental Implants Technology Mentorship Award (IUSSTF-INTEL-DST)",
          start: 2009,
          period: "2009",
        },
        {
          label: "NTTA",
          title: "National Technical Teachers Award, AICTE, Ministry of Education",
          start: 2022,
          period: "2022",
          current: true,
        },
      ],
      [
        {
          label: "Infodev trainer",
          title: "Certified Trainer, Infodev, World Bank",
          start: 2012,
          period: "2012",
        },
      ],
    ],
  },
];

const outputs = [
  {
    value: 156,
    label: "Publications",
    note: "Journals and conference proceedings, plus 2 books",
    size: "sm" as const,
    groups: [{ count: 156, columns: 13 }],
  },
  {
    value: 81,
    label: "M.Tech theses",
    note: "Guided to completion",
    size: "sm" as const,
    groups: [{ count: 81, columns: 9 }],
  },
  {
    value: 14,
    label: "PhD scholars",
    note: "Filled: completed · Ring: ongoing",
    size: "md" as const,
    groups: [
      { count: 8, label: "Completed" },
      { count: 6, label: "Ongoing", state: "ring" as const },
    ],
  },
  {
    value: 10,
    label: "Patents granted",
    note: "Hover a group for patent numbers",
    size: "md" as const,
    groups: [
      { count: 3, label: "US", tip: "US9616346B2 · US9503511B2 · US8295280B2" },
      { count: 1, label: "Japan", tip: "JP5512889" },
      { count: 6, label: "India", tip: "Six Indian patents, including IN280657" },
    ],
  },
];

function Bullet({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-2.5 text-[13px] text-muted-foreground leading-relaxed">
      <span className="mt-[0.55em] size-1 shrink-0 bg-primary" aria-hidden />
      <span>{children}</span>
    </li>
  );
}

export default function ChairpersonPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative">
        <div className="shell pt-28 pb-12 lg:pt-36 lg:pb-16">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            {/* Portrait */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              <div className="ticks relative w-full max-w-sm mx-auto">
                <Bezel panelClassName="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src="/chairperson/image.jpg"
                    alt="Dr. Manohara Pai MM"
                    className="object-cover"
                    fill
                    sizes="384px"
                    priority
                    fetchPriority="high"
                  />
                </Bezel>
                <span className="absolute left-0 -bottom-6 font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                  Fig. 00 — Chair Professor
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-3 order-2 lg:order-1">
              <Kicker label="Chair Professor" />
              <h1 className="text-display font-medium text-foreground mb-4 text-balance">
                Dr. Manohara M.M. Pai
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground mb-1">
                Senior Professor, Department of Information and Communication Technology
              </p>
              <p className="text-sm text-muted-foreground mb-8">
                Manipal Institute of Technology, MAHE
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <Button asChild size="lg">
                  <a href="mailto:drtmapaichair.itis@manipal.edu">
                    <Mail01Icon strokeWidth={2} data-icon="inline-start" />
                    drtmapaichair.itis@manipal.edu
                  </a>
                </Button>
              </div>

              <ul className="flex flex-wrap gap-2 text-xs">
                {[
                  {
                    label: "Manipal Pure",
                    href: "https://researcher.manipal.edu/en/persons/manohara-m-m-pai",
                  },
                  { label: "ORCID", href: "https://orcid.org/0000-0003-2164-2945" },
                  {
                    label: "Google Scholar",
                    href: "https://scholar.google.co.in/citations?user=Zr3-m3IAAAAJ&hl=en",
                  },
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-3 py-1.5 border border-border font-mono text-[11px] hover:border-primary/50 text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label} ↗
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Read-out strip */}
          <dl className="ruler mt-16 grid grid-cols-2 lg:grid-cols-4 border-t border-border">
            {heroStats.map((stat, i) => (
              <div
                key={stat.label}
                className={`px-4 pt-6 pb-2 text-center border-border ${i % 2 === 1 ? "border-l" : ""} ${i === 2 ? "lg:border-l" : ""} ${i > 1 ? "max-lg:border-t" : ""}`}
              >
                <dd className="font-mono text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground tracking-tight">
                  {stat.value}
                </dd>
                <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mt-2">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 01 Background */}
      <Section index="01">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16">
          <SectionHeader index="01" label="About" title="Background" className="lg:mb-0" />
          <div className="text-[15px] text-muted-foreground space-y-4 leading-relaxed reveal">
            <p>
              Dr. Manohara Pai M.M. has 33 years of experience in administration, teaching,
              research, industrial collaborations, and consultancy at Manipal Institute of
              Technology. He holds a Ph.D. in Computer Science & Engineering from the University of
              Mysore (2001), M.Tech in Digital Electronics and Advanced Communications from NITK
              Surathkal (1992), and B.E. in Electronics & Communication from SJCE Mysore (1987).
            </p>
            <p>
              He is the current holder of the Dr. TMA Pai Endowment Chair in Intelligent
              Technologies, Industry 4.0 and Sustainability (2023-2025). Previously, he held the Dr.
              TMA Pai Endowment Chair in Data Analytics and Cloud Computing (2011-2014).
            </p>
            <p>
              His research interests include Computer Communication Networks, Wireless Adhoc
              Networks, Video Processing, Data Analytics, Cloud Computing, Technology
              Commercialization, and Patenting. He is a certified mentor by Infodev World Bank,
              Washington D.C.
            </p>
          </div>
        </div>
      </Section>

      {/* 02 Career */}
      <Section index="02">
        <SectionHeader
          index="02"
          label="Career"
          title="Four decades at a glance"
          lede="Education, faculty rank, leadership, endowed chairs, international work, and awards on one time axis. Hover or focus any span for its exact dates."
        />
        <figure className="reveal">
          <Bezel panelClassName="p-4 sm:p-6 lg:p-8">
            <FigCaption fig="01" title="Career timeline, 1985 – present" className="mb-6" />
            <CareerTimeline
              lanes={careerLanes}
              from={1985}
              to={2028}
              ticks={[1990, 1995, 2000, 2005, 2010, 2015, 2020, 2025]}
              label="Career timeline of Dr. Manohara Pai from 1985 to the present"
            />
          </Bezel>
        </figure>

        <p className="mt-5 text-[13px] text-muted-foreground reveal">
          Also Professor in Charge, Centre for Advanced Scientific and Industrial Research at MIT,
          MAHE.
        </p>
      </Section>

      {/* 03 Output */}
      <Section index="03">
        <SectionHeader
          index="03"
          label="Output"
          title="Mentorship & Publications"
          lede="Counted one dot at a time: every paper, thesis, scholar, and granted patent."
        />
        <div className="grid md:grid-cols-2 gap-4 reveal">
          {outputs.map((o, i) => (
            <figure key={o.label}>
              <Bezel className="h-full" panelClassName="flex flex-col p-5 sm:p-6">
                <FigCaption fig={`02.${i + 1}`} title={o.label} className="mb-6" />
                <div className="flex flex-1 flex-col sm:flex-row sm:items-end justify-between gap-6">
                  <div>
                    <span className="block font-mono text-5xl sm:text-6xl font-medium text-foreground tracking-tight">
                      {o.value}
                    </span>
                    <p className="mt-2 text-[11px] text-muted-foreground max-w-[14rem]">{o.note}</p>
                  </div>
                  <UnitChart groups={o.groups} size={o.size} label={`${o.value} ${o.label}`} />
                </div>
              </Bezel>
            </figure>
          ))}
        </div>

        {/* Books */}
        <div className="mt-4 grid sm:grid-cols-2 gap-4 reveal">
          {[
            {
              title: "Advances in Information & Communication Technologies ICICOT'07",
              body: "Co-edited proceedings for International Conference ICICOT 2007",
            },
            {
              title: "Scalable Video Coding using Wavelet Transformation",
              body: "Specialized book on video coding techniques",
            },
          ].map((book, i) => (
            <Bezel key={book.title} panelClassName="p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary mb-2">
                Book {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="font-sans text-[15px] font-medium text-foreground mb-1">
                {book.title}
              </h3>
              <p className="text-[13px] text-muted-foreground">{book.body}</p>
            </Bezel>
          ))}
        </div>
      </Section>

      {/* 04 Recognition */}
      <Section index="04">
        <SectionHeader index="04" label="Recognition" title="Awards & Patents" />

        <ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4 reveal">
          {keyAwards.map((award) => (
            <li key={award.title + award.year}>
              <Bezel hover className="h-full" panelClassName="p-5">
                <p className="font-mono text-xs text-primary mb-2 tabular-nums">{award.year}</p>
                <h3 className="font-sans text-[15px] font-medium text-foreground mb-1">
                  {award.title}
                </h3>
                <p className="text-[13px] text-muted-foreground">{award.subtitle}</p>
              </Bezel>
            </li>
          ))}
        </ol>

        <Bezel className="mb-10 reveal" panelClassName="p-5 sm:p-6">
          <h3 className="font-sans text-[15px] font-medium text-foreground mb-2">
            Patent Portfolio
          </h3>
          <p className="text-[13px] text-muted-foreground mb-2 leading-relaxed">
            Holds <span className="text-foreground font-medium">10 granted patents</span>: 3 US
            Patents (US9616346B2, US9503511B2, US8295280B2), 1 Japanese Patent (JP5512889), and 6
            Indian Patents (including IN280657). Received a patenting award of $8,000.
          </p>
          <p className="text-[13px] text-muted-foreground leading-relaxed">
            Published <span className="text-foreground font-medium">156 papers</span> in
            national/international journals and conference proceedings, and authored 2 books.
          </p>
        </Bezel>

        <Carousel className="w-full reveal" opts={{ align: "start" }}>
          <CarouselContent className="-ml-4">
            {patentsAndAwards.map((item, index) => (
              <CarouselItem key={item.image} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <figure className="h-full">
                  <Bezel panelClassName="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.caption}
                      fill
                      sizes="(max-width: 768px) 92vw, (max-width: 1024px) 46vw, 340px"
                      quality={55}
                      className="object-contain p-3"
                    />
                  </Bezel>
                  <figcaption className="mt-2.5 flex gap-2 text-xs text-muted-foreground">
                    <span className="font-mono text-[10px] text-primary tabular-nums pt-px">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {item.caption}
                  </figcaption>
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4" />
          <CarouselNext className="hidden md:flex -right-4" />
        </Carousel>
      </Section>

      {/* 05 Leadership */}
      <Section index="05">
        <SectionHeader index="05" label="Leadership" title="Administrative Positions" />

        <ol className="grid lg:grid-cols-2 gap-4">
          {adminPositions.map((pos) => (
            <li key={pos.title} className="reveal">
              <Bezel hover className="h-full" panelClassName="p-5 sm:p-6">
                <div className="flex items-start gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center border border-primary/25 bg-primary/[0.06]">
                    <pos.Icon strokeWidth={2} className="size-4 text-primary" />
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-primary mb-1">
                      {pos.period}
                    </p>
                    <h3 className="font-sans text-[15px] font-medium text-foreground mb-3">
                      {pos.title}
                    </h3>
                    <ul className="space-y-1.5">
                      {pos.points.map((point) => (
                        <Bullet key={point}>{point}</Bullet>
                      ))}
                    </ul>
                    {pos.metric ? (
                      <div
                        className="mt-5 border-t border-border pt-4"
                        role="img"
                        aria-label={`${pos.metric.label}: ${pos.metric.from} to ${pos.metric.to}`}
                      >
                        <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground mb-2">
                          {pos.metric.label}
                        </p>
                        {[
                          { k: "Start of term", v: pos.metric.from, accent: false },
                          { k: "End of term", v: pos.metric.to, accent: true },
                        ].map((m) => (
                          <div
                            key={m.k}
                            className="grid grid-cols-[6.5rem_1fr_2.5rem] items-center gap-3 py-0.5"
                          >
                            <span className="text-[11px] text-muted-foreground">{m.k}</span>
                            <span className="h-2.5 bg-[var(--viz-track)]">
                              <span
                                className={`block h-full ${m.accent ? "bg-[var(--viz-accent)]" : "bg-[var(--viz-muted)]"}`}
                                style={{ width: `${(m.v / (pos.metric?.to ?? m.v)) * 100}%` }}
                              />
                            </span>
                            <span className="font-mono text-[11px] text-foreground tabular-nums text-right">
                              {m.v}
                            </span>
                          </div>
                        ))}
                        <p className="mt-1.5 font-mono text-[10px] text-primary">
                          +{Math.round(((pos.metric.to - pos.metric.from) / pos.metric.from) * 100)}
                          % over the term
                        </p>
                      </div>
                    ) : null}
                  </div>
                </div>
              </Bezel>
            </li>
          ))}
        </ol>
      </Section>

      {/* 06 Expertise */}
      <Section index="06">
        <SectionHeader
          index="06"
          label="Expertise"
          align="center"
          title="Research Interests"
          lede="Computer Communication Networks, Wireless Adhoc Networks, Video Processing, Data Analytics, Cloud Computing, Technology Commercialization, Patenting, and Mentoring"
        />

        <ul className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 border-l border-t border-border mb-10 reveal">
          {researchAreas.map((area) => (
            <li
              key={area.name}
              className="group flex flex-col items-center gap-3 border-r border-b border-border px-2 py-5 text-center hover:bg-primary/[0.04] transition-colors"
            >
              <area.Icon strokeWidth={1.5} className="size-5 text-primary" />
              <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground group-hover:text-foreground transition-colors">
                {area.name}
              </span>
            </li>
          ))}
        </ul>

        <div className="grid sm:grid-cols-2 gap-4 reveal">
          {[
            {
              title: "AI and Healthcare Applications",
              points: [
                "AI-powered diagnostic tools for disease detection",
                "Wearable IoT devices for patient monitoring",
                "Healthcare data analytics and management systems",
                "Patented dental implant and diabetic foot ulcer detection technology",
              ],
            },
            {
              title: "Industrial IoT and Sensor Networks",
              points: [
                "Smart factory automation and monitoring",
                "Energy-efficient wireless sensor networks",
                "Real-time data analytics for process optimization",
                "Collaborations with IBM, TE Connectivity, Schneider Electric",
              ],
            },
          ].map((card) => (
            <Bezel key={card.title} panelClassName="p-5 sm:p-6">
              <h3 className="font-sans text-[15px] font-medium mb-3 text-foreground">
                {card.title}
              </h3>
              <ul className="space-y-1.5">
                {card.points.map((p) => (
                  <Bullet key={p}>{p}</Bullet>
                ))}
              </ul>
            </Bezel>
          ))}
        </div>
      </Section>

      {/* 07 International & Professional */}
      <Section index="07">
        <div className="grid md:grid-cols-2 gap-10 md:gap-4">
          <div className="flex flex-col">
            <SectionHeader
              index="07"
              label="International"
              title="Global Engagement"
              className="lg:mb-8"
            />
            <Bezel className="flex-1 reveal" panelClassName="p-5 sm:p-6">
              <GlobeIcon strokeWidth={1.5} className="size-5 text-primary mb-4" />
              <ul className="space-y-2">
                <Bullet>Visiting Professor, ESIGELEC, France (since 2006)</Bullet>
                <Bullet>PhD Examiner, University of Rouen, France</Bullet>
                <Bullet>
                  Technology Commercialization Training, IC2 Institute, University of Texas, Austin
                  (2010)
                </Bullet>
                <Bullet>
                  Global Forum on Innovation & Technology Entrepreneurship, Helsinki (2011)
                </Bullet>
                <Bullet>Collaboration with TU Eindhoven, Netherlands (2007-2010)</Bullet>
              </ul>
            </Bezel>
          </div>
          <div className="flex flex-col">
            <SectionHeader
              index="08"
              label="Professional"
              title="Activities & Memberships"
              className="lg:mb-8"
            />
            <Bezel className="flex-1 reveal" panelClassName="p-5 sm:p-6">
              <UserGroupIcon strokeWidth={1.5} className="size-5 text-primary mb-4" />
              <h4 className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-2">
                Memberships
              </h4>
              <ul className="space-y-1.5 mb-5">
                <Bullet>Senior Member, IEEE</Bullet>
                <Bullet>Chair, IEEE Mangalore Subsection (2019)</Bullet>
                <Bullet>Past Execom Member, IEEE Bangalore Section</Bullet>
                <Bullet>Life Member, ISTE and Systems Society of India</Bullet>
              </ul>
              <h4 className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-2">
                Advisory Roles
              </h4>
              <ul className="space-y-1.5">
                <Bullet>Subject Expert for UPSC (IAS/IPS/IFS selection)</Bullet>
                <Bullet>Subject Expert, Goa Public Service Commission</Bullet>
                <Bullet>Reviewer, IEEE Transactions on Video Processing</Bullet>
                <Bullet>Chaired sessions in 20+ International Conferences</Bullet>
              </ul>
            </Bezel>
          </div>
        </div>
      </Section>

      {/* 09 Funding */}
      <Section index="09">
        <SectionHeader index="09" label="Support" title="Research Funding" />
        <Bezel className="reveal" panelClassName="p-5 sm:p-6">
          <div className="flex flex-col sm:flex-row items-start gap-5">
            <span className="flex size-12 shrink-0 items-center justify-center border border-primary/25 bg-primary/[0.06]">
              <DollarCircleIcon strokeWidth={2} className="size-5 text-primary" />
            </span>
            <div>
              <p className="text-[15px] text-muted-foreground mb-4 leading-relaxed">
                Established the Technology Business Incubator at MIT, MAHE with a grant of{" "}
                <span className="text-foreground font-medium">Rs.5 Crores</span> from DST, Govt. of
                India, and MAHE. Secured multiple research grants from:
              </p>
              <ul className="flex flex-wrap gap-2">
                {["BIRAC", "DST", "IBM", "TE Connectivity", "Schneider Electric", "AICTE"].map(
                  (org) => (
                    <li
                      key={org}
                      className="border border-border px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                    >
                      {org}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </Bezel>
      </Section>

      {/* Contact */}
      <Section index="10">
        <div className="max-w-2xl mx-auto text-center reveal">
          <Kicker label="Contact" className="justify-center" />
          <h2 className="text-title font-medium mb-4 text-foreground text-balance">
            Connect with Dr. Manohara Pai
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mb-8">
            For research collaboration, academic partnerships, or inquiries about the Endowment
            Chair.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg">
              <Link href="/apply">
                Apply for Research
                <ArrowRight01Icon strokeWidth={2} data-icon="inline-end" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="mailto:drtmapaichair.itis@manipal.edu">
                <Mail01Icon strokeWidth={2} data-icon="inline-start" />
                Send Email
              </a>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}

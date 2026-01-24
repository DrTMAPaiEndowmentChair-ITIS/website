import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Award01Icon,
  BookOpen01Icon,
  GlobeIcon,
  Building01Icon,
  GraduationScrollIcon,
  UserGroupIcon,
  FlashIcon,
  DollarCircleIcon,
  StarIcon,
  ComputerIcon,
  HeartCheckIcon,
  Video01Icon,
  ChipIcon,
  Wifi01Icon,
  Location01Icon,
  AnalyticsUpIcon,
  CloudIcon,
  ArrowRight01Icon,
  CheckmarkCircle01Icon,
  Mail01Icon,
} from "@hugeicons/core-free-icons";

export const metadata = {
  title: "Dr. Manohara Pai MM | Chair Professor | Dr. TMA Pai Endowment Chair",
  description: "Learn about Dr. Manohara Pai MM, an accomplished academic with over 35 years of experience in industry, research, and teaching.",
};

const heroStats = [
  { value: "33+", label: "Years of Excellence" },
  { value: "10", label: "Patents Granted" },
  { value: "156", label: "Publications" },
  { value: "14", label: "PhD Scholars" },
];

const patentsAndAwards = [
  { image: "/chairperson/patents/NTTA.jpeg", caption: "National Technical Teachers Award (NTTA 2022)" },
  { image: "/chairperson/patents/MPAward.jpg", caption: "Dr. Manohar Pai M received the prestigious National Technical Best Teacher award from AICTE" },
  { image: "/chairperson/patents/newscoverage.jpeg", caption: "News coverage of the National Technical Best Teacher award" },
  { image: "/chairperson/patents/InnovationPioneers.jpg", caption: "Award from Minister of Science and Technology (Prithviraj Chavan) for mentoring innovation" },
  { image: "/chairperson/patents/AustinTX.jpg", caption: "Infodev Business Incubation Training (2011) and Intensive training on Incubation in Texas Austin, USA (2010)" },
  { image: "/chairperson/patents/USPatent1.png", caption: "US Patent for Adaptive Routing in Wireless Networks" },
  { image: "/chairperson/patents/USPatent2.png", caption: "US Patent for Image Processing and Analysis" },
  { image: "/chairperson/patents/JapanesePatent.png", caption: "Japanese Patent" },
  { image: "/chairperson/patents/Patent-OpticalFiber.jpeg", caption: "Patent for Optical Fiber Inserter Technology" },
  { image: "/chairperson/patents/diabetic-ulcer.jpeg", caption: "Indian Patent for Diabetic Ulcer Detection Methodology" },
  { image: "/chairperson/patents/FootCompl.jpg", caption: "Indian Patent for Detection of Foot Complications" },
];

const timeline = [
  { year: "2023", title: "Senior Professor", subtitle: "MIT, MAHE", current: true },
  { year: "2023", title: "Dr. TMA Pai Endowment Chair", subtitle: "Intelligent Technologies, Industry 4.0 & Sustainability" },
  { year: "2022", title: "National Technical Teachers Award", subtitle: "AICTE, Ministry of Education, Govt. of India" },
  { year: "2017", title: "Associate Director (Research & Consultancy)", subtitle: "MIT, MAHE" },
  { year: "2010", title: "CEO, MUTBI", subtitle: "Manipal University Technology Business Incubator" },
  { year: "2008", title: "Associate Director (Innovation Center)", subtitle: "DST-supported Innovation Centre" },
  { year: "2001", title: "Professor & Founder Head, Dept. of ICT", subtitle: "MIT, MAHE" },
  { year: "2001", title: "Ph.D. Computer Science & Engineering", subtitle: "University of Mysore" },
  { year: "1992", title: "M.Tech Digital Electronics", subtitle: "NITK, Surathkal" },
];

const researchAreas = [
  { name: "AI & ML Solutions", icon: ComputerIcon },
  { name: "Healthcare Tech", icon: HeartCheckIcon },
  { name: "Video Processing", icon: Video01Icon },
  { name: "IIOT Solutions", icon: ChipIcon },
  { name: "Wireless Sensor Networks", icon: Wifi01Icon },
  { name: "GPS & Location Tech", icon: Location01Icon },
  { name: "Data Analytics", icon: AnalyticsUpIcon },
  { name: "Cloud Computing", icon: CloudIcon },
];

const achievements = [
  {
    icon: Award01Icon,
    title: "Patents",
    stats: "10 Granted",
    details: ["3 US Patents", "1 Japanese Patent", "6 Indian Patents", "$8,000 Patenting Award"],
  },
  {
    icon: BookOpen01Icon,
    title: "Publications",
    stats: "156 Papers",
    details: ["International Journals", "Conference Proceedings", "2 Authored Books"],
  },
  {
    icon: GraduationScrollIcon,
    title: "Mentorship",
    stats: "14 PhD Scholars",
    details: ["8 Completed", "6 Ongoing", "81 M.Tech Theses"],
  },
  {
    icon: DollarCircleIcon,
    title: "Funding",
    stats: "₹5+ Crores",
    details: ["DST Grants", "Industry Partnerships", "BIRAC Support"],
  },
];

const keyAwards = [
  {
    title: "Dr. TMA Pai Endowment Chair",
    subtitle: "Intelligent Technologies, Industry 4.0 and Sustainability",
    year: "2023-2025",
  },
  {
    title: "National Technical Teachers Award",
    subtitle: "AICTE, Ministry of Education, Govt. of India",
    year: "2022",
  },
  {
    title: "Innovation Pioneer Award",
    subtitle: "Hon. Minister of Science & Technology",
    year: "2009",
  },
  {
    title: "Dr. TMA Pai Endowment Chair",
    subtitle: "Data Analytics and Cloud Computing",
    year: "2011-2014",
  },
];

export default function ChairpersonPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Dramatic & Grand */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-primary/3 to-transparent" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />

        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
              {/* Image Column */}
              <div className="lg:col-span-2 order-1 lg:order-2">
                <div className="relative">
                  {/* Decorative frame */}
                  <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-primary/5 -z-10" />
                  <div className="absolute -inset-4 border border-primary/20 translate-x-4 translate-y-4 -z-10" />
                  <div className="relative aspect-[4/5] w-full max-w-md mx-auto overflow-hidden border-2 border-primary/30 bg-muted group">
                    <Image
                      src="/chairperson/image.jpg"
                      alt="Dr. Manohara Pai MM"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      fill
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Content Column */}
              <div className="lg:col-span-3 order-2 lg:order-1">
                <div className="space-y-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-primary font-medium mb-4">
                      Chair Professor
                    </p>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight text-foreground mb-4">
                      Dr. Manohara
                      <span className="block text-primary">M.M. Pai</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-muted-foreground font-light leading-relaxed">
                      Senior Professor, School of Computer Engineering
                      <span className="block text-base mt-1">Manipal Institute of Technology, MAHE</span>
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href="mailto:drtmapaichair.itis@manipal.edu"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm hover:bg-primary/90 transition-colors"
                    >
                      <HugeiconsIcon icon={Mail01Icon} strokeWidth={2} className="size-4" />
                      Contact
                    </a>
                    <a href="https://scholar.google.co.in/citations?user=Zr3-m3IAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-border hover:border-primary/50 text-sm text-muted-foreground hover:text-primary transition-colors">Google Scholar</a>
                    <a href="https://orcid.org/0000-0003-2164-2945" target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-border hover:border-primary/50 text-sm text-muted-foreground hover:text-primary transition-colors">ORCID</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Bar */}
            <div className="mt-16 lg:mt-20">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border">
                {heroStats.map((stat, index) => (
                  <div key={index} className="bg-background dark:bg-transparent p-6 lg:p-8 text-center group hover:bg-primary/5 transition-colors">
                    <p className="text-3xl sm:text-4xl lg:text-5xl font-light text-primary mb-2 tracking-tight">
                      {stat.value}
                    </p>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Editorial Style */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
              <div className="lg:col-span-4">
                <p className="text-xs uppercase tracking-[0.3em] text-primary font-medium mb-2">About</p>
                <h2 className="text-2xl lg:text-3xl font-medium text-foreground tracking-tight leading-tight">
                  A Legacy of Innovation & Excellence
                </h2>
              </div>
              <div className="lg:col-span-8">
                <div className="text-base text-muted-foreground space-y-6 leading-relaxed">
                  <p className="text-lg text-foreground font-light leading-relaxed">
                    Dr. Manohara Pai M.M. is a distinguished academic leader whose career spans over three decades
                    of transformative contributions to technical education, research innovation, and industry collaboration.
                  </p>
                  <p>
                    As holder of the prestigious <span className="text-foreground font-medium">Dr. TMA Pai Endowment Chair
                    in Intelligent Technologies, Industry 4.0 and Sustainability</span>, he continues to bridge the gap
                    between academic research and real-world applications, creating technologies that address pressing
                    societal challenges.
                  </p>
                  <p>
                    His visionary leadership has shaped MAHE's innovation ecosystem—from establishing the Department
                    of Information and Communication Technology to founding the Technology Business Incubator,
                    which has nurtured numerous startups and industry partnerships.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Highlight - Large Cards */}
      <section className="py-20 lg:py-28 bg-muted/40 dark:bg-transparent">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 lg:mb-16">
              <p className="text-xs uppercase tracking-[0.3em] text-primary font-medium mb-3">Recognition</p>
              <h2 className="text-3xl lg:text-4xl font-medium text-foreground tracking-tight">
                Honors & Awards
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {keyAwards.map((award, index) => (
                <div
                  key={index}
                  className="group relative p-8 lg:p-10 bg-background dark:bg-transparent border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <div className="absolute top-0 right-0 px-4 py-2 bg-primary/10 text-primary text-xs font-medium">
                    {award.year}
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <HugeiconsIcon icon={Award01Icon} strokeWidth={2} className="size-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-foreground mb-1 tracking-tight">{award.title}</h3>
                      <p className="text-sm text-muted-foreground">{award.subtitle}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Patents & Awards Carousel */}
            <Carousel className="w-full" opts={{ align: "start" }}>
              <CarouselContent className="-ml-4">
                {patentsAndAwards.map((item, index) => (
                  <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="h-full group">
                      <div className="relative aspect-[4/3] w-full bg-muted dark:bg-white/5 overflow-hidden border border-border group-hover:border-primary/50 transition-colors">
                        <Image
                          src={item.image}
                          alt={item.caption}
                          fill
                          className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <p className="mt-3 text-xs text-muted-foreground leading-relaxed">{item.caption}</p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-12 bg-background border-border hover:bg-primary/10 hover:text-primary hover:border-primary/50" />
              <CarouselNext className="hidden md:flex -right-12 bg-background border-border hover:bg-primary/10 hover:text-primary hover:border-primary/50" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Achievements Grid - Impactful Numbers */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 lg:mb-16">
              <p className="text-xs uppercase tracking-[0.3em] text-primary font-medium mb-3">Impact</p>
              <h2 className="text-3xl lg:text-4xl font-medium text-foreground tracking-tight">
                Achievements at a Glance
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
              {achievements.map((item, index) => (
                <div key={index} className="bg-background dark:bg-transparent p-6 lg:p-8 group hover:bg-primary/5 transition-colors">
                  <div className="w-14 h-14 bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <HugeiconsIcon icon={item.icon} strokeWidth={1.5} className="size-7 text-primary" />
                  </div>
                  <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-2">{item.title}</h3>
                  <p className="text-2xl lg:text-3xl font-light text-foreground mb-4 tracking-tight">{item.stats}</p>
                  <ul className="space-y-1">
                    {item.details.map((detail, i) => (
                      <li key={i} className="text-xs text-muted-foreground flex items-center gap-2">
                        <span className="w-1 h-1 bg-primary rounded-full" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="py-20 lg:py-28 bg-muted/40 dark:bg-transparent">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 lg:mb-16">
              <p className="text-xs uppercase tracking-[0.3em] text-primary font-medium mb-3">Journey</p>
              <h2 className="text-3xl lg:text-4xl font-medium text-foreground tracking-tight">
                Career Milestones
              </h2>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-border lg:-translate-x-px" />

              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={index} className={`relative flex items-start gap-6 lg:gap-12 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Timeline dot */}
                    <div className="absolute left-8 lg:left-1/2 w-4 h-4 -translate-x-1/2 bg-background border-2 border-primary rounded-full z-10">
                      {item.current && <div className="absolute inset-1 bg-primary rounded-full animate-pulse" />}
                    </div>

                    {/* Content */}
                    <div className={`flex-1 ml-16 lg:ml-0 ${index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:pl-12'}`}>
                      <div className={`inline-block p-6 bg-background dark:bg-transparent border border-border hover:border-primary/50 transition-colors ${index % 2 === 0 ? 'lg:text-right' : ''}`}>
                        <p className="text-primary text-sm font-medium mb-1">{item.year}</p>
                        <h3 className="text-base font-medium text-foreground mb-1 tracking-tight">{item.title}</h3>
                        <p className="text-xs text-muted-foreground">{item.subtitle}</p>
                      </div>
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className="hidden lg:block flex-1" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas - Visual Grid */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-4">
                <p className="text-xs uppercase tracking-[0.3em] text-primary font-medium mb-3">Expertise</p>
                <h2 className="text-3xl lg:text-4xl font-medium text-foreground tracking-tight mb-4">
                  Research Focus
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  Spanning computer networks, AI, healthcare technology, and industrial IoT—with
                  expertise certified by Infodev World Bank, Washington D.C.
                </p>
                <div className="hidden lg:block">
                  <Button asChild variant="outline">
                    <Link href="/#research">
                      View Current Projects
                      <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} data-icon="inline-end" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-8">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-border">
                  {researchAreas.map((area, index) => (
                    <div key={index} className="bg-background dark:bg-transparent p-6 text-center group hover:bg-primary/5 transition-colors">
                      <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                        <HugeiconsIcon icon={area.icon} strokeWidth={1.5} className="size-6 text-primary" />
                      </div>
                      <span className="text-xs font-medium text-foreground">{area.name}</span>
                    </div>
                  ))}
                </div>

                {/* Research Highlights */}
                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                  <Card className="group hover:border-primary/50 transition-colors dark:bg-transparent">
                    <CardContent>
                      <h3 className="text-sm font-medium mb-2 text-foreground tracking-tight">AI & Healthcare</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Pioneering AI-powered diagnostic tools, wearable IoT devices for patient monitoring,
                        and patented innovations in dental implant technology.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="group hover:border-primary/50 transition-colors dark:bg-transparent">
                    <CardContent>
                      <h3 className="text-sm font-medium mb-2 text-foreground tracking-tight">Industrial IoT</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Smart factory automation, energy-efficient wireless sensor networks, and real-time
                        analytics with partners like IBM, TE Connectivity, and Schneider Electric.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* International & Professional */}
      <section className="py-20 lg:py-28 bg-muted/40 dark:bg-transparent">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {/* International */}
              <div className="p-8 lg:p-10 bg-background dark:bg-transparent border border-border">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-primary/10 flex items-center justify-center shrink-0">
                    <HugeiconsIcon icon={GlobeIcon} strokeWidth={1.5} className="size-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-foreground tracking-tight">Global Engagement</h3>
                    <p className="text-sm text-muted-foreground">International collaborations & expertise</p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <HugeiconsIcon icon={CheckmarkCircle01Icon} strokeWidth={2} className="size-4 text-primary mt-0.5 shrink-0" />
                    <span>Visiting Professor, ESIGELEC, France (since 2006)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <HugeiconsIcon icon={CheckmarkCircle01Icon} strokeWidth={2} className="size-4 text-primary mt-0.5 shrink-0" />
                    <span>PhD Examiner, University of Rouen, France</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <HugeiconsIcon icon={CheckmarkCircle01Icon} strokeWidth={2} className="size-4 text-primary mt-0.5 shrink-0" />
                    <span>Technology Commercialization, IC2 Institute, UT Austin</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <HugeiconsIcon icon={CheckmarkCircle01Icon} strokeWidth={2} className="size-4 text-primary mt-0.5 shrink-0" />
                    <span>Global Forum on Innovation, Helsinki (2011)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <HugeiconsIcon icon={CheckmarkCircle01Icon} strokeWidth={2} className="size-4 text-primary mt-0.5 shrink-0" />
                    <span>TU Eindhoven collaboration (2007-2010)</span>
                  </li>
                </ul>
              </div>

              {/* Professional */}
              <div className="p-8 lg:p-10 bg-background dark:bg-transparent border border-border">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-primary/10 flex items-center justify-center shrink-0">
                    <HugeiconsIcon icon={UserGroupIcon} strokeWidth={1.5} className="size-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-foreground tracking-tight">Professional Leadership</h3>
                    <p className="text-sm text-muted-foreground">Memberships & advisory roles</p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <HugeiconsIcon icon={CheckmarkCircle01Icon} strokeWidth={2} className="size-4 text-primary mt-0.5 shrink-0" />
                    <span>Senior Member, IEEE</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <HugeiconsIcon icon={CheckmarkCircle01Icon} strokeWidth={2} className="size-4 text-primary mt-0.5 shrink-0" />
                    <span>Chair, IEEE Mangalore Subsection (2019)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <HugeiconsIcon icon={CheckmarkCircle01Icon} strokeWidth={2} className="size-4 text-primary mt-0.5 shrink-0" />
                    <span>Advisor & Subject Expert for UPSC</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <HugeiconsIcon icon={CheckmarkCircle01Icon} strokeWidth={2} className="size-4 text-primary mt-0.5 shrink-0" />
                    <span>Reviewer, IEEE Transactions on Video Processing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <HugeiconsIcon icon={CheckmarkCircle01Icon} strokeWidth={2} className="size-4 text-primary mt-0.5 shrink-0" />
                    <span>Chaired 20+ International Conference sessions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Funding Partners */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-medium mb-3">Partnerships</p>
            <h2 className="text-3xl lg:text-4xl font-medium text-foreground tracking-tight mb-4">
              Research & Funding Partners
            </h2>
            <p className="text-sm text-muted-foreground mb-12 max-w-2xl mx-auto">
              Collaborating with leading organizations to advance research and innovation
            </p>

            <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 opacity-70">
              {["DST", "BIRAC", "AICTE", "IBM", "Schneider Electric", "TE Connectivity"].map((partner) => (
                <span key={partner} className="text-sm text-muted-foreground font-medium">{partner}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Grand */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent" />
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-primary/10 to-transparent" />

        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-medium mb-4">Get Involved</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium mb-6 text-foreground tracking-tight leading-tight">
              Connect with<br />Dr. Manohara Pai
            </h2>
            <p className="text-base text-muted-foreground mb-8 leading-relaxed max-w-xl mx-auto">
              Interested in collaborative research, academic partnerships, or exploring
              opportunities with the Endowment Chair?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/apply">
                  Apply for Research
                  <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} data-icon="inline-end" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="mailto:drtmapaichair.itis@manipal.edu">
                  <HugeiconsIcon icon={Mail01Icon} strokeWidth={2} className="size-4" />
                  Send Email
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

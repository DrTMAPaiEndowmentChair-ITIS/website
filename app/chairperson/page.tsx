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
import {
  Award01Icon,
  BookOpen01Icon,
  GlobeIcon,
  Building01Icon,
  GraduationScrollIcon,
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

const adminPositions = [
  {
    Icon: ClockIcon,
    title: "Associate Director (Research and Consultancy), MIT, MAHE",
    period: "Jan 2017 - Dec 2019",
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

export default function ChairpersonPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
              {/* Image */}
              <div className="lg:col-span-2 order-1 lg:order-2">
                <div className="relative aspect-[4/5] w-full max-w-sm mx-auto overflow-hidden border border-border bg-muted">
                  <Image
                    src="/chairperson/image.jpg"
                    alt="Dr. Manohara Pai MM"
                    className="object-cover"
                    fill
                    sizes="384px"
                    priority
                    fetchPriority="high"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-3 order-2 lg:order-1">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-3">
                  Chair Professor
                </p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight tracking-tight text-foreground mb-3">
                  Dr. Manohara M.M. Pai
                </h1>
                <p className="text-base text-muted-foreground mb-1">
                  Senior Professor, Department of Information and Communication Technology
                </p>
                <p className="text-sm text-muted-foreground mb-6">
                  Manipal Institute of Technology, MAHE
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  <a
                    href="mailto:drtmapaichair.itis@manipal.edu"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm hover:bg-primary/90 transition-colors"
                  >
                    <Mail01Icon strokeWidth={2} className="size-4" />
                    drtmapaichair.itis@manipal.edu
                  </a>
                </div>

                <div className="flex flex-wrap gap-2 text-xs">
                  <a
                    href="https://researcher.manipal.edu/en/persons/manohara-m-m-pai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 border border-border hover:border-primary/50 text-muted-foreground hover:text-primary transition-colors"
                  >
                    Manipal Pure
                  </a>
                  <a
                    href="https://orcid.org/0000-0003-2164-2945"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 border border-border hover:border-primary/50 text-muted-foreground hover:text-primary transition-colors"
                  >
                    ORCID
                  </a>
                  <a
                    href="https://scholar.google.co.in/citations?user=Zr3-m3IAAAAJ&hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 border border-border hover:border-primary/50 text-muted-foreground hover:text-primary transition-colors"
                  >
                    Google Scholar
                  </a>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 border border-border divide-x divide-y lg:divide-y-0 divide-border">
              {heroStats.map((stat, index) => (
                <div key={index} className="p-6 text-center bg-panel">
                  <p className="text-2xl sm:text-3xl font-light text-primary mb-1">{stat.value}</p>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary mb-2">
              About
            </p>
            <h2 className="text-xl font-medium mb-6 text-foreground tracking-tight">Background</h2>
            <div className="text-sm text-muted-foreground space-y-4 leading-relaxed">
              <p>
                Dr. Manohara Pai M.M. has 33 years of experience in administration, teaching,
                research, industrial collaborations, and consultancy at Manipal Institute of
                Technology. He holds a Ph.D. in Computer Science & Engineering from the University
                of Mysore (2001), M.Tech in Digital Electronics and Advanced Communications from
                NITK Surathkal (1992), and B.E. in Electronics & Communication from SJCE Mysore
                (1987).
              </p>
              <p>
                He is the current holder of the Dr. TMA Pai Endowment Chair in Intelligent
                Technologies, Industry 4.0 and Sustainability (2023-2025). Previously, he held the
                Dr. TMA Pai Endowment Chair in Data Analytics and Cloud Computing (2011-2014).
              </p>
              <p>
                His research interests include Computer Communication Networks, Wireless Adhoc
                Networks, Video Processing, Data Analytics, Cloud Computing, Technology
                Commercialization, and Patenting. He is a certified mentor by Infodev World Bank,
                Washington D.C.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Patents */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary mb-2 text-center">
              Recognition
            </p>
            <h2 className="text-xl font-medium mb-8 text-foreground text-center tracking-tight">
              Awards & Patents
            </h2>

            {/* Key Awards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {keyAwards.map((award, index) => (
                <div
                  key={index}
                  className="p-5 border border-border hover:border-primary/50 transition-colors bg-panel"
                >
                  <p className="text-xs text-primary font-medium mb-1">{award.year}</p>
                  <h3 className="text-sm font-medium text-foreground mb-1">{award.title}</h3>
                  <p className="text-xs text-muted-foreground">{award.subtitle}</p>
                </div>
              ))}
            </div>

            {/* Patent Details */}
            <div className="p-6 border border-border bg-muted/30 dark:bg-transparent mb-8">
              <h3 className="text-sm font-medium text-foreground mb-3">Patent Portfolio</h3>
              <p className="text-xs text-muted-foreground mb-3">
                Holds <span className="text-foreground font-medium">10 granted patents</span>: 3 US
                Patents (US9616346B2, US9503511B2, US8295280B2), 1 Japanese Patent (JP5512889), and
                6 Indian Patents (including IN280657). Received a patenting award of $8,000.
              </p>
              <p className="text-xs text-muted-foreground">
                Published <span className="text-foreground font-medium">156 papers</span> in
                national/international journals and conference proceedings, and authored 2 books.
              </p>
            </div>

            {/* Carousel */}
            <Carousel className="w-full" opts={{ align: "start" }}>
              <CarouselContent className="-ml-4">
                {patentsAndAwards.map((item, index) => (
                  <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="h-full">
                      <div className="relative aspect-[4/3] w-full bg-muted dark:bg-white/5 overflow-hidden border border-border">
                        <Image
                          src={item.image}
                          alt={item.caption}
                          fill
                          sizes="(max-width: 768px) 92vw, (max-width: 1024px) 46vw, 340px"
                          quality={55}
                          className="object-contain p-2"
                        />
                      </div>
                      <p className="mt-2 text-xs text-muted-foreground">{item.caption}</p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-12" />
              <CarouselNext className="hidden md:flex -right-12" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Administrative Positions */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary mb-2">
              Leadership
            </p>
            <h2 className="text-xl font-medium mb-8 text-foreground tracking-tight">
              Administrative Positions
            </h2>

            <div className="space-y-4">
              {adminPositions.map((pos, index) => (
                <Card key={index} className="bg-panel">
                  <CardContent>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 flex items-center justify-center shrink-0">
                        <pos.Icon strokeWidth={2} className="size-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-medium text-foreground">{pos.title}</h3>
                        <p className="text-xs text-muted-foreground mb-3">{pos.period}</p>
                        <ul className="space-y-1.5">
                          {pos.points.map((point, i) => (
                            <li
                              key={i}
                              className="text-xs text-muted-foreground flex items-start gap-2"
                            >
                              <span className="w-1 h-1 bg-primary rounded-full mt-1.5 shrink-0" />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Academic Background */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Education */}
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary mb-2">
                  Education
                </p>
                <h2 className="text-xl font-medium mb-6 text-foreground tracking-tight">
                  Academic Background
                </h2>
                <Card className="bg-panel">
                  <CardContent>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary/10 flex items-center justify-center shrink-0">
                        <GraduationScrollIcon strokeWidth={2} className="size-5 text-primary" />
                      </div>
                      <div className="space-y-4">
                        <div className="border-l-2 border-primary/30 pl-3">
                          <p className="text-xs text-primary font-medium">2001</p>
                          <p className="text-sm font-medium text-foreground">
                            Ph.D. in Computer Science & Engineering
                          </p>
                          <p className="text-xs text-muted-foreground">University of Mysore</p>
                        </div>
                        <div className="border-l-2 border-primary/30 pl-3">
                          <p className="text-xs text-primary font-medium">1992</p>
                          <p className="text-sm font-medium text-foreground">
                            M.Tech in Digital Electronics and Advanced Communications
                          </p>
                          <p className="text-xs text-muted-foreground">NITK, Surathkal</p>
                        </div>
                        <div className="border-l-2 border-primary/30 pl-3">
                          <p className="text-xs text-primary font-medium">1987</p>
                          <p className="text-sm font-medium text-foreground">
                            B.E. in Electronics & Communication
                          </p>
                          <p className="text-xs text-muted-foreground">SJCE, Mysore</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Career */}
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary mb-2">
                  Career
                </p>
                <h2 className="text-xl font-medium mb-6 text-foreground tracking-tight">
                  Professional Experience
                </h2>
                <Card className="bg-panel">
                  <CardContent>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary/10 flex items-center justify-center shrink-0">
                        <BookOpen01Icon strokeWidth={2} className="size-5 text-primary" />
                      </div>
                      <div className="space-y-3">
                        <div className="border-l-2 border-primary/30 pl-3">
                          <p className="text-xs text-primary font-medium">June 2023 - Present</p>
                          <p className="text-sm font-medium text-foreground">Senior Professor</p>
                        </div>
                        <div className="border-l-2 border-muted pl-3">
                          <p className="text-xs text-muted-foreground">Oct 2001 - June 2023</p>
                          <p className="text-sm text-foreground">Professor</p>
                        </div>
                        <div className="border-l-2 border-muted pl-3">
                          <p className="text-xs text-muted-foreground">Sept 1995 - Oct 2001</p>
                          <p className="text-sm text-foreground">Reader</p>
                        </div>
                        <div className="border-l-2 border-muted pl-3">
                          <p className="text-xs text-muted-foreground">Feb 1992 - Sept 1995</p>
                          <p className="text-sm text-foreground">Lecturer</p>
                        </div>
                        <p className="text-xs text-muted-foreground pt-2">
                          Professor in Charge, Centre for Advanced Scientific and Industrial
                          Research at MIT, MAHE.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mentorship & Publications */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary mb-2">
              Output
            </p>
            <h2 className="text-xl font-medium mb-8 text-foreground tracking-tight">
              Mentorship & Publications
            </h2>

            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <Card className="bg-panel">
                <CardContent>
                  <div className="w-10 h-10 bg-primary/10 flex items-center justify-center mb-3">
                    <GraduationScrollIcon strokeWidth={2} className="size-5 text-primary" />
                  </div>
                  <h3 className="text-sm font-medium mb-2 text-foreground">PhD Guidance</h3>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-foreground font-medium">8 completed</span>, 6 ongoing
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-panel">
                <CardContent>
                  <div className="w-10 h-10 bg-primary/10 flex items-center justify-center mb-3">
                    <BookOpen01Icon strokeWidth={2} className="size-5 text-primary" />
                  </div>
                  <h3 className="text-sm font-medium mb-2 text-foreground">M.Tech Theses</h3>
                  <p className="text-xs text-muted-foreground">
                    Guided <span className="text-foreground font-medium">81 theses</span>
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-panel">
                <CardContent>
                  <div className="w-10 h-10 bg-primary/10 flex items-center justify-center mb-3">
                    <Award01Icon strokeWidth={2} className="size-5 text-primary" />
                  </div>
                  <h3 className="text-sm font-medium mb-2 text-foreground">Publications</h3>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-foreground font-medium">156 papers</span>, 2 books
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Books */}
            <div className="p-6 border border-border bg-panel">
              <h3 className="text-sm font-medium mb-4 text-foreground">Authored Books</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 bg-muted/50 dark:bg-white/5 border border-border">
                  <h4 className="text-sm font-medium text-foreground mb-1">
                    Advances in Information & Communication Technologies ICICOT&apos;07
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    Co-edited proceedings for International Conference ICICOT 2007
                  </p>
                </div>
                <div className="p-4 bg-muted/50 dark:bg-white/5 border border-border">
                  <h4 className="text-sm font-medium text-foreground mb-1">
                    Scalable Video Coding using Wavelet Transformation
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    Specialized book on video coding techniques
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary mb-2 text-center">
              Expertise
            </p>
            <h2 className="text-xl font-medium mb-2 text-center text-foreground tracking-tight">
              Research Interests
            </h2>
            <p className="text-xs text-muted-foreground text-center mb-8">
              Computer Communication Networks, Wireless Adhoc Networks, Video Processing, Data
              Analytics, Cloud Computing, Technology Commercialization, Patenting, and Mentoring
            </p>

            <div className="grid grid-cols-4 sm:grid-cols-8 gap-4 mb-10">
              {researchAreas.map((area, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-2">
                    <area.Icon strokeWidth={1.5} className="size-5 text-primary" />
                  </div>
                  <span className="text-[10px] text-muted-foreground">{area.name}</span>
                </div>
              ))}
            </div>

            {/* Research Detail Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <Card className="bg-panel">
                <CardContent>
                  <h3 className="text-sm font-medium mb-2 text-foreground">
                    AI and Healthcare Applications
                  </h3>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li className="flex items-start gap-2">
                      <span className="w-1 h-1 bg-primary rounded-full mt-1.5 shrink-0" />
                      AI-powered diagnostic tools for disease detection
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1 h-1 bg-primary rounded-full mt-1.5 shrink-0" />
                      Wearable IoT devices for patient monitoring
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1 h-1 bg-primary rounded-full mt-1.5 shrink-0" />
                      Healthcare data analytics and management systems
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1 h-1 bg-primary rounded-full mt-1.5 shrink-0" />
                      Patented dental implant and diabetic foot ulcer detection technology
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-panel">
                <CardContent>
                  <h3 className="text-sm font-medium mb-2 text-foreground">
                    Industrial IoT and Sensor Networks
                  </h3>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li className="flex items-start gap-2">
                      <span className="w-1 h-1 bg-primary rounded-full mt-1.5 shrink-0" />
                      Smart factory automation and monitoring
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1 h-1 bg-primary rounded-full mt-1.5 shrink-0" />
                      Energy-efficient wireless sensor networks
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1 h-1 bg-primary rounded-full mt-1.5 shrink-0" />
                      Real-time data analytics for process optimization
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1 h-1 bg-primary rounded-full mt-1.5 shrink-0" />
                      Collaborations with IBM, TE Connectivity, Schneider Electric
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* International & Professional */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* International */}
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary mb-2">
                  International
                </p>
                <h2 className="text-xl font-medium mb-6 text-foreground tracking-tight">
                  Global Engagement
                </h2>
                <Card className="h-full bg-panel">
                  <CardContent>
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-10 h-10 bg-primary/10 flex items-center justify-center shrink-0">
                        <GlobeIcon strokeWidth={2} className="size-5 text-primary" />
                      </div>
                      <ul className="space-y-2 text-xs text-muted-foreground">
                        <li>Visiting Professor, ESIGELEC, France (since 2006)</li>
                        <li>PhD Examiner, University of Rouen, France</li>
                        <li>
                          Technology Commercialization Training, IC2 Institute, University of Texas,
                          Austin (2010)
                        </li>
                        <li>
                          Global Forum on Innovation & Technology Entrepreneurship, Helsinki (2011)
                        </li>
                        <li>Collaboration with TU Eindhoven, Netherlands (2007-2010)</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Professional */}
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary mb-2">
                  Professional
                </p>
                <h2 className="text-xl font-medium mb-6 text-foreground tracking-tight">
                  Activities & Memberships
                </h2>
                <Card className="h-full bg-panel">
                  <CardContent>
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-10 h-10 bg-primary/10 flex items-center justify-center shrink-0">
                        <UserGroupIcon strokeWidth={2} className="size-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-foreground mb-2">Memberships</h4>
                        <ul className="space-y-1 text-xs text-muted-foreground mb-4">
                          <li>Senior Member, IEEE</li>
                          <li>Chair, IEEE Mangalore Subsection (2019)</li>
                          <li>Past Execom Member, IEEE Bangalore Section</li>
                          <li>Life Member, ISTE and Systems Society of India</li>
                        </ul>
                        <h4 className="text-sm font-medium text-foreground mb-2">Advisory Roles</h4>
                        <ul className="space-y-1 text-xs text-muted-foreground">
                          <li>Subject Expert for UPSC (IAS/IPS/IFS selection)</li>
                          <li>Subject Expert, Goa Public Service Commission</li>
                          <li>Reviewer, IEEE Transactions on Video Processing</li>
                          <li>Chaired sessions in 20+ International Conferences</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Funding */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary mb-2">
              Support
            </p>
            <h2 className="text-xl font-medium mb-6 text-foreground tracking-tight">
              Research Funding
            </h2>

            <Card className="bg-panel">
              <CardContent>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center shrink-0">
                    <DollarCircleIcon strokeWidth={2} className="size-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Established the Technology Business Incubator at MIT, MAHE with a grant of{" "}
                      <span className="text-foreground font-medium">Rs.5 Crores</span> from DST,
                      Govt. of India, and MAHE. Secured multiple research grants from:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "BIRAC",
                        "DST",
                        "IBM",
                        "TE Connectivity",
                        "Schneider Electric",
                        "AICTE",
                      ].map((org) => (
                        <span
                          key={org}
                          className="px-3 py-1 bg-muted dark:bg-white/10 text-xs text-muted-foreground"
                        >
                          {org}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="max-w-2xl mx-auto text-center">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary mb-2">
              Contact
            </p>
            <h2 className="text-2xl font-medium mb-4 text-foreground tracking-tight">
              Connect with Dr. Manohara Pai
            </h2>
            <p className="text-sm text-muted-foreground mb-6">
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
                  <Mail01Icon strokeWidth={2} className="size-4" />
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

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
import { getSortedProjectsData, ProjectFrontmatter } from "@/lib/projects";
import { getSortedEventsData, EventFrontmatter } from "@/lib/events";

export default function Home() {
  const researchProjects: ProjectFrontmatter[] = getSortedProjectsData('current');
  const completedProjects: ProjectFrontmatter[] = getSortedProjectsData('completed');
  const upcomingEvents: EventFrontmatter[] = getSortedEventsData();

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm border-b border-neutral-200/50 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-semibold text-neutral-900">
            Dr. TMA Pai Endowment Chair, MAHE, Manipal
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#research"
              className="text-neutral-900 hover:text-neutral-600"
            >
              Research
            </Link>
            <Link
              href="#completed-research"
              className="text-neutral-900 hover:text-neutral-600"
            >
              Completed Research
            </Link>
            <Link
              href="#events"
              className="text-neutral-900 hover:text-neutral-600"
            >
              Events
            </Link>
            <Link
              href="#about"
              className="text-neutral-900 hover:text-neutral-600"
            >
              About
            </Link>
            <Button asChild className="bg-[#E8580C] text-white hover:bg-[#E8580C]/90">
              <Link href="/apply">Apply Now</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-neutral-900">
                  Advancing Research Through Industry Collaboration
                </h1>
                <p className="text-neutral-600 text-lg mb-8">
                  Join us in pushing the boundaries of innovation through
                  cutting-edge research projects and industry partnerships.
                </p>
                <div className="flex gap-4">
                  <Button
                    size="lg"
                    asChild
                    className="bg-[#E8580C] hover:bg-[#E8580C]/90 text-white"
                  >
                    <Link href="/apply">Apply for Research</Link>
                  </Button>
                  <Button
                    size="lg"
                    asChild
                    className="bg-[#0f0f0f] hover:bg-neutral-800 text-white"
                  >
                    <Link href="#research">Explore Projects</Link>
                  </Button>
                </div>
              </div>
              <div className="relative aspect-square">
                <div className="absolute inset-0 bg-neutral-50 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chair Info Section */}
      <section className="py-16 bg-neutral-50 border-b border-neutral-200/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900">
              Dr. TMA Pai Endowment Chair, MAHE, Manipal
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold mb-6 text-[#E8580C]">
              Intelligent Technologies, Industry 4.0 & Sustainability
            </h3>
            <p className="text-neutral-700 text-lg">
              The Dr. TMA Pai Endowment Chair at Manipal Academy of Higher Education (MAHE) is dedicated to advancing the frontiers of Intelligent Technologies, Industry 4.0, and Sustainability. <br /><br />
              <strong>Intelligent Technologies</strong> refer to advanced digital systems such as artificial intelligence, machine learning, and smart automation that enable machines to learn, adapt, and make decisions. <strong>Industry 4.0</strong> represents the fourth industrial revolution, characterized by the integration of cyber-physical systems, the Internet of Things (IoT), and data-driven manufacturing for smarter, more connected industries. <strong>Sustainability</strong> focuses on developing solutions that meet present needs without compromising the ability of future generations to meet theirs, emphasizing environmental stewardship, resource efficiency, and social responsibility. <br /><br />
              In an era defined by rapid technological transformation, applied research in these domains is crucial for shaping a smarter, more sustainable future. Students and professors at MAHE are at the forefront of this movement, collaborating on innovative projects that bridge academia and industry, foster interdisciplinary learning, and drive impactful solutions for real-world challenges. Through this initiative, MAHE empowers the next generation of researchers and leaders to make meaningful contributions to society and industry alike.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 rounded-2xl bg-neutral-50/50">
                <div className="text-4xl font-bold mb-2 text-neutral-900">
                  20+
                </div>
                <div className="text-neutral-600">Active Research Projects</div>
              </div>
              <div className="text-center p-8 rounded-2xl bg-neutral-50/50">
                <div className="text-4xl font-bold mb-2 text-neutral-900">
                  50+
                </div>
                <div className="text-neutral-600">Industry Partners</div>
              </div>
              <div className="text-center p-8 rounded-2xl bg-neutral-50/50">
                <div className="text-4xl font-bold mb-2 text-neutral-900">
                  100+
                </div>
                <div className="text-neutral-600">Student Researchers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Projects Section */}
      <section id="research" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-black">
              Current Research Projects
            </h2>
            <Carousel className="w-full">
              <CarouselContent>
                {researchProjects.map((project, _index) => (
                  <CarouselItem
                    key={project.slug}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-1">
                      <div className="group relative h-full overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:shadow-xl">
                        <div className="p-6">
                          <div className="mb-4 flex items-center space-x-3">
                            <div className="relative h-12 w-12 overflow-hidden rounded-lg bg-neutral-100">
                              {project.companyLogo && (
                                <Image
                                  src={project.companyLogo}
                                  alt={project.companyName}
                                  fill
                                  className="object-contain"
                                />
                              )}
                            </div>
                            <div>
                              <h4 className="text-sm font-medium text-neutral-900">
                                {project.companyName}
                              </h4>
                              <p className="text-xs text-neutral-500">
                                {project.companyDescription}
                              </p>
                            </div>
                          </div>
                          <h3 className="text-xl font-semibold mb-3 text-neutral-900">
                            {project.title}
                          </h3>
                          <p className="text-neutral-600 mb-4">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="text-xs px-2 py-1 bg-neutral-100 rounded-full text-neutral-900"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <Button
                            asChild
                            size="sm"
                            className="bg-[#E8580C] hover:bg-[#E8580C]/90 text-white"
                          >
                            <Link href={`/research/${project.slug}`}>Learn More</Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Completed Research Projects Section */}
      <section id="completed-research" className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-black">
              Completed Research Projects
            </h2>
            <Carousel className="w-full">
              <CarouselContent>
                {completedProjects.map((project, _index) => (
                  <CarouselItem
                    key={project.slug}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-1">
                      <div className="group relative h-full overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:shadow-xl">
                        <div className="p-6">
                          <div className="mb-4 flex items-center space-x-3">
                            <div className="relative h-12 w-12 overflow-hidden rounded-lg bg-neutral-100">
                              {project.companyLogo && (
                                <Image
                                  src={project.companyLogo}
                                  alt={project.companyName}
                                  fill
                                  className="object-contain"
                                />
                              )}
                            </div>
                            <div>
                              <h4 className="text-sm font-medium text-neutral-900">
                                {project.companyName}
                              </h4>
                              <p className="text-xs text-neutral-500">
                                {project.companyDescription}
                              </p>
                            </div>
                          </div>
                          <h3 className="text-xl font-semibold mb-3 text-neutral-900">
                            {project.title}
                          </h3>
                          <p className="text-neutral-600 mb-4">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="text-xs px-2 py-1 bg-neutral-100 rounded-full text-neutral-900"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <div className="flex items-center justify-between">
                            <Button
                              asChild
                              size="sm"
                              className="bg-[#E8580C] hover:bg-[#E8580C]/90 text-white"
                            >
                              <Link href={`/research/${project.slug}`}>View Results</Link>
                            </Button>
                            <span className="text-xs text-neutral-500">
                              Completed: {new Date(project.completionDate ?? 0).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-black">
              Our Industry Partners
              <span className="block text-base text-center mt-3 text-neutral-600">Collaborating with leading companies across multiple sectors</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-10">
              {[
                {
                  name: "HealthTech Solutions",
                  description: "Healthcare Technology",
                  type: "Healthcare",
                  logo: "/companies/healthtech.svg",
                  color: "#0078D7", // Blue
                },
                {
                  name: "Schneider Electric",
                  description: "Energy Management & Automation",
                  type: "Energy",
                  logo: "/companies/greenpower.svg",
                  color: "#3CB043", // Green for Schneider Electric
                },
                {
                  name: "UrbanTech",
                  description: "Smart City Solutions",
                  type: "Infrastructure",
                  logo: "/companies/urbantech.svg",
                  color: "#FF5733", // Orange/Red
                },
                {
                  name: "AMD",
                  description: "Semiconductor Manufacturing",
                  type: "Technology",
                  logo: "/companies/dataflow.svg",
                  color: "#E40046", // Red for AMD
                },
                {
                  name: "IBM",
                  description: "Cloud Computing & AI",
                  type: "Technology",
                  logo: "/companies/healthtech.svg",
                  color: "#1F70C1", // IBM Blue
                },
                {
                  name: "Siemens",
                  description: "Industrial Automation",
                  type: "Manufacturing",
                  logo: "/companies/greenpower.svg",
                  color: "#009999", // Teal
                },
                {
                  name: "Nvidia",
                  description: "AI & High-Performance Computing",
                  type: "Technology",
                  logo: "/companies/urbantech.svg",
                  color: "#76B900", // Nvidia Green
                },
                {
                  name: "Intel",
                  description: "Computing Innovation",
                  type: "Technology",
                  logo: "/companies/dataflow.svg",
                  color: "#0071C5", // Intel Blue
                },
              ].map((company, index) => (
                <div key={index} className="group">
                  <div 
                    className="relative aspect-square overflow-hidden rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]"
                    style={{ borderTop: `3px solid ${company.color}`, borderBottom: `1px solid ${company.color}20` }}
                  >
                    <div className="flex h-full flex-col items-center justify-center text-center">
                      <div 
                        className="mb-3 h-16 w-16 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                        style={{ backgroundColor: `${company.color}15` }}
                      >
                        <Image
                          src={company.logo}
                          alt={company.name}
                          width={64}
                          height={64}
                          className="object-contain"
                        />
                      </div>
                      <h3 
                        className="text-lg font-bold mb-1 transition-all duration-300 group-hover:translate-y-[-2px]"
                        style={{ color: company.color }}
                      >
                        {company.name}
                      </h3>
                      <div 
                        className="text-xs mb-2 px-2 py-1 rounded-full inline-block"
                        style={{ 
                          backgroundColor: `${company.color}15`,
                          color: company.color
                        }}
                      >
                        {company.type}
                      </div>
                      <p className="text-sm text-neutral-600 transition-opacity duration-300 group-hover:opacity-80">
                        {company.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Button className="bg-[#E8580C] hover:bg-[#E8580C]/90 text-white transition-transform duration-300 hover:scale-105">
                View all industry partners
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-black">
              Upcoming Events
            </h2>
            <Carousel className="w-full">
              <CarouselContent>
                {upcomingEvents.map((event, _index) => (
                  <CarouselItem
                    key={event.slug}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-1">
                      <div className="overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:shadow-xl">
                        <div className="relative aspect-[16/9] w-full">
                          {event.image && (
                            <Image
                              src={event.image}
                              alt={event.title}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                          )}
                        </div>
                        <div className="p-6">
                          <div className="text-sm text-neutral-500 mb-2">
                            {event.displayDate}
                          </div>
                          <h3 className="text-xl font-semibold mb-3 text-neutral-900">
                            {event.title}
                          </h3>
                          <p className="text-neutral-600 mb-4">
                            {event.description}
                          </p>
                          <Button 
                            asChild
                            size="sm"
                            className="bg-[#E8580C] text-white hover:bg-[#E8580C]/90"
                          >
                            <Link href={`/events/${event.slug}`}>Learn More</Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center p-12 rounded-2xl bg-neutral-50/50">
            <h2 className="text-3xl font-bold mb-6 text-neutral-900">
              Ready to Join Our Research Community?
            </h2>
            <p className="text-neutral-600 text-lg mb-8">
              Apply now to participate in cutting-edge research projects and
              collaborate with industry leaders.
            </p>
            <Button size="lg" asChild className="bg-[#E8580C] hover:bg-[#E8580C]/90 text-white">
              <Link
                href="/apply"
              >
                Apply Now
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-neutral-200/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-neutral-900">
                Contact
              </h3>
              <p className="text-neutral-600">
                Email: endowment@example.com
                <br />
                Phone: +91 123 456 7890
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-neutral-900">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/about"
                    className="text-neutral-600 hover:text-neutral-900"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/research"
                    className="text-neutral-600 hover:text-neutral-900"
                  >
                    Research
                  </Link>
                </li>
                <li>
                  <Link
                    href="/events"
                    className="text-neutral-600 hover:text-neutral-900"
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-neutral-600 hover:text-neutral-900"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-neutral-900">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                <Link href="#" className="text-neutral-600 hover:text-accent">
                  LinkedIn
                </Link>
                <Link href="#" className="text-neutral-600 hover:text-accent">
                  Twitter
                </Link>
                <Link href="#" className="text-neutral-600 hover:text-accent">
                  Facebook
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-neutral-200/50 text-center text-neutral-600">
            <p>
              &copy; {new Date().getFullYear()} Dr. TMA Pai Endowment Chair, MAHE, Manipal. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

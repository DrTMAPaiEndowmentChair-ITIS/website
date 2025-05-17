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

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm border-b border-neutral-200/50 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-semibold text-neutral-900">
            Dr. TMA Pai Endowment Chair
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#research" className="text-neutral-900 hover:text-neutral-600">Research</Link>
            <Link href="#events" className="text-neutral-900 hover:text-neutral-600">Events</Link>
            <Link href="#about" className="text-neutral-900 hover:text-neutral-600">About</Link>
            <Button variant="outline" asChild>
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
                  Join us in pushing the boundaries of innovation through cutting-edge research projects and industry partnerships.
                </p>
                <div className="flex gap-4">
                  <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-white">
                    <Link href="/apply">Apply for Research</Link>
                  </Button>
                  <Button size="lg" asChild className="bg-[#0f0f0f] hover:bg-neutral-800 text-white">
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

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 rounded-2xl bg-neutral-50/50">
                <div className="text-4xl font-bold mb-2 text-neutral-900">20+</div>
                <div className="text-neutral-600">Active Research Projects</div>
              </div>
              <div className="text-center p-8 rounded-2xl bg-neutral-50/50">
                <div className="text-4xl font-bold mb-2 text-neutral-900">50+</div>
                <div className="text-neutral-600">Industry Partners</div>
              </div>
              <div className="text-center p-8 rounded-2xl bg-neutral-50/50">
                <div className="text-4xl font-bold mb-2 text-neutral-900">100+</div>
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
            <h2 className="text-3xl font-bold mb-12 text-center text-black">Current Research Projects</h2>
            <Carousel className="w-full">
              <CarouselContent>
                {[
                  {
                    title: "AI in Healthcare",
                    description: "Developing AI solutions for early disease detection and diagnosis.",
                    tags: ["Machine Learning", "Healthcare", "AI"],
                    company: {
                      name: "HealthTech Solutions",
                      logo: "/companies/healthtech.svg",
                      description: "Leading healthcare technology provider"
                    }
                  },
                  {
                    title: "Sustainable Energy",
                    description: "Research on renewable energy systems and smart grid technologies.",
                    tags: ["Energy", "Sustainability", "IoT"],
                    company: {
                      name: "GreenPower Systems",
                      logo: "/companies/greenpower.svg",
                      description: "Renewable energy innovation leader"
                    }
                  },
                  {
                    title: "IoT & Smart Cities",
                    description: "Building intelligent systems for urban infrastructure management.",
                    tags: ["IoT", "Smart Cities", "Infrastructure"],
                    company: {
                      name: "UrbanTech",
                      logo: "/companies/urbantech.svg",
                      description: "Smart city solutions provider"
                    }
                  },
                ].map((project, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <div className="group relative h-full overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:shadow-xl">
                        <div className="p-6">
                          <div className="mb-4 flex items-center space-x-3">
                            <div className="relative h-12 w-12 overflow-hidden rounded-lg bg-neutral-100">
                              <Image
                                src={project.company.logo}
                                alt={project.company.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <h4 className="text-sm font-medium text-neutral-900">{project.company.name}</h4>
                              <p className="text-xs text-neutral-500">{project.company.description}</p>
                            </div>
                          </div>
                          <h3 className="text-xl font-semibold mb-3 text-neutral-900">{project.title}</h3>
                          <p className="text-neutral-600 mb-4">{project.description}</p>
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
                          <Button size="sm" className="bg-accent hover:bg-accent/90 text-white">Learn More</Button>
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
            <h2 className="text-3xl font-bold mb-12 text-center text-black">Our Industry Partners</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "HealthTech Solutions",
                  description: "Healthcare Technology",
                  logo: "/companies/healthtech.svg"
                },
                {
                  name: "GreenPower Systems",
                  description: "Renewable Energy",
                  logo: "/companies/greenpower.svg"
                },
                {
                  name: "UrbanTech",
                  description: "Smart City Solutions",
                  logo: "/companies/urbantech.svg"
                },
                {
                  name: "DataFlow Analytics",
                  description: "Data Science & AI",
                  logo: "/companies/dataflow.svg"
                }
              ].map((company, index) => (
                <div key={index} className="group">
                  <div className="relative aspect-square overflow-hidden rounded-xl bg-white p-6 shadow-lg transition-all hover:shadow-xl">
                    <div className="flex h-full flex-col items-center justify-center text-center">
                      <div className="mb-4 h-16 w-16 rounded-lg bg-neutral-100 flex items-center justify-center">
                        <Image
                          src={company.logo}
                          alt={company.name}
                          width={64}
                          height={64}
                          className="object-contain"
                        />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{company.name}</h3>
                      <p className="text-sm text-neutral-600">{company.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-black">Upcoming Events</h2>
            <Carousel className="w-full">
              <CarouselContent>
                {[
                  {
                    date: "June 15, 2024",
                    title: "Research Symposium 2024",
                    description: "Join us for a day of presentations and discussions on cutting-edge research projects.",
                    image: "/events/symposium.jpg",
                  },
                  {
                    date: "July 1-5, 2024",
                    title: "Summer Workshop Series",
                    description: "Hands-on workshops on emerging technologies and research methodologies.",
                    image: "/events/workshop.jpg",
                  },
                  {
                    date: "August 10, 2024",
                    title: "Industry Partner Meet",
                    description: "Networking event with our industry partners and research collaborators.",
                    image: "/events/partner-meet.jpg",
                  },
                ].map((event, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <div className="overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:shadow-xl">
                        <div className="relative aspect-[16/9] w-full">
                          <Image
                            src={event.image}
                            alt={event.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </div>
                        <div className="p-6">
                          <div className="text-sm text-neutral-500 mb-2">{event.date}</div>
                          <h3 className="text-xl font-semibold mb-3 text-neutral-900">{event.title}</h3>
                          <p className="text-neutral-600 mb-4">{event.description}</p>
                          <Button variant="outline" size="sm">Learn More</Button>
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
            <h2 className="text-3xl font-bold mb-6 text-neutral-900">Ready to Join Our Research Community?</h2>
            <p className="text-neutral-600 text-lg mb-8">
              Apply now to participate in cutting-edge research projects and collaborate with industry leaders.
            </p>
            <Button size="lg" asChild>
              <Link href="/apply" className="bg-accent hover:bg-accent/90 text-accent-foreground">Apply Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-neutral-200/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-neutral-900">Contact</h3>
              <p className="text-neutral-600">
                Email: endowment@example.com<br />
                Phone: +91 123 456 7890
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-neutral-900">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-neutral-600 hover:text-neutral-900">About</Link></li>
                <li><Link href="/research" className="text-neutral-600 hover:text-neutral-900">Research</Link></li>
                <li><Link href="/events" className="text-neutral-600 hover:text-neutral-900">Events</Link></li>
                <li><Link href="/contact" className="text-neutral-600 hover:text-neutral-900">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-neutral-900">Follow Us</h3>
              <div className="flex space-x-4">
                <Link href="#" className="text-neutral-600 hover:text-accent">LinkedIn</Link>
                <Link href="#" className="text-neutral-600 hover:text-accent">Twitter</Link>
                <Link href="#" className="text-neutral-600 hover:text-accent">Facebook</Link>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-neutral-200/50 text-center text-neutral-600">
            <p>&copy; {new Date().getFullYear()} Dr. TMA Pai Endowment Chair. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import ImageCarousel from "@/components/ui/ImageCarousel";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Dr. Manohara Pai MM | Chairperson | Dr. TMA Pai Endowment Chair",
  description:
    "Learn about Dr. Manohara Pai MM, an accomplished academic with over 35 years of experience in industry, research, and teaching.",
};

export default function ChairpersonPage() {
  const patentsAndAwards = [
    {
      image: "/chairperson/patents/NTTA.jpeg",
      caption: "National Technical Teachers Award (NTTA 2022)",
      objectFit: "contain",
    },
    {
      image: "/chairperson/patents/MPAward.jpg",
      caption:
        "Dr. Manohar Pai M, Professor, Department of Information Communication Technology (ICT) has received the prestigious National Technical Best Teacher award from AICTE",
      objectFit: "contain",
    },
    {
      image: "/chairperson/patents/newscoverage.png",
      caption:
        "Dr. Manohar Pai M, Professor, Department of Information Communication Technology (ICT) has received the prestigious National Technical Best Teacher award from AICTE",
      objectFit: "contain",
    },
    {
      image: "/chairperson/patents/InnovationPioneers.jpg",
      caption:
        "Award received from Minister of Science and Technology (Prithviraj Chavan) for mentoring innovation. The Secretary of Department of Science and Technology (Dr. T.Ramasami in the middle)",
      objectFit: "contain",
    },
    {
      image: "/chairperson/patents/AustinTX.jpg",
      caption:
        "Infodev Business Incubation Training(2011) and Intensive training on Incubation in Texas Austin, USA(2010)",
      objectFit: "contain",
    },
    {
      image: "/chairperson/patents/USPatent1.png",
      caption: "US Patent for Adaptive Routing in Wireless Networks",
      objectFit: "contain",
    },
    {
      image: "/chairperson/patents/USPatent2.png",
      caption: "US Patent for Image Processing and Analysis",
      objectFit: "contain",
    },
    {
      image: "/chairperson/patents/JapanesePatent.png",
      caption: "Japanese Patent",
      objectFit: "contain",
    },
    {
      image: "/chairperson/patents/Patent-OpticalFiber.jpeg",
      caption: "Patent for Optical Fiber Inserter Technology",
      objectFit: "contain",
    },
    {
      image: "/chairperson/patents/diabetic-ulcer.jpeg",
      caption: "Indian Patent for Diabetic Ulcer Detection Methodology",
      objectFit: "contain",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Universal Navigation */}
      <Navbar />

      {/* Hero Section with Photo */}
      <section className="pt-32 pb-16 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="order-2 md:order-1">
                <div className="inline-block px-4 py-2 bg-[#E8580C]/10 text-[#E8580C] rounded-full text-sm font-semibold mb-4">
                  Chairperson
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-neutral-900">
                  Dr. Manohara Pai M.M.
                </h1>
                <p className="text-xl font-medium text-[#E8580C] mb-4">
                  Senior Professor, Department of Information and Communication
                  Technology, MIT, Manipal
                </p>
                <p className="text-lg text-neutral-600 mb-6">
                  <a
                    href="mailto:drtmapaichair.itis@manipal.edu"
                    className="text-[#E8580C] hover:underline"
                  >
                    drtmapaichair.itis@manipal.edu
                  </a>
                </p>
                <div className="flex space-x-4 mb-8">
                  <a
                    href="https://researcher.manipal.edu/en/persons/manohara-m-m-pai#"
                    className="text-neutral-600 hover:text-[#E8580C]"
                  >
                    Manipal Pure
                  </a>
                  <a
                    href="https://orcid.org/0000-0003-2164-2945"
                    className="text-neutral-600 hover:text-[#E8580C]"
                  >
                    ORCID
                  </a>
                  <a
                    href="https://scholar.google.co.in/citations?user=Zr3-m3IAAAAJ&hl=en"
                    className="text-neutral-600 hover:text-[#E8580C]"
                  >
                    Google Scholar
                  </a>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative aspect-square w-full max-w-md mx-auto overflow-hidden rounded-2xl border-8 border-white shadow-xl bg-neutral-100">
                  <Image
                    src="/chairperson/image.jpg"
                    alt="Dr. Manohara Pai MM"
                    className="object-cover"
                    height={800}
                    width={800}
                    priority
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                    {/* Empty div to create overlay effect */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-neutral-900 text-center">
              About Dr. Manohara Pai M.M.
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="lead text-xl text-neutral-700 mb-6 text-justify">
                Dr. Manohara Pai M.M. is a distinguished academic leader with
                over 33 years of experience spanning industry, research, and
                education. As a Senior Professor in the Department of
                Information and Communication Technology at Manipal Institute of
                Technology (MIT), he has been instrumental in shaping technical
                education and research innovation at Manipal Academy of Higher
                Education (MAHE).
              </p>

              <p className="text-lg text-neutral-700 mb-6 text-justify">
                Throughout his illustrious career, Dr. Pai has made numerous
                significant contributions to MAHE, including establishing the
                Department of Information and Communication Technology, setting
                up the Innovation Centre, and founding the MU Technology
                Business Incubator. His leadership has fostered a culture of
                innovation and entrepreneurship, resulting in numerous startups
                and industry collaborations.
              </p>

              <p className="text-lg text-neutral-700 text-justify">
                Dr. Pai currently serves as the Director of the Centre for
                Artificial Intelligence at MIT, MAHE, where he leads a team of
                researchers working on cutting-edge technologies. He is also the
                holder of the prestigious Dr. TMA Pai Endowment Chair in
                Intelligent Technologies, Industry 4.0 and Sustainability
                (2023-2025), recognizing his expertise and contributions to
                these fields. His work bridges academic research with real-world
                applications, creating technologies that address societal
                challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Patents and Awards Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-neutral-900 text-center">
              Awards and Patents
            </h2>
            <ImageCarousel items={patentsAndAwards} />
          </div>
        </div>
      </section>

      {/* Administrative Positions & Academic Background Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10">
              {/* Administrative Positions */}
              <div>
                <h2 className="text-2xl font-bold mb-8 text-neutral-900">
                  Key Administrative Positions Held
                </h2>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl shadow-md border border-neutral-100">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-[#E8580C]/10 text-[#E8580C] rounded-lg flex items-center justify-center mr-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-neutral-900">
                        Associate Director (Research and Consultancy), MIT, MAHE
                      </h3>
                    </div>
                    <p className="text-sm text-neutral-500 mb-2">
                      Jan 2017 - Dec 2019
                    </p>
                    <ul className="text-neutral-700 space-y-2 pl-5 text-sm">
                      <li className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-[#E8580C]/70 before:rounded-full">
                        Responsible for enhancing the number of publications of
                        the Institute from 347 to 770.
                      </li>
                      <li className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-[#E8580C]/70 before:rounded-full">
                        The number of PhD registrations enhanced to more than
                        200.
                      </li>
                      <li className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-[#E8580C]/70 before:rounded-full">
                        Reforms in PhD progress monitoring process.
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-md border border-neutral-100">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-[#E8580C]/10 text-[#E8580C] rounded-lg flex items-center justify-center mr-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-neutral-900">
                        Associate Director (Innovation Center), MIT, MAHE
                      </h3>
                    </div>
                    <p className="text-sm text-neutral-500 mb-2">
                      March 2008 - Dec 2016
                    </p>
                    <ul className="text-neutral-700 space-y-2 pl-5 text-sm">
                      <li className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-[#E8580C]/70 before:rounded-full">
                        Established Central Instrumentation Facility inaugurated
                        by Dr. Anil Kakodkar.
                      </li>
                      <li className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-[#E8580C]/70 before:rounded-full">
                        Established Central Computing facility with
                        High-Performance Computing.
                      </li>
                      <li className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-[#E8580C]/70 before:rounded-full">
                        Started an annual event &apos;Innovation Day&apos;.
                      </li>
                      <li className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-[#E8580C]/70 before:rounded-full">
                        Established the Technology Business Incubator (grant of
                        ₹5 Crores from DST & MAHE).
                      </li>
                      <li className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-[#E8580C]/70 before:rounded-full">
                        Established Intellectual Property services (&gt;50
                        patents filed, &gt;10 granted).
                      </li>
                      <li className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-[#E8580C]/70 before:rounded-full">
                        Received innovation award from Mr. Prithviraj Chavan
                        (then Minister of S&T).
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-md border border-neutral-100">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-[#E8580C]/10 text-[#E8580C] rounded-lg flex items-center justify-center mr-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                          />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-neutral-900">
                        Head of Department of ICT, MIT, MAHE
                      </h3>
                    </div>
                    <p className="text-sm text-neutral-500 mb-2">
                      May 2001 - Jan 2008
                    </p>
                    <ul className="text-neutral-700 space-y-2 pl-5 text-sm">
                      <li className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-[#E8580C]/70 before:rounded-full">
                        Established the new Department with B.Tech(IT) and MCA
                        programs.
                      </li>
                      <li className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-[#E8580C]/70 before:rounded-full">
                        Started M.Tech(Computer Networking and Engineering) in
                        2005.
                      </li>
                      <li className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-[#E8580C]/70 before:rounded-full">
                        Started M.Tech(Software Engineering) in 2006 with TU
                        Eindhoven, Netherlands.
                      </li>
                      <li className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-[#E8580C]/70 before:rounded-full">
                        Started an annual event &apos;p.i.n.g&apos;.
                      </li>
                      <li className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-[#E8580C]/70 before:rounded-full">
                        Organized International Conference ICICOT 07 for
                        MIT&apos;s Golden Jubilee.
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-md border border-neutral-100">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-[#E8580C]/10 text-[#E8580C] rounded-lg flex items-center justify-center mr-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-neutral-900">
                        CEO, Manipal University Technology Business Incubator
                        (MUTBI)
                      </h3>
                    </div>
                    <p className="text-sm text-neutral-500 mb-2">
                      April 2010 - June 2016
                    </p>
                    <ul className="text-neutral-700 space-y-2 pl-5 text-sm">
                      <li className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-[#E8580C]/70 before:rounded-full">
                        Set up MUTBI Society and was founder Secretary.
                      </li>
                      <li className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-[#E8580C]/70 before:rounded-full">
                        Set up 16,000 sq. ft. incubation facility for 10
                        start-ups & 10 pre-incubatees.
                      </li>
                      <li className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-[#E8580C]/70 before:rounded-full">
                        Created a corpus of ₹2 crores as seed support grant.
                      </li>
                      <li className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-[#E8580C]/70 before:rounded-full">
                        Started &apos;Provenance&apos; Business plan competition
                        (awards of ₹10 lakhs).
                      </li>
                      <li className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-[#E8580C]/70 before:rounded-full">
                        Industrial Collaboration for Incubation supported by
                        TE-Connectivity.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Academic Background */}
              <div>
                <h2 className="text-2xl font-bold mb-8 text-neutral-900">
                  Academic Background
                </h2>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl shadow-md border border-neutral-100">
                    <div className="flex items-center mb-5">
                      <div className="w-10 h-10 bg-[#E8580C]/10 text-[#E8580C] rounded-lg flex items-center justify-center mr-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M12 14l9-5-9-5-9 5 9 5z" />
                          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                          />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-neutral-900">
                        Education
                      </h3>
                    </div>
                    <div className="space-y-5">
                      <div className="pl-5 border-l-2 border-[#E8580C]/30">
                        <div className="text-sm text-[#E8580C] font-medium mb-1">
                          2001
                        </div>
                        <h4 className="font-semibold text-neutral-900 mb-1">
                          Ph.D. in Computer Science & Engineering
                        </h4>
                        <p className="text-neutral-600 text-sm">
                          University of Mysore
                        </p>
                      </div>
                      <div className="pl-5 border-l-2 border-[#E8580C]/30">
                        <div className="text-sm text-[#E8580C] font-medium mb-1">
                          1992
                        </div>
                        <h4 className="font-semibold text-neutral-900 mb-1">
                          M.Tech in Digital Electronics and Advanced
                          Communications
                        </h4>
                        <p className="text-neutral-600 text-sm">
                          NITK, Surathkal
                        </p>
                      </div>
                      <div className="pl-5 border-l-2 border-[#E8580C]/30">
                        <div className="text-sm text-[#E8580C] font-medium mb-1">
                          1987
                        </div>
                        <h4 className="font-semibold text-neutral-900 mb-1">
                          B.E. in Electronics & Communication
                        </h4>
                        <p className="text-neutral-600 text-sm">SJCE, Mysore</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-md border border-neutral-100">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-[#E8580C]/10 text-[#E8580C] rounded-lg flex items-center justify-center mr-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-neutral-900">
                        Professional Experience & Academic Positions
                      </h3>
                    </div>
                    <ul className="text-neutral-700 space-y-2 pl-5">
                      <li className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-3 before:w-3 before:h-0.5 before:bg-[#E8580C]/70">
                        33 years of experience in Administration, Teaching,
                        Research, Industrial Collaborations, and Consultancy.
                      </li>
                      <li className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-3 before:w-3 before:h-0.5 before:bg-[#E8580C]/70">
                        <span className="font-medium">Senior Professor:</span>{" "}
                        June 2023 - Till date
                      </li>
                      <li className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-3 before:w-3 before:h-0.5 before:bg-[#E8580C]/70">
                        <span className="font-medium">Professor:</span> Oct.
                        2001 - June, 2023
                      </li>
                      <li className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-3 before:w-3 before:h-0.5 before:bg-[#E8580C]/70">
                        <span className="font-medium">Reader:</span> Sept. 1995
                        - Oct, 2001
                      </li>
                      <li className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-3 before:w-3 before:h-0.5 before:bg-[#E8580C]/70">
                        <span className="font-medium">Lecturer:</span> Feb. 1992
                        - Sept, 1995
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-neutral-900">
              Key Achievements & Contributions
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {/* Achievement Card 1: Patents & Publications */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-neutral-100 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-[#E8580C]/10 text-[#E8580C] rounded-lg flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-neutral-900">
                  Patents & Publications
                </h3>
                <p className="text-neutral-700 mb-2 text-sm">
                  Holds <strong>10 granted patents</strong> (3 US, 1 Japan, 6
                  Indian). Selected patents include: US9616346B2, US9503511B2,
                  US8295280B2, JP5512889, IN280657.
                </p>
                <p className="text-neutral-700 mb-2 text-sm">
                  Received a <strong>Patenting Award of $8000</strong>.
                </p>
                <p className="text-neutral-700 text-sm">
                  Published <strong>156 papers</strong> in
                  national/international journals and conference proceedings.
                </p>
              </div>

              {/* Achievement Card 2: Academic Mentorship */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-neutral-100 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-[#E8580C]/10 text-[#E8580C] rounded-lg flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-neutral-900">
                  Academic Mentorship
                </h3>
                <p className="text-neutral-700 mb-2 text-sm">
                  Guided <strong>8 PhD students</strong> to completion.
                </p>
                <p className="text-neutral-700 mb-2 text-sm">
                  Currently guiding <strong>6 PhD students</strong>.
                </p>
                <p className="text-neutral-700 text-sm">
                  Guided <strong>81 M.Tech theses</strong>.
                </p>
                <p className="text-neutral-600 text-xs italic mt-2">
                  Many former students now hold leadership positions, continuing
                  his legacy of innovation.
                </p>
              </div>

              {/* Achievement Card 3: International Presence */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-neutral-100 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-[#E8580C]/10 text-[#E8580C] rounded-lg flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-neutral-900">
                  International Engagement
                </h3>
                <ul className="text-neutral-700 space-y-1 text-sm list-disc list-inside">
                  <li>Visiting Professor, ESIGELEC, France (since 2006).</li>
                  <li>PhD Examiner, University of Rouen, France.</li>
                  <li>
                    Technology Commercialization Training, IC2 Institute,
                    University of Texas, Austin (2010, Indo-US S&T Forum).
                  </li>
                  <li>
                    Attended Global Forum on Innovation & Technology
                    Entrepreneurship (Infodev), Helsinki (2011).
                  </li>
                  <li>Visited TU Eindhoven (2007-2010) for collaborations.</li>
                </ul>
              </div>
            </div>

            {/* Additional Achievements (Notable Career Milestones) */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-neutral-100 mb-12">
              <h3 className="text-2xl font-bold mb-6 text-neutral-900">
                Notable Career Milestones
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-[#E8580C]/10 text-[#E8580C] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1 text-neutral-900">
                      Founder Head, Dept. of ICT, MIT
                    </h4>
                    <p className="text-neutral-700 text-sm text-justify">
                      Established the Department of Information and
                      Communication Technology at MIT in 2001 and served as its
                      founder Head until 2008, introducing B.Tech(IT), MCA, and
                      specialized M.Tech programs.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-[#E8580C]/10 text-[#E8580C] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1 text-neutral-900">
                      Innovation & Entrepreneurship Ecosystem
                    </h4>
                    <p className="text-neutral-700 text-sm text-justify">
                      Founder Associate Director of the DST-supported Innovation
                      Centre (2008) and Founder CEO of Manipal University
                      Technology Business Incubator (MUTBI), fostering startups
                      and industry collaborations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-[#E8580C]/10 text-[#E8580C] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1 text-neutral-900">
                      Advanced Curriculum Development
                    </h4>
                    <p className="text-neutral-700 text-sm text-justify">
                      Introduced M.Tech in Communication and Networking
                      Engineering (2005) and a unique Dual Degree M.Tech in
                      Software Engineering in collaboration with TU Eindhoven,
                      Netherlands (2006).
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-[#E8580C]/10 text-[#E8580C] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1 text-neutral-900">
                      Director, Centre for Artificial Intelligence
                    </h4>
                    <p className="text-neutral-700 text-sm text-justify">
                      Currently leads the Centre for Artificial Intelligence at
                      MIT, MAHE, a hub for AI research, innovation, and industry
                      collaboration on real-world applications.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Books and Publications Highlight */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-neutral-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#E8580C]/10 text-[#E8580C] rounded-lg flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-neutral-900">
                  Authored Books
                </h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-neutral-200 rounded-xl p-5 bg-neutral-50/70">
                  <h4 className="font-semibold text-neutral-900 mb-2">
                    Advances in Information & Communication Technologies
                    ICICOT&apos;07
                  </h4>
                  <p className="text-neutral-700 text-sm">
                    Co-edited proceedings for the International Conference
                    (ICICOT 2007).
                  </p>
                </div>
                <div className="border border-neutral-200 rounded-xl p-5 bg-neutral-50/70">
                  <h4 className="font-semibold text-neutral-900 mb-2">
                    Scalable Video Coding using wavelet Transformation
                  </h4>
                  <p className="text-neutral-700 text-sm">
                    A specialized book on video coding techniques.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Funding & Recognition Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-neutral-900">
              Funding, Awards & Recognition
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Funding Card */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-neutral-100">
                <div className="w-16 h-16 bg-[#E8580C]/10 rounded-xl flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-[#E8580C]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-neutral-900">
                  Research Funding
                </h3>
                <p className="text-neutral-700 mb-6 text-justify">
                  Dr. Pai has been instrumental in securing significant research
                  funding. Notably, he established the Technology Business
                  Incubator at MIT, MAHE with a grant of{" "}
                  <strong>₹5 Crores</strong> from DST, Govt. of India, and MAHE.
                  He has also secured multiple grants from organizations
                  including:
                </p>
                <ul className="list-disc list-inside text-neutral-700 space-y-2 mb-4">
                  <li>BIRAC</li>
                  <li>Department of Science & Technology (DST)</li>
                  <li>IBM</li>
                  <li>TE Connectivity</li>
                  <li>Schneider Electric</li>
                </ul>
              </div>

              {/* Awards Card */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-neutral-100">
                <div className="w-16 h-16 bg-[#E8580C]/10 rounded-xl flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-[#E8580C]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-neutral-900">
                  Key Awards & Honors
                </h3>
                <div className="space-y-3">
                  <div className="bg-neutral-50 p-3 rounded-lg border border-neutral-200">
                    <h4 className="font-semibold text-[#E8580C] mb-1 text-sm">
                      Dr. TMA Pai Endowment Chair in Intelligent Technologies,
                      Industry 4.0 and Sustainability
                    </h4>
                    <p className="text-neutral-700 text-xs text-justify">
                      Awarded for 2023-2025 in recognition of expertise and
                      leadership.
                    </p>
                  </div>
                  <div className="bg-neutral-50 p-3 rounded-lg border border-neutral-200">
                    <h4 className="font-semibold text-[#E8580C] mb-1 text-sm">
                      National Technical Teachers Award (NTTA 2022)
                    </h4>
                    <p className="text-neutral-700 text-xs text-justify">
                      From AICTE, Ministry of Education, Govt. of India for
                      contributions to technical education.
                    </p>
                  </div>
                  <div className="bg-neutral-50 p-3 rounded-lg border border-neutral-200">
                    <h4 className="font-semibold text-[#E8580C] mb-1 text-sm">
                      Dr. TMA Pai Endowment Chair in Data Analytics and Cloud
                      Computing
                    </h4>
                    <p className="text-neutral-700 text-xs text-justify">
                      Awarded for 2011-2014 for contributions to the field.
                    </p>
                  </div>
                  <div className="bg-neutral-50 p-3 rounded-lg border border-neutral-200">
                    <h4 className="font-semibold text-[#E8580C] mb-1 text-sm">
                      Indigenous Dental Implants Technology Mentorship Award
                    </h4>
                    <p className="text-neutral-700 text-xs text-justify">
                      From Hon. Minister of Science & Technology
                      (IUSSTF-INTEL-DST, 2009).
                    </p>
                  </div>
                  <div className="bg-neutral-50 p-3 rounded-lg border border-neutral-200">
                    <h4 className="font-semibold text-[#E8580C] mb-1 text-sm">
                      Certified Trainer, Infodev, World Bank
                    </h4>
                    <p className="text-neutral-700 text-xs text-justify">
                      For Business Incubation and Technology Commercialization
                      (March 2012).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Activities & Memberships */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-neutral-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#E8580C]/10 text-[#E8580C] rounded-lg flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-neutral-900">
                  Professional Activities & Memberships
                </h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-neutral-800 mb-2">
                    Memberships:
                  </h4>
                  <ul className="list-disc list-inside text-neutral-700 space-y-1 text-sm">
                    <li>Senior Member, IEEE</li>
                    <li>Chair, IEEE Mangalore Subsection (2019)</li>
                    <li>Past Execom Member, IEEE Bangalore Section (2019)</li>
                    <li>
                      Life Member, ISTE (Indian Society for Technical Education)
                    </li>
                    <li>Life Member, Systems Society of India</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-neutral-800 mb-2">
                    Advisory & Review Roles:
                  </h4>
                  <ul className="list-disc list-inside text-neutral-700 space-y-1 text-sm">
                    <li>
                      Advisor & Subject Expert for UPSC (IAS/IPS/IFS selection)
                    </li>
                    <li>
                      Subject Expert & Advisor to Goa Public Service Commission
                    </li>
                    <li>Reviewer for IEEE Transactions on Video Processing</li>
                    <li>
                      Chaired sessions in over 20 International Conferences
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Interests Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-neutral-900">
              Research Interests & Expertise
            </h2>

            <p className="text-xl text-neutral-700 mb-4 text-center">
              Dr. Pai&apos;s primary research and expertise encompass:
            </p>
            <div className="text-center mb-8">
              <p className="text-neutral-600 text-lg">
                Computer Communication Networks, Wireless Adhoc Networks, Video
                Processing, <br />
                Data Analytics, Cloud Computing, Technology Commercialization,
                Patenting, and Mentoring.
              </p>
              <p className="text-xs text-neutral-500 mt-1">
                (Mentoring expertise certified by Infodev World Bank, Washington
                D.C.)
              </p>
            </div>

            <p className="text-lg text-neutral-700 mb-8 text-center">
              He focuses on developing innovative solutions in application areas
              including:
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
              {[
                {
                  name: "AI & ML Solutions",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  ),
                  color: "#E8580C",
                },
                {
                  name: "Healthcare Tech",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  ),
                  color: "#1E88E5",
                },
                {
                  name: "Video Processing Applications",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  ),
                  color: "#4CAF50",
                },
                {
                  name: "IIOT Solutions",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                      />
                    </svg>
                  ),
                  color: "#7B1FA2",
                },
                {
                  name: "Wireless Sensor & Adhoc Networks",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
                      />
                    </svg>
                  ),
                  color: "#FB8C00",
                },
                {
                  name: "GPS & Location Tech",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  ),
                  color: "#0097A7",
                },
                {
                  name: "Data Analytics",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  ),
                  color: "#FFB300",
                },
                {
                  name: "Cloud Computing",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                      />
                    </svg>
                  ),
                  color: "#1976D2",
                },
              ].map((interest, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl border border-neutral-200 bg-white flex flex-col items-center text-center hover:shadow-md transition-shadow"
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-3"
                    style={{
                      backgroundColor: `${interest.color}15`,
                      color: interest.color,
                    }}
                  >
                    {interest.icon}
                  </div>
                  <span
                    className="text-sm font-medium"
                    style={{ color: interest.color }}
                  >
                    {interest.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Detailed Research Areas */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-2xl shadow-md border border-neutral-100">
                <h3 className="text-xl font-bold mb-4 text-neutral-900">
                  AI and Healthcare Applications
                </h3>
                <p className="text-neutral-700 mb-4 text-justify">
                  Dr. Pai leads cutting-edge research at the intersection of AI
                  and healthcare, focusing on:
                </p>
                <ul className="list-disc list-inside text-neutral-700 space-y-2 mb-4">
                  <li>
                    Developing AI-powered diagnostic tools for early disease
                    detection
                  </li>
                  <li>
                    Creating wearable IoT devices for remote patient monitoring
                  </li>
                  <li>
                    Designing machine learning algorithms for healthcare data
                    analytics
                  </li>
                  <li>
                    Building cloud-based healthcare data management systems
                  </li>
                </ul>
                <p className="text-neutral-700 text-sm italic text-justify">
                  His team has developed patented healthcare innovations
                  including dental implant technology recognized by the Ministry
                  of Science and Technology.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md border border-neutral-100">
                <h3 className="text-xl font-bold mb-4 text-neutral-900">
                  Industrial IoT and Sensor Networks
                </h3>
                <p className="text-neutral-700 mb-4 text-justify">
                  With extensive expertise in IoT and sensor technologies, his
                  research includes:
                </p>
                <ul className="list-disc list-inside text-neutral-700 space-y-2 mb-4">
                  <li>Smart factory automation and monitoring systems</li>
                  <li>
                    Energy-efficient wireless sensor networks for industrial
                    applications
                  </li>
                  <li>Real-time data analytics for process optimization</li>
                  <li>
                    GPS and location-based services for logistics and
                    transportation
                  </li>
                </ul>
                <p className="text-neutral-700 text-sm italic text-justify">
                  His work has led to industry collaborations with global
                  partners like IBM, TE Connectivity, and Schneider Electric.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-2xl shadow-md border border-neutral-100">
                <h3 className="text-xl font-bold mb-4 text-neutral-900">
                  Data Analytics and Cloud Computing
                </h3>
                <p className="text-neutral-700 mb-4 text-justify">
                  As the holder of the Dr. TMA Pai Endowment Chair for Data
                  Analytics and Cloud Computing, Dr. Pai specializes in:
                </p>
                <ul className="list-disc list-inside text-neutral-700 space-y-2 mb-4">
                  <li>
                    Big data analytics frameworks for business intelligence
                  </li>
                  <li>Cloud-based solutions for data storage and processing</li>
                  <li>Security and privacy in cloud computing environments</li>
                  <li>Edge computing architectures for distributed systems</li>
                </ul>
                <p className="text-neutral-700 text-sm italic text-justify">
                  His research in this area has resulted in multiple patents and
                  technology transfers to industry partners.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md border border-neutral-100">
                <h3 className="text-xl font-bold mb-4 text-neutral-900">
                  Food Tech and Nutrition Informatics
                </h3>
                <p className="text-neutral-700 mb-4 text-justify">
                  Dr. Pai has pioneered innovative technologies in food and
                  nutrition:
                </p>
                <ul className="list-disc list-inside text-neutral-700 space-y-2 mb-4">
                  <li>
                    Nutrition analytics platforms for personalized diet planning
                  </li>
                  <li>Food quality assessment using computer vision</li>
                  <li>IoT-based supply chain monitoring for food safety</li>
                  <li>Sustainable food technologies aligned with SDG goals</li>
                </ul>
                <p className="text-neutral-700 text-sm italic text-justify">
                  Through these innovations, Dr. Pai contributes to addressing
                  global challenges in food security and nutrition.
                </p>
              </div>
            </div>

            <div className="bg-[#E8580C]/5 border border-[#E8580C]/20 rounded-xl p-6 text-center">
              <p className="text-lg text-neutral-700 mb-2 text-justify">
                Dr. Pai&apos;s work aligns with multiple Sustainable Development
                Goals (SDGs), showcasing his commitment to impactful and
                meaningful research.
              </p>
              <p className="text-neutral-700 text-justify">
                His research team has published <strong>156 papers</strong> and
                secured <strong>10 patents</strong> across these diverse
                domains, establishing him as a pioneer in technological
                innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center p-12 rounded-2xl bg-neutral-50/50">
            <h2 className="text-3xl font-bold mb-6 text-neutral-900">
              Connect with Dr. Manohara Pai
            </h2>
            <p className="text-neutral-600 text-lg mb-8">
              Interested in collaborative research or learning more about Dr.
              Pai&apos;s work?
            </p>
            <Button
              asChild
              size="lg"
              className="bg-[#E8580C] hover:bg-[#E8580C]/90 text-white"
            >
              <Link href="https://lttstore.com">Apply Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

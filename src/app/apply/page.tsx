import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Universal Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-neutral-900">
              Apply for Research
            </h1>
            <p className="text-neutral-600 text-lg mb-8 max-w-2xl mx-auto">
              Work on cutting-edge projects and research with industry partners.
              Fill out the application form below to get started.
            </p>
            <div className="flex gap-4 justify-center mb-12">
              <Button
                size="lg"
                asChild
                variant="outline"
                className="border-[#E8580C] text-[#E8580C] hover:bg-[#E8580C]/10"
              >
                <Link href="/#research">View Projects</Link>
              </Button>
              <Button
                size="lg"
                asChild
                variant="outline"
                className="border-[#E8580C] text-[#E8580C] hover:bg-[#E8580C]/10"
              >
                <Link href="/chairperson">Meet the Chairperson</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl border border-neutral-200 shadow-lg overflow-hidden">
              <div className="p-8 border-b border-neutral-200 bg-neutral-50/50">
                <h2 className="text-2xl font-bold text-neutral-900 mb-2">
                  Research Application Form
                </h2>
                <p className="text-neutral-600">
                  Please complete all required fields to submit your application
                  for our research programs.
                </p>
              </div>

              <div className="p-6">
                <div className="w-full overflow-hidden rounded-lg border border-neutral-200">
                  <iframe
                    width="100%"
                    height="800"
                    src="https://forms.office.com/r/kN5F0Qiee2?embed=true"
                    frameBorder="0"
                    marginWidth={0}
                    marginHeight={0}
                    style={{
                      border: "none",
                      maxWidth: "100%",
                      maxHeight: "100vh",
                    }}
                    allowFullScreen
                    title="Research Application Form"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-md border border-neutral-100">
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
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-neutral-900">
                  What to Expect
                </h3>
                <ul className="text-neutral-700 space-y-2">
                  <li>• Application review within 1-2 weeks</li>
                  <li>• Interview with research team leads</li>
                  <li>• Project assignment based on skills and interests</li>
                  <li>• Mentorship from industry experts</li>
                  <li>
                    • Access to cutting-edge research facilities and
                    computational capabilities
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-md border border-neutral-100">
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
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-neutral-900">
                  Need Help?
                </h3>
                <p className="text-neutral-700 mb-4">
                  If you have questions about the application process or our
                  research programs, please reach out.
                </p>
                <div className="text-sm text-neutral-600">
                  <p className="mb-2">
                    <strong>Email:</strong> drtmapaichair.itis@manipal.edu
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

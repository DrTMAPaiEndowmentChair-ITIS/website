import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ApplyPage() {
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
              href="/#research"
              className="text-neutral-900 hover:text-neutral-600"
            >
              Research
            </Link>
            <Link
              href="/#events"
              className="text-neutral-900 hover:text-neutral-600"
            >
              Events
            </Link>
            <Link
              href="/#about"
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

      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl font-bold mb-4 text-neutral-900">
                Apply for Research Projects
              </h1>
              <p className="text-neutral-600">
                We&apos;re looking for passionate researchers who want to make a
                difference.
              </p>
              <p className="text-neutral-600">
                Don&apos;t miss this opportunity to join our research community.
              </p>
            </div>

            <form className="space-y-8">
              {/* Personal Information */}
              <div className="p-8 rounded-2xl bg-neutral-50/50">
                <h2 className="text-xl font-semibold mb-6 text-neutral-900">
                  Personal Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-neutral-700 mb-2"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-3 py-2 bg-white border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-900 text-neutral-900"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-neutral-700 mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-3 py-2 bg-white border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-900 text-neutral-900"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="p-8 rounded-2xl bg-neutral-50/50">
                <h2 className="text-xl font-semibold mb-6 text-neutral-900">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-neutral-700 mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-3 py-2 bg-white border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-900 text-neutral-900"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-neutral-700 mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-3 py-2 bg-white border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-900 text-neutral-900"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Academic Information */}
              <div className="p-8 rounded-2xl bg-neutral-50/50">
                <h2 className="text-xl font-semibold mb-6 text-neutral-900">
                  Academic Information
                </h2>
                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="university"
                      className="block text-sm font-medium text-neutral-700 mb-2"
                    >
                      University/College
                    </label>
                    <input
                      type="text"
                      id="university"
                      name="university"
                      className="w-full px-3 py-2 bg-white border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-900 text-neutral-900"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="degree"
                      className="block text-sm font-medium text-neutral-700 mb-2"
                    >
                      Current Degree Program
                    </label>
                    <select
                      id="degree"
                      name="degree"
                      className="w-full px-3 py-2 bg-white border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-900 text-neutral-900"
                      required
                    >
                      <option value="">Select your degree</option>
                      <option value="bachelors">Bachelor&apos;s</option>
                      <option value="masters">Master&apos;s</option>
                      <option value="phd">PhD</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="major"
                      className="block text-sm font-medium text-neutral-700 mb-2"
                    >
                      Major/Field of Study
                    </label>
                    <input
                      type="text"
                      id="major"
                      name="major"
                      className="w-full px-3 py-2 bg-white border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-900 text-neutral-900"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Project Selection */}
              <div className="p-8 rounded-2xl bg-neutral-50/50">
                <h2 className="text-xl font-semibold mb-6 text-neutral-900">
                  Project Selection
                </h2>
                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="project"
                      className="block text-sm font-medium text-neutral-700 mb-2"
                    >
                      Select Research Project
                    </label>
                    <select
                      id="project"
                      name="project"
                      className="w-full px-3 py-2 bg-white border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-900 text-neutral-900"
                      required
                    >
                      <option value="">Select a project</option>
                      <option value="ai-healthcare">AI in Healthcare</option>
                      <option value="sustainable-energy">
                        Sustainable Energy
                      </option>
                      <option value="iot-smart-cities">
                        IoT & Smart Cities
                      </option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="motivation"
                      className="block text-sm font-medium text-neutral-700 mb-2"
                    >
                      Why are you interested in this project?
                    </label>
                    <textarea
                      id="motivation"
                      name="motivation"
                      rows={4}
                      className="w-full px-3 py-2 bg-white border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-900 text-neutral-900"
                      required
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Resume Upload */}
              <div className="p-8 rounded-2xl bg-neutral-50/50">
                <h2 className="text-xl font-semibold mb-6 text-neutral-900">
                  Resume/CV
                </h2>
                <div>
                  <label
                    htmlFor="resume"
                    className="block text-sm font-medium text-neutral-700 mb-2"
                  >
                    Upload your Resume/CV (PDF only)
                  </label>
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    accept=".pdf"
                    className="w-full px-3 py-2 bg-white border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-900 text-neutral-900"
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end gap-4">
                <Button variant="outline" asChild className="border-[#E8580C] text-[#E8580C] hover:bg-[#E8580C]/10">
                  <Link href="/">Cancel</Link>
                </Button>
                <Button
                  type="submit"
                  className="bg-[#E8580C] hover:bg-[#E8580C]/90 text-white"
                >
                  Submit Application
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

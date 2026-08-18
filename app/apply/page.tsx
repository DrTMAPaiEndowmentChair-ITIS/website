import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckmarkCircle01Icon, HelpCircleIcon, Mail01Icon } from "@/components/icons";

export const metadata = {
  title: "Apply for Research | Dr. TMA Pai Endowment Chair",
  description:
    "Apply to work on cutting-edge research projects with industry partners at Dr. TMA Pai Endowment Chair, MAHE, Manipal.",
};

export default function ApplyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-16 overflow-hidden">
        <div className="container relative mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Join Us
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium mb-4 leading-[1.1] tracking-tight text-foreground">
              Apply for Research
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base mb-8 max-w-2xl mx-auto leading-relaxed">
              Work on cutting-edge projects and research with industry partners. Fill out the
              application form below to get started.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="outline" asChild>
                <Link href="/#research">View Projects</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/chairperson">Meet the Chair Professor</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="pb-16 lg:pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <Card className="bg-panel">
              <CardHeader className="border-b border-border bg-muted/30 dark:bg-white/5">
                <CardTitle className="text-base">Research Application Form</CardTitle>
                <CardDescription>
                  Please complete all required fields to submit your application.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0 sm:p-4">
                <div className="w-full overflow-hidden">
                  <iframe
                    width="100%"
                    height="700"
                    src="https://forms.office.com/r/kN5F0Qiee2?embed=true"
                    frameBorder="0"
                    style={{
                      border: "none",
                      maxWidth: "100%",
                    }}
                    allowFullScreen
                    title="Research Application Form"
                    className="min-h-[600px] sm:min-h-[700px]"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3">
                Process
              </p>
              <h2 className="text-2xl sm:text-3xl font-medium text-foreground tracking-tight">
                What Happens Next
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <Card className="group hover:border-primary/50 transition-colors bg-panel">
                <CardContent>
                  <div className="w-10 h-10 bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <CheckmarkCircle01Icon strokeWidth={2} className="size-5 text-primary" />
                  </div>
                  <h3 className="text-sm font-medium mb-3 text-foreground tracking-tight">
                    What to Expect
                  </h3>
                  <ul className="text-xs text-muted-foreground space-y-2 leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="w-1 h-1 bg-primary rounded-full mt-1.5 shrink-0" />
                      Application review within 1-2 weeks
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1 h-1 bg-primary rounded-full mt-1.5 shrink-0" />
                      Interview with research team leads
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1 h-1 bg-primary rounded-full mt-1.5 shrink-0" />
                      Project assignment based on skills
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1 h-1 bg-primary rounded-full mt-1.5 shrink-0" />
                      Mentorship from industry experts
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1 h-1 bg-primary rounded-full mt-1.5 shrink-0" />
                      Access to research facilities
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:border-primary/50 transition-colors bg-panel">
                <CardContent>
                  <div className="w-10 h-10 bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <HelpCircleIcon strokeWidth={2} className="size-5 text-primary" />
                  </div>
                  <h3 className="text-sm font-medium mb-3 text-foreground tracking-tight">
                    Need Help?
                  </h3>
                  <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                    If you have questions about the application process or our research programs,
                    please reach out to us.
                  </p>
                  <a
                    href="mailto:drtmapaichair.itis@manipal.edu"
                    className="inline-flex items-center gap-2 text-xs text-primary hover:underline"
                  >
                    <Mail01Icon strokeWidth={2} className="size-3.5" />
                    drtmapaichair.itis@manipal.edu
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

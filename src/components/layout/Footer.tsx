import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-neutral-200/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-neutral-900">
              Contact
            </h3>
            <p className="text-neutral-600">
              <span className="font-medium">Name:</span> Dr. Manohara Pai M.M.
              <br />
              <span className="font-medium">Office:</span> Senior Professor, Department of ICT, MIT, Manipal
              <br />
              <span className="font-medium">Email:</span> drtmapaichair.itis@manipal.edu
              <br />
              <span className="font-medium">Location:</span> Manipal, Karnataka, India
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-neutral-900">
              Chair Professor
            </h3>
            <p className="text-neutral-600">
              <span className="font-medium">Dr. TMA Pai Endowment Chair</span>
              <br />
              Intelligent Technologies, Industry 4.0 & Sustainability
              <br />
              <br />
              <Link 
                href="/chairperson" 
                className="text-[#E8580C] hover:text-[#E8580C]/80 transition-colors"
              >
                Learn more about Dr. Manohara Pai M.M. →
              </Link>
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-neutral-900">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-neutral-600 hover:text-neutral-900 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#research" className="text-neutral-600 hover:text-neutral-900 transition-colors">
                  Research
                </Link>
              </li>
              <li>
                <Link href="/#events" className="text-neutral-600 hover:text-neutral-900 transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/compute" className="text-neutral-600 hover:text-neutral-900 transition-colors">
                  Compute
                </Link>
              </li>
              <li>
                <Link href="/apply" className="text-neutral-600 hover:text-neutral-900 transition-colors">
                  Apply
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-neutral-900">
              Connect
            </h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-neutral-600 hover:text-neutral-900 transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-neutral-600 hover:text-neutral-900 transition-colors"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-neutral-600 hover:text-neutral-900 transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-200/50 text-center text-neutral-600">
          <p>© {new Date().getFullYear()} Dr. TMA Pai Endowment Chair. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 
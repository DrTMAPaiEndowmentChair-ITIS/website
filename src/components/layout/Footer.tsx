import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-neutral-200/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#about"
                  className="text-neutral-600 hover:text-neutral-900"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/#research"
                  className="text-neutral-600 hover:text-neutral-900"
                >
                  Research
                </Link>
              </li>
              <li>
                <Link
                  href="/#events"
                  className="text-neutral-600 hover:text-neutral-900"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="https://lttstore.com"
                  className="text-neutral-600 hover:text-neutral-900"
                >
                  Apply
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
            &copy; {new Date().getFullYear()} Dr. TMA Pai Endowment Chair,
            MAHE, Manipal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 
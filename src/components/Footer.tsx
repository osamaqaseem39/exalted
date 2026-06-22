import Link from "next/link";
import Logo from "@/components/Logo";

const quickLinks = [
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "Company", href: "/company" },
  { label: "Contact", href: "/contact" },
];

const solutions = [
  { label: "Track & Trace", href: "/services/track-trace" },
  { label: "Machine Vision Inspection", href: "/services/machine-vision-inspection" },
  { label: "Metal & X-Ray Detection", href: "/services/metal-detection" },
  { label: "Check Weighing", href: "/services/check-weighing" },
  { label: "Printing & Labeling", href: "/services/printing-equipment" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-[#fee2e2] bg-[#fafafa] text-black">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Logo size="lg" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-black/70">
              Industrial coding, inspection, labeling, and packaging solutions backed by global technology
              partners.
            </p>
          </div>

          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-sm font-normal text-black">Quick links</h4>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-black/75 transition hover:text-black hover:underline hover:underline-offset-4"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm font-normal text-black">Our solutions</h4>
            <ul className="mt-4 space-y-2.5">
              {solutions.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-black/75 transition hover:text-black hover:underline hover:underline-offset-4"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm font-normal text-black">Contact</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-black/75">
              <li>
                <a
                  href="mailto:info@exalted.com.pk"
                  className="transition hover:text-black hover:underline hover:underline-offset-4"
                >
                  info@exalted.com.pk
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/923028426797"
                  className="transition hover:text-black hover:underline hover:underline-offset-4"
                >
                  +92-302-8426797
                </a>
              </li>
              <li>Karachi · Lahore</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-[#fee2e2] pt-6 md:flex-row">
          <p className="text-center text-xs text-black/60 md:text-left">
            © {year} · Exalted Coding &amp; Packing Solutions · Pakistan
          </p>
          <div className="flex flex-wrap justify-center gap-5 text-xs text-black/60">
            <Link href="/company#about" className="transition hover:text-black">
              About
            </Link>
            <Link href="/products" className="transition hover:text-black">
              Products
            </Link>
            <Link href="/contact" className="transition hover:text-black">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

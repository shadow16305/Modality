import Link from "next/link";

const sitemapLinks = [
  {
    id: "sl1",
    text: "Home",
    href: "#hero",
  },
  {
    id: "sl2",
    text: "Free consultation",
    href: "#mission",
  },
  {
    id: "sl3",
    text: "Pricing",
    href: "#pricing",
  },
  {
    id: "sl4",
    text: "About us",
    href: "#about",
  },
  {
    id: "sl5",
    text: "Services",
    href: "#services",
  },
  {
    id: "sl6",
    text: "Our team",
    href: "#team",
  },
  {
    id: "sl7",
    text: "Testimonials",
    href: "#testimonials",
  },
];

const Footer = () => {
  return (
    <footer className="mt-48 border-t border-t-less-dark-blue text-white">
      <div className="mx-auto flex justify-between py-16 lg:max-w-[1060px] 2xl:max-w-[1364px]">
        <div className="flex flex-col gap-y-4">
          <h3 className="max-w-[340px] text-2xl text-cyan">
            Empowering Diagnostic Clinics with quality IT support!
          </h3>
          <p className="text-xl font-semibold">( 647 ) 227 - 5559</p>
        </div>
        <div className="flex flex-col gap-y-5">
          <h3 className="text-2xl font-semibold">Sitemap</h3>
          <ul className="flex list-none flex-col gap-y-2">
            {sitemapLinks.map((link) => (
              <li key={link.id} className="text-sm">
                <Link href={link.href}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-y-5">
          <h3 className="text-2xl font-semibold">Contact</h3>
          <div className="flex flex-col gap-y-2">
            <p className="text-sm">506-21 Tichester Rd</p>
            <p className="text-sm">Toronto, ON M5P1P3</p>
            <p className="text-sm">+1 647 227 5559</p>
          </div>
        </div>
      </div>
      <div className="border-t border-t-less-dark-blue py-4 text-center text-xs">
        <p>@Modality IT 2023</p>
      </div>
    </footer>
  );
};

export default Footer;

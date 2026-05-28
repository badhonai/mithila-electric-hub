import { createFileRoute } from "@tanstack/react-router";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Zap,
  BatteryCharging,
  RotateCw,
  Cog,
  Wrench,
  Truck,
  ShieldCheck,
  Timer,
  Award,
  Settings2,
  ArrowRight,
} from "lucide-react";

const PHONE_DISPLAY = "01829-403275";
const PHONE_TEL = "tel:01829403275";
const WHATSAPP = "https://wa.me/8801829403275";
const MAPS_LINK = "https://www.google.com/maps?q=23.7066414,90.5234144&z=18";
const MAPS_EMBED = "https://maps.google.com/maps?q=23.7066414,90.5234144&z=18&hl=en&output=embed";
const ADDRESS = "Jom Jom Super Market, Kanchpur 1430, Narayanganj, Bangladesh";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "M/S. Mithila Electric Center",
  description:
    "Industrial AC & DC electric motor repair, rewinding, and motor parts in Kanchpur, Narayanganj.",
  telephone: "+8801829403275",
  url: "/",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jom Jom Super Market",
    addressLocality: "Kanchpur",
    addressRegion: "Narayanganj",
    postalCode: "1430",
    addressCountry: "BD",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 23.708811,
    longitude: 90.528352,
  },
  areaServed: ["Kanchpur", "Sonargaon", "Rupganj", "Narayanganj"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "08:00",
      closes: "22:00",
    },
  ],
};



export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Electric Motor Repair Kanchpur | M/S. Mithila Electric Center" },
      {
        name: "description",
        content:
          "Industrial AC & DC motor repair and rewinding in Kanchpur, Narayanganj. Fast service, genuine parts. Call 01829-403275.",
      },
      {
        property: "og:title",
        content: "Electric Motor Repair Kanchpur | M/S. Mithila Electric Center",
      },
      {
        property: "og:description",
        content:
          "Industrial AC & DC motor repair and rewinding in Kanchpur, Narayanganj. Fast service, genuine parts. Call 01829-403275.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(localBusinessJsonLd),
      },
    ],
  }),
  component: Index,
});

type Service = {
  icon: typeof Zap;
  title: string;
  desc: string;
  span: string;
};

const services: Service[] = [
  {
    icon: Zap,
    title: "AC Motor Repair",
    desc: "Single & three-phase AC induction motor diagnostics and complete overhaul for industrial loads.",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    icon: RotateCw,
    title: "Motor Rewinding",
    desc: "Precision copper rewinding for all motor sizes.",
    span: "md:col-span-2",
  },
  {
    icon: BatteryCharging,
    title: "DC Motor Repair",
    desc: "Brush, armature & commutator service.",
    span: "",
  },
  {
    icon: Cog,
    title: "Bearings",
    desc: "Genuine bearing replacement.",
    span: "",
  },
  {
    icon: Wrench,
    title: "Motor Parts Supply",
    desc: "Original spares: bearings, brushes, capacitors, contactors.",
    span: "md:col-span-2",
  },
  {
    icon: Truck,
    title: "On-site Service",
    desc: "Field service for heavy industrial motors across Narayanganj.",
    span: "md:col-span-2",
  },
];

const whyUs = [
  { icon: Award, title: "20+ Years", desc: "Two decades repairing industrial motors." },
  { icon: Timer, title: "Fast Turnaround", desc: "Minimised downtime for your operations." },
  { icon: Settings2, title: "All Motor Sizes", desc: "From fractional HP to heavy industrial." },
  { icon: ShieldCheck, title: "Genuine Parts", desc: "Only authentic, tested components." },
];

function Index() {
  return (
    <div className="relative z-10 min-h-screen text-foreground">
      {/* Header */}
      <header className="sticky top-4 z-40 mx-auto mt-4 w-[calc(100%-2rem)] max-w-6xl">
        <div className="glass-strong flex items-center justify-between rounded-full px-5 py-3 sm:px-6">
          <div className="font-display text-base font-bold tracking-tight sm:text-lg">
            <span className="text-primary">Mithila</span>{" "}
            <span className="hidden sm:inline">Electric Center</span>
            <span className="sm:hidden">Electric</span>
          </div>
          <a
            href={PHONE_TEL}
            className="flex items-center gap-2 rounded-full bg-primary/90 px-4 py-2 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary hover:shadow-[0_0_24px_rgba(245,166,35,0.5)]"
          >
            <Phone className="h-4 w-4" aria-hidden />
            <span className="hidden sm:inline">{PHONE_DISPLAY}</span>
            <span className="sm:hidden">Call</span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative mx-auto max-w-6xl px-4 pb-16 pt-20 sm:pb-24 sm:pt-28">
        <div className="mx-auto max-w-4xl text-center">
          <div className="glass mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-primary">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            M/S. Mithila Electric Center
          </div>
          <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            Industrial Motor Repair in{" "}
            <span className="bg-gradient-to-r from-primary via-amber-300 to-primary bg-clip-text text-transparent">
              Kanchpur
            </span>
            , Narayanganj
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Expert AC &amp; DC motor repair, rewinding, and genuine motor parts —
            trusted by factories across the region.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={PHONE_TEL}
              className="btn-glow hover:btn-glow-hover inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground transition-all"
            >
              <Phone className="h-5 w-5" aria-hidden />
              Call Now
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-strong inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold text-foreground transition-all hover:bg-white/10"
            >
              <MessageCircle className="h-5 w-5 text-primary" aria-hidden />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Services — Bento Grid */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="mb-12 max-w-2xl">
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Our Services
          </h2>
          <p className="mt-3 text-muted-foreground">
            Complete electric motor repair Kanchpur businesses depend on — AC DC motor
            repair, rewinding, and parts supply.
          </p>
        </div>
        <div className="grid auto-rows-[minmax(180px,auto)] grid-cols-1 gap-4 md:grid-cols-4">
          {services.map(({ icon: Icon, title, desc, span }, i) => (
            <div
              key={title}
              className={`glass group relative overflow-hidden rounded-3xl p-7 transition-all duration-500 hover:bg-white/[0.08] ${span}`}
            >
              <div
                aria-hidden
                className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
              />
              <div className="glass mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl">
                <Icon className="h-6 w-6 text-primary" aria-hidden />
              </div>
              <h3
                className={`font-display font-semibold tracking-tight ${
                  i === 0 ? "text-2xl sm:text-3xl" : "text-xl"
                }`}
              >
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="glass-strong rounded-[2rem] p-8 sm:p-12">
          <h2 className="mb-10 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="glass rounded-2xl p-6 transition-all hover:bg-white/[0.08]"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15">
                  <Icon className="h-5 w-5 text-primary" aria-hidden />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold tracking-tight">
                  {title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="glass-strong rounded-[2rem] p-8 sm:p-10">
            <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Service Area
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              We serve industrial clients across{" "}
              <strong className="text-foreground">Kanchpur</strong>,{" "}
              <strong className="text-foreground">Sonargaon</strong>,{" "}
              <strong className="text-foreground">Rupganj</strong>, and the wider{" "}
              <strong className="text-foreground">Narayanganj</strong> district.
              Whether you need motor rewinding Narayanganj factories rely on or
              quick on-site diagnostics, our workshop is centrally located on the
              Dhaka–Chittagong highway at Kanchpur.
            </p>
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary/15 px-5 py-2.5 text-sm font-semibold text-primary transition-all hover:bg-primary/25"
            >
              <MapPin className="h-4 w-4" aria-hidden />
              View on Google Maps
            </a>
          </div>
          <div className="glass overflow-hidden rounded-[2rem] p-2">
            <iframe
              src={MAPS_EMBED}
              title="M/S. Mithila Electric Center location at Jom Jom Super Market, Kanchpur, Narayanganj"
              width="100%"
              height="400"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full rounded-[1.5rem]"
            />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="glass-strong rounded-[2rem] p-8 sm:p-12">
          <h2 className="mb-10 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Contact Us
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-5">
              <div className="glass flex items-start gap-4 rounded-2xl p-5">
                <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15">
                  <Phone className="h-5 w-5 text-primary" aria-hidden />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Phone
                  </p>
                  <a
                    href={PHONE_TEL}
                    className="font-display text-xl font-semibold tracking-tight hover:text-primary"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </div>

              <div className="glass flex items-start gap-4 rounded-2xl p-5">
                <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15">
                  <MapPin className="h-5 w-5 text-primary" aria-hidden />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Address
                  </p>
                  <p className="mt-1 text-sm leading-relaxed">{ADDRESS}</p>
                </div>
              </div>

              <div className="glass flex items-start gap-4 rounded-2xl p-5">
                <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15">
                  <Clock className="h-5 w-5 text-primary" aria-hidden />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Business Hours
                  </p>
                  <p className="mt-1 text-sm">Saturday – Thursday: 9:00 AM – 7:00 PM</p>
                  <p className="text-sm text-muted-foreground">Friday: Closed</p>
                </div>
              </div>

              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow hover:btn-glow-hover inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground transition-all sm:w-auto"
              >
                <MessageCircle className="h-5 w-5" aria-hidden />
                Message on WhatsApp
              </a>
            </div>

            <div className="glass overflow-hidden rounded-[1.75rem] p-2">
              <iframe
                src={MAPS_EMBED}
                title="Map showing M/S. Mithila Electric Center, Kanchpur"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block h-full min-h-[320px] w-full rounded-[1.25rem]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-6xl px-4 pb-12 pt-8">
        <div className="glass rounded-[1.75rem] p-8 text-center sm:text-left">
          <div className="font-display text-lg font-bold tracking-tight">
            <span className="text-primary">Mithila</span> Electric Center
          </div>
          <p className="mt-2 text-sm text-muted-foreground">{ADDRESS}</p>
          <p className="mt-1 text-sm text-muted-foreground">
            <a href={PHONE_TEL} className="hover:text-primary">
              {PHONE_DISPLAY}
            </a>
          </p>
          <p className="mt-4 text-xs text-muted-foreground">
            © {new Date().getFullYear()} M/S. Mithila Electric Center. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

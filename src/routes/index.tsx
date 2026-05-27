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
} from "lucide-react";

const PHONE_DISPLAY = "01829-403275";
const PHONE_TEL = "tel:01829403275";
const WHATSAPP = "https://wa.me/8801829403275";
const MAPS_LINK = "https://maps.app.goo.gl/1SNLSJeAwDppa5yb8";
const MAPS_EMBED =
  "https://www.google.com/maps?q=Jom+Jom+Super+Market,+Kanchpur,+Narayanganj,+Bangladesh&output=embed";
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
    latitude: 23.6918,
    longitude: 90.535,
  },
  areaServed: ["Kanchpur", "Sonargaon", "Rupganj", "Narayanganj"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "09:00",
      closes: "19:00",
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

const services = [
  { icon: Zap, title: "AC Motor Repair", desc: "Single & three-phase AC induction motor diagnostics and repair." },
  { icon: BatteryCharging, title: "DC Motor Repair", desc: "DC motor servicing, brush replacement, and armature work." },
  { icon: RotateCw, title: "Motor Rewinding", desc: "Precision copper rewinding for all motor sizes and ratings." },
  { icon: Cog, title: "Bearing Replacement", desc: "Genuine bearing replacement to restore smooth, quiet operation." },
  { icon: Wrench, title: "Motor Parts Supply", desc: "Original spare parts: bearings, brushes, capacitors, contactors." },
  { icon: Truck, title: "On-site Service", desc: "Field service for heavy industrial motors across Narayanganj." },
];

const whyUs = [
  { icon: Award, title: "20+ Years Experience", desc: "Two decades repairing industrial motors." },
  { icon: Timer, title: "Fast Turnaround", desc: "Minimised downtime for your operations." },
  { icon: Settings2, title: "All Motor Sizes", desc: "From fractional HP to heavy industrial." },
  { icon: ShieldCheck, title: "Genuine Parts", desc: "Only authentic, tested components used." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="font-display text-base font-bold uppercase tracking-wide sm:text-lg">
            <span className="text-primary">Mithila</span> Electric Center
          </div>
          <a
            href={PHONE_TEL}
            className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary"
          >
            <Phone className="h-4 w-4" aria-hidden />
            <span className="hidden sm:inline">{PHONE_DISPLAY}</span>
            <span className="sm:hidden">Call</span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:py-28">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            M/S. Mithila Electric Center
          </p>
          <h1 className="font-display text-4xl font-bold uppercase leading-tight sm:text-5xl md:text-6xl">
            Industrial Motor Repair in <span className="text-primary">Kanchpur</span>, Narayanganj
          </h1>
          <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Industrial Motor Repair Specialists — Kanchpur, Narayanganj. Expert AC &amp; DC motor
            repair, rewinding, and genuine motor parts trusted by factories across the region.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={PHONE_TEL}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 font-display text-base font-semibold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Phone className="h-5 w-5" aria-hidden />
              Call Now
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-primary px-6 py-3 font-display text-base font-semibold uppercase tracking-wide text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <MessageCircle className="h-5 w-5" aria-hidden />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-b border-border py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-12 max-w-2xl">
            <h2 className="font-display text-3xl font-bold uppercase sm:text-4xl">Our Services</h2>
            <p className="mt-3 text-muted-foreground">
              Complete electric motor repair Kanchpur businesses depend on — AC DC motor repair,
              rewinding, and parts supply.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group rounded-md border border-border bg-card p-6 transition-colors hover:border-primary"
              >
                <Icon className="h-9 w-9 text-primary" aria-hidden />
                <h3 className="mt-4 font-display text-lg font-semibold uppercase">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="border-b border-border bg-card py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-12 font-display text-3xl font-bold uppercase sm:text-4xl">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="border-l-2 border-primary pl-5">
                <Icon className="h-7 w-7 text-primary" aria-hidden />
                <h3 className="mt-3 font-display text-lg font-semibold uppercase">{title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="border-b border-border py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-display text-3xl font-bold uppercase sm:text-4xl">Service Area</h2>
              <p className="mt-4 text-muted-foreground">
                We serve industrial clients across <strong className="text-foreground">Kanchpur</strong>,{" "}
                <strong className="text-foreground">Sonargaon</strong>,{" "}
                <strong className="text-foreground">Rupganj</strong>, and the wider{" "}
                <strong className="text-foreground">Narayanganj</strong> district. Whether you need
                motor rewinding Narayanganj factories rely on or quick on-site diagnostics, our
                workshop is centrally located on the Dhaka–Chittagong highway at Kanchpur.
              </p>
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wide text-primary hover:underline"
              >
                <MapPin className="h-4 w-4" aria-hidden />
                View on Google Maps
              </a>
            </div>
            <div className="overflow-hidden rounded-md border border-border">
              <iframe
                src={MAPS_EMBED}
                title="M/S. Mithila Electric Center location at Jom Jom Super Market, Kanchpur, Narayanganj"
                width="100%"
                height="360"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="border-b border-border bg-card py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-10 font-display text-3xl font-bold uppercase sm:text-4xl">
            Contact Us
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <div className="flex gap-4">
                <Phone className="h-6 w-6 shrink-0 text-primary" aria-hidden />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Phone
                  </p>
                  <a href={PHONE_TEL} className="font-display text-xl font-semibold hover:text-primary">
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="h-6 w-6 shrink-0 text-primary" aria-hidden />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Address
                  </p>
                  <p className="mt-1 text-sm">{ADDRESS}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="h-6 w-6 shrink-0 text-primary" aria-hidden />
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
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 font-display text-base font-semibold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <MessageCircle className="h-5 w-5" aria-hidden />
                Message on WhatsApp
              </a>
            </div>

            <div className="overflow-hidden rounded-md border border-border">
              <iframe
                src={MAPS_EMBED}
                title="Map showing M/S. Mithila Electric Center, Kanchpur"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block h-full min-h-[280px] w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10">
        <div className="mx-auto max-w-6xl px-4 text-center sm:text-left">
          <div className="font-display text-lg font-bold uppercase tracking-wide">
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

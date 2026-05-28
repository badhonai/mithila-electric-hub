import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as Phone, A as ArrowRight, M as MessageCircle, Z as Zap, R as RotateCw, B as BatteryCharging, C as Cog, W as Wrench, T as Truck, a as Award, b as Timer, S as Settings2, c as ShieldCheck, d as MapPin, e as Clock } from "../_libs/lucide-react.mjs";
const PHONE_DISPLAY = "01829-403275";
const PHONE_TEL = "tel:01829403275";
const WHATSAPP = "https://wa.me/8801829403275";
const MAPS_LINK = "https://www.google.com/maps/place/M%2FS.+Mithila+Electric+Center/@23.708811,90.528352,17z/data=!3m1!4b1!4m6!3m5!1s0x3755b7c7b897e937:0x5e2272e5052d37c7!8m2!3d23.708811!4d90.528352!16s%2Fg%2F11y477d70x?entry=ttu";
const MAPS_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.880996841364!2d90.528352!3d23.708811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b7c7b897e937%3A0x5e2272e5052d37c7!2sM%2FS.%20Mithila%20Electric%20Center!5e0!3m2!1sen!2sbd!4v1716831168000!5m2!1sen!2sbd";
const ADDRESS = "Jom Jom Super Market, Kanchpur 1430, Narayanganj, Bangladesh";
const services = [{
  icon: Zap,
  title: "AC Motor Repair",
  desc: "Single & three-phase AC induction motor diagnostics and complete overhaul for industrial loads.",
  span: "md:col-span-2 md:row-span-2"
}, {
  icon: RotateCw,
  title: "Motor Rewinding",
  desc: "Precision copper rewinding for all motor sizes.",
  span: "md:col-span-2"
}, {
  icon: BatteryCharging,
  title: "DC Motor Repair",
  desc: "Brush, armature & commutator service.",
  span: ""
}, {
  icon: Cog,
  title: "Bearings",
  desc: "Genuine bearing replacement.",
  span: ""
}, {
  icon: Wrench,
  title: "Motor Parts Supply",
  desc: "Original spares: bearings, brushes, capacitors, contactors.",
  span: "md:col-span-2"
}, {
  icon: Truck,
  title: "On-site Service",
  desc: "Field service for heavy industrial motors across Narayanganj.",
  span: "md:col-span-2"
}];
const whyUs = [{
  icon: Award,
  title: "20+ Years",
  desc: "Two decades repairing industrial motors."
}, {
  icon: Timer,
  title: "Fast Turnaround",
  desc: "Minimised downtime for your operations."
}, {
  icon: Settings2,
  title: "All Motor Sizes",
  desc: "From fractional HP to heavy industrial."
}, {
  icon: ShieldCheck,
  title: "Genuine Parts",
  desc: "Only authentic, tested components."
}];
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 min-h-screen text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-4 z-40 mx-auto mt-4 w-[calc(100%-2rem)] max-w-6xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-strong flex items-center justify-between rounded-full px-5 py-3 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-base font-bold tracking-tight sm:text-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "Mithila" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Electric Center" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sm:hidden", children: "Electric" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: PHONE_TEL, className: "flex items-center gap-2 rounded-full bg-primary/90 px-4 py-2 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary hover:shadow-[0_0_24px_rgba(245,166,35,0.5)]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4", "aria-hidden": true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: PHONE_DISPLAY }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sm:hidden", children: "Call" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative mx-auto max-w-6xl px-4 pb-16 pt-20 sm:pb-24 sm:pt-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-primary", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 animate-pulse rounded-full bg-primary" }),
        "M/S. Mithila Electric Center"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl", children: [
        "Industrial Motor Repair in",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-primary via-amber-300 to-primary bg-clip-text text-transparent", children: "Kanchpur" }),
        ", Narayanganj"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg", children: "Expert AC & DC motor repair, rewinding, and genuine motor parts — trusted by factories across the region." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: PHONE_TEL, className: "btn-glow hover:btn-glow-hover inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground transition-all", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-5 w-5", "aria-hidden": true }),
          "Call Now",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4", "aria-hidden": true })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: WHATSAPP, target: "_blank", rel: "noopener noreferrer", className: "glass-strong inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold text-foreground transition-all hover:bg-white/10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-5 w-5 text-primary", "aria-hidden": true }),
          "WhatsApp Us"
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-6xl px-4 py-16 sm:py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12 max-w-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl font-bold tracking-tight sm:text-5xl", children: "Our Services" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Complete electric motor repair Kanchpur businesses depend on — AC DC motor repair, rewinding, and parts supply." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid auto-rows-[minmax(180px,auto)] grid-cols-1 gap-4 md:grid-cols-4", children: services.map(({
        icon: Icon,
        title,
        desc,
        span
      }, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `glass group relative overflow-hidden rounded-3xl p-7 transition-all duration-500 hover:bg-white/[0.08] ${span}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-6 w-6 text-primary", "aria-hidden": true }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: `font-display font-semibold tracking-tight ${i === 0 ? "text-2xl sm:text-3xl" : "text-xl"}`, children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: desc })
      ] }, title)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-6xl px-4 py-16 sm:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-strong rounded-[2rem] p-8 sm:p-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-10 font-display text-4xl font-bold tracking-tight sm:text-5xl", children: "Why Choose Us" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4", children: whyUs.map(({
        icon: Icon,
        title,
        desc
      }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-6 transition-all hover:bg-white/[0.08]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5 text-primary", "aria-hidden": true }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-display text-lg font-semibold tracking-tight", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: desc })
      ] }, title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-6xl px-4 py-16 sm:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-8 lg:grid-cols-2 lg:items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-strong rounded-[2rem] p-8 sm:p-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl font-bold tracking-tight sm:text-5xl", children: "Service Area" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-5 leading-relaxed text-muted-foreground", children: [
          "We serve industrial clients across",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Kanchpur" }),
          ",",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Sonargaon" }),
          ",",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Rupganj" }),
          ", and the wider",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Narayanganj" }),
          " district. Whether you need motor rewinding Narayanganj factories rely on or quick on-site diagnostics, our workshop is centrally located on the Dhaka–Chittagong highway at Kanchpur."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: MAPS_LINK, target: "_blank", rel: "noopener noreferrer", className: "mt-7 inline-flex items-center gap-2 rounded-full bg-primary/15 px-5 py-2.5 text-sm font-semibold text-primary transition-all hover:bg-primary/25", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4", "aria-hidden": true }),
          "View on Google Maps"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass overflow-hidden rounded-[2rem] p-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { src: MAPS_EMBED, title: "M/S. Mithila Electric Center location at Jom Jom Super Market, Kanchpur, Narayanganj", width: "100%", height: "400", loading: "lazy", referrerPolicy: "no-referrer-when-downgrade", className: "block w-full rounded-[1.5rem]" }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-6xl px-4 py-16 sm:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-strong rounded-[2rem] p-8 sm:p-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-10 font-display text-4xl font-bold tracking-tight sm:text-5xl", children: "Contact Us" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-8 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass flex items-start gap-4 rounded-2xl p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-5 w-5 text-primary", "aria-hidden": true }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Phone" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: PHONE_TEL, className: "font-display text-xl font-semibold tracking-tight hover:text-primary", children: PHONE_DISPLAY })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass flex items-start gap-4 rounded-2xl p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-5 w-5 text-primary", "aria-hidden": true }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Address" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm leading-relaxed", children: ADDRESS })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass flex items-start gap-4 rounded-2xl p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-5 w-5 text-primary", "aria-hidden": true }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Business Hours" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm", children: "Saturday – Thursday: 9:00 AM – 7:00 PM" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Friday: Closed" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: WHATSAPP, target: "_blank", rel: "noopener noreferrer", className: "btn-glow hover:btn-glow-hover inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground transition-all sm:w-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-5 w-5", "aria-hidden": true }),
            "Message on WhatsApp"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass overflow-hidden rounded-[1.75rem] p-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { src: MAPS_EMBED, title: "Map showing M/S. Mithila Electric Center, Kanchpur", width: "100%", height: "100%", loading: "lazy", referrerPolicy: "no-referrer-when-downgrade", className: "block h-full min-h-[320px] w-full rounded-[1.25rem]" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "mx-auto max-w-6xl px-4 pb-12 pt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-[1.75rem] p-8 text-center sm:text-left", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-lg font-bold tracking-tight", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "Mithila" }),
        " Electric Center"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: ADDRESS }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: PHONE_TEL, className: "hover:text-primary", children: PHONE_DISPLAY }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 text-xs text-muted-foreground", children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " M/S. Mithila Electric Center. All rights reserved."
      ] })
    ] }) })
  ] });
}
export {
  Index as component
};

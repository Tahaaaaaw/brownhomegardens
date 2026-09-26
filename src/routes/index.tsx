import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  CalendarCheck,
  Clock,
  ExternalLink,
  Hammer,
  Leaf,
  Mail,
  MapPin,
  Menu,
  Phone,
  Quote,
  Ruler,
  Shield,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { QuoteForm } from "@/components/site/quote-form";
import { ReviewBadges } from "@/components/site/review-badges";
import { ProjectGallery } from "@/components/site/project-gallery";

const TITLE = "Browns Home & Garden | Landscaping, Garden Rooms & Driveways Dorset";
const DESCRIPTION =
  "Family-run home & garden specialists based in Dorset with 25+ years experience. Bespoke landscaping, porcelain patios, luxury garden rooms, block paving & gravel driveways, clearances, and full outdoor transformations.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: Home,
});

const PHONE = "07526 994459";
const EMAIL = "brownshomeandgarden@mail.com";
const COVERAGE_PRIMARY = "Dorset & Surrounding Areas";
const SISTER_COMPANY_URL = "http://www.brownspropertydevelopments.co.uk";
const SISTER_COMPANY_NAME = "Browns Property Developments";

const LOGO_URL =
  "https://images.squarespace-cdn.com/content/v1/678f82b6b9e322287205cb4f/227909ce-6c86-4608-8926-2a55a91fde47/golden+house+logo.png";
const SISTER_LOGO_URL =
  "https://images.squarespace-cdn.com/content/v1/678f82b6b9e322287205cb4f/64c933b2-1296-49a6-b342-ddc51537b4df/golden+property+logo-3.png";

const SOCIAL_LINKS = [
  { name: "Facebook", href: "https://www.facebook.com/brownshomeandgarden/" },
  { name: "Instagram", href: "https://www.instagram.com/brownshomeandgarden/" },
  { name: "TikTok", href: "https://www.tiktok.com/@brownshomeandgarden" },
];

const NAV = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#work" },
  { label: "Service Area", href: "#areas" },
  { label: "Contact", href: "#quote" },
];

const SERVICES = [
  {
    name: "Landscaping & Patios",
    img: "https://images.squarespace-cdn.com/content/v1/678f82b6b9e322287205cb4f/87427062-f9b9-47ab-ac48-dbca5c1bb4a8/2bd1b196-2b13-4642-b8a0-f2fa9987bb9d.JPG",
    copy: "We install patios using a wide range of premium materials — from durable porcelain to natural sandstone, decking, pathways and integrated garden solutions.",
    points: ["Porcelain & Sandstone", "Timber & Composite Decking", "Pathways & Fencing", "Sleeper Planters & Pergolas"],
  },
  {
    name: "Garden Rooms",
    img: "https://images.squarespace-cdn.com/content/v1/678f82b6b9e322287205cb4f/bae49a10-12af-4352-a036-6f1c4bcccb2f/1-Garden.Room_.Exeter-1.jpg",
    copy: "With 25+ years' experience, our garden rooms are well-planned, energy-efficient, and skillfully built to enhance your home — ideal for offices, studios, or relaxation.",
    points: ["Home Offices & Studios", "Fully Insulated & Heated", "Bi-Fold Doors & Glazing", "Custom Timber Cladding"],
  },
  {
    name: "Driveways",
    img: "https://images.squarespace-cdn.com/content/v1/678f82b6b9e322287205cb4f/908b61ca-0ba1-4eaa-a6e6-88fe7fdcb869/PHOTO-2026-01-04-11-05-34.jpg",
    copy: "We offer a wide variety of driveway solutions: interlocking block paving for durability and kerb appeal, low-maintenance gravel with superior drainage, and smooth/imprinted concrete.",
    points: ["Interlocking Block Paving", "Natural Drainage Gravel", "Concrete & Imprinted", "Edging & Kerbs"],
  },
  {
    name: "Home/Garden Clearances",
    img: "https://images.squarespace-cdn.com/content/v1/678f82b6b9e322287205cb4f/c4659273-b3ec-4f7d-975d-fc5e515d475e/e33f9c97-5e56-46cf-ab1f-5ccdb11a1051+2.JPG",
    copy: "Whether you are looking to move or wanting to refresh that neglected garden, we clear overgrown spaces, topsoil, and prepare your grounds to bring spaces back to life.",
    points: ["Complete Site Clearance", "Topsoiling & Leveling", "Green Waste Removal", "Pre-Sale Refresh"],
  },
  {
    name: "Venetian Fencing & Gates",
    img: "https://images.squarespace-cdn.com/content/v1/678f82b6b9e322287205cb4f/1780685594194-VHNTDB2QKW3BMRVWM746/image-asset.jpeg",
    copy: "Venetian horizontal slatted fencing and matching gates built to withstand the weather while providing clean lines, privacy, security, and contemporary curb appeal.",
    points: ["Venetian Slats", "Bespoke Timber Gates", "Multiple Timber Species", "Perimeter Security"],
  },
  {
    name: "Artificial Grass & Turfing",
    img: "https://images.squarespace-cdn.com/content/v1/678f82b6b9e322287205cb4f/1779479220341-FFXB53N4S6FN8T795UEQ/image-asset.jpeg",
    copy: "Garden lawn made maintenance-free with newly installed 30mm pet-friendly luxury artificial grass or fresh cultivated real lawn turf on laser-graded foundations.",
    points: ["30mm Pet-Friendly Turf", "Zero Mowing / All Weather", "Cultivated Real Lawn", "Laser-Graded Sub-Base"],
  },
];

const REVIEWS = [
  {
    name: "Ellen Rignell",
    text: "Brilliant driveway transformation thanks to Taylor and the team! Professional from the initial visit right to the tidy up. The finish has completely transformed our property's entrance.",
    job: "Driveway Transformation · Dorset",
  },
  {
    name: "Abigail Hayne",
    text: "Would definitely recommend and will be following up with further work in the future! The attention to detail and high craftsmanship on our garden was second to none.",
    job: "Landscaping & Garden Project",
  },
  {
    name: "Rod Wilson",
    text: "Cleared front garden, topsoiled and turfed garden in 2 days. Amazing job. Very hardworking team, polite, punctual, and delivered exactly what was promised.",
    job: "Garden Clearance & Turfing",
  },
  {
    name: "Belinda Lawrence",
    text: "You have all done a great job, you went above and beyond and nothing was ever a problem. Highly trustworthy and communicative team!",
    job: "Full Garden Makeover",
  },
  {
    name: "Geoff",
    text: "Communication was top-notch and the final outcome was even better than we imagined. A great experience all around with Taylor and the whole crew.",
    job: "Gravel Driveway & Paving · Yeovil",
  },
];

const WHY = [
  {
    icon: ShieldCheck,
    title: "25+ Years Experience",
    copy: "With more than two and a half decades of hands-on expertise, our team understands every aspect of landscaping, structural groundwork, and timber craft.",
  },
  {
    icon: Hammer,
    title: "Bespoke Craftsmanship",
    copy: "We specialize in tailored designs where meticulous attention to detail, high-grade materials, and flawless finishes are paramount.",
  },
  {
    icon: Ruler,
    title: "7-Day Free Consultations",
    copy: "Site visits and comprehensive itemised quotations available 7 days a week with zero obligation and absolutely no pushy sales tactics.",
  },
  {
    icon: Users,
    title: "People-First Approach",
    copy: "We listen to how your family actually uses the outdoor space to build functional, lived-in, and timeless spaces that enhance daily living.",
  },
  {
    icon: Shield,
    title: "Fully Licensed & Insured",
    copy: "Complete liability cover, registered waste carrier compliance, and disciplined site safety management on every single project.",
  },
  {
    icon: Leaf,
    title: "Dorset Family Run",
    copy: "Proudly serving Dorset and surrounding areas with deep community roots, long-lasting client relationships, and word-of-mouth excellence.",
  },
];

const PROCESS = [
  {
    n: "01",
    icon: MapPin,
    title: "Site Visit & Consultation",
    copy: "We arrange a free site visit across Dorset 7 days a week. We listen to your vision, explore layout ideas, evaluate ground conditions, and review material samples.",
  },
  {
    n: "02",
    icon: Ruler,
    title: "Design & Itemised Quote",
    copy: "Following our consultation, we produce a clear, transparent written quotation detailing materials, labour, and timeline with no hidden extras.",
  },
  {
    n: "03",
    icon: CalendarCheck,
    title: "Diary Booking & Build",
    copy: "Upon approval, we lock in your start date in our diary. Our dedicated crew executes the build with precision, keeping you informed until the final handover.",
  },
];

const FAQS = [
  {
    q: "What services do you offer?",
    a: "We provide expansive bespoke solutions for landscape design, luxury garden rooms, block paving and gravel driveways, garden clearances, Venetian fencing, and artificial grass installations — tailored to every stage of your journey from initial idea to large-scale transformation.",
  },
  {
    q: "How do I get started?",
    a: "Getting started is simple! Book your appointment via our quote form below or call us directly on 07526 994459. A member of our team will reach out promptly to arrange a free, no-obligation site visit at a time that suits you — available 7 days a week.",
  },
  {
    q: "What makes Browns Home & Garden different?",
    a: "With 25+ years of experience, we stand apart by putting people first: every project begins by understanding your lifestyle and long-term vision. Offering design, installation, and complete property care under one roof, we manage everything from groundwork to final detailing with disciplined project management and clear communication.",
  },
  {
    q: "What is your pricing model?",
    a: "We offer completely transparent, competitive pricing based on your project type, square meterage, and material choices. After an initial site visit, we provide a detailed, itemised quotation with zero hidden costs.",
  },
  {
    q: "What areas do you cover?",
    a: "We are based in Dorset and cover Weymouth, Dorchester, Bournemouth, Poole, Christchurch, Blandford Forum, Bridport, Sherborne, Wimborne, Yeovil, Bovington, Littlemoor, Broadwey, Swanage, Wareham, and all surrounding areas.",
  },
  {
    q: "What is it like to work with your team?",
    a: "Collaborative, honest, and straightforward. From Taylor and our on-site team to final sign-off, we treat your home with absolute respect, keep working areas clean and tidy, and ensure the finished project exceeds your expectations.",
  },
];

const AREAS = [
  "Weymouth",
  "Dorchester",
  "Bournemouth",
  "Poole",
  "Christchurch",
  "Blandford Forum",
  "Bridport",
  "Sherborne",
  "Wimborne Minster",
  "Yeovil",
  "Bovington",
  "Littlemoor",
  "Broadwey",
  "Swanage",
  "Wareham",
  "Ferndown",
  "Verwood",
  "Lyme Regis",
  "Shaftesbury",
  "Portland",
];

function GetQuote({
  label = "Book Free Quotation",
  variant = "quote",
}: {
  label?: string;
  variant?: "quote" | "forest" | "outlineLight";
}) {
  return (
    <Button asChild variant={variant} size="xl">
      <a href="#quote">
        {label} <ArrowRight />
      </a>
    </Button>
  );
}

function SectionHead({
  eyebrow,
  title,
  copy,
  light = false,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  light?: boolean;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center px-2">
      <span className={`eyebrow ${light ? "text-gold" : ""}`}>
        <Leaf className="size-3.5" /> {eyebrow}
      </span>
      <h2
        className={`mt-3 text-balance font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.12] ${
          light ? "text-forest-foreground" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {copy ? (
        <p
          className={`mt-3 text-pretty text-sm sm:text-base ${
            light ? "text-forest-foreground/85" : "text-muted-foreground"
          }`}
        >
          {copy}
        </p>
      ) : null}
      <span className="leaf-rule mx-auto mt-6 block w-32 sm:w-40" />
    </div>
  );
}

function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* ---------- Top announcement bar ---------- */}
      <div className="bg-forest text-forest-foreground border-b border-forest-foreground/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 py-2 text-xs">
          <div className="flex items-center gap-2 font-semibold text-forest-foreground/95">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/20 px-2.5 py-0.5 text-[0.7rem] font-bold text-gold uppercase tracking-wider">
              Free Site Visits
            </span>
            <span className="hidden sm:inline text-forest-foreground/80">
              Site Visits & Quotes Available 7 Days a Week
            </span>
            <span className="sm:hidden text-forest-foreground/90">7 Days a Week</span>
          </div>

          <div className="flex items-center gap-4 sm:gap-6 text-forest-foreground/90 font-medium">
            <span className="hidden md:flex items-center gap-1.5">
              <MapPin className="size-3.5 text-gold" /> {COVERAGE_PRIMARY}
            </span>
            <a
              href={`tel:${PHONE.replace(/\s/g, "")}`}
              className="flex items-center gap-1.5 font-bold text-gold hover:text-amber-300 transition-colors"
            >
              <Phone className="size-3.5" /> {PHONE}
            </a>
          </div>
        </div>
      </div>

      {/* ---------- Navigation ---------- */}
      <header className="sticky top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 py-2.5 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center">
          {/* Mobile Call Icon (Left) */}
          <a
            href={`tel:${PHONE.replace(/\s/g, "")}`}
            aria-label="Call Browns Home & Garden"
            className="grid size-10 place-items-center rounded-lg border border-border text-foreground hover:bg-secondary hover:text-primary transition-colors lg:hidden shrink-0"
          >
            <Phone className="size-5 text-primary" />
          </a>

          {/* Authentic Logo (Center on mobile, Left on desktop) */}
          <div className="flex items-center justify-center lg:justify-start">
            <a href="#top" className="flex items-center group py-0.5">
              <img
                src={LOGO_URL}
                alt="Browns Home & Garden Logo"
                className="h-12 sm:h-14 md:h-16 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              />
            </a>
          </div>

          {/* Desktop Navigation Links (Centered) */}
          <div className="hidden items-center justify-center gap-7 lg:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm font-bold text-foreground/80 transition-colors hover:text-primary whitespace-nowrap"
              >
                {n.label}
              </a>
            ))}
          </div>

          {/* Desktop Actions (Right-aligned) */}
          <div className="hidden items-center justify-end gap-4 lg:flex">
            <a
              href={`tel:${PHONE.replace(/\s/g, "")}`}
              className="flex items-center gap-2 text-sm font-bold text-primary hover:text-primary/80 transition-colors whitespace-nowrap"
            >
              <Phone className="size-4" /> {PHONE}
            </a>
            <Button asChild variant="quote">
              <a href="#quote" className="whitespace-nowrap">Book Free Quotation</a>
            </Button>
          </div>

          {/* Mobile Hamburger Button (Right) */}
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-lg border border-border text-foreground hover:bg-secondary lg:hidden shrink-0"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </nav>

        {/* Mobile Navigation Drawer */}
        {open ? (
          <div className="border-t border-border bg-background px-4 sm:px-6 pb-6 pt-3 lg:hidden shadow-xl animate-in slide-in-from-top-2 duration-200">
            <div className="grid grid-cols-2 gap-2">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center rounded-lg border border-border/60 bg-card px-3 py-2.5 text-sm font-semibold text-foreground/85 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors text-center shadow-xs"
                >
                  {n.label}
                </a>
              ))}
            </div>

            <Button asChild variant="quote" className="mt-3 w-full">
              <a href="#quote" onClick={() => setOpen(false)}>
                Book Free Quotation
              </a>
            </Button>
          </div>
        ) : null}
      </header>

      <main id="top">
        {/* ---------- Hero ---------- */}
        <section className="relative overflow-hidden bg-forest text-forest-foreground">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "url('https://images.squarespace-cdn.com/content/v1/678f82b6b9e322287205cb4f/8a37281b-521d-4b3f-8bdc-3e05e30bcf69/IMG_8779.JPG')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-[var(--gradient-forest)] opacity-95" aria-hidden="true" />
          <div
            className="pointer-events-none absolute left-1/2 -top-24 size-[36rem] -translate-x-1/2 rounded-full bg-gold/15 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 py-14 sm:py-20 md:py-24 text-center">
            <div className="rise flex flex-col items-center">
              <span className="eyebrow text-gold text-center text-xs sm:text-sm font-bold tracking-wide">
                <Star className="size-3.5 fill-gold shrink-0" /> 25+ Years Experience · Dorset & Surrounding Areas · Family Run
              </span>

              <h1 className="mt-5 text-balance font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.08] text-forest-foreground tracking-tight">
                Where Excellence
                <span className="block text-gold mt-1">Meets Sophistication</span>
              </h1>

              <p className="mt-5 max-w-2xl text-pretty text-sm sm:text-base md:text-lg text-forest-foreground/90 font-medium leading-relaxed">
                Rooted in purpose and driven by results, Browns Home & Garden brings expert care to every outdoor project. From bespoke garden rooms and porcelain patios to durable driveways and full transformations, we turn bold ideas into clear plans so your space looks beautiful and works effortlessly.
              </p>

              <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs font-black uppercase tracking-wider text-amber-300">
                <span>Dream it</span>
                <span>•</span>
                <span>Design it</span>
                <span>•</span>
                <span>Build it</span>
              </div>

              <ul className="mt-7 grid w-full max-w-3xl grid-cols-2 gap-2.5 sm:gap-3 md:grid-cols-4">
                {[
                  { icon: ShieldCheck, t: "25+ Years Exp." },
                  { icon: Hammer, t: "Bespoke Quality" },
                  { icon: CalendarCheck, t: "7 Days Site Visits" },
                  { icon: Shield, t: "Licensed & Insured" },
                ].map((u) => (
                  <li
                    key={u.t}
                    className="flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl border border-forest-foreground/20 bg-forest-foreground/10 px-2.5 py-2.5 sm:px-3.5 sm:py-3 text-forest-foreground shadow-sm font-bold"
                  >
                    <u.icon className="size-4 shrink-0 text-gold" />
                    <span className="text-xs sm:text-sm tracking-tight">{u.t}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col sm:flex-row w-full sm:w-auto items-center justify-center gap-3">
                <div className="w-full sm:w-auto">
                  <GetQuote label="Book Your Free Quotation" />
                </div>
                <Button asChild variant="outlineLight" size="xl" className="w-full sm:w-auto font-bold">
                  <a href={`tel:${PHONE.replace(/\s/g, "")}`}>
                    <Phone className="size-4" /> Call {PHONE}
                  </a>
                </Button>
              </div>

              <div className="mt-8 flex justify-center">
                <ReviewBadges tone="dark" />
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Horizontal quote form ---------- */}
        <section id="quote" className="relative z-10 bg-forest pb-12 sm:pb-16 scroll-mt-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grain rounded-2xl border border-border bg-card p-4 sm:p-6 md:p-8 shadow-[var(--shadow-lift)]">
              <div className="relative mb-5 flex flex-wrap items-end justify-between gap-3">
                <div>
                  <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-extrabold text-foreground tracking-tight">
                    Get your free, no-obligation quote
                  </h2>
                  <p className="text-xs sm:text-sm font-medium text-muted-foreground mt-1">
                    Site visits available 7 days a week across Dorset · Quick response within 24 hours
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                  <BadgeCheck className="size-4 text-primary" /> Free No-Obligation Quotation
                </span>
              </div>
              <div className="relative">
                <QuoteForm />
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Reviews ---------- */}
        <section
          id="reviews"
          className="section-pad relative overflow-hidden bg-decor-radial grain border-b border-border scroll-mt-20"
        >
          <div className="pointer-events-none absolute -left-20 top-20 size-80 rounded-full bg-primary/5 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute -right-20 bottom-10 size-80 rounded-full bg-gold/8 blur-3xl" aria-hidden="true" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
            <SectionHead
              eyebrow="What our customers say"
              title="Real Feedback from Local Homeowners"
              copy="See what clients across Dorset, Weymouth, Dorchester and Yeovil have to say about our team."
            />
            <div className="mt-10 sm:mt-12 grid gap-5 sm:gap-6 md:grid-cols-3">
              {REVIEWS.slice(0, 3).map((r) => (
                <figure
                  key={r.name}
                  className="relative flex h-full flex-col rounded-2xl border border-border bg-card p-5 sm:p-7 shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-1"
                >
                  <Quote className="absolute right-5 top-5 sm:right-6 sm:top-6 size-7 sm:size-8 text-primary/15" />
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <blockquote className="mt-4 flex-1 text-xs sm:text-sm leading-relaxed text-foreground/85 font-normal">
                    "{r.text}"
                  </blockquote>
                  <figcaption className="mt-5 border-t border-border pt-4">
                    <span className="block font-display text-base sm:text-lg font-bold text-foreground">{r.name}</span>
                    <span className="text-xs font-semibold text-primary">{r.job}</span>
                  </figcaption>
                </figure>
              ))}
            </div>

            {/* Extra Reviews Strip */}
            <div className="mt-6 grid gap-5 sm:gap-6 md:grid-cols-2">
              {REVIEWS.slice(3).map((r) => (
                <figure
                  key={r.name}
                  className="relative flex h-full flex-col rounded-2xl border border-border bg-card p-5 sm:p-6 shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-1"
                >
                  <Quote className="absolute right-4 top-4 size-6 text-primary/15" />
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <blockquote className="mt-3 flex-1 text-xs sm:text-sm leading-relaxed text-foreground/85">
                    "{r.text}"
                  </blockquote>
                  <figcaption className="mt-4 border-t border-border pt-3 flex items-center justify-between">
                    <span className="font-display text-sm font-bold text-foreground">{r.name}</span>
                    <span className="text-xs font-semibold text-primary">{r.job}</span>
                  </figcaption>
                </figure>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <ReviewBadges />
              <GetQuote />
            </div>
          </div>
        </section>

        {/* ---------- About / Company Story ---------- */}
        <section id="about" className="section-pad bg-cream scroll-mt-20">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:gap-14 px-4 sm:px-6 lg:grid-cols-2">
            <div className="relative">
              <img
                src="https://images.squarespace-cdn.com/content/v1/678f82b6b9e322287205cb4f/8af1ecc0-1c85-4687-82a1-b4138cd38712/IMG_9448.JPG"
                width={1408}
                height={912}
                loading="lazy"
                alt="Browns Home & Garden bespoke outdoor transformation"
                className="rounded-2xl object-cover shadow-[var(--shadow-lift)] aspect-[4/3] w-full"
              />
              <img
                src="https://images.squarespace-cdn.com/content/v1/678f82b6b9e322287205cb4f/1780606603682-IM2RX8L28HWFDE9VQKLK/image-asset.jpeg"
                width={600}
                height={450}
                loading="lazy"
                alt="Porcelain patio craftsmanship detail"
                className="absolute -bottom-6 -right-3 hidden w-44 sm:w-48 rounded-xl border-4 border-cream object-cover shadow-[var(--shadow-lift)] sm:block aspect-[4/3]"
              />
            </div>
            <div>
              <span className="eyebrow">
                <Leaf className="size-3.5" /> 25+ Years Experience · Dorset Based
              </span>
              <h2 className="mt-3 sm:mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-[1.12]">
                Welcome to Browns Home & Garden
              </h2>
              <span className="leaf-rule mt-5 block w-32 sm:w-40" />
              <p className="mt-5 text-pretty text-sm sm:text-base text-foreground/85 leading-relaxed">
                We’re a family-run company based in the beautiful region of Dorset, proudly serving the surrounding areas. With more than 25 years of extensive experience, we specialise in transforming homes both inside and out, ensuring each project meets the unique needs of our clients. Whether you're considering small renovations or grand transformations, rest assured that we’ve got you covered every step of the way.
              </p>
              <p className="mt-3.5 text-pretty text-sm sm:text-base text-foreground/85 leading-relaxed">
                Over the years, we have successfully built up fantastic and lasting relationships with our beloved clients, which has led us to be continuously engaged in further work for them. Establishing this esteemed reputation within the local community has enabled us to produce an array of beautiful and diverse projects.
              </p>
              <p className="mt-3.5 text-pretty text-sm sm:text-base font-semibold text-primary leading-relaxed">
                Want to turn your house into a cozy home? Look no further — we design and create, you enjoy.
              </p>
              <div className="mt-6 sm:mt-8 grid grid-cols-3 gap-2.5 sm:gap-4">
                {[
                  { k: "25+ Yrs", v: "Extensive experience" },
                  { k: "7 Days", v: "Site visits & quotes" },
                  { k: "100%", v: "Satisfaction focused" },
                ].map((s) => (
                  <div
                    key={s.v}
                    className="rounded-xl border border-border bg-card p-3 sm:px-4 sm:py-3 shadow-sm text-center sm:text-left"
                  >
                    <span className="block font-display text-lg sm:text-2xl font-extrabold text-primary">{s.k}</span>
                    <span className="text-[0.68rem] sm:text-xs font-semibold text-muted-foreground">{s.v}</span>
                  </div>
                ))}
              </div>
              <div className="mt-7 sm:mt-8 flex flex-wrap gap-3 sm:gap-4">
                <GetQuote />
                <Button asChild variant="outline" size="xl" className="font-bold">
                  <a href={`tel:${PHONE.replace(/\s/g, "")}`}>
                    <Phone className="size-4" /> Call {PHONE}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Services ---------- */}
        <section
          id="services"
          className="section-pad relative overflow-hidden bg-decor-warm border-y border-border scroll-mt-20"
        >
          <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 size-[44rem] rounded-full bg-primary/4 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute right-0 top-1/3 size-72 rounded-full bg-gold/6 blur-3xl" aria-hidden="true" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
            <SectionHead
              eyebrow="What we do"
              title="Our Core Services"
              copy="From bespoke garden rooms and porcelain patios to durable driveways and full site clearances — all crafted with pride in Dorset."
            />
            <div className="mt-10 sm:mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((s) => (
                <article
                  key={s.name}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lift)]"
                >
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={s.img}
                      width={1024}
                      height={768}
                      loading="lazy"
                      alt={s.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground tracking-tight">{s.name}</h3>
                    <p className="mt-2.5 flex-1 text-xs sm:text-sm leading-relaxed text-foreground/85">{s.copy}</p>
                    <ul className="mt-4 flex flex-wrap gap-1.5 sm:gap-2">
                      {s.points.map((p) => (
                        <li
                          key={p}
                          className="rounded-full border border-border bg-secondary px-2.5 py-0.5 sm:px-3 sm:py-1 text-[0.72rem] sm:text-xs font-semibold text-secondary-foreground"
                        >
                          {p}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#quote"
                      className="mt-5 inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-primary transition-colors hover:text-primary/80"
                    >
                      Get a quote for {s.name.toLowerCase()} <ArrowUpRight className="size-4" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-10 sm:mt-12 flex justify-center">
              <GetQuote label="Book Free Quotation" />
            </div>
          </div>
        </section>

        {/* ---------- Portfolio ---------- */}
        <section id="work" className="section-pad bg-forest text-forest-foreground scroll-mt-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <SectionHead
              light
              eyebrow="Recent projects & gallery"
              title="Work We Are Proud of Across Dorset"
              copy="Browse our real completed projects — including The Bracken Project, The Chadwell Project, The Chickerell Project, The Plank Project, The Kestrel Project, Bournemouth Driveways, and Bovington Patios."
            />
            <div className="mt-8 sm:mt-10">
              <ProjectGallery />
            </div>
            <div className="mt-10 sm:mt-12 flex justify-center">
              <GetQuote label="Get a Quote for Your Project" />
            </div>
          </div>
        </section>

        {/* ---------- Why choose us ---------- */}
        <section id="why" className="section-pad grain scroll-mt-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <SectionHead
              eyebrow="Why choose us"
              title="Six Reasons Homeowners Choose Browns"
            />
            <div className="mt-10 sm:mt-12 grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {WHY.map((w) => (
                <div
                  key={w.title}
                  className="relative rounded-2xl border border-border bg-card p-5 sm:p-7 shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-[var(--shadow-soft)]"
                >
                  <span className="grid size-11 sm:size-12 place-items-center rounded-xl bg-forest text-gold shadow-sm">
                    <w.icon className="size-5 sm:size-6" />
                  </span>
                  <h3 className="mt-4 sm:mt-5 font-display text-lg sm:text-xl font-bold text-foreground">{w.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-foreground/80">{w.copy}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 sm:mt-12 flex justify-center">
              <GetQuote />
            </div>
          </div>
        </section>

        {/* ---------- Process ---------- */}
        <section id="process" className="section-pad bg-cream scroll-mt-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <SectionHead
              eyebrow="The Process"
              title="From Initial Site Visit to Finished Space"
              copy="Clear, structured three-stage process so you know exactly what to expect from your first consultation to project handover."
            />
            <div className="relative mt-12 sm:mt-14 grid gap-6 sm:gap-8 md:grid-cols-3">
              <span
                className="absolute inset-x-6 top-7 hidden h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent md:block"
                aria-hidden="true"
              />
              {PROCESS.map((p) => (
                <div key={p.n} className="relative rounded-2xl border border-border bg-card p-5 sm:p-6 shadow-sm">
                  <span className="relative grid size-12 sm:size-14 place-items-center rounded-full border-2 border-forest/15 bg-primary text-primary-foreground shadow-md">
                    <p.icon className="size-5 sm:size-6 text-gold" />
                  </span>
                  <span className="mt-4 sm:mt-5 block font-display text-xs font-black tracking-[0.25em] text-primary">
                    STEP {p.n}
                  </span>
                  <h3 className="mt-1 font-display text-lg sm:text-xl font-bold text-foreground">{p.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-foreground/80">{p.copy}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 sm:mt-12 flex justify-center">
              <GetQuote label="Start Your Project With a Free Site Visit" />
            </div>
          </div>
        </section>

        {/* ---------- Sister company & Seasonal promo ---------- */}
        <section id="offers" className="section-pad scroll-mt-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            {/* Sister company banner */}
            <div className="mb-8 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-5 sm:p-7 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row items-center justify-between gap-5">
                <div className="flex items-center gap-4 text-left">
                  <img
                    src={SISTER_LOGO_URL}
                    alt={SISTER_COMPANY_NAME}
                    className="h-12 w-auto object-contain shrink-0"
                  />
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-primary">Sister Company</span>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-foreground">
                      Explore {SISTER_COMPANY_NAME}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                      For all your internal home renovations, extensions, kitchen & bathroom builds across Dorset.
                    </p>
                  </div>
                </div>
                <Button asChild variant="outline" className="shrink-0 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold">
                  <a href={SISTER_COMPANY_URL} target="_blank" rel="noopener noreferrer" className="gap-2 font-bold">
                    Visit Sister Company <ExternalLink className="size-4" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="grain relative overflow-hidden rounded-3xl bg-forest p-6 sm:p-10 md:p-14 text-forest-foreground shadow-[var(--shadow-lift)]">
              <div className="pointer-events-none absolute -left-20 -top-20 size-72 rounded-full bg-gold/15 blur-3xl" aria-hidden="true" />
              <div className="relative grid gap-8 sm:gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
                <div>
                  <span className="eyebrow text-gold">
                    <Sparkles className="size-3.5" /> Seasonal Offers
                  </span>
                  <h2 className="mt-3 sm:mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-forest-foreground tracking-tight leading-[1.12]">
                    Book Your Site Visit & Save on Early Slots
                  </h2>
                  <p className="mt-3.5 text-sm sm:text-base text-forest-foreground/85 leading-relaxed">
                    Reserve your project start date today. Site visits are available 7 days a week with locked-in seasonal material pricing.
                  </p>
                  <div className="mt-6 sm:mt-8">
                    <GetQuote label="Claim Free Consultation" />
                  </div>
                </div>
                <div className="grid gap-3.5 sm:gap-4 sm:grid-cols-2">
                  {[
                    { t: "Free 3D/Layout Visual", d: "Complimentary concept mapping with every full garden makeover." },
                    { t: "Driveway & Patio Bundle", d: "Exclusive combined package discount when booking both services." },
                    { t: "Free Topsoil Prep", d: "Laser grade sub-base prep included with cultivated real turf orders." },
                    { t: "7-Day Flexible Booking", d: "Site visits scheduled around your work and weekend timetable." },
                  ].map((o) => (
                    <div
                      key={o.t}
                      className="rounded-2xl border border-forest-foreground/20 bg-forest-foreground/10 p-4 sm:p-5 shadow-sm"
                    >
                      <BadgeCheck className="size-5 text-gold" />
                      <h3 className="mt-2.5 font-display text-base sm:text-lg font-bold text-forest-foreground">{o.t}</h3>
                      <p className="mt-1 text-xs leading-relaxed text-forest-foreground/85">{o.d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- FAQ ---------- */}
        <section
          id="faq"
          className="section-pad relative overflow-hidden bg-decor-radial border-b border-border scroll-mt-20"
        >
          <div className="pointer-events-none absolute -right-16 top-10 size-80 rounded-full bg-gold/6 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute -left-16 bottom-10 size-80 rounded-full bg-primary/5 blur-3xl" aria-hidden="true" />
          <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
            <SectionHead eyebrow="Questions" title="Frequently Asked Questions" />
            <Accordion type="single" collapsible className="mt-8 sm:mt-10">
              {FAQS.map((f) => (
                <AccordionItem key={f.q} value={f.q} className="border-border">
                  <AccordionTrigger className="text-left font-display text-base sm:text-lg font-bold hover:text-primary hover:no-underline py-4">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-xs sm:text-sm leading-relaxed text-foreground/85">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <div className="mt-8 sm:mt-10 flex justify-center">
              <GetQuote />
            </div>
          </div>
        </section>

        {/* ---------- Service areas ---------- */}
        <section id="areas" className="section-pad bg-cream grain scroll-mt-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <SectionHead
              eyebrow="Where we work"
              title="Dorset & Surrounding Areas"
              copy="We provide site visits and complete installations across Dorset and surrounding regional communities."
            />
            <div className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-2 sm:gap-3">
              {AREAS.map((a) => (
                <span
                  key={a}
                  className="flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-bold text-foreground/85 shadow-sm transition-all hover:border-primary/40 hover:-translate-y-0.5"
                >
                  <MapPin className="size-3.5 text-primary" /> {a}
                </span>
              ))}
            </div>
            <div className="mt-10 sm:mt-12 flex justify-center">
              <GetQuote />
            </div>
          </div>
        </section>
      </main>

      {/* ---------- Footer ---------- */}
      <footer className="bg-forest text-forest-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-16">
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
            <div className="sm:col-span-2">
              <a href="#top" className="inline-block group">
                <img
                  src={LOGO_URL}
                  alt="Browns Home & Garden Logo"
                  className="h-16 sm:h-20 w-auto object-contain brightness-105 transition-transform group-hover:scale-105"
                />
              </a>
              <p className="mt-4 max-w-md text-xs sm:text-sm leading-relaxed text-forest-foreground/85">
                Browns Home & Garden — 25+ years experience delivering bespoke landscaping, porcelain patios, insulated garden rooms, durable driveways, and clearances across Dorset and surrounding areas.
              </p>
              <div className="mt-4 flex flex-col gap-1.5 text-xs text-forest-foreground/80">
                <span className="flex items-center gap-1.5">
                  <MapPin className="size-3.5 text-gold shrink-0" /> {COVERAGE_PRIMARY}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="size-3.5 text-gold shrink-0" /> Site visits available 7 days a week
                </span>
              </div>

              {/* Social channels */}
              <div className="mt-4 flex items-center gap-3">
                {SOCIAL_LINKS.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-forest-foreground/20 bg-forest-foreground/10 px-3 py-1.5 text-xs font-bold text-forest-foreground hover:bg-gold hover:text-stone-950 transition-colors"
                  >
                    {s.name}
                  </a>
                ))}
              </div>

              <div className="mt-5">
                <ReviewBadges tone="dark" />
              </div>
            </div>

            <div>
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-gold">Our Services</h3>
              <ul className="mt-4 space-y-2 text-xs sm:text-sm text-forest-foreground/80">
                {SERVICES.map((s) => (
                  <li key={s.name}>
                    <a href="#services" className="hover:text-gold transition-colors font-medium">
                      {s.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-gold">Get in touch</h3>
              <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-forest-foreground/85">
                <li className="flex items-center gap-2">
                  <Phone className="size-4 text-gold shrink-0" />
                  <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="hover:text-gold transition-colors font-bold">
                    {PHONE}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="size-4 text-gold shrink-0" />
                  <a href={`mailto:${EMAIL}`} className="hover:text-gold transition-colors font-medium">
                    {EMAIL}
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="mt-0.5 size-4 shrink-0 text-gold" />
                  <span>Site visits available 7 days a week</span>
                </li>
                <li className="flex items-center gap-2 pt-2">
                  <ExternalLink className="size-4 text-gold shrink-0" />
                  <a
                    href={SISTER_COMPANY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gold transition-colors font-medium underline underline-offset-4"
                  >
                    Browns Property Developments
                  </a>
                </li>
              </ul>
              <div className="mt-5">
                <GetQuote />
              </div>
            </div>
          </div>

          <span className="leaf-rule mt-10 sm:mt-12 block" />
          <div className="mt-6 flex flex-col items-center justify-between gap-2 text-center text-xs text-forest-foreground/70 md:flex-row md:text-left">
            <span>
              © {new Date().getFullYear()} Browns Home & Garden. All rights reserved. Dream it • Design it • Build it.
            </span>
            <span>Dorset & Surrounding Areas · Fully Licensed & Insured</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

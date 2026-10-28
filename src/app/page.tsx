"use client";

import React, { useState } from "react";
import {
  FileText,
  Smartphone,
  Tv,
  Laptop,
  Refrigerator,
  CheckCircle2,
  Circle,
  Download,
  Share2,
  Printer,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  AlertCircle,
  Copy,
  Check,
  FileCheck,
  HelpCircle,
  ChevronRight,
  Info,
} from "lucide-react";

export default function LandingPage() {
  // Checklist state for interactive tracking
  const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>({});
  const [copiedShare, setCopiedShare] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [emailInput, setEmailInput] = useState("");
  const [emailSuccess, setEmailSuccess] = useState(false);

  const toggleCheck = (id: number) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const completedCount = Object.values(checkedItems).filter(Boolean).length;

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2800);
    }
  };

  const handleDownloadTxt = () => {
    const content = `WARRANTY CLAIM
A free checklist by Rozaili for anyone about to file a warranty claim.

WHO THIS IS FOR:
Anyone whose phone, TV, laptop or appliance stopped working while it is still under warranty, and who wants the claim to be decided on facts, in writing.

THE IDEA IN ONE LINE:
A warranty claim is decided on records. Keep yours, and ask for theirs in writing.

BEFORE ANYTHING GOES WRONG:
1. Keep the invoice. Save the original bill and a photo or PDF copy. The warranty normally starts on the invoice date.
2. Register the product. Many brands ask you to register on their website or app; some add extra warranty when you do.
3. Read the warranty card once. Note how long it lasts, what it covers, and what it excludes.
4. Record the condition. Take a few dated photos of the product once it is installed or unboxed.

WHEN THE FAULT APPEARS:
5. Record the fault. Take a clear photo or short video of the problem as soon as you see it, with the date visible if you can.
6. Raise the complaint in writing. Use email, the brand's website or its app, not only a phone call, so there is a record.
7. Note every reference number. Write down the complaint or ticket number, the date and the name of anyone you speak to.

WHEN A TECHNICIAN VISITS:
8. Ask for the job sheet. Ask the technician for a copy of the visit report or job sheet before they leave.
9. Ask what was tested. Ask which test or instrument was used to reach the diagnosis.
10. Take your own photos. Photograph the product and anything the technician points to, during the visit.

IF THE CLAIM IS REFUSED:
11. Ask for the reason in writing. Request a written explanation that names the exact cause and the evidence for it.
12. Ask for the technical report. If the refusal rests on an inspection, ask for that inspection report.
13. Escalate inside the company. Most brands list a grievance or escalation contact on their website. Write to it, quoting your complaint number.
14. Keep it factual. Stick to dates, documents and photos. Calm, written records are what a consumer forum or regulator will look at.
15. Know your consumer helpline. Most countries run a free consumer helpline or online complaint portal that can guide you on the next step.

KEY NUMBERS:
- 15 steps in the checklist.
- 4 records to keep before anything goes wrong.
- 1 rule: if it is not in writing, it did not happen.

FOOTER NOTE:
Warranty Claim is a free, general guide created by Rozaili. It is not legal advice. For your own case, check the warranty terms for your product and your country's consumer rules.
`;
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "warranty-claim-checklist-rozaili.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setEmailSuccess(true);
      setTimeout(() => setEmailSuccess(false), 4000);
      setEmailInput("");
    }
  };

  // 15 checklist items verbatim from content.txt
  const checklistSections = [
    {
      id: "before",
      badge: "PHASE 01 • PREVENTION",
      title: "BEFORE ANYTHING GOES WRONG",
      lead: "Four essential records to safeguard your purchase before any malfunction occurs.",
      items: [
        {
          num: 1,
          boldTitle: "Keep the invoice.",
          desc: "Save the original bill and a photo or PDF copy. The warranty normally starts on the invoice date.",
          category: "Invoice & Receipt",
          tip: "Cloud backup recommended",
        },
        {
          num: 2,
          boldTitle: "Register the product.",
          desc: "Many brands ask you to register on their website or app; some add extra warranty when you do.",
          category: "Registration",
          tip: "Check manufacturer portal",
        },
        {
          num: 3,
          boldTitle: "Read the warranty card once.",
          desc: "Note how long it lasts, what it covers, and what it excludes.",
          category: "Policy Terms",
          tip: "Look for exclusions clause",
        },
        {
          num: 4,
          boldTitle: "Record the condition.",
          desc: "Take a few dated photos of the product once it is installed or unboxed.",
          category: "Baseline Evidence",
          tip: "Include serial number sticker",
        },
      ],
    },
    {
      id: "fault",
      badge: "PHASE 02 • FIRST RESPONSE",
      title: "WHEN THE FAULT APPEARS",
      lead: "Actionable steps when hardware stops operating correctly. Always create an immediate paper trail.",
      items: [
        {
          num: 5,
          boldTitle: "Record the fault.",
          desc: "Take a clear photo or short video of the problem as soon as you see it, with the date visible if you can.",
          category: "Defect Documentation",
          tip: "Video with timestamp",
        },
        {
          num: 6,
          boldTitle: "Raise the complaint in writing.",
          desc: "Use email, the brand's website or its app, not only a phone call, so there is a record.",
          category: "Written Notice",
          tip: "Avoid unrecorded verbal calls",
        },
        {
          num: 7,
          boldTitle: "Note every reference number.",
          desc: "Write down the complaint or ticket number, the date and the name of anyone you speak to.",
          category: "Tracking Log",
          tip: "Save every ticket ID",
        },
      ],
    },
    {
      id: "visit",
      badge: "PHASE 03 • ONSITE INSPECTION",
      title: "WHEN A TECHNICIAN VISITS",
      lead: "Critical protocol when a service engineer arrives. Never let an inspection conclude without signed records.",
      items: [
        {
          num: 8,
          boldTitle: "Ask for the job sheet.",
          desc: "Ask the technician for a copy of the visit report or job sheet before they leave.",
          category: "Service Report",
          tip: "Photograph before they take it",
        },
        {
          num: 9,
          boldTitle: "Ask what was tested.",
          desc: "Ask which test or instrument was used to reach the diagnosis.",
          category: "Technical Diagnosis",
          tip: "Record exact tool names",
        },
        {
          num: 10,
          boldTitle: "Take your own photos.",
          desc: "Photograph the product and anything the technician points to, during the visit.",
          category: "Contemporaneous Photos",
          tip: "Document opened parts",
        },
      ],
    },
    {
      id: "refused",
      badge: "PHASE 04 • ESCALATION",
      title: "IF THE CLAIM IS REFUSED",
      lead: "Defend your rights systematically. Written proof and internal escalations reverse wrongful denials.",
      isDarkSection: true,
      items: [
        {
          num: 11,
          boldTitle: "Ask for the reason in writing.",
          desc: "Request a written explanation that names the exact cause and the evidence for it.",
          category: "Formal Denial",
          tip: "Refuse verbal rejections",
        },
        {
          num: 12,
          boldTitle: "Ask for the technical report.",
          desc: "If the refusal rests on an inspection, ask for that inspection report.",
          category: "Engineering Log",
          tip: "Demand complete inspection files",
        },
        {
          num: 13,
          boldTitle: "Escalate inside the company.",
          desc: "Most brands list a grievance or escalation contact on their website. Write to it, quoting your complaint number.",
          category: "Grievance Officer",
          tip: "Reference ticket number",
        },
        {
          num: 14,
          boldTitle: "Keep it factual.",
          desc: "Stick to dates, documents and photos. Calm, written records are what a consumer forum or regulator will look at.",
          category: "Evidence Dossier",
          tip: "Clear, dispassionate timeline",
        },
        {
          num: 15,
          boldTitle: "Know your consumer helpline.",
          desc: "Most countries run a free consumer helpline or online complaint portal that can guide you on the next step.",
          category: "Public Redress",
          tip: "Free government mediation",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#363C47]">
      {/* 1. TICKER STRIP (DESIGN.md: thin mint/primary-soft strip above header, 10px mono uppercase labels, scrolling right to left) */}
      <aside
        aria-label="Announcement ticker"
        className="no-print bg-[#EFF6FF] border-b border-[#B9E6D6] overflow-hidden py-[10px] text-[#1E3A8A] font-mono text-[10px] uppercase tracking-[0.16em] font-medium"
      >
        <div className="animate-ticker whitespace-nowrap flex items-center gap-10">
          <span className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
            A WARRANTY CLAIM IS DECIDED ON RECORDS
          </span>
          <span className="text-[#93C5FD]">•</span>
          <span className="flex items-center gap-3">
            KEEP YOURS, AND ASK FOR THEIRS IN WRITING
          </span>
          <span className="text-[#93C5FD]">•</span>
          <span className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#34D399]" />
            15 STEPS IN THE CHECKLIST
          </span>
          <span className="text-[#93C5FD]">•</span>
          <span className="flex items-center gap-3">
            4 RECORDS TO KEEP BEFORE ANYTHING GOES WRONG
          </span>
          <span className="text-[#93C5FD]">•</span>
          <span className="flex items-center gap-3">
            1 RULE: IF IT IS NOT IN WRITING, IT DID NOT HAPPEN
          </span>
          <span className="text-[#93C5FD]">•</span>
          {/* Duplicate loop for seamless infinite scroll */}
          <span className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
            A WARRANTY CLAIM IS DECIDED ON RECORDS
          </span>
          <span className="text-[#93C5FD]">•</span>
          <span className="flex items-center gap-3">
            KEEP YOURS, AND ASK FOR THEIRS IN WRITING
          </span>
          <span className="text-[#93C5FD]">•</span>
          <span className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#34D399]" />
            15 STEPS IN THE CHECKLIST
          </span>
          <span className="text-[#93C5FD]">•</span>
          <span className="flex items-center gap-3">
            4 RECORDS TO KEEP BEFORE ANYTHING GOES WRONG
          </span>
          <span className="text-[#93C5FD]">•</span>
          <span className="flex items-center gap-3">
            1 RULE: IF IT IS NOT IN WRITING, IT DID NOT HAPPEN
          </span>
        </div>
      </aside>

      {/* 2. STICKY HEADER (DESIGN.md: sticky, white at 92% opacity, 1px bottom hairline #E7EAEF, height 72px) */}
      <header className="sticky top-0 z-50 bg-white/92 backdrop-blur-md border-b border-[#E7EAEF] h-[72px] transition-all">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-10 h-full flex items-center justify-between">
          {/* Logo: Mark + Ink Wordmark */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-[10px] bg-[#0D1117] flex items-center justify-center text-white font-mono font-bold text-sm tracking-wider shadow-sm group-hover:bg-[#2563EB] transition-colors">
              WC
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold tracking-[-0.035em] text-[#0D1117] text-lg leading-tight uppercase">
                WARRANTY CLAIM
              </span>
              <span className="font-mono text-[10px] text-[#5B6472] tracking-[0.16em] uppercase">
                BY ROZAILI
              </span>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-[15px] font-semibold text-[#5B6472]">
            <a
              href="#who-this-is-for"
              className="hover:text-[#0D1117] transition-colors"
            >
              Who This Is For
            </a>
            <a
              href="#the-idea"
              className="hover:text-[#0D1117] transition-colors"
            >
              The Core Idea
            </a>
            <a
              href="#checklist"
              className="hover:text-[#0D1117] transition-colors"
            >
              The 15 Steps
            </a>
            <a
              href="#key-numbers"
              className="hover:text-[#0D1117] transition-colors"
            >
              Key Numbers
            </a>
          </nav>

          {/* Header Action: Button-Dark (DESIGN.md: ink pill, white 13.5px text, 10px by 20px, hover: primary) */}
          <div className="flex items-center gap-3">
            <a
              href="#checklist"
              className="inline-flex items-center justify-center bg-[#0D1117] hover:bg-[#2563EB] text-white text-[13.5px] font-medium px-5 py-[10px] rounded-full transition-all duration-200 shadow-sm active:scale-95"
            >
              View Checklist
            </a>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* 3. HERO SECTION (DESIGN.md: 2 columns on desktop, copy left ~55%, visual right ~45%, 84px to 148px vertical padding) */}
        <section className="bg-white pt-14 pb-20 md:py-[100px] border-b border-[#E7EAEF]">
          <div className="max-w-[1180px] mx-auto px-5 sm:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
              {/* Left Column (55%) */}
              <div className="lg:col-span-7 flex flex-col items-start">
                {/* Eyebrow Pill Label (DESIGN.md: pill-label) */}
                <div className="inline-flex items-center gap-2 bg-[#EFF6FF] border border-[#B9E6D6] px-[14px] py-[6px] rounded-full text-[#1E3A8A] font-mono text-[10px] font-medium tracking-[0.16em] uppercase mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                  A FREE CHECKLIST BY ROZAILI
                </div>

                {/* Display Headline */}
                <h1 className="text-[38px] sm:text-[50px] lg:text-[60px] font-extrabold tracking-[-0.035em] text-[#0D1117] leading-[1.06] mb-5">
                  WARRANTY CLAIM
                </h1>

                {/* Lead Paragraph verbatim */}
                <p className="text-[18px] sm:text-[20px] text-[#5B6472] font-normal leading-[1.72] max-w-[62ch] mb-8">
                  A free checklist by Rozaili for anyone about to file a warranty claim.
                </p>

                {/* Call to Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
                  {/* Button-Primary (DESIGN.md: primary #2563EB, white 15px semibold, rounded full, 14px 28px, raised shadow, hover lift) */}
                  <a
                    href="#checklist"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-[15px] font-semibold px-7 py-[14px] rounded-full transition-all duration-200 shadow-raised hover:-translate-y-0.5"
                  >
                    Start Checklist
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>

                  {/* Button-Ghost (DESIGN.md: white pill with 1px hairline border and ink text, hover mist) */}
                  <button
                    onClick={handleDownloadTxt}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-[#F7F8FA] text-[#0D1117] border border-[#E7EAEF] text-[15px] font-semibold px-7 py-[14px] rounded-full transition-all duration-200"
                  >
                    <Download className="w-4 h-4 text-[#5B6472]" />
                    Download Checklist (.txt)
                  </button>
                </div>

                {/* Trust Micro-Metrics */}
                <div className="mt-10 pt-8 border-t border-[#E7EAEF] w-full grid grid-cols-3 gap-4 font-mono text-[11px] text-[#5B6472]">
                  <div>
                    <span className="block text-base font-bold font-sans text-[#0D1117]">15 Steps</span>
                    <span>Complete Protocol</span>
                  </div>
                  <div>
                    <span className="block text-base font-bold font-sans text-[#2563EB]">100% Free</span>
                    <span>No Sign-Up Needed</span>
                  </div>
                  <div>
                    <span className="block text-base font-bold font-sans text-[#0D1117]">In Writing</span>
                    <span>Factual Records</span>
                  </div>
                </div>
              </div>

              {/* Right Column (45%): Editorial Document Card */}
              <div className="lg:col-span-5">
                <div className="relative bg-[#FBFCFD] border border-[#E7EAEF] rounded-[26px] p-6 sm:p-8 shadow-card overflow-hidden">
                  {/* Subtle top decoration badge */}
                  <div className="flex items-center justify-between pb-5 border-b border-[#E7EAEF]">
                    <div className="flex items-center gap-2">
                      <FileCheck className="w-5 h-5 text-[#2563EB]" />
                      <span className="font-mono text-[11px] text-[#0D1117] uppercase tracking-[0.16em] font-semibold">
                        OFFICIAL DOSSIER
                      </span>
                    </div>
                    <span className="font-mono text-[10px] bg-[#EFF6FF] text-[#1E3A8A] border border-[#B9E6D6] px-2.5 py-1 rounded-full uppercase tracking-wider">
                      RECORDS-FIRST
                    </span>
                  </div>

                  {/* Document Card Content */}
                  <div className="py-6 space-y-4">
                    <p className="font-mono text-[11px] text-[#5B6472] uppercase tracking-[0.16em]">
                      THE GOLDEN DIRECTIVE
                    </p>
                    <blockquote className="text-[20px] font-bold text-[#0D1117] tracking-[-0.035em] leading-[1.3] border-l-4 border-[#2563EB] pl-4 py-1">
                      &ldquo;A warranty claim is decided on records. Keep yours, and ask for theirs in writing.&rdquo;
                    </blockquote>
                    <p className="text-[13.5px] text-[#5B6472] leading-[1.6]">
                      Verbal promises disappear. Timestamps, written receipts, technician test reports, and job sheets are what establish liability.
                    </p>
                  </div>

                  {/* Mini Progress Card Inside */}
                  <div className="bg-white border border-[#E7EAEF] rounded-[18px] p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#EFF6FF] flex items-center justify-center text-[#2563EB]">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-[13.5px] font-bold text-[#0D1117]">
                          Checklist Progress
                        </div>
                        <div className="text-[11px] font-mono text-[#5B6472]">
                          {completedCount} of 15 steps logged
                        </div>
                      </div>
                    </div>
                    <span className="text-[17px] font-extrabold text-[#2563EB] font-mono tnum">
                      {Math.round((completedCount / 15) * 100)}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. HEADLINE CARD (DESIGN.md: a dark ink panel with a 26px radius holding one short sentence in large mono type with faint horizontal scanline texture. Used once, at top of page) */}
        <section id="the-idea" className="py-12 sm:py-16 bg-[#F7F8FA]">
          <div className="max-w-[1180px] mx-auto px-5 sm:px-10">
            {/* Pill Label */}
            <div className="flex justify-center mb-4">
              <div className="inline-flex items-center gap-2 bg-[#EFF6FF] border border-[#B9E6D6] px-[14px] py-[6px] rounded-full text-[#1E3A8A] font-mono text-[10px] font-medium tracking-[0.16em] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                THE IDEA IN ONE LINE
              </div>
            </div>

            {/* Dark Ink Panel (DESIGN.md: headline-card) */}
            <div className="relative bg-[#0D1117] text-[#34D399] rounded-[26px] p-8 sm:p-12 md:p-14 shadow-raised overflow-hidden scanlines">
              {/* Scanline subtle indicator */}
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10 text-white/50 font-mono text-[10px] tracking-[0.16em] uppercase">
                <span>CORE FOUNDATION PROTOCOL</span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#34D399] animate-pulse" />
                  PRIMARY TENET
                </span>
              </div>

              {/* The exact sentence verbatim in large type */}
              <div className="font-mono text-[22px] sm:text-[32px] md:text-[36px] font-semibold tracking-[-0.02em] leading-[1.3] text-white">
                &ldquo;A warranty claim is decided on records. Keep yours, and ask for theirs in writing.&rdquo;
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-[13.5px] text-white/70">
                <p className="max-w-[55ch]">
                  Companies rely on written job sheets, customer portals, and technician logs. When you operate with the same standard, claims settle swiftly.
                </p>
                <span className="font-mono text-[11px] text-[#34D399] tracking-[0.16em] uppercase">
                  SECTION 02 / ROZAILI GUIDE
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 5. "WHO THIS IS FOR" SECTION (DESIGN.md: Section stack: label, 16px, headline, 20px, lead max-w 62ch, 48-64px, then content) */}
        <section id="who-this-is-for" className="py-20 md:py-[120px] bg-white border-b border-[#E7EAEF]">
          <div className="max-w-[1180px] mx-auto px-5 sm:px-10">
            {/* Section Header Stack */}
            <div className="flex flex-col items-start mb-12 md:mb-16">
              {/* Mono Pill Label */}
              <div className="inline-flex items-center gap-2 bg-[#EFF6FF] border border-[#B9E6D6] px-[14px] py-[6px] rounded-full text-[#1E3A8A] font-mono text-[10px] font-medium tracking-[0.16em] uppercase mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                WHO THIS IS FOR
              </div>

              {/* Heavy Headline */}
              <h2 className="text-[31px] sm:text-[40px] md:text-[47px] font-extrabold tracking-[-0.035em] text-[#0D1117] leading-[1.06] mb-5">
                Decided on facts, in writing.
              </h2>

              {/* Lead Paragraph verbatim */}
              <p className="text-[17.5px] sm:text-[20px] text-[#5B6472] font-normal leading-[1.72] max-w-[62ch]">
                Anyone whose phone, TV, laptop or appliance stopped working while it is still under warranty, and who wants the claim to be decided on facts, in writing.
              </p>
            </div>

            {/* 4 Category Cards Grid (Phone, TV, Laptop, Appliance) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Phone Card */}
              <div className="bg-[#FBFCFD] border border-[#E7EAEF] rounded-[18px] p-7 shadow-card hover:-translate-y-1 transition-all duration-200">
                <div className="w-12 h-12 rounded-[12px] bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center mb-6">
                  <Smartphone className="w-6 h-6" />
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#5B6472] mb-1">
                  CATEGORY 01
                </div>
                <h3 className="text-[20px] font-extrabold text-[#0D1117] mb-2 tracking-[-0.03em]">
                  Smartphones
                </h3>
                <p className="text-[13.5px] text-[#5B6472] leading-[1.6]">
                  Displays, liquid contact sensors, charging ports, and battery degradation under warranty.
                </p>
              </div>

              {/* TV Card */}
              <div className="bg-[#FBFCFD] border border-[#E7EAEF] rounded-[18px] p-7 shadow-card hover:-translate-y-1 transition-all duration-200">
                <div className="w-12 h-12 rounded-[12px] bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center mb-6">
                  <Tv className="w-6 h-6" />
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#5B6472] mb-1">
                  CATEGORY 02
                </div>
                <h3 className="text-[20px] font-extrabold text-[#0D1117] mb-2 tracking-[-0.03em]">
                  Televisions
                </h3>
                <p className="text-[13.5px] text-[#5B6472] leading-[1.6]">
                  Panel lines, dead pixels, motherboard failures, and power supply issues within warranty term.
                </p>
              </div>

              {/* Laptop Card */}
              <div className="bg-[#FBFCFD] border border-[#E7EAEF] rounded-[18px] p-7 shadow-card hover:-translate-y-1 transition-all duration-200">
                <div className="w-12 h-12 rounded-[12px] bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center mb-6">
                  <Laptop className="w-6 h-6" />
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#5B6472] mb-1">
                  CATEGORY 03
                </div>
                <h3 className="text-[20px] font-extrabold text-[#0D1117] mb-2 tracking-[-0.03em]">
                  Laptops & PCs
                </h3>
                <p className="text-[13.5px] text-[#5B6472] leading-[1.6]">
                  Keyboard failures, motherboard defects, cooling fans, and hinge issues during coverage.
                </p>
              </div>

              {/* Appliance Card */}
              <div className="bg-[#FBFCFD] border border-[#E7EAEF] rounded-[18px] p-7 shadow-card hover:-translate-y-1 transition-all duration-200">
                <div className="w-12 h-12 rounded-[12px] bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center mb-6">
                  <Refrigerator className="w-6 h-6" />
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#5B6472] mb-1">
                  CATEGORY 04
                </div>
                <h3 className="text-[20px] font-extrabold text-[#0D1117] mb-2 tracking-[-0.03em]">
                  Home Appliances
                </h3>
                <p className="text-[13.5px] text-[#5B6472] leading-[1.6]">
                  Refrigerators, washing machines, dryers, air conditioners, and compressors.
                </p>
              </div>
            </div>

            {/* Callout Card (DESIGN.md: card-callout: primary-soft fill with primary-border outline) */}
            <div className="mt-10 bg-[#EFF6FF] border border-[#B9E6D6] rounded-[18px] p-7 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <Info className="w-6 h-6 text-[#2563EB] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-[17px] font-bold text-[#1E3A8A] mb-1">
                    Equip yourself before speaking with customer care
                  </h4>
                  <p className="text-[15px] text-[#363C47] max-w-[65ch]">
                    When you document invoices, photos, and job sheets early, customer care agents cannot dismiss your claim with vague verbal excuses.
                  </p>
                </div>
              </div>
              <a
                href="#checklist"
                className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-[13.5px] font-semibold px-5 py-2.5 rounded-full transition-colors flex-shrink-0"
              >
                Go to Steps
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* 6. "KEY NUMBERS FOR THE PAGE" SECTION (DESIGN.md: Stat grid: 2 or 4 cells joined by 1px hairline gaps inside one rounded card) */}
        <section id="key-numbers" className="py-20 md:py-[120px] bg-[#F7F8FA] border-b border-[#E7EAEF]">
          <div className="max-w-[1180px] mx-auto px-5 sm:px-10">
            {/* Header Stack */}
            <div className="flex flex-col items-start mb-12 md:mb-16">
              <div className="inline-flex items-center gap-2 bg-[#EFF6FF] border border-[#B9E6D6] px-[14px] py-[6px] rounded-full text-[#1E3A8A] font-mono text-[10px] font-medium tracking-[0.16em] uppercase mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                KEY NUMBERS FOR THE PAGE
              </div>
              <h2 className="text-[31px] sm:text-[40px] md:text-[47px] font-extrabold tracking-[-0.035em] text-[#0D1117] leading-[1.06]">
                The Three Core Metrics
              </h2>
            </div>

            {/* Stat Grid (DESIGN.md: joined by 1px hairline gaps inside one rounded card; big tabular numbers over 13.5px caption. One hot cell in emerald/primary) */}
            <div className="bg-[#E7EAEF] p-[1px] rounded-[18px] grid grid-cols-1 md:grid-cols-3 gap-[1px] overflow-hidden shadow-card">
              {/* Stat 1: 15 steps */}
              <div className="bg-white p-7 sm:p-10 flex flex-col justify-between">
                <div className="font-mono text-[11px] text-[#5B6472] uppercase tracking-[0.16em] mb-4">
                  METRIC 01 • PROTOCOL
                </div>
                <div className="text-[46px] sm:text-[54px] font-extrabold text-[#0D1117] tracking-[-0.035em] leading-none mb-4 tnum">
                  15
                </div>
                <div className="text-[17px] font-bold text-[#0D1117] mb-1">
                  Steps in the checklist.
                </div>
                <p className="text-[13.5px] text-[#5B6472] leading-[1.5]">
                  From initial purchase invoice preservation to public consumer ombudsman helplines.
                </p>
              </div>

              {/* Stat 2: 4 records */}
              <div className="bg-white p-7 sm:p-10 flex flex-col justify-between">
                <div className="font-mono text-[11px] text-[#5B6472] uppercase tracking-[0.16em] mb-4">
                  METRIC 02 • SAFEGUARD
                </div>
                <div className="text-[46px] sm:text-[54px] font-extrabold text-[#0D1117] tracking-[-0.035em] leading-none mb-4 tnum">
                  4
                </div>
                <div className="text-[17px] font-bold text-[#0D1117] mb-1">
                  Records to keep before anything goes wrong.
                </div>
                <p className="text-[13.5px] text-[#5B6472] leading-[1.5]">
                  Invoice, brand registration, warranty terms check, and unboxing condition photos.
                </p>
              </div>

              {/* Stat 3: 1 rule (HOT CELL in primary #2563EB) */}
              <div className="bg-white p-7 sm:p-10 flex flex-col justify-between">
                <div className="font-mono text-[11px] text-[#2563EB] uppercase tracking-[0.16em] mb-4 font-semibold">
                  METRIC 03 • THE CARDINAL RULE
                </div>
                <div className="text-[46px] sm:text-[54px] font-extrabold text-[#2563EB] tracking-[-0.035em] leading-none mb-4 tnum">
                  1
                </div>
                <div className="text-[17px] font-bold text-[#0D1117] mb-1">
                  Rule: if it is not in writing, it did not happen.
                </div>
                <p className="text-[13.5px] text-[#5B6472] leading-[1.5]">
                  Always request written diagnosis, job sheet copies, and formal rejection grounds.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. THE 15-STEP CHECKLIST SECTIONS */}
        <section id="checklist" className="py-20 md:py-[120px] bg-white">
          <div className="max-w-[1180px] mx-auto px-5 sm:px-10">
            {/* Main Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-[#E7EAEF]">
              <div>
                <div className="inline-flex items-center gap-2 bg-[#EFF6FF] border border-[#B9E6D6] px-[14px] py-[6px] rounded-full text-[#1E3A8A] font-mono text-[10px] font-medium tracking-[0.16em] uppercase mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                  FULL 15-STEP PROTOCOL
                </div>
                <h2 className="text-[31px] sm:text-[40px] md:text-[47px] font-extrabold tracking-[-0.035em] text-[#0D1117] leading-[1.06]">
                  Warranty Claim Checklist
                </h2>
                <p className="text-[17.5px] text-[#5B6472] mt-3 max-w-[60ch]">
                  Click each item as you complete it. Your progress is updated live.
                </p>
              </div>

              {/* Progress & Quick Action Controls */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="bg-[#F7F8FA] border border-[#E7EAEF] px-4 py-2.5 rounded-full flex items-center gap-2 font-mono text-[12px] text-[#0D1117]">
                  <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
                  <span>
                    <strong className="tnum font-bold text-[#2563EB]">{completedCount}</strong> of 15 completed
                  </span>
                </div>

                <button
                  onClick={handlePrint}
                  className="inline-flex items-center gap-2 bg-white hover:bg-[#F7F8FA] border border-[#E7EAEF] px-4 py-2.5 rounded-full text-[13.5px] font-medium text-[#0D1117] transition-colors"
                  title="Print clean checklist"
                >
                  <Printer className="w-4 h-4 text-[#5B6472]" />
                  Print
                </button>

                <button
                  onClick={handleDownloadTxt}
                  className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-5 py-2.5 rounded-full text-[13.5px] font-semibold transition-colors shadow-sm"
                >
                  <Download className="w-4 h-4" />
                  Save Checklist
                </button>
              </div>
            </div>

            {/* Checklist Category Sections */}
            <div className="space-y-20">
              {checklistSections.map((sec, secIdx) => {
                if (sec.isDarkSection) {
                  {/* SECTION 4: DARK INK SECTION (DESIGN.md: section-dark: ink background #0D1117, white headlines, bright emerald labels, inner panels in white at 10% opacity) */}
                  return (
                    <div
                      key={sec.id}
                      id={sec.id}
                      className="bg-[#0D1117] text-white rounded-[26px] p-7 sm:p-12 md:p-16 shadow-raised relative overflow-hidden"
                    >
                      {/* Section Stack */}
                      <div className="max-w-[760px] mb-12">
                        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-[14px] py-[6px] rounded-full text-[#34D399] font-mono text-[10px] font-medium tracking-[0.16em] uppercase mb-4">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#34D399]" />
                          {sec.title}
                        </div>
                        <h3 className="text-[28px] sm:text-[38px] font-extrabold tracking-[-0.035em] text-white leading-[1.08] mb-4">
                          {sec.title}
                        </h3>
                        <p className="text-[17px] text-white/75 leading-[1.72]">
                          {sec.lead}
                        </p>
                      </div>

                      {/* Items in Dark Section (inner panels in white at 10% opacity) */}
                      <div className="space-y-4">
                        {sec.items.map((item) => {
                          const isDone = !!checkedItems[item.num];
                          return (
                            <div
                              key={item.num}
                              onClick={() => toggleCheck(item.num)}
                              className={`group cursor-pointer rounded-[18px] p-6 sm:p-7 border transition-all duration-200 ${
                                isDone
                                  ? "bg-white/15 border-[#34D399]/40"
                                  : "bg-white/10 border-white/15 hover:bg-white/12 hover:border-white/25"
                              }`}
                            >
                              <div className="flex items-start gap-4 sm:gap-6">
                                {/* Interactive Checkbox */}
                                <button
                                  type="button"
                                  aria-label={`Mark step ${item.num} as completed`}
                                  className={`mt-1 flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                                    isDone
                                      ? "bg-[#34D399] text-[#0D1117]"
                                      : "border-2 border-white/40 group-hover:border-white text-transparent"
                                  }`}
                                >
                                  <Check className="w-4 h-4 stroke-[3]" />
                                </button>

                                {/* Item Body */}
                                <div className="flex-grow">
                                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                                    <span className="font-mono text-[11px] text-[#34D399] tracking-[0.16em] uppercase font-semibold">
                                      STEP {item.num.toString().padStart(2, "0")} • {item.category}
                                    </span>
                                    <span className="font-mono text-[10px] text-white/50 bg-white/5 px-2.5 py-0.5 rounded-full">
                                      {item.tip}
                                    </span>
                                  </div>

                                  <div className="text-[17.5px] sm:text-[19px] font-bold text-white mb-2 tracking-[-0.02em]">
                                    {item.num}. {item.boldTitle}
                                  </div>

                                  <p className="text-[15.5px] text-white/80 leading-[1.7]">
                                    {item.desc}
                                  </p>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                }

                {/* LIGHT / MUTED SECTIONS (PHASES 1, 2, 3) */}
                const isAlternateBg = secIdx % 2 === 1;
                return (
                  <div
                    key={sec.id}
                    id={sec.id}
                    className={`rounded-[26px] p-7 sm:p-10 md:p-12 border border-[#E7EAEF] transition-all ${
                      isAlternateBg ? "bg-[#F7F8FA]" : "bg-[#FBFCFD]"
                    }`}
                  >
                    {/* Section Header Stack */}
                    <div className="max-w-[760px] mb-10">
                      <div className="inline-flex items-center gap-2 bg-[#EFF6FF] border border-[#B9E6D6] px-[14px] py-[6px] rounded-full text-[#1E3A8A] font-mono text-[10px] font-medium tracking-[0.16em] uppercase mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                        {sec.title}
                      </div>
                      <h3 className="text-[26px] sm:text-[34px] font-extrabold tracking-[-0.035em] text-[#0D1117] leading-[1.1] mb-3">
                        {sec.title}
                      </h3>
                      <p className="text-[16px] sm:text-[17px] text-[#5B6472] leading-[1.72]">
                        {sec.lead}
                      </p>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 gap-4">
                      {sec.items.map((item) => {
                        const isDone = !!checkedItems[item.num];
                        return (
                          <div
                            key={item.num}
                            onClick={() => toggleCheck(item.num)}
                            className={`group cursor-pointer bg-white rounded-[18px] p-6 sm:p-7 border transition-all duration-200 ${
                              isDone
                                ? "border-[#2563EB] shadow-raised bg-[#EFF6FF]/20"
                                : "border-[#E7EAEF] shadow-card hover:border-[#D6DBE3] hover:-translate-y-0.5"
                            }`}
                          >
                            <div className="flex items-start gap-4 sm:gap-6">
                              {/* Checkbox */}
                              <button
                                type="button"
                                aria-label={`Mark step ${item.num} as completed`}
                                className={`mt-1 flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                                  isDone
                                    ? "bg-[#2563EB] text-white"
                                    : "border-2 border-[#D6DBE3] group-hover:border-[#2563EB] text-transparent"
                                }`}
                              >
                                <Check className="w-4 h-4 stroke-[3]" />
                              </button>

                              {/* Content */}
                              <div className="flex-grow">
                                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                                  <span className="font-mono text-[11px] text-[#2563EB] tracking-[0.16em] uppercase font-semibold">
                                    STEP {item.num.toString().padStart(2, "0")} • {item.category}
                                  </span>
                                  <span className="font-mono text-[10px] text-[#5B6472] bg-[#F7F8FA] border border-[#E7EAEF] px-2.5 py-0.5 rounded-full">
                                    {item.tip}
                                  </span>
                                </div>

                                <div className="text-[17.5px] sm:text-[18.5px] font-bold text-[#0D1117] mb-2 tracking-[-0.02em]">
                                  {item.num}. {item.boldTitle}
                                </div>

                                <p className="text-[15px] sm:text-[16px] text-[#363C47] leading-[1.7]">
                                  {item.desc}
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 8. CALL TO ACTION SECTION (DESIGN.md: Call to action with download, share, input matching input token) */}
        <section className="py-20 md:py-[120px] bg-[#F7F8FA] border-t border-[#E7EAEF]">
          <div className="max-w-[880px] mx-auto px-5 sm:px-10 text-center">
            {/* Pill Label */}
            <div className="inline-flex items-center gap-2 bg-[#EFF6FF] border border-[#B9E6D6] px-[14px] py-[6px] rounded-full text-[#1E3A8A] font-mono text-[10px] font-medium tracking-[0.16em] uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
              CALL TO ACTION
            </div>

            <h2 className="text-[31px] sm:text-[44px] font-extrabold tracking-[-0.035em] text-[#0D1117] leading-[1.1] mb-6">
              Keep It With Your Invoices
            </h2>

            {/* Verbatim statements from content.txt */}
            <div className="space-y-4 max-w-[62ch] mx-auto mb-10 text-[18px] sm:text-[20px] text-[#5B6472] leading-[1.72]">
              <p>
                Download the checklist and keep it with your invoices.
              </p>
              <p>
                Share it with a friend who just bought something expensive.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
              {/* Primary Download Button */}
              <button
                onClick={handleDownloadTxt}
                className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-[15px] font-semibold px-8 py-[14px] rounded-full transition-all duration-200 shadow-raised hover:-translate-y-0.5 active:scale-95"
              >
                <Download className="w-5 h-5" />
                Download Checklist (.txt)
              </button>

              {/* Share Button with feedback */}
              <button
                onClick={handleShare}
                className="inline-flex items-center gap-2 bg-white hover:bg-[#F7F8FA] text-[#0D1117] border border-[#E7EAEF] text-[15px] font-semibold px-8 py-[14px] rounded-full transition-all duration-200 shadow-card hover:-translate-y-0.5 active:scale-95"
              >
                {copiedShare ? (
                  <>
                    <Check className="w-5 h-5 text-[#2563EB]" />
                    <span className="text-[#2563EB]">Link Copied!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-5 h-5 text-[#5B6472]" />
                    Share with a Friend
                  </>
                )}
              </button>
            </div>

            {/* Email Form (DESIGN.md: input component: sunken grey fill #F2F4F7, 12px radius, 44px height, 15px text, focus 2px outline) */}
            <div className="max-w-[500px] mx-auto bg-white border border-[#E7EAEF] rounded-[18px] p-6 shadow-card">
              <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Enter email to backup checklist..."
                  className="flex-grow bg-[#F2F4F7] border border-[#D6DBE3] text-[#0D1117] text-[15px] rounded-[12px] h-[44px] px-[14px] focus:outline-none focus:ring-2 focus:ring-[#2563EB] transition-all"
                />
                <button
                  type="submit"
                  className="bg-[#0D1117] hover:bg-[#2563EB] text-white text-[13.5px] font-medium px-5 h-[44px] rounded-[12px] transition-colors whitespace-nowrap"
                >
                  Email Copy
                </button>
              </form>
              {emailSuccess && (
                <div className="mt-3 text-[13.5px] text-[#2563EB] font-medium flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  Sent! Keep the checklist saved with your files.
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* 9. FOOTER (DESIGN.md: footer: backgroundColor surface-muted #F7F8FA, textColor on-surface-variant #5B6472, typography body-sm 13.5px, padding 64px, 1px top hairline) */}
      <footer className="bg-[#F7F8FA] border-t border-[#E7EAEF] py-16 text-[#5B6472] text-[13.5px] leading-[1.5]">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#E7EAEF]">
            {/* Col 1: About */}
            <div className="md:col-span-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-[8px] bg-[#0D1117] flex items-center justify-center text-white font-mono text-xs font-bold">
                  WC
                </div>
                <span className="font-extrabold tracking-[-0.035em] text-[#0D1117] text-base uppercase">
                  WARRANTY CLAIM
                </span>
              </div>
              <p className="max-w-[45ch] text-[#5B6472]">
                A free checklist by Rozaili for anyone about to file a warranty claim. Decided on facts, in writing.
              </p>
              <div className="font-mono text-[11px] text-[#1E3A8A] uppercase tracking-[0.16em]">
                EDITORIAL BLUE SYSTEM • ALPHA SPEC
              </div>
            </div>

            {/* Col 2: Navigation */}
            <div className="md:col-span-3 space-y-3">
              <div className="font-mono text-[11px] text-[#0D1117] uppercase tracking-[0.16em] font-semibold">
                SECTIONS
              </div>
              <ul className="space-y-2">
                <li>
                  <a href="#who-this-is-for" className="hover:text-[#0D1117] transition-colors">
                    Who This Is For
                  </a>
                </li>
                <li>
                  <a href="#the-idea" className="hover:text-[#0D1117] transition-colors">
                    The Idea in One Line
                  </a>
                </li>
                <li>
                  <a href="#key-numbers" className="hover:text-[#0D1117] transition-colors">
                    Key Numbers
                  </a>
                </li>
                <li>
                  <a href="#checklist" className="hover:text-[#0D1117] transition-colors">
                    15-Step Checklist
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Actions */}
            <div className="md:col-span-3 space-y-3">
              <div className="font-mono text-[11px] text-[#0D1117] uppercase tracking-[0.16em] font-semibold">
                RESOURCES
              </div>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={handleDownloadTxt}
                    className="hover:text-[#0D1117] transition-colors text-left"
                  >
                    Download Checklist (.txt)
                  </button>
                </li>
                <li>
                  <button
                    onClick={handlePrint}
                    className="hover:text-[#0D1117] transition-colors text-left"
                  >
                    Printable Version
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleShare}
                    className="hover:text-[#0D1117] transition-colors text-left"
                  >
                    Share Checklist
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* FOOTER NOTE verbatim from content.txt */}
          <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[13px] text-[#697382]">
            <p className="max-w-[75ch]">
              <strong>FOOTER NOTE:</strong> Warranty Claim is a free, general guide created by Rozaili. It is not legal advice. For your own case, check the warranty terms for your product and your country's consumer rules.
            </p>
            <div className="font-mono text-[11px] text-[#697382] whitespace-nowrap">
              © {new Date().getFullYear()} ROZAILI
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

'use client';

import { useEffect, useState } from 'react';
import { CheckCircle, Zap, ChevronDown, ArrowRight, Star, MapPin, Calendar, Sparkles, Link } from 'lucide-react';
import { motion, type Variants } from "framer-motion";
import { useRef } from "react";
import { link } from 'node:fs';

interface ChallengeItem {
  tag: string;
  title: string;
  text: string;
}

type FaqItem = {
  q: string;
  a: string;
};

export default function Home() {
  const [activeDay, setActiveDay] = useState<string>("februari");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariant: Variants = {
    hidden: {
      opacity: 0,
      y: 24,
      filter: "blur(4px)",
    },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const desktopOnly: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const challengeItems: ChallengeItem[] = [
    {
      tag: "01",
      title: "Navigasi Karier & Magang di Era Disrupsi",
      text: "Persaingan talenta makin ketat. Sesi ini membekali strategi adaptif untuk menembus peluang magang dan karier profesional secara relevan di mata rekruter.",
    },
    {
      tag: "02",
      title: "Diversifikasi Pendapatan & Ekonomi Kreatif",
      text: "Side income kini jadi kebutuhan. Pelajari cara menemukan dan mengeksekusi peluang penghasilan tambahan yang berkelanjutan.",
    },
    {
      tag: "03",
      title: "Transformasi Edukator: Kembali ke Esensi Mengajar",
      text: "Kurangi beban administratif dengan teknologi agar pendidik bisa fokus pada kualitas materi dan dampak pengajaran.",
    },
    {
      tag: "04",
      title: "Era Agentic AI untuk Produktivitas Maksimal",
      text: "Kehadiran Agentic AI kini memungkinkan Anda untuk mendelegasikan berbagai pekerjaan secara otonom agar lebih cepat dan efektif.",
    },
  ];

  const faq: FaqItem[] = [
    {
      q: "Apakah pemula bisa ikut?",
      a: "Tentu! Sesi kami dirancang dari level dasar hingga mahir.",
    },
    {
      q: "Ada rekaman videonya?",
      a: "Ya, semua tiket mendapatkan akses rekaman sesuai paket yang dipilih.",
    },
    {
      q: "Apakah dapat sertifikat?",
      a: "Ya, E-Certificate resmi akan dikirimkan setelah acara selesai.",
    },
  ];

  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({
      left: -280,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({
      left: 280,
      behavior: 'smooth',
    });
  };

  const scrollToAgenda = () => {
  const section = document.getElementById("agenda");
  section?.scrollIntoView({ behavior: "smooth" });
};

  // Data Mentor
  const mentors = [
    {
      name: "Shiva Destya",
      role: "Owner Wova Career, Career Specialist & Content Creator",
      description:
        " Pakar strategi CV ATS friendly dan optimalisasi AI untuk karier. Berpengalaman membantu pelamar meraih golden ticket perusahaan meski minim pengalaman kerja.",
      img: "/mentor-1.png",
      company: "wova",
      companyLogo: "/wova.png",
    },
    {
      name: "Annisa Ulkhairiyah",
      role: "Awardee MSIB & Program Manager Nortis AI Academy",
      description:
        "Awardee MSIB. Ahli dalam manajemen program edukasi berbasis AI serta pengembangan komunitas belajar untuk mempersiapkan mahasiswa masuk ke dunia kerja.",
      img: "/mentor-1.2.png",
      company: "Nortis AI Academy",
      companyLogo: "/logoputihnortis.png",
    },
    {
      name: "Cesiin",
      role: "Content Creator & AI Specialist",
      description:
        "Pakar personal branding dan konten tertulis Shopee Affiliate. Terbukti menghasilkan puluhan juta rupiah dan sukses membimbing banyak peserta meraih penghasilan dari rumah.",
      img: "/mentor-2.png",
    },
    {
      name: "M. Daffa Putra Karyudi",
      role: "AI & Engineering Specialist",
      description:
        "Spesialis Generative AI (IPK 3.92). Sukses memangkas waktu layanan SaaS hingga 40% via Agentic RAG dan telah membimbing 370+ mahasiswa di Bangkit Academy.",
      img: "/mentor-3.png",
      company: "DOT Indonesia",
      companyLogo: "/DOT.svg",
    },
    {
      name: "Bilqis Gaya Hasanah, S. Pd, Gr.",
      role: "Teacher &  Digital Education Creator",
      description:
        "Guru SD Muhammadiyah Metro Pusat & Digital Education Creator. Ahli dalam pengembangan konten edukasi digital dan inovasi pembelajaran kreatif.",
      img: "/mentor-4.png",
    },
  ];

  // Data Agenda
  const agenda = [
    {
      id: "maret",
      label: "Maret",
      events: [
        [
          {
            title: "Kupas Tuntas CV ATS Friendly dan Portfolio dengan AI (AI Fest)",
            poster: "/Poster-Class1.jpeg",
            price: "Free",
            date: "02 Maret 2026",
            mode: "ONLINE",
            status: "published",
            link: "https://bit.ly/AIMPECT-CAREERCLASS"
          },
          {
            title: "Merintis Jadi Affiliate dari 0 Sampai Dapetin 1 Juta Pertama (AI Fest)",
            poster: "/Poster-Class2.jpeg",
            price: "Free",
            date: "06 Maret 2026",
            mode: "ONLINE",
            status: "published",
            link: "https://bit.ly/AIMPACT-CUANCLASS"
          },

           {
            title: "AI Untuk Otomatisasi Administrasi & Persiapan Mengajar 10x Lebih Cepat!",
            poster: "/AIMPACT.jpeg",
            price: "Free",
            date: "09 Maret 2026",
            mode: "ONLINE",
            status: "coming-soon"
          },
          {
            title: "Kerjaan 1 Minggu Selesai Dalam 1 Hari dengan Bantuan Workflow Automation ?",
            poster: "/AIMPACT.jpeg",
            price: "Free",
            date: "13 Maret 2026",
            mode: "ONLINE",
            status: "coming-soon"
          },
        ],
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-[#001a0e] text-white overflow-x-hidden">
      {/* --- HERO SECTION: BALANCED SPLIT-DESIGN --- */}
      <section className="relative bg-white overflow-hidden w-full min-h-[calc(100vh-80px)] flex items-start justify-center">

        {/* === BACKGROUND LAYERS === */}
        {/* Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1.2px,transparent_1.2px)] bg-size-[32px_32px] opacity-30" />

        {/* Glow hijau tengah */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                  w-72 h-72 sm:w-120 sm:h-120
                  bg-aimpact-green/5 rounded-full blur-[100px] -z-10" />

        {/* Glitter kecil */}
        <motion.div
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-40 right-12 text-[#f8c638] opacity-50 hidden sm:block"
        >
          <Star size={18} fill="#f8c638" stroke="none" />
        </motion.div>

        {/* === LOGO POJOK === */}
        <div className="absolute z-30 top-6 left-6 sm:top-8 sm:left-10">
          <img
            src="/nortis.png"
            alt="Aimpact Fest"
            className="w-24 sm:w-28 lg:w-32 h-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
          />
        </div>

        {/* === MAIN CONTENT === */}
        <div className="relative z-20 w-full max-w-5xl px-6 pt-24 sm:pt-14 lg:pt-16 pb-16 text-center flex flex-col items-center">

          {/* Floating star kiri */}
          <motion.div
            animate={{ y: [-15, 15, -15], rotate: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -top-10 left-10 lg:left-20 text-[#f8c638] opacity-60 hidden sm:block"
          >
            <Star size={40} fill="#f8c638" stroke="none" />
          </motion.div>

          {/* Floating star kanan */}
          <motion.div
            animate={{ y: [15, -15, 15], rotate: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, delay: 1 }}
            className="absolute top-20 right-10 lg:right-24 text-[#f8c638] opacity-60 hidden sm:block"
          >
            <Star size={30} fill="#f8c638" stroke="none" />
          </motion.div>

          {/* === LOGO HERO === */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-10"
          >
            <img
              src="/logoai.png"
              alt="AIMPACT Fest Logo"
              className="w-full max-w-75 sm:max-w-112.5 lg:max-w-150 h-auto object-contain
                   drop-shadow-[0_10px_30px_rgba(0,65,36,0.1)]"
            />
          </motion.div>

          {/* === SUB HEADLINE === */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg sm:text-2xl lg:text-3xl font-bold text-neutral-800 italic
                 leading-snug mb-10 max-w-3xl"
          >
            Ramadan Scale-Up: Transformasi Bisnis & Industrimu <br />
            <span className="relative inline-block text-white px-6 py-1 mt-3">
              <span className="absolute inset-0 bg-aimpact-green -skew-x-12 rounded-lg shadow-xl shadow-green-900/20" />
              <span className="relative z-10">Dengan AI</span>
            </span>
          </motion.h2>

          {/* === DESCRIPTION === */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="max-w-xl text-neutral-500 text-base sm:text-lg mb-6
                 font-medium leading-relaxed"
          >
            Optimalkan momen Ramadan dengan pembelajaran AI yang praktis. Dirancang khusus agar siap diaplikasikan langsung untuk scale up kebutuhan akademik, karier, hingga ekspansi bisnismu.<br className="hidden sm:block" />
          </motion.p>

          {/* === CTA BUTTON === */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6, ease: "easeOut" }}
            className="relative inline-block pt-2"
          >
            <div
              className="absolute inset-0 rounded-xl blur-xl opacity-40 animate-pulse-glow"
              style={{ backgroundColor: "rgb(248, 198, 56)" }}
            />

            <button
              onClick={scrollToAgenda}
              className="group relative px-10 py-5 rounded-xl font-black text-sm
                   tracking-widest uppercase italic transition-all duration-300
                   active:scale-95 overflow-hidden animate-heartbeat
                   shadow-[0_0_20px_rgba(248,198,56,0.2)]
                   hover:shadow-[0_0_40px_rgba(248,198,56,0.5)]"
            >
              <div
                className="absolute inset-0 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: "rgb(0, 65, 36)" }}
              />

              <div className="absolute inset-0 bg-linear-to-r from-transparent via-yellow-400/30 to-transparent -translate-x-full animate-shimmer" />

              <div className="relative z-10 flex items-center gap-3 text-white">
                DAFTAR SEKARANG
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </button>
          </motion.div>

          {/* === INFO BADGE === */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mt-8 sm:mt-10 w-[92%] max-w-xl rounded-2xl bg-linear-to-b from-white/90 to-white/70
    backdrop-blur-lg border border-aimpact-green/20
    shadow-[0_18px_40px_rgba(16,185,129,0.14)]
    flex flex-col sm:flex-row
    divide-y divide-gray-200/60 sm:divide-y-0 sm:divide-x
    px-4 py-3 sm:px-6 sm:py-4"
          >
            {/* Kapan */}
            <div className="flex items-start sm:items-center gap-4 py-3 sm:py-0 sm:pr-6 group">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-aimpact-green/15
      flex items-center justify-center text-aimpact-green
      group-hover:scale-105 transition-transform">
                <Calendar size={18} className="sm:size-5.5" />
              </div>

              <div className="leading-tight text-left">
                <p className="text-[10px] sm:text-[11px] font-bold text-neutral-400 tracking-widest uppercase">
                  Kapan
                </p>
                <p className="text-[13px] sm:text-sm font-bold text-aimpact-green">
                  02 Mar – 13 Mar 2026
                </p>
              </div>
            </div>

            {/* Dimana */}
            <div className="flex items-start sm:items-center gap-4 py-3 sm:py-0 sm:pl-6 group">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-aimpact-green/15
      flex items-center justify-center text-aimpact-green
      group-hover:scale-105 transition-transform">
                <MapPin size={18} className="sm:size-5.5" />
              </div>

              <div className="leading-tight text-left">
                <p className="text-[10px] sm:text-[11px] font-bold text-neutral-400 tracking-widest uppercase">
                  Dimana
                </p>
                <p className="text-[13px] sm:text-sm font-bold text-aimpact-green">
                  Malang & Online
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* --- SECTION POSTER (WHITE ELEGANT) --- */}
      <section className="relative bg-white pt-8 sm:pt-12 pb-24 sm:pb-32 overflow-hidden">

        {/* Decorative shapes (soft & brand-aligned) */}
        <div className="absolute top-16 left-6 sm:left-12 w-28 sm:w-40 h-28 sm:h-40 bg-[rgb(248,198,56)]/10 rounded-3xl rotate-12"></div>
        <div className="absolute bottom-20 right-8 sm:right-16 w-40 sm:w-56 h-40 sm:h-56 bg-[rgb(0,65,36)]/10 rounded-full"></div>
        <div className="absolute top-1/2 right-6 sm:right-12 w-16 sm:w-24 h-16 sm:h-24 bg-[rgb(79,107,42)]/12 rounded-3xl sm:rounded-[28px] rotate-45"></div>

        {/* Soft dotted texture */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1.2px,transparent_1.2px)] bg-size-[22px_22px] opacity-30"></div>

        <div className="relative max-w-md sm:max-w-2xl mx-auto px-5 sm:px-6">

          {/* Section Label */}
          <div className="flex flex-col items-center mb-10 sm:mb-14 text-center">
            <span
              className="text-[10px] sm:text-xs font-black uppercase tracking-[0.35em]"
              style={{ color: 'rgb(79,107,42)' }}
            >
              Official Poster Event
            </span>
            <div className="mt-3 h-0.75  w-10 sm:w-12 rounded-full bg-[rgb(248,198,56)]"></div>
          </div>

          {/* Poster Card */}
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.12)] ring-1 ring-black/5">
            <img
              src="/AIMPACT.jpeg"
              alt="Poster AIMPACT FEST 2026"
              className="w-full h-auto object-cover transition-transform duration-500 ease-out hover:scale-[1.02] " />

            {/* Subtle gradient overlay */}
            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/15 via-black/0 to-transparent"></div>
          </div>

        </div>
      </section>

      {/* ================= SECTION CHELLENGE & TIME LINE ================= */} 
      <section className="relative bg-[rgb(0,65,36)] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">

          {/* Large Glass Orb */}
          <motion.div className="absolute -right-40 top-20 w-130 h-130 rounded-full border border-white/20 bg-white/5 backdrop-blur-[6px]"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            viewport={{ once: true }} />

          {/* Secondary Orb */}
          <motion.div className="absolute left-30 bottom-40 w-105 h-150 rounded-full border border-white/10 bg-white/4 backdrop-blur-xs"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.6, delay: 0.2 }}
            viewport={{ once: true }} />

          <div className="absolute right-20 top-1/3 w-105 h-105 bg-aimpact-gold/20 blur-[160px] rounded-full" />
          <div className="absolute left-0 bottom-0 w-95 h-95 bg-emerald-400/10 blur-[140px] rounded-full" /> </div>
        <svg className="absolute inset-0 w-full h-full opacity-[0.12]"
          viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg" >
          <path d="M-100 300 L300 220 L600 360 L900 280 L1200 380 L1600 300"
            stroke="white"
            strokeWidth="1"
            strokeDasharray="6 10" />
        </svg>

        {/* --- SECTION: THE CHALLENGE --- */}
        <section className="relative py-24 px-6 overflow-hidden ">
          <motion.div
            className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div
              className="lg:sticky lg:top-24"
              variants={{
                hidden: {
                  opacity: 0,
                  x: -60,
                  scale: 0.98,
                },
                show: {
                  opacity: 1,
                  x: 0,
                  scale: 1,
                  transition: {
                    duration: 0.5,
                    ease: "easeOut",
                  },
                },
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
            >

              <h2 className="text-sm font-black tracking-[0.4em] text-aimpact-gold uppercase mb-6 flex items-center gap-3">
                <span className="w-10 h-0.5 bg-aimpact-gold"></span>
                The Reality
              </h2>

              <h3 className="text-5xl md:text-7xl font-black italic tracking-tighter leading-[0.9]">
                 FOKUS STRATEGIS. <br />
                <span className="text-white/50  normal-case tracking-normal">4 Topik Esensial AImpact 2026</span>
              </h3>

              <p className="mt-8 text-white text-lg md:text-xl max-w-md leading-relaxed font-medium">
                Empat pilar pembahasan telah kami siapkan untuk mengakselerasi transformasi Anda.
              </p>
            </motion.div>

            {/* ================= RIGHT SIDE ================= */}
            <motion.div className="space-y-6" variants={container}>
              {challengeItems.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariant}
                  className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-aimpact-gold/40 transition-all duration-500 backdrop-blur-sm" >
                  <span className="text-aimpact-gold font-black text-xl mb-4 block opacity-40 group-hover:opacity-100 transition-opacity">
                    {item.tag}
                  </span>

                  <h4 className="text-2xl font-bold text-white mb-3 tracking-tight">
                    {item.title}
                  </h4>

                  <p className="text-white/70 leading-relaxed group-hover:text-white transition-colors">
                    {item.text}
                  </p>
                </motion.div>
              ))}

              {/* ===== Conclusion ===== */}
              <motion.div
                variants={itemVariant}
                className="p-8 rounded-3xl bg-white/90 text-black shadow-[0_20px_40px_rgba(0,0,0,0.25)]" >
                <motion.p
                  initial="hidden"
                  animate="show"
                  variants={{
                    hidden: {},
                    show: {
                      transition: {
                        staggerChildren: 0.12,
                      },
                    },
                  }}
                  className="text-xl font-extrabold leading-snug tracking-tight text-black"
                >
                  <motion.span
                    variants={itemVariant}
                    className="block"
                  >
                    Hentikan kebisingan.
                  </motion.span>

                  <motion.span
                    variants={itemVariant}
                    className="block"
                  >
                    Fokus membangun kompetensi AI yang{" "}
                    <span className="text-aimpact-green">
                      berdampak nyata
                    </span>
                  </motion.span>
                </motion.p>

              </motion.div>
            </motion.div>

          </motion.div>
        </section>

        {/* --- SECTION AGENDA (TIMELINE BULAN) --- */}
        <section  id="agenda" className="relative pt-14 pb-26 px-6 overflow-hidden isolate">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold tracking-[0.3em] text-white/60 uppercase mb-3">Roadmap Timeline</h2>
              <h3 className="text-4xl md:text-5xl font-black italic tracking-tighter uppercase">JADWAL <span className="text-aimpact-gold">PELATIHAN</span></h3>
            </div>
            
           {/* Content Timeline */}
<div>
  {agenda[0].events.map((event, idx) => (
    <div key={idx} className="relative mb-14">

      {/* Horizontal Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {event.map((item, i) => (
  <div
    key={i}
    className={`relative flex bg-white rounded-xl overflow-hidden
      shadow-md transition-all duration-500
      ${
        item.status === "published"
          ? "hover:shadow-xl hover:-translate-y-1"
          : "opacity-80"
      }`}
  >
            {/* Ribbon FREE */}
            <div className="absolute -top-1 right-0 w-32 h-32 overflow-hidden pointer-events-none">
              <div className="absolute top-5.5 -right-9.5 rotate-45 bg-[#f8c638] px-10 py-1 shadow-lg">
                <span className="block text-[10px] font-black tracking-widest text-[#002314] text-center">
                  FREE
                </span>
              </div>
            </div>

            {/* POSTER */}
           <div className="basis-[40%] shrink-0 relative">
  <img
    src={item.poster}
    alt={item.title}
    className={`w-full h-full object-cover
      ${item.status === "coming-soon" ? "grayscale" : ""}`}
  />

  {item.status === "coming-soon" && (
    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
      <span className="text-white text-xs md:text-sm font-black tracking-widest uppercase">
        Coming Soon
      </span>
    </div>
  )}
</div>

            {/* CONTENT */}
            <div className="basis-[60%] p-5 md:p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[11px] font-black text-green-800">
                    {item.date}
                  </span>
                  <span className="text-gray-400">·</span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-green-700">
                    {item.mode}
                  </span>
                </div>

                <h4 className="font-black text-gray-900 text-sm md:text-lg leading-snug">
                  {item.title}
                </h4>
              </div>

              {/* Button */}
             <div className="pt-6 flex justify-end">
  {item.status === "published" ? (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#002314] text-white text-xs md:text-sm font-bold
                 px-6 py-2 rounded-xl hover:bg-[#003d24] transition"
    >
      Daftar →
    </a>
  ) : (
    <button
      disabled
      className="bg-gray-200 text-gray-500 text-xs md:text-sm
                 font-bold px-6 py-2 rounded-xl cursor-not-allowed"
    >
      Segera Hadir
    </button>
  )}
</div>
            </div>
          </div>
        ))}
      </div>

    </div>
  ))}
</div>

            {/* Info Quote */}
            <div className="mt-16 p-8 rounded-3xl bg-linear-to-r from-aimpact-gold/10 to-transparent border border-aimpact-gold/20 text-center">
              <p className="text-gray-300 italic font-medium">
                "Kurikulum dirancang khusus agar peserta bisa langsung mempraktikkan AI dalam pekerjaan sehari-hari."
              </p>
            </div>
          </div>
        </section>
      </section>

      {/* ===== WRAPPER: MENTORS + FAQ (GREEN & GOLD ACCENT) ===== */}
      <section className="relative bg-[#f8f9fa] py-16 md:py-24 overflow-hidden">

        {/* BACKGROUND DECORATION */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute -top-40 -right-40 w-130 h-130 rounded-full bg-aimpact-green/30 blur-[160px]" />
          <div
            className="absolute bottom-55 -left-40 w-105 h-105 rounded-full bg-aimpact-green/30 blur-[140px]" />
          <div
            className="absolute top-1/4 right-20 w-90 h-90 rounded-full border border-aimpact-green/30 opacity-40 " />

          {/* Decorative geometric shapes (green & yellow) */}
          <div className="absolute top-20 left-12 w-40 h-40 bg-[rgb(248,198,56)]/12 rounded-3xl rotate-12"></div>
          <div className="absolute bottom-24 right-16 w-56 h-56 bg-[rgb(0,65,36)]/10 rounded-full"></div>
          <div className="absolute top-1/2 right-12 w-24 h-24 bg-[rgb(79,107,42)]/12 rounded-[28px] rotate-45"></div>

          {/* Decorative soft dots (echo hero kiri) */}
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1.5px,transparent_1.5px)] bg-size-[24px_24px] opacity-40"></div>
          <div className="relative max-w-xl sm:max-w-2xl mx-auto px-6"></div>
          <div className="absolute inset-0 bg-[radial-gradient(#d1d5db_1.2px,transparent_1.2px)] bg-size-[30px_30px] opacity-30"></div>
          <div className="absolute top-40 -left-6 opacity-10 hidden lg:block">
            <svg width="40" height="200" viewBox="0 0 40 200">
              <path
                d="M10 0 L30 20 L10 40 L30 60 L10 80 L30 100 L10 120 L30 140 L10 160 L30 180 L10 200"
                fill="none"
                stroke="#002314"
                strokeWidth="4"
              />
            </svg>
          </div>
        </div>
        <div className="relative z-10 space-y-24 md:space-y-32">

          {/* ================= MENTORS SECTION ================= */}
          <section className="relative px-4 sm:px-6 max-w-7xl mx-auto">

            {/* ================= HEADING ================= */}
            <div className="mb-10 md:mb-14 border-l-10 md:border-l-12 border-[#f8c638] pl-6 md:pl-8">
              <h2 className="mt-2 text-xs font-black tracking-[0.4em] text-gray-400 uppercase mb-2 italic">
                Expert Lineup
              </h2>
              <h3 className="text-3xl md:text-6xl font-black tracking-tighter uppercase italic text-[#002314]">
                Belajar Dari <span className="text-black">Praktisi</span>
              </h3>
            </div>

            {/* ================= SLIDER ================= */}
            <div className="relative">
              {/* LEFT BUTTON */}
              <button
                onClick={scrollLeft}
                className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white shadow-lg ring-1 ring-black/5 items-center justify-center hover:scale-105 hover:bg-gray-50 transition ">
                <span
                  className=" text-aimpact-green text-xl font-black leading-none -translate-x-px "  >
                  ‹
                </span>
              </button>

              {/* RIGHT BUTTON */}
              <button
                onClick={scrollRight}
                className="
    hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20
    w-10 h-10 rounded-full
    bg-white
    shadow-lg
    ring-1 ring-black/5
    items-center justify-center
    hover:scale-105 hover:bg-gray-50
    transition
  "
              >
                <span
                  className="
      text-aimpact-green
      text-xl
      font-black
      leading-none
      translate-x-px
    "
                >
                  ›
                </span>
              </button>

              {/* VIEWPORT */}
              <div className="overflow-hidden">

                {/* TRACK */}
                <div
                  ref={sliderRef}
                  className="
    flex gap-6
    overflow-x-auto
    scroll-smooth
    pb-6

    cursor-grab active:cursor-grabbing
    select-none

    [-ms-overflow-style:none]
    [scrollbar-width:none]
    [&::-webkit-scrollbar]:hidden
  "
                >
                  {mentors.map((m, i) => (
                    <div
                      key={i}
                      className="
                  shrink-0
                  w-55 sm:w-65 md:w-75
                  group relative overflow-hidden rounded-lg
                  bg-[rgb(0,65,36)]
                  border border-white/15
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_22px_44px_rgba(0,35,20,0.3)]
                "
                    >
                      {/* IMAGE */}
                      <div className="relative aspect-3/4 md:aspect-4/5 overflow-hidden">
                        <img
                          src={m.img}
                          alt={m.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>

                      {/* CONTENT */}
                      <div className="p-2.5 md:p-4 space-y-2 md:space-y-3 text-center">
        <div className="flex items-center justify-between gap-2 min-w-0">
          <h4 className="font-black text-white text-[13px] md:text-base leading-tight  text-left">
            {m.name}
          </h4>

          {m.companyLogo && (
            <img
              src={m.companyLogo}
              alt={m.company}
              className="h-4 md:h-5 object-contain opacity-90 shrink-0"
            />
          )}
        </div>

                        {/* ROLE */}
                        <span className="block w-full px-3 py-1 bg-[#d9fbe6] text-[9px] md:text-[11px] font-bold text-aimpact-green rounded-full tracking-wide text-center">
                          {m.role}
                        </span>

                        {/* DESCRIPTION */}
                        <p className="text-gray-300 text-[10px] md:text-xs leading-relaxed line-clamp-5">
                          {m.description}
                        </p>
                      </div>

                      {/* ACCENT */}
                      <div className="absolute top-3 right-3 w-1.5 h-1.5 bg-[#f8c638] rounded-full" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ================= FAQ SECTION ================= */}
          <section className="pb-16 md:pb-24 max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#002314] tracking-tighter italic uppercase">
                Frequently <span className="text-[#f8c638]">Asked</span> Questions
              </h2>
              <div className="h-1.5 w-20 bg-[rgb(0,65,36)] mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="space-y-4 md:space-y-5">
              {faq.map((item, i) => (
                <div
                  key={i}
                  className={`rounded-2xl border transition-all duration-300
              ${openFaq === i
                      ? "bg-[#002314] border-[#f8c638] shadow-xl"
                      : "bg-[rgb(0,65,36)] border-[#043b26]"
                    }`}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full p-5 md:p-6 flex justify-between items-center text-left group"
                  >
                    <span className={`font-black text-sm md:text-base transition-colors
                ${openFaq === i ? "text-white" : "text-gray-200"}`}>
                      {item.q}
                    </span>

                    <div className={`p-2 rounded-lg transition-all
                ${openFaq === i
                        ? "bg-[#f8c638] text-[#002314] rotate-180"
                        : "bg-white/10 text-gray-300"
                      }`}>
                      <ChevronDown size={20} />
                    </div>
                  </button>

                  <div className={`overflow-hidden transition-all duration-500 ${openFaq === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                    <div className="px-5 md:px-6 pb-5 pt-2 text-gray-300 text-sm border-t border-white/10">
                      {item.a}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-black py-16 px-6 border-t border-white/10">
  <div className="max-w-7xl mx-auto">

    {/* Top Area */}
    <div className="grid grid-cols-2 md:grid-cols-3 items-center gap-y-6 gap-x-4">

      {/* Logo AIMPACT */}
      <div className="flex justify-start">
        <img
          src="/aimpactputih.png"
          alt="AIMPACT Fest"
          className="h-9 md:h-11"
        />
      </div>

      {/* Menu (mobile: full row) */}
      <div className="col-span-2 md:col-span-1 order-3 md:order-0 flex justify-center gap-6 text-gray-400 text-sm">
        <a href="https://wa.me/6285177225226" className="hover:text-aimpact-gold transition">Contact Us</a>
        <a href="https://www.instagram.com/nortis.ai?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="hover:text-aimpact-gold transition">Instagram</a>
        <a href="mailto:halo.nestacademy@gmail.com" className="hover:text-aimpact-gold transition">Email</a>
      </div>

      {/* Logo NORTIS */}
      <div className="flex justify-end md:justify-end">
        <img
          src="/logoputihnortis.png"
          alt="Nortis"
          className="h-10 md:h-12 opacity-80 hover:opacity-100 transition"
        />
      </div>

    </div>

    {/* Bottom */}
    <div className="mt-10 text-center text-gray-500 text-xs uppercase tracking-widest">
      © 2026 Aimpact Fest. All rights reserved.
    </div>

  </div>
</footer>

    </main>
  );
}
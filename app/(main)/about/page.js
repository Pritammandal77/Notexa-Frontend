

"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Working from '@/components/home/Working';

// ─── Animation Variants ───────────────────────────────────────────────────────
const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
    }),
};

const fadeLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const fadeRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const scaleIn = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: (i = 0) => ({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
    }),
};

// ─── Reusable InView Section Wrapper ─────────────────────────────────────────
function InViewSection({ children, className = '' }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });
    return (
        <div ref={ref} className={className} data-inview={inView}>
            {React.Children.map(children, (child) =>
                React.isValidElement(child) ? React.cloneElement(child, { animate: inView ? 'visible' : 'hidden' }) : child
            )}
        </div>
    );
}

// ─── Stats Data ───────────────────────────────────────────────────────────────
const stats = [
    { value: '100+', label: 'Handwritten Notes', icon: '📝' },
    { value: '5K+', label: 'Students Helped', icon: '🎓' },
    { value: '20+', label: 'Subjects Covered', icon: '📚' },
    { value: '₹29', label: 'Starting Price', icon: '💰' },
];

// ─── Why Notexa Points ────────────────────────────────────────────────────────
const highlights = [
    { icon: '✅', title: 'Affordable', desc: 'Premium notes starting at just ₹29 — budget-friendly for every student.' },
    { icon: '🏆', title: 'Topper-Made', desc: 'Notes created by top-scoring students who\'ve studied the exact same topics.' },
    { icon: '🔒', title: 'Verified Quality', desc: 'Every note is reviewed before publishing — no low-effort content.' },
    { icon: '📄', title: 'Multiple Formats', desc: 'Handwritten or typed notes — whatever suits your learning style.' },
];

// ─── How It Works ─────────────────────────────────────────────────────────────
const steps = [
    { step: '01', title: 'Create Your Notes', desc: 'Write neat, well-organized notes in your own style. Your clarity is what makes them valuable.', icon: '✍️' },
    { step: '02', title: 'Convert to PDF', desc: 'Scan or capture your notes and convert them into clean, shareable PDF files.', icon: '📲' },
    { step: '03', title: 'List on Notexa', desc: 'Upload your PDFs, add details, and list them for thousands of students to discover.', icon: '🚀' },
    { step: '04', title: 'Earn Every Sale', desc: 'Earn 70% of ₹29 on every download — your notes work for you while you sleep.', icon: '💸' },
];

// ─── Testimonials ─────────────────────────────────────────────────────────────
const testimonials = [
    { name: 'Ayush Biswas', role: 'Engineering Student', text: 'Notexa notes are very concise and exam-oriented. They helped me revise important topics quickly before exams.', img: '/ayushBiswas.jpeg' },
    { name: 'Prangan Sarkar', role: 'College Student', text: 'I earned ₹2,400 in my first month just by uploading notes I already had. Incredible platform!', img: '/prangan.jpeg' },
    { name: 'Praveen Mandal', role: 'B.Tech Final Year', text: 'The quality is unmatched. I could tell these were written by someone who actually understood the subject.', img: '/praveen.jpeg' },
    { name: 'Subhashish Roy', role: 'Science Student', text: 'Clean, affordable, and actually useful. Notexa is my go-to before every exam season.', img: '/subhashish.jpeg' },
];

// ─── Main About Component ─────────────────────────────────────────────────────
function page() {
    return (
        <div className="bg-orange-50 font-sans overflow-x-hiddenp pt-15">

            {/* ── HERO SECTION ─────────────────────────────────────────────────────── */}
            <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-orange-50 to-orange-100 px-6">
                {/* Background blobs */}
                <div className="absolute top-[-80px] left-[-80px] w-[400px] h-[400px] bg-orange-200 rounded-full blur-[100px] opacity-50 pointer-events-none" />
                <div className="absolute bottom-[-60px] right-[-60px] w-[350px] h-[350px] bg-orange-300 rounded-full blur-[100px] opacity-40 pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-100 rounded-full blur-[120px] opacity-60 pointer-events-none" />

                {/* Floating decorative dots */}
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-3 h-3 rounded-full bg-orange-400 opacity-30"
                        style={{
                            top: `${15 + i * 13}%`,
                            left: `${8 + i * 14}%`,
                        }}
                        animate={{ y: [0, -12, 0], opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
                    />
                ))}

                <div className="relative z-10 max-w-5xl mx-auto text-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        custom={0}
                        className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 text-orange-600 text-sm font-semibold px-4 py-2 rounded-full mb-6"
                    >
                        <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                        Made by Students, For Students
                    </motion.div>

                    <motion.h1
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        custom={1}
                        className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-6 font-playfair"
                    >
                        Empowering Students{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">
                            Through Notes
                        </span>
                    </motion.h1>

                    <motion.p
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        custom={2}
                        className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-10"
                    >
                        Notexa connects learners and toppers on a single platform where premium
                        quality handwritten notes meet accessibility and affordability — ₹29 per note.
                    </motion.p>

                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        custom={3}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Link href="/allnotes">
                            <button className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-2xl shadow-lg shadow-orange-200 hover:shadow-orange-300 transition-all duration-300 hover:-translate-y-1 text-base">
                                Explore Notes →
                            </button>
                        </Link>
                        <Link href="/sellnotes">
                            <button className="px-8 py-4 bg-white hover:bg-orange-50 text-orange-500 font-bold rounded-2xl border-2 border-orange-200 hover:border-orange-400 transition-all duration-300 hover:-translate-y-1 text-base">
                                Start Selling
                            </button>
                        </Link>
                    </motion.div>
                </div>

                {/* Scroll hint */}
                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-orange-400"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity }}
                >
                    <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8 3v10M3 9l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </motion.div>
            </section>


            {/* ── STATS BANNER ─────────────────────────────────────────────────────── */}
            <section className="py-14 bg-white border-y border-orange-100">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {stats.map((s, i) => {
                            const ref = useRef(null);
                            const inView = useInView(ref, { once: true });
                            return (
                                <motion.div
                                    key={s.label}
                                    ref={ref}
                                    initial="hidden"
                                    animate={inView ? 'visible' : 'hidden'}
                                    variants={scaleIn}
                                    custom={i}
                                    className="text-center group"
                                >
                                    <div className="w-14 h-14 mx-auto mb-3 bg-orange-50 group-hover:bg-orange-100 rounded-2xl flex items-center justify-center text-2xl transition-colors duration-300 border border-orange-100">
                                        {s.icon}
                                    </div>
                                    <div className="text-3xl font-extrabold text-orange-500 font-playfair">{s.value}</div>
                                    <div className="text-sm text-gray-500 font-medium mt-1">{s.label}</div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>


            {/* ── WHY NOTEXA ───────────────────────────────────────────────────────── */}
            <section className="py-24 px-6 bg-gradient-to-b from-orange-50 to-white" id="why">
                <div className="max-w-5xl mx-auto">
                    {/* Section header */}
                    {(() => {
                        const ref = useRef(null);
                        const inView = useInView(ref, { once: true, margin: '-80px' });
                        return (
                            <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={fadeUp} className="text-center mb-16">
                                <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">Why Choose Us</span>
                                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2 font-playfair">
                                    Why <span className="text-orange-500">Notexa?</span>
                                </h2>
                                <p className="text-gray-500 mt-4 max-w-xl mx-auto">
                                    Everything a student needs in one affordable, trusted place.
                                </p>
                            </motion.div>
                        );
                    })()}

                    <div className="grid md:grid-cols-2 gap-6">
                        {highlights.map((h, i) => {
                            const ref = useRef(null);
                            const inView = useInView(ref, { once: true, margin: '-60px' });
                            return (
                                <motion.div
                                    key={h.title}
                                    ref={ref}
                                    initial="hidden"
                                    animate={inView ? 'visible' : 'hidden'}
                                    variants={fadeUp}
                                    custom={i}
                                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                                    className="bg-white border border-orange-100 rounded-3xl p-7 flex gap-5 items-start shadow-sm hover:shadow-md hover:shadow-orange-100 transition-shadow duration-300"
                                >
                                    <div className="w-12 h-12 min-w-[48px] bg-orange-50 rounded-2xl flex items-center justify-center text-xl border border-orange-100">
                                        {h.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-800 mb-1">{h.title}</h3>
                                        <p className="text-gray-500 text-sm leading-relaxed">{h.desc}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>


            {/* ── MISSION SECTION ──────────────────────────────────────────────────── */}
            <section className="py-24 px-6 bg-white overflow-hidden">
                <div className="max-w-5xl mx-auto flex flex-col xl:flex-row gap-16 items-center">
                    {/* Left: text */}
                    {(() => {
                        const ref = useRef(null);
                        const inView = useInView(ref, { once: true, margin: '-80px' });
                        return (
                            <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={fadeLeft} className="flex-1">
                                <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">Our Mission</span>
                                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-3 mb-6 leading-tight font-playfair">
                                    Knowledge Should Be <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                                        Accessible to All
                                    </span>
                                </h2>
                                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                    Every student deserves access to quality study material — not just those with expensive coaching.
                                    Notexa was built to break that barrier. We believe the best notes come from students who just
                                    aced the same exam you're preparing for.
                                </p>
                                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                    And for the note-takers? Your hard work shouldn't just sit in a shelf. List it, share it, and
                                    earn from it while helping thousands of students across India.
                                </p>
                                <div className="flex items-center gap-4 p-5 bg-orange-50 rounded-2xl border border-orange-100">
                                    <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center text-white text-xl">🎯</div>
                                    <div>
                                        <div className="font-bold text-gray-800">Built from Chandrapur, Maharashtra</div>
                                        <div className="text-sm text-gray-500">A student-first platform, trusted across India</div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })()}

                    {/* Right: decorative card */}
                    {(() => {
                        const ref = useRef(null);
                        const inView = useInView(ref, { once: true, margin: '-80px' });
                        return (
                            <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={fadeRight} className="flex-1 flex justify-center">
                                <div className="relative w-full max-w-sm">
                                    {/* Card stack */}
                                    <div className="absolute top-4 left-4 right-0 h-full bg-orange-200 rounded-3xl opacity-40" />
                                    <div className="absolute top-2 left-2 right-0 h-full bg-orange-300 rounded-3xl opacity-30" />
                                    <motion.div
                                        animate={{ y: [0, -8, 0] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                                        className="relative bg-white rounded-3xl p-8 shadow-xl border border-orange-100"
                                    >
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center">
                                                <Image src="/notesLogo.png" alt="Notexa" width={22} height={22} />
                                            </div>
                                            <div>
                                                <div className="font-bold text-gray-800">Notexa</div>
                                                <div className="text-xs text-orange-500">Notes Hub</div>
                                            </div>
                                        </div>
                                        <div className="space-y-3 mb-6">
                                            {['Physics – Wave Optics', 'Organic Chemistry', 'DSA Notes – Trees'].map((note, i) => (
                                                <div key={note} className="flex items-center justify-between p-3 bg-orange-50 rounded-xl">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center text-sm">📄</div>
                                                        <span className="text-sm font-medium text-gray-700">{note}</span>
                                                    </div>
                                                    <span className="text-xs font-bold text-orange-500 bg-orange-100 px-2 py-1 rounded-lg">₹29</span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-gray-500">Your earnings this month</span>
                                            <span className="font-extrabold text-orange-500 text-lg">₹2,480</span>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        );
                    })()}
                </div>
            </section>


            <Working />


            {/* ── TESTIMONIALS ─────────────────────────────────────────────────────── */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-5xl mx-auto">
                    {(() => {
                        const ref = useRef(null);
                        const inView = useInView(ref, { once: true, margin: '-80px' });
                        return (
                            <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={fadeUp} className="text-center mb-16">
                                <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">Testimonials</span>
                                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2 font-playfair">
                                    What Students <span className="text-orange-500">Say</span>
                                </h2>
                            </motion.div>
                        );
                    })()}

                    <div className="grid md:grid-cols-2 gap-6">
                        {testimonials.map((t, i) => {
                            const ref = useRef(null);
                            const inView = useInView(ref, { once: true, margin: '-40px' });
                            return (
                                <motion.div
                                    key={t.name}
                                    ref={ref}
                                    initial="hidden"
                                    animate={inView ? 'visible' : 'hidden'}
                                    variants={fadeUp}
                                    custom={i}
                                    whileHover={{ y: -4 }}
                                    className="bg-orange-50 border border-orange-100 rounded-3xl p-7 relative overflow-hidden"
                                >
                                    {/* Quote decoration */}
                                    <div className="absolute top-4 right-6 text-7xl text-orange-100 font-serif leading-none select-none">"</div>

                                    <p className="text-gray-700 text-base leading-relaxed mb-6 relative z-10">"{t.text}"</p>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full overflow-hidden bg-orange-200 flex items-center justify-center">
                                            <Image src={t.img} alt={t.name} width={40} height={40} className="object-cover" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-gray-800 text-sm">{t.name}</div>
                                            <div className="text-xs text-orange-500">{t.role}</div>
                                        </div>
                                        <div className="ml-auto flex gap-0.5">
                                            {[...Array(5)].map((_, si) => (
                                                <span key={si} className="text-orange-400 text-sm">★</span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>


            {/* ── CTA SECTION ──────────────────────────────────────────────────────── */}
            {(() => {
                const ref = useRef(null);
                const inView = useInView(ref, { once: true, margin: '-80px' });
                return (
                    <section ref={ref} className="py-24 px-6 bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 relative overflow-hidden">
                        {/* Background decoration */}
                        <div className="absolute top-[-60px] right-[-60px] w-80 h-80 bg-white rounded-full opacity-5" />
                        <div className="absolute bottom-[-40px] left-[-40px] w-60 h-60 bg-white rounded-full opacity-5" />

                        <motion.div
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'}
                            variants={fadeUp}
                            className="max-w-3xl mx-auto text-center relative z-10"
                        >
                            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 font-playfair">
                                Ready to Get Started?
                            </h2>
                            <p className="text-orange-100 text-lg mb-10 max-w-xl mx-auto">
                                Join thousands of students already learning smarter — or earning from notes they've already written.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/allnotes">
                                    <button className="px-8 py-4 bg-white text-orange-500 font-bold rounded-2xl hover:bg-orange-50 transition-all duration-300 hover:-translate-y-1 shadow-lg text-base">
                                        Browse Notes →
                                    </button>
                                </Link>
                                <Link href="/sellnotes">
                                    <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-2xl hover:bg-white hover:text-orange-500 transition-all duration-300 hover:-translate-y-1 text-base">
                                        Sell Your Notes
                                    </button>
                                </Link>
                            </div>
                        </motion.div>
                    </section>
                );
            })()}

        </div>
    );
}

export default page;
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Rocket,
  FileText,
  Mic,
  Code2,
  Briefcase,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Brain,
  Star,
  CheckCircle2,
  TrendingUp,
  Users,
  Award,
} from 'lucide-react';
import { Logo } from '../components/Logo';

const features = [
  {
    icon: FileText,
    title: 'AI Resume Analyzer',
    desc: 'Grammar, ATS score, missing keywords, weak skills, and improvement suggestions — in seconds.',
    accent: 'from-brand-500 to-brand-700',
  },
  {
    icon: Mic,
    title: 'AI Mock Interview',
    desc: 'Voice & camera practice for HR, technical, and coding rounds with confidence scoring.',
    accent: 'from-accent-500 to-accent-600',
  },
  {
    icon: Code2,
    title: 'Coding Platform',
    desc: 'Online compiler for Java, Python, C++, JS & SQL with test cases, contests and a leaderboard.',
    accent: 'from-success-500 to-success-600',
  },
  {
    icon: Briefcase,
    title: 'Smart Job Portal',
    desc: 'Apply to AI-matched roles, save jobs, and track applications through every stage.',
    accent: 'from-warning-400 to-warning-500',
  },
  {
    icon: Sparkles,
    title: 'AI Career Advisor',
    desc: 'Chat for company targeting, skill roadmaps, salary prediction and resume improvements.',
    accent: 'from-brand-400 to-accent-500',
  },
  {
    icon: Brain,
    title: 'AI Learning Roadmap',
    desc: 'Personalized week-by-week plan tuned to your target role and current skill gaps.',
    accent: 'from-accent-400 to-brand-500',
  },
];

const stats = [
  { label: 'Students placed', value: '48K+' },
  { label: 'Companies hiring', value: '1,200+' },
  { label: 'Mock interviews', value: '2.4M' },
  { label: 'Avg. resume score', value: '92' },
];

const testimonials = [
  {
    name: 'Ishaan Verma',
    role: 'SDE-I @ Stripe',
    quote:
      'The AI mock interview felt uncannily real. My communication score jumped 20 points in two weeks — and I cracked Stripe.',
    avatar: 'https://images.pexels.com/photos/22045/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=120',
  },
  {
    name: 'Ananya Reddy',
    role: 'Frontend @ Linear',
    quote:
      'The resume analyzer caught ATS keywords I had no idea I was missing. Went from 3 callbacks to 11.',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=120',
  },
  {
    name: 'Karthik Nair',
    role: 'Intern @ Zerodha',
    quote:
      'Daily coding challenges kept me sharp. The leaderboard made grinding DSA actually addictive.',
    avatar: 'https://images.pexels.com/photos/697509/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=120',
  },
];

const plans = [
  {
    name: 'Free',
    price: '₹0',
    period: 'forever',
    features: ['Resume analyzer (3/mo)', '5 mock questions/day', 'Coding platform access', 'Job portal access'],
    cta: 'Start free',
    highlight: false,
  },
  {
    name: 'Pro',
    price: '₹499',
    period: 'per month',
    features: [
      'Unlimited resume analysis',
      'Unlimited AI mock interviews',
      'AI career advisor chat',
      'Personalized roadmap',
      'Priority job matches',
    ],
    cta: 'Go Pro',
    highlight: true,
  },
  {
    name: 'Campus',
    price: 'Custom',
    period: 'per seat',
    features: ['Everything in Pro', 'Admin & recruiter dashboards', 'Batch analytics', 'Dedicated support'],
    cta: 'Contact sales',
    highlight: false,
  },
];

export function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-ink-950/70 border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 h-16 flex items-center justify-between">
          <Logo />
          <nav className="hidden md:flex items-center gap-1">
            <a href="#features" className="nav-link">Features</a>
            <a href="#how" className="nav-link">How it works</a>
            <a href="#stories" className="nav-link">Stories</a>
            <a href="#pricing" className="nav-link">Pricing</a>
          </nav>
          <div className="flex items-center gap-2">
            <Link to="/app" className="btn-ghost">Sign in</Link>
            <Link to="/app" className="btn-primary">
              Get started <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-faint [background-size:42px_42px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)] opacity-60" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-brand-500/20 blur-[140px] rounded-full" />
        <div className="absolute top-20 right-10 w-[400px] h-[400px] bg-accent-500/15 blur-[120px] rounded-full" />

        <div className="relative max-w-7xl mx-auto px-5 lg:px-8 pt-20 pb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs text-ink-100 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-success-500 animate-pulse" />
            AI-powered placements, end to end
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-balance"
          >
            Land your dream job with
            <br />
            <span className="gradient-text">an AI copilot for placements</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 text-lg md:text-xl text-ink-200 max-w-2xl mx-auto text-balance"
          >
            Build ATS-perfect resumes, practice AI mock interviews, sharpen your coding, and
            apply to matched roles — all in one premium workspace.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <Link to="/app" className="btn-primary px-6 py-3 text-base">
              Start preparing free <ArrowRight size={16} />
            </Link>
            <a href="#features" className="btn-outline px-6 py-3 text-base">
              Explore features
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            {stats.map((s) => (
              <div key={s.label} className="glass p-5 text-left">
                <div className="text-2xl md:text-3xl font-extrabold gradient-text">{s.value}</div>
                <div className="text-xs text-ink-300 mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-7xl mx-auto px-5 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-400 mb-3">
            Everything you need
          </p>
          <h2 className="section-title">A complete placement OS</h2>
          <p className="mt-3 text-ink-300">
            Six AI-powered modules that take you from first resume to final offer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="glass card-hover p-6 group"
            >
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${f.accent} grid place-items-center mb-4 shadow-lg`}>
                <f.icon size={20} className="text-white" />
              </div>
              <h3 className="text-base font-semibold text-white mb-1.5">{f.title}</h3>
              <p className="text-sm text-ink-300 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="max-w-7xl mx-auto px-5 lg:px-8 py-20">
        <div className="glass overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent-400 mb-3">
                How it works
              </p>
              <h2 className="section-title mb-4">From scattered prep to a single workflow</h2>
              <p className="text-ink-300 mb-6">
                CareerPilot connects every step of placement prep so progress in one area
                compounds into the next.
              </p>
              <ul className="space-y-4">
                {[
                  { t: 'Build your profile', d: 'Add skills, projects, and experience. We score your readiness in real time.' },
                  { t: 'Generate an ATS resume', d: 'Pick a template, drag-and-drop sections, and let AI fix weak bullets.' },
                  { t: 'Practice with AI', d: 'Mock interviews + daily coding problems tuned to your target companies.' },
                  { t: 'Apply & track', d: 'AI-matched jobs land in your inbox. Track every stage until the offer.' },
                ].map((s, i) => (
                  <li key={s.t} className="flex gap-3">
                    <div className="w-7 h-7 shrink-0 rounded-full bg-brand-500/15 border border-brand-500/30 text-brand-300 grid place-items-center text-xs font-bold">
                      {i + 1}
                    </div>
                    <div>
                      <div className="font-semibold text-white text-sm">{s.t}</div>
                      <div className="text-sm text-ink-300">{s.d}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative bg-ink-900/60 border-l border-white/[0.06] p-8 lg:p-12 flex items-center">
              <div className="absolute inset-0 bg-radial-fade" />
              <div className="relative w-full space-y-3">
                <div className="glass-soft p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-ink-300">Resume ATS score</span>
                    <span className="chip bg-success-500/15 text-success-400">+6 this week</span>
                  </div>
                  <div className="text-3xl font-extrabold text-white">82<span className="text-base text-ink-300">/100</span></div>
                  <div className="mt-2 h-2 rounded-full bg-ink-700 overflow-hidden">
                    <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-brand-500 to-success-500" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="glass-soft p-4">
                    <Users size={16} className="text-brand-400 mb-2" />
                    <div className="text-lg font-bold text-white">11</div>
                    <div className="text-xs text-ink-300">Applications</div>
                  </div>
                  <div className="glass-soft p-4">
                    <Award size={16} className="text-accent-400 mb-2" />
                    <div className="text-lg font-bold text-white">#142</div>
                    <div className="text-xs text-ink-300">Coding rank</div>
                  </div>
                </div>
                <div className="glass-soft p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp size={16} className="text-success-400" />
                    <span className="text-xs text-ink-300">Skill progression</span>
                  </div>
                  <div className="flex items-end gap-1.5 h-16">
                    {[40, 52, 48, 60, 66, 72, 82].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t bg-gradient-to-t from-brand-600 to-accent-400"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="stories" className="max-w-7xl mx-auto px-5 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-400 mb-3">
            Success stories
          </p>
          <h2 className="section-title">Loved by ambitious students</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((t) => (
            <div key={t.name} className="glass p-6 card-hover">
              <div className="flex gap-1 mb-3 text-warning-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="text-sm text-ink-100 leading-relaxed mb-4">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-ink-300">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-7xl mx-auto px-5 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-400 mb-3">
            Pricing
          </p>
          <h2 className="section-title">Start free. Upgrade when it clicks.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative p-6 rounded-2xl ${
                p.highlight
                  ? 'bg-gradient-to-b from-brand-500/10 to-transparent border border-brand-500/30 shadow-glow'
                  : 'glass'
              }`}
            >
              {p.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 chip bg-brand-500 text-white">
                  Most popular
                </span>
              )}
              <div className="text-sm font-semibold text-white">{p.name}</div>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-3xl font-extrabold text-white">{p.price}</span>
                <span className="text-sm text-ink-300">/ {p.period}</span>
              </div>
              <ul className="mt-5 space-y-2.5">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-ink-100">
                    <CheckCircle2 size={16} className="text-success-400 shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className={`mt-6 w-full ${p.highlight ? 'btn-primary' : 'btn-outline'} py-2.5`}
              >
                {p.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-20">
        <div className="relative glass overflow-hidden p-10 md:p-16 text-center">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-500/20 blur-[120px] rounded-full" />
          <div className="relative">
            <ShieldCheck size={28} className="text-brand-400 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white text-balance">
              Your placement prep, finally in one place.
            </h2>
            <p className="mt-3 text-ink-300 max-w-xl mx-auto">
              Join 48,000+ students using CareerPilot AI to crack placements at top companies.
            </p>
            <Link to="/app" className="btn-primary px-6 py-3 text-base mt-7">
              Launch your dashboard <Rocket size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <Logo />
          <div className="flex items-center gap-5 text-xs text-ink-300">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Security</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
          <p className="text-xs text-ink-300">© 2026 CareerPilot AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

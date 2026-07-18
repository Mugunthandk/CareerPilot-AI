import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Send,
  User,
  Bot,
  TrendingUp,
  Target,
  DollarSign,
  FileText,
  Map,
  Brain,
} from 'lucide-react';
import { initialChat, ChatMessage } from '../data';

const examples = [
  { icon: Target, text: 'Which companies should I apply to for frontend?' },
  { icon: Brain, text: 'What skills do I need for Google SDE-I?' },
  { icon: Map, text: 'Build me a 7-week roadmap for full-stack roles.' },
  { icon: DollarSign, text: 'Predict my salary for a React role in Bengaluru.' },
  { icon: FileText, text: 'What should I improve in my resume?' },
  { icon: TrendingUp, text: 'What is my skill gap for Stripe?' },
];

const canned: { match: string; reply: string }[] = [
  {
    match: 'company',
    reply:
      "Based on your profile (React 88, TypeScript 82, Node 76), I'd recommend targeting: **Stripe** (94% match, frontend), **Linear** (88%, full-stack), **Notion** (90%, TypeScript-heavy), and **Razorpay** (85%, backend-leaning). Apply to Stripe first — your skill density matches their JD closely and they're actively hiring.",
  },
  {
    match: 'google',
    reply:
      "For Google SDE-I, focus on: **DSA** (trees, graphs, DP — aim 300+ problems), **System Design** basics (scaling, caching, sharding), **Core CS** (OS, DBMS, CN), and one strong project with measurable impact. Your DSA is at 79 — push to 90+ with a 6-week sprint on graphs and DP.",
  },
  {
    match: 'roadmap',
    reply:
      "Here's a 7-week plan tailored to you:\n1. **Week 1–2** — React 19 patterns + Redux Toolkit\n2. **Week 3–4** — Node.js + REST/GraphQL APIs + JWT auth\n3. **Week 5–6** — DSA sprint (arrays, trees, graphs, DP)\n4. **Week 7** — System design basics + 5 AI mock interviews\nWant me to break any week into daily tasks?",
  },
  {
    match: 'salary',
    reply:
      "Predicted salary range for a React role in Bengaluru with your profile: **₹18–26 LPA** base, with top companies (Stripe, Linear, Notion) reaching **₹28–38 LPA**. Your biggest lever right now is system design — adding it could push the ceiling by ~20%.",
  },
  {
    match: 'resume',
    reply:
      "Your resume is at ATS 82. Top fixes:\n1. Add **GraphQL** and **Kubernetes** (missing in 7 matched JDs)\n2. Replace weak verbs ('helped' → 'spearheaded')\n3. Add 2 measurable impact bullets per project\n4. Add a Core Coursework section for keyword density\nApply these and you should hit 90+.",
  },
  {
    match: 'gap',
    reply:
      "Skill gap for Stripe (Frontend): you're strong on React/TS but short on **System Design** (48 vs 80 target) and **GraphQL** (missing). Close these in ~3 weeks: 1 system design case study/day + a GraphQL mini-project. That alone lifts your match from 94% → ~98%.",
  },
];

function reply(input: string): string {
  const lower = input.toLowerCase();
  const hit = canned.find((c) => lower.includes(c.match));
  return (
    hit?.reply ??
    "Great question! Based on your profile, I'd focus on three things: (1) sharpen your top skill to 90+, (2) close your biggest skill gap, and (3) apply to 3 matched roles this week. Want me to go deeper on any of these?"
  );
}

export function CareerAdvisor() {
  const [messages, setMessages] = useState<ChatMessage[]>(initialChat);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  const send = (text: string) => {
    const t = text.trim();
    if (!t) return;
    const userMsg: ChatMessage = { id: `u${Date.now()}`, role: 'user', content: t, ts: Date.now() };
    setMessages((m) => [...m, userMsg]);
    setInput('');
    setTyping(true);
    setTimeout(() => {
      const aiMsg: ChatMessage = { id: `a${Date.now()}`, role: 'ai', content: reply(t), ts: Date.now() };
      setMessages((m) => [...m, aiMsg]);
      setTyping(false);
    }, 900);
  };

  return (
    <div className="grid lg:grid-cols-12 gap-4 h-[calc(100vh-9rem)]">
      {/* Chat */}
      <div className="lg:col-span-8 glass flex flex-col overflow-hidden">
        <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/[0.06]">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-accent-500 grid place-items-center">
            <Sparkles size={15} className="text-white" />
          </div>
          <div>
            <div className="text-sm font-semibold text-white">AI Career Advisor</div>
            <div className="text-[11px] text-success-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-success-500 animate-pulse" /> Online
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-5 space-y-4">
          {messages.map((m) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex gap-3 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}
            >
              <div className={`w-8 h-8 shrink-0 rounded-lg grid place-items-center ${
                m.role === 'user' ? 'bg-ink-700 text-ink-100' : 'bg-gradient-to-br from-brand-500 to-accent-500 text-white'
              }`}>
                {m.role === 'user' ? <User size={15} /> : <Bot size={15} />}
              </div>
              <div className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                m.role === 'user'
                  ? 'bg-brand-500/15 text-white rounded-tr-sm'
                  : 'bg-ink-800/70 text-ink-100 rounded-tl-sm border border-white/[0.06]'
              }`}>
                {m.content.split('\n').map((line: string, i: number) => (
                  <p key={i} className={i > 0 ? 'mt-1.5' : ''}>{line}</p>
                ))}
              </div>
            </motion.div>
          ))}
          {typing && (
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-accent-500 grid place-items-center">
                <Bot size={15} className="text-white" />
              </div>
              <div className="bg-ink-800/70 border border-white/[0.06] rounded-2xl rounded-tl-sm px-4 py-3.5 flex gap-1">
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                    className="w-1.5 h-1.5 rounded-full bg-ink-300"
                  />
                ))}
              </div>
            </div>
          )}
          <div ref={endRef} />
        </div>

        <div className="px-5 py-4 border-t border-white/[0.06]">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex items-center gap-2"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about companies, skills, salary, roadmap…"
              className="input flex-1"
            />
            <button type="submit" className="btn-primary px-4">
              <Send size={15} />
            </button>
          </form>
        </div>
      </div>

      {/* Examples + roadmap */}
      <div className="lg:col-span-4 space-y-4 overflow-y-auto">
        <div className="glass p-5">
          <h3 className="font-semibold text-white mb-1">Try asking</h3>
          <p className="text-xs text-ink-300 mb-3">Tap any example to start.</p>
          <div className="space-y-2">
            {examples.map((e) => (
              <button
                key={e.text}
                onClick={() => send(e.text)}
                className="w-full text-left p-3 rounded-xl glass-soft hover:bg-white/[0.05] transition flex gap-3 items-start"
              >
                <e.icon size={15} className="text-brand-400 shrink-0 mt-0.5" />
                <span className="text-xs text-ink-100">{e.text}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="glass p-5">
          <div className="flex items-center gap-2 mb-3">
            <Map size={15} className="text-accent-400" />
            <h3 className="font-semibold text-white">Your AI roadmap</h3>
          </div>
          <div className="space-y-3">
            {[
              { w: 'Week 1–2', t: 'Frontend Mastery', p: 100 },
              { w: 'Week 3–4', t: 'Backend Foundations', p: 60 },
              { w: 'Week 5–6', t: 'DSA Sprint', p: 25 },
              { w: 'Week 7', t: 'System Design + Mocks', p: 0 },
            ].map((r) => (
              <div key={r.w}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-ink-200">{r.w} · {r.t}</span>
                  <span className="text-white font-semibold">{r.p}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-ink-700 overflow-hidden">
                  <div className="h-full rounded-full bg-gradient-to-r from-brand-500 to-accent-500" style={{ width: `${r.p}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

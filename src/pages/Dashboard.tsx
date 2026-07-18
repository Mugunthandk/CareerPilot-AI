import { motion } from 'framer-motion';
import {
  TrendingUp,
  FileText,
  Mic,
  Code2,
  Briefcase,
  Sparkles,
  ArrowUpRight,
  Target,
  Flame,
  Trophy,
} from 'lucide-react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';
import { Link } from 'react-router-dom';
import {
  applications,
  currentUser,
  notifications,
  radarData,
  skillProgress,
} from '../data';

const statusStyles: Record<string, string> = {
  Applied: 'bg-ink-700 text-ink-100',
  Reviewing: 'bg-warning-500/15 text-warning-400',
  Interview: 'bg-brand-500/15 text-brand-300',
  Offer: 'bg-success-500/15 text-success-400',
  Rejected: 'bg-danger-500/15 text-danger-400',
};

const aiSuggestions = [
  { icon: Target, text: 'Target Stripe Frontend role — 94% match. Apply within 5 days for best response rate.' },
  { icon: Sparkles, text: 'Add "GraphQL" to your resume — it appears in 7 of your matched jobs.' },
  { icon: Mic, text: 'Your communication score dipped 3 points. Schedule a 10-min HR mock.' },
  { icon: Code2, text: 'Daily streak at 62 days. Solve 1 medium problem to keep it alive.' },
];

export function Dashboard() {
  const u = currentUser;
  return (
    <div className="space-y-6">
      {/* Hero strip */}
      <div className="glass p-6 relative overflow-hidden">
        <div className="absolute -top-16 -right-10 w-72 h-72 bg-brand-500/15 blur-[100px] rounded-full" />
        <div className="relative flex flex-col md:flex-row md:items-center gap-6">
          <img
            src={u.avatar}
            alt={u.name}
            className="w-16 h-16 rounded-2xl object-cover border border-white/10"
          />
          <div className="flex-1">
            <p className="text-xs text-ink-300">Welcome back,</p>
            <h2 className="text-2xl font-bold text-white">{u.name}</h2>
            <p className="text-sm text-ink-300">{u.headline}</p>
          </div>
          <div className="flex gap-3">
            <Link to="/app/resume" className="btn-primary">
              <FileText size={15} /> Build resume
            </Link>
            <Link to="/app/interview" className="btn-outline">
              <Mic size={15} /> Mock interview
            </Link>
          </div>
        </div>
      </div>

      {/* Metric cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Profile completion', value: `${u.profileCompletion}%`, icon: Target, color: 'text-brand-400', bar: u.profileCompletion },
          { label: 'Resume ATS score', value: `${u.resumeScore}/100`, icon: FileText, color: 'text-accent-400', bar: u.resumeScore },
          { label: 'Interview score', value: `${u.interviewScore}/100`, icon: Mic, color: 'text-success-400', bar: u.interviewScore },
          { label: 'Coding rank', value: `#${u.codingRank}`, icon: Trophy, color: 'text-warning-400', bar: 70 },
        ].map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="glass p-5 card-hover"
          >
            <div className="flex items-center justify-between mb-3">
              <m.icon size={18} className={m.color} />
              <ArrowUpRight size={14} className="text-ink-300" />
            </div>
            <div className="text-2xl font-extrabold text-white">{m.value}</div>
            <div className="text-xs text-ink-300 mt-0.5">{m.label}</div>
            <div className="mt-3 h-1.5 rounded-full bg-ink-700 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${m.bar}%` }}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.05 }}
                className="h-full rounded-full bg-gradient-to-r from-brand-500 to-accent-500"
              />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-4">
        {/* Skill progress chart */}
        <div className="glass p-6 lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-semibold text-white">Skill progression</h3>
              <p className="text-xs text-ink-300">Overall readiness over time</p>
            </div>
            <span className="chip bg-success-500/15 text-success-400">
              <TrendingUp size={12} /> +24 pts
            </span>
          </div>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={skillProgress} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#2E74FF" stopOpacity={0.5} />
                    <stop offset="100%" stopColor="#2E74FF" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="month" stroke="#5A5E72" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis stroke="#5A5E72" fontSize={11} tickLine={false} axisLine={false} domain={[40, 100]} />
                <Tooltip
                  contentStyle={{
                    background: '#121319',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 12,
                    fontSize: 12,
                    color: '#E6E8EE',
                  }}
                />
                <Area type="monotone" dataKey="score" stroke="#2E74FF" strokeWidth={2} fill="url(#g1)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Radar */}
        <div className="glass p-6">
          <h3 className="font-semibold text-white mb-1">Skill radar</h3>
          <p className="text-xs text-ink-300 mb-2">Strengths vs gaps</p>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData}>
                <PolarGrid stroke="rgba(255,255,255,0.08)" />
                <PolarAngleAxis dataKey="skill" tick={{ fill: '#8A8FA3', fontSize: 10 }} />
                <Radar dataKey="value" stroke="#06B6D4" fill="#06B6D4" fillOpacity={0.3} strokeWidth={2} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-4">
        {/* Applications */}
        <div className="glass p-6 lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-white">Recent applications</h3>
            <Link to="/app/jobs" className="text-xs text-brand-400 hover:text-brand-300">
              View all
            </Link>
          </div>
          <div className="space-y-2">
            {applications.slice(0, 5).map((a) => (
              <div
                key={a.id}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/[0.03] transition"
              >
                <img src={a.logo} alt={a.company} className="w-9 h-9 rounded-lg object-cover" />
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-white truncate">{a.jobTitle}</div>
                  <div className="text-xs text-ink-300">{a.company} · applied {a.appliedOn}</div>
                </div>
                <span className={`chip ${statusStyles[a.status]}`}>{a.status}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Notifications */}
        <div className="glass p-6">
          <h3 className="font-semibold text-white mb-4">Activity</h3>
          <div className="space-y-3">
            {notifications.slice(0, 4).map((n) => (
              <div key={n.id} className="flex gap-3">
                <div className={`w-8 h-8 shrink-0 rounded-lg grid place-items-center ${
                  n.read ? 'bg-ink-700 text-ink-300' : 'bg-brand-500/15 text-brand-300'
                }`}>
                  {n.icon === 'calendar' && <Mic size={14} />}
                  {n.icon === 'briefcase' && <Briefcase size={14} />}
                  {n.icon === 'award' && <Trophy size={14} />}
                  {n.icon === 'mail' && <FileText size={14} />}
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-medium text-white truncate">{n.title}</div>
                  <div className="text-xs text-ink-300 line-clamp-2">{n.body}</div>
                  <div className="text-[10px] text-ink-300 mt-0.5">{n.time} ago</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI suggestions */}
      <div className="glass p-6">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles size={16} className="text-brand-400" />
          <h3 className="font-semibold text-white">AI suggestions for you</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-3">
          {aiSuggestions.map((s, i) => (
            <div key={i} className="glass-soft p-4 flex gap-3 card-hover">
              <s.icon size={18} className="text-accent-400 shrink-0 mt-0.5" />
              <p className="text-sm text-ink-100">{s.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Streak banner */}
      <div className="glass p-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-warning-400 to-danger-500 grid place-items-center">
            <Flame size={22} className="text-white" />
          </div>
          <div>
            <div className="text-lg font-bold text-white">62-day streak</div>
            <div className="text-sm text-ink-300">Solve today's challenge to keep it alive.</div>
          </div>
        </div>
        <Link to="/app/code" className="btn-primary">
          <Code2 size={15} /> Solve daily challenge
        </Link>
      </div>
    </div>
  );
}

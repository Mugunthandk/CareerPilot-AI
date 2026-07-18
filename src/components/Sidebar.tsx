import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  FileText,
  Mic,
  Code2,
  Briefcase,
  Sparkles,
  Settings,
  HelpCircle,
  Bell,
  Search,
  Menu,
  X,
} from 'lucide-react';
import { Logo } from './Logo';
import { useState } from 'react';

const nav = [
  { to: '/app', label: 'Dashboard', icon: LayoutDashboard, end: true },
  { to: '/app/resume', label: 'Resume Builder', icon: FileText },
  { to: '/app/interview', label: 'AI Mock Interview', icon: Mic },
  { to: '/app/code', label: 'Coding Platform', icon: Code2 },
  { to: '/app/jobs', label: 'Job Portal', icon: Briefcase },
  { to: '/app/advisor', label: 'AI Career Advisor', icon: Sparkles },
];

export function Sidebar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="lg:hidden fixed top-3 left-3 z-50 p-2 rounded-lg bg-ink-800/80 border border-white/10 text-ink-100"
        aria-label="Toggle navigation"
      >
        {open ? <X size={18} /> : <Menu size={18} />}
      </button>

      <aside
        className={`fixed lg:sticky top-0 left-0 z-40 h-screen w-[260px] shrink-0 flex flex-col
          bg-ink-900/80 backdrop-blur-xl border-r border-white/[0.06]
          transition-transform duration-300 lg:translate-x-0 ${
            open ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        <div className="px-5 py-5 border-b border-white/[0.06]">
          <Logo />
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
          <p className="px-3 pb-2 text-[11px] font-semibold uppercase tracking-wider text-ink-300">
            Workspace
          </p>
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-brand-500/10 text-white border border-brand-500/20 shadow-[0_0_0_1px_rgba(46,116,255,0.1)]'
                    : 'text-ink-200 hover:text-white hover:bg-white/[0.04] border border-transparent'
                }`
              }
            >
              <item.icon size={18} className="shrink-0" />
              {item.label}
            </NavLink>
          ))}

          <p className="px-3 pt-5 pb-2 text-[11px] font-semibold uppercase tracking-wider text-ink-300">
            Account
          </p>
          <NavLink
            to="/app/settings"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                isActive
                  ? 'bg-white/[0.06] text-white'
                  : 'text-ink-200 hover:text-white hover:bg-white/[0.04]'
              }`
            }
          >
            <Settings size={18} /> Settings
          </NavLink>
          <NavLink
            to="/app/help"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-ink-200 hover:text-white hover:bg-white/[0.04]"
          >
            <HelpCircle size={18} /> Help & Support
          </NavLink>
        </nav>

        <div className="p-3">
          <div className="glass-soft p-3.5 rounded-xl">
            <div className="flex items-center gap-2 text-xs text-ink-100 font-semibold mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-success-500 animate-pulse" />
              AI credits
            </div>
            <p className="text-[11px] text-ink-300 mb-2">1,240 / 2,000 used this month</p>
            <div className="h-1.5 rounded-full bg-ink-700 overflow-hidden">
              <div className="h-full w-[62%] rounded-full bg-gradient-to-r from-brand-500 to-accent-500" />
            </div>
          </div>
        </div>
      </aside>

      {open && (
        <div
          className="lg:hidden fixed inset-0 z-30 bg-black/50 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}

export function Topbar({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <header className="sticky top-0 z-20 -mx-4 px-4 lg:-mx-8 lg:px-8 py-4 bg-ink-950/70 backdrop-blur-xl border-b border-white/[0.06]">
      <div className="flex items-center justify-between gap-4">
        <div className="min-w-0">
          <h1 className="text-lg md:text-xl font-bold tracking-tight text-white truncate">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xs md:text-sm text-ink-300 truncate">{subtitle}</p>
          )}
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center gap-2 px-3 py-2 rounded-xl bg-ink-800/70 border border-white/[0.06] text-sm text-ink-300 w-64">
            <Search size={15} />
            <input
              placeholder="Search jobs, problems…"
              className="bg-transparent outline-none flex-1 placeholder:text-ink-300 text-ink-100"
            />
            <kbd className="text-[10px] px-1.5 py-0.5 rounded bg-ink-700 text-ink-300">⌘K</kbd>
          </div>
          <button className="relative p-2 rounded-xl bg-ink-800/70 border border-white/[0.06] text-ink-200 hover:text-white hover:bg-white/[0.04]">
            <Bell size={18} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-danger-500 ring-2 ring-ink-800" />
          </button>
        </div>
      </div>
    </header>
  );
}

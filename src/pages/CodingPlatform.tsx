import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Play,
  CheckCircle2,
  XCircle,
  Flame,
  Trophy,
  Calendar,
  Hash,
  Search,
  ChevronRight,
  RotateCcw,
} from 'lucide-react';
import { codingProblems, leaderboard } from '../data';

const difficultyStyles: Record<string, string> = {
  Easy: 'text-success-400 bg-success-500/10',
  Medium: 'text-warning-400 bg-warning-500/10',
  Hard: 'text-danger-400 bg-danger-500/10',
};

const languages = ['JavaScript', 'Python', 'Java', 'C++', 'SQL'];

export function CodingPlatform() {
  const [active, setActive] = useState(codingProblems[0]);
  const [lang, setLang] = useState('JavaScript');
  const [code, setCode] = useState(active.starter);
  const [running, setRunning] = useState(false);
  const [results, setResults] = useState<{ pass: boolean; input: string; output: string; expected: string }[] | null>(null);
  const [tab, setTab] = useState<'problems' | 'leaderboard' | 'contest'>('problems');
  const [query, setQuery] = useState('');
  const [diffFilter, setDiffFilter] = useState<string>('All');

  const selectProblem = (id: string) => {
    const p = codingProblems.find((x) => x.id === id);
    if (p) {
      setActive(p);
      setCode(p.starter);
      setResults(null);
    }
  };

  const run = () => {
    setRunning(true);
    setResults(null);
    setTimeout(() => {
      setRunning(false);
      setResults(
        active.testCases.map((tc) => ({
          pass: Math.random() > 0.3,
          input: tc.input,
          output: tc.output,
          expected: tc.output,
        }))
      );
    }, 1100);
  };

  const filtered = codingProblems.filter(
    (p) =>
      (diffFilter === 'All' || p.difficulty === diffFilter) &&
      p.title.toLowerCase().includes(query.toLowerCase())
  );

  const passed = results?.filter((r) => r.pass).length ?? 0;

  return (
    <div className="space-y-4">
      {/* Top tabs */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex gap-1 p-1 rounded-xl bg-ink-800/60 border border-white/[0.06]">
          {[
            { k: 'problems', l: 'Problems', icon: Code2 },
            { k: 'leaderboard', l: 'Leaderboard', icon: Trophy },
            { k: 'contest', l: 'Contest', icon: Flame },
          ].map((t) => (
            <button
              key={t.k}
              onClick={() => setTab(t.k as typeof tab)}
              className={`px-3.5 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition ${
                tab === t.k ? 'bg-brand-500/15 text-white border border-brand-500/30' : 'text-ink-200 hover:text-white'
              }`}
            >
              <t.icon size={14} /> {t.l}
            </button>
          ))}
        </div>
        <div className="flex gap-3">
          <div className="glass-soft px-3 py-2 flex items-center gap-2 text-xs">
            <Flame size={14} className="text-warning-400" />
            <span className="text-white font-semibold">62</span>
            <span className="text-ink-300">day streak</span>
          </div>
          <div className="glass-soft px-3 py-2 flex items-center gap-2 text-xs">
            <Trophy size={14} className="text-brand-400" />
            <span className="text-white font-semibold">#142</span>
            <span className="text-ink-300">global</span>
          </div>
        </div>
      </div>

      {tab === 'problems' && (
        <div className="grid lg:grid-cols-12 gap-4">
          {/* Problem list */}
          <div className="lg:col-span-3 glass p-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex-1 flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-ink-800/70 border border-white/[0.06]">
                <Search size={13} className="text-ink-300" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search…"
                  className="bg-transparent outline-none text-xs text-ink-100 flex-1"
                />
              </div>
            </div>
            <div className="flex gap-1 mb-3">
              {['All', 'Easy', 'Medium', 'Hard'].map((d) => (
                <button
                  key={d}
                  onClick={() => setDiffFilter(d)}
                  className={`px-2 py-1 rounded-md text-[11px] ${
                    diffFilter === d ? 'bg-brand-500/15 text-white' : 'text-ink-300 hover:text-white'
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
            <div className="space-y-1">
              {filtered.map((p) => (
                <button
                  key={p.id}
                  onClick={() => selectProblem(p.id)}
                  className={`w-full text-left p-3 rounded-lg transition ${
                    active.id === p.id ? 'bg-brand-500/10 border border-brand-500/20' : 'hover:bg-white/[0.03] border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {p.solved ? (
                      <CheckCircle2 size={14} className="text-success-400 shrink-0" />
                    ) : (
                      <div className="w-3.5 h-3.5 rounded-full border border-ink-300 shrink-0" />
                    )}
                    <span className="text-sm text-ink-100 truncate flex-1">{p.title}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1.5 ml-6">
                    <span className={`chip ${difficultyStyles[p.difficulty]} text-[10px] px-1.5 py-0.5`}>{p.difficulty}</span>
                    <span className="text-[10px] text-ink-300">{p.acceptance}%</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Problem + editor */}
          <div className="lg:col-span-6 space-y-4">
            <div className="glass p-5">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-lg font-bold text-white">{active.title}</h2>
                <span className={`chip ${difficultyStyles[active.difficulty]}`}>{active.difficulty}</span>
              </div>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {active.tags.map((t) => (
                  <span key={t} className="chip bg-ink-700 text-ink-100 text-[10px]">{t}</span>
                ))}
              </div>
              <p className="text-sm text-ink-200 whitespace-pre-line leading-relaxed">{active.description}</p>
            </div>

            <div className="glass overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/[0.06] bg-ink-800/40">
                <div className="flex gap-1">
                  {languages.map((l) => (
                    <button
                      key={l}
                      onClick={() => setLang(l)}
                      className={`px-2.5 py-1 rounded-md text-xs ${
                        lang === l ? 'bg-brand-500/15 text-white' : 'text-ink-300 hover:text-white'
                      }`}
                    >
                      {l}
                    </button>
                  ))}
                </div>
                <div className="flex gap-2">
                  <button onClick={() => setCode(active.starter)} className="btn-ghost text-xs px-2.5 py-1.5">
                    <RotateCcw size={12} /> Reset
                  </button>
                  <button onClick={run} disabled={running} className="btn-primary text-xs px-3 py-1.5">
                    {running ? (
                      <span className="w-3 h-3 rounded-full border-2 border-white/40 border-t-white animate-spin" />
                    ) : (
                      <Play size={12} />
                    )}
                    Run
                  </button>
                </div>
              </div>
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                spellCheck={false}
                className="w-full h-72 bg-ink-900/60 text-ink-50 font-mono text-sm p-4 outline-none resize-none"
              />
            </div>

            {/* Test results */}
            <div className="glass p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-white">Test cases</h3>
                {results && (
                  <span className={`chip ${passed === results.length ? 'bg-success-500/15 text-success-400' : 'bg-warning-500/15 text-warning-400'}`}>
                    {passed}/{results.length} passed
                  </span>
                )}
              </div>
              {results ? (
                <div className="space-y-2">
                  {results.map((r, i) => (
                    <div key={i} className="glass-soft p-3">
                      <div className="flex items-center gap-2 mb-1">
                        {r.pass ? <CheckCircle2 size={14} className="text-success-400" /> : <XCircle size={14} className="text-danger-400" />}
                        <span className="text-xs font-medium text-white">Case {i + 1}</span>
                      </div>
                      <div className="text-[11px] text-ink-300 font-mono">
                        Input: {r.input}
                      </div>
                      <div className="text-[11px] text-ink-300 font-mono">
                        Expected: {r.expected}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-xs text-ink-300 text-center py-4">
                  Click <span className="text-white font-semibold">Run</span> to execute against {active.testCases.length} test cases.
                </div>
              )}
            </div>
          </div>

          {/* Sidebar: daily challenge */}
          <div className="lg:col-span-3 space-y-4">
            <div className="glass p-5">
              <div className="flex items-center gap-2 mb-3">
                <Calendar size={16} className="text-brand-400" />
                <h3 className="font-semibold text-white">Daily challenge</h3>
              </div>
              <p className="text-sm text-ink-100 font-medium mb-1">Container With Most Water</p>
              <p className="text-xs text-ink-300 mb-3">Solve today to extend your 62-day streak.</p>
              <button className="btn-primary w-full text-xs">
                Solve <ChevronRight size={12} />
              </button>
            </div>
            <div className="glass p-5">
              <h3 className="font-semibold text-white mb-3">Your stats</h3>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { l: 'Solved', v: '512' },
                  { l: 'Easy', v: '280' },
                  { l: 'Medium', v: '198' },
                  { l: 'Hard', v: '34' },
                ].map((s) => (
                  <div key={s.l} className="glass-soft p-3 text-center">
                    <div className="text-lg font-bold text-white">{s.v}</div>
                    <div className="text-[10px] text-ink-300">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass p-5">
              <h3 className="font-semibold text-white mb-3">Mini leaderboard</h3>
              <div className="space-y-2">
                {leaderboard.slice(0, 4).map((l) => (
                  <div key={l.rank} className="flex items-center gap-2">
                    <span className={`w-6 text-xs font-bold ${l.rank <= 3 ? 'text-warning-400' : 'text-ink-300'}`}>#{l.rank}</span>
                    <span className="text-xs text-ink-100 flex-1 truncate">{l.name}</span>
                    <span className="text-[10px] text-ink-300">{l.solved}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {tab === 'leaderboard' && (
        <div className="glass p-6">
          <h3 className="font-semibold text-white mb-4">Global leaderboard</h3>
          <div className="space-y-1">
            {leaderboard.map((l) => (
              <motion.div
                key={l.rank}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: l.rank * 0.04 }}
                className={`flex items-center gap-4 p-3 rounded-xl ${
                  l.name === 'Aarav Sharma' ? 'bg-brand-500/10 border border-brand-500/20' : 'hover:bg-white/[0.03]'
                }`}
              >
                <span className={`w-8 text-center font-extrabold ${l.rank <= 3 ? 'text-warning-400' : 'text-ink-300'}`}>
                  {l.rank <= 3 ? `#${l.rank}` : l.rank}
                </span>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-500 to-accent-500 grid place-items-center text-xs font-bold text-white">
                  {l.name[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-white truncate">{l.name}</div>
                  <div className="text-xs text-ink-300">{l.college}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold text-white">{l.solved}</div>
                  <div className="text-[10px] text-ink-300">solved</div>
                </div>
                <div className="hidden md:flex items-center gap-1 text-xs text-warning-400 w-20 justify-end">
                  <Flame size={12} /> {l.streak}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {tab === 'contest' && (
        <div className="grid md:grid-cols-2 gap-4">
          <div className="glass p-6">
            <div className="flex items-center gap-2 mb-2">
              <Flame size={16} className="text-warning-400" />
              <h3 className="font-semibold text-white">Weekly Contest #84</h3>
            </div>
            <p className="text-sm text-ink-300 mb-4">Starts in 2 days · 8 problems · 90 minutes.</p>
            <div className="space-y-2 mb-4">
              {['Two Sum Variant', 'Binary Tree Pruning', 'Shortest Path in Grid', 'DP on Strings'].map((p, i) => (
                <div key={p} className="flex items-center gap-2 text-sm text-ink-100">
                  <Hash size={12} className="text-ink-300" /> {p}
                  <span className={`chip ml-auto ${difficultyStyles[['Easy', 'Medium', 'Medium', 'Hard'][i]]} text-[10px]`}>
                    {['Easy', 'Medium', 'Medium', 'Hard'][i]}
                  </span>
                </div>
              ))}
            </div>
            <button className="btn-primary w-full">Register</button>
          </div>
          <div className="glass p-6">
            <h3 className="font-semibold text-white mb-3">Past contests</h3>
            <div className="space-y-2">
              {[
                { n: 'Contest #83', rank: 412, solved: 6 },
                { n: 'Contest #82', rank: 389, solved: 7 },
                { n: 'Contest #81', rank: 502, solved: 5 },
              ].map((c) => (
                <div key={c.n} className="glass-soft p-3 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-white">{c.n}</div>
                    <div className="text-xs text-ink-300">Solved {c.solved}/8</div>
                  </div>
                  <span className="chip bg-brand-500/15 text-brand-300">#{c.rank}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

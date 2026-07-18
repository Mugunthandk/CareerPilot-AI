import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  MapPin,
  Briefcase,
  Bookmark,
  ExternalLink,
  Sparkles,
  TrendingUp,
  CheckCircle2,
  Clock,
  X,
} from 'lucide-react';
import { jobs, applications } from '../data';

const statusStyles: Record<string, string> = {
  Applied: 'bg-ink-700 text-ink-100',
  Reviewing: 'bg-warning-500/15 text-warning-400',
  Interview: 'bg-brand-500/15 text-brand-300',
  Offer: 'bg-success-500/15 text-success-400',
  Rejected: 'bg-danger-500/15 text-danger-400',
};

const statusSteps = ['Applied', 'Reviewing', 'Interview', 'Offer'];

export function JobPortal() {
  const [tab, setTab] = useState<'browse' | 'applied' | 'saved'>('browse');
  const [query, setQuery] = useState('');
  const [type, setType] = useState('All');
  const [selected, setSelected] = useState<string | null>(null);
  const [saved, setSaved] = useState<Record<string, boolean>>(
    Object.fromEntries(jobs.map((j) => [j.id, !!j.saved]))
  );
  const [applied, setApplied] = useState<Record<string, boolean>>(
    Object.fromEntries(jobs.map((j) => [j.id, !!j.applied]))
  );

  const toggleSave = (id: string) => setSaved((s) => ({ ...s, [id]: !s[id] }));
  const apply = (id: string) => setApplied((a) => ({ ...a, [id]: true }));

  const types = ['All', 'Full-time', 'Internship', 'Remote', 'Contract'];

  const filtered = jobs.filter(
    (j) =>
      (type === 'All' || j.type === type) &&
      (j.title.toLowerCase().includes(query.toLowerCase()) ||
        j.company.toLowerCase().includes(query.toLowerCase()) ||
        j.tags.some((t) => t.toLowerCase().includes(query.toLowerCase())))
  );

  const savedJobs = jobs.filter((j) => saved[j.id]);
  const selectedJob = jobs.find((j) => j.id === selected);

  return (
    <div className="space-y-4">
      {/* Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex gap-1 p-1 rounded-xl bg-ink-800/60 border border-white/[0.06]">
          {[
            { k: 'browse', l: 'Browse', icon: Search },
            { k: 'applied', l: 'Applied', icon: CheckCircle2 },
            { k: 'saved', l: 'Saved', icon: Bookmark },
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
            <Sparkles size={14} className="text-brand-400" />
            <span className="text-white font-semibold">94%</span>
            <span className="text-ink-300">best match</span>
          </div>
        </div>
      </div>

      {tab === 'browse' && (
        <div className="grid lg:grid-cols-12 gap-4">
          {/* Filters + list */}
          <div className="lg:col-span-8 space-y-4">
            <div className="glass p-4">
              <div className="flex flex-col md:flex-row gap-3">
                <div className="flex-1 flex items-center gap-2 px-3 py-2 rounded-xl bg-ink-800/70 border border-white/[0.06]">
                  <Search size={15} className="text-ink-300" />
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search role, company or skill…"
                    className="bg-transparent outline-none text-sm text-ink-100 flex-1"
                  />
                </div>
                <div className="flex gap-1.5 flex-wrap">
                  {types.map((t) => (
                    <button
                      key={t}
                      onClick={() => setType(t)}
                      className={`px-3 py-1.5 rounded-lg text-xs ${
                        type === t ? 'bg-brand-500/15 text-white border border-brand-500/30' : 'bg-ink-800/60 text-ink-200 hover:text-white border border-white/[0.06]'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {filtered.map((j, i) => (
                <motion.div
                  key={j.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className="glass p-5 card-hover"
                >
                  <div className="flex items-start gap-4">
                    <img src={j.logo} alt={j.company} className="w-12 h-12 rounded-xl object-cover border border-white/10" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <div>
                          <h3 className="font-semibold text-white">{j.title}</h3>
                          <p className="text-xs text-ink-300">{j.company}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="chip bg-success-500/15 text-success-400">
            <TrendingUp size={11} /> {j.match}% match
                          </span>
                          <button
                            onClick={() => toggleSave(j.id)}
                            className={`p-1.5 rounded-lg ${saved[j.id] ? 'text-brand-400 bg-brand-500/10' : 'text-ink-300 hover:text-white'}`}
                          >
                            <Bookmark size={15} fill={saved[j.id] ? 'currentColor' : 'none'} />
                          </button>
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-ink-300">
                        <span className="flex items-center gap-1"><MapPin size={11} /> {j.location}</span>
                        <span className="flex items-center gap-1"><Briefcase size={11} /> {j.type}</span>
                        <span className="text-ink-100 font-medium">{j.salary}</span>
                        <span className="flex items-center gap-1"><Clock size={11} /> {j.posted}</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {j.tags.map((t) => (
                          <span key={t} className="chip bg-ink-700 text-ink-100 text-[10px]">{t}</span>
                        ))}
                      </div>
                      <div className="flex gap-2 mt-4">
                        <button
                          onClick={() => apply(j.id)}
                          disabled={applied[j.id]}
                          className={`btn-primary text-xs px-3 py-2 ${applied[j.id] ? 'opacity-60' : ''}`}
                        >
                          {applied[j.id] ? (
                            <>
                              <CheckCircle2 size={13} /> Applied
                            </>
                          ) : (
                            <>Apply now</>
                          )}
                        </button>
                        <button onClick={() => setSelected(j.id)} className="btn-outline text-xs px-3 py-2">
                          View details
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Detail panel */}
          <div className="lg:col-span-4">
            <div className="glass p-6 sticky top-24">
              {selectedJob ? (
                <div>
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <img src={selectedJob.logo} alt="" className="w-12 h-12 rounded-xl object-cover" />
                      <div>
                        <h3 className="font-semibold text-white">{selectedJob.title}</h3>
                        <p className="text-xs text-ink-300">{selectedJob.company}</p>
                      </div>
                    </div>
                    <button onClick={() => setSelected(null)} className="text-ink-300 hover:text-white">
                      <X size={16} />
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs text-ink-300 mb-4">
                    <span className="flex items-center gap-1"><MapPin size={11} /> {selectedJob.location}</span>
                    <span className="flex items-center gap-1"><Briefcase size={11} /> {selectedJob.type}</span>
                    <span className="text-ink-100 font-medium">{selectedJob.salary}</span>
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-2">Role overview</h4>
                  <p className="text-sm text-ink-200 leading-relaxed mb-4">
                    We're looking for a {selectedJob.title.toLowerCase()} to build and scale products used by
                    thousands of businesses. You'll work cross-functionally with design and backend teams to ship
                    high-impact features. Strong fundamentals in {selectedJob.tags.join(', ')} are essential.
                  </p>
                  <h4 className="text-sm font-semibold text-white mb-2">Requirements</h4>
                  <ul className="text-sm text-ink-200 space-y-1.5 mb-5">
                    <li className="flex gap-2"><CheckCircle2 size={14} className="text-success-400 shrink-0 mt-0.5" /> 2+ years building production web apps</li>
                    <li className="flex gap-2"><CheckCircle2 size={14} className="text-success-400 shrink-0 mt-0.5" /> Strong {selectedJob.tags[0]} fundamentals</li>
                    <li className="flex gap-2"><CheckCircle2 size={14} className="text-success-400 shrink-0 mt-0.5" /> Experience with REST or GraphQL APIs</li>
                    <li className="flex gap-2"><CheckCircle2 size={14} className="text-success-400 shrink-0 mt-0.5" /> Bias for shipping and ownership</li>
                  </ul>
                  <button
                    onClick={() => apply(selectedJob.id)}
                    disabled={applied[selectedJob.id]}
                    className="btn-primary w-full"
                  >
                    {applied[selectedJob.id] ? (
                      <>
                        <CheckCircle2 size={15} /> Applied
                      </>
                    ) : (
                      <>
                        <ExternalLink size={15} /> Apply with my resume
                      </>
                    )}
                  </button>
                </div>
              ) : (
                <div className="text-center py-10">
                  <Briefcase size={32} className="text-ink-300 mx-auto mb-3" />
                  <p className="text-sm text-ink-300">Select a job to see full details and apply.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {tab === 'applied' && (
        <div className="space-y-4">
          {applications.map((a, i) => (
            <motion.div
              key={a.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              className="glass p-5"
            >
              <div className="flex items-center gap-4">
                <img src={a.logo} alt={a.company} className="w-12 h-12 rounded-xl object-cover" />
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-white">{a.jobTitle}</h3>
                  <p className="text-xs text-ink-300">{a.company} · applied {a.appliedOn}</p>
                </div>
                <span className={`chip ${statusStyles[a.status]}`}>{a.status}</span>
              </div>
              {a.status !== 'Rejected' && (
                <div className="mt-4 flex items-center gap-2">
                  {statusSteps.map((s, idx) => {
                    const active = statusSteps.indexOf(a.status) >= idx;
                    return (
                      <div key={s} className="flex-1 flex items-center gap-2">
                        <div className={`w-6 h-6 rounded-full grid place-items-center text-[10px] font-bold ${
                          active ? 'bg-brand-500 text-white' : 'bg-ink-700 text-ink-300'
                        }`}>
                          {idx + 1}
                        </div>
                        <span className={`text-[10px] ${active ? 'text-white' : 'text-ink-300'}`}>{s}</span>
                        {idx < statusSteps.length - 1 && (
                          <div className={`flex-1 h-0.5 ${active && statusSteps.indexOf(a.status) > idx ? 'bg-brand-500' : 'bg-ink-700'}`} />
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      )}

      {tab === 'saved' && (
        <div className="grid md:grid-cols-2 gap-4">
          {savedJobs.length === 0 ? (
            <div className="glass p-10 text-center md:col-span-2">
              <Bookmark size={28} className="text-ink-300 mx-auto mb-3" />
              <p className="text-sm text-ink-300">No saved jobs yet. Tap the bookmark icon on any listing.</p>
            </div>
          ) : (
            savedJobs.map((j) => (
              <div key={j.id} className="glass p-5 card-hover">
                <div className="flex items-start gap-3">
                  <img src={j.logo} alt="" className="w-11 h-11 rounded-xl object-cover" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-white">{j.title}</h3>
                      <button onClick={() => toggleSave(j.id)} className="text-brand-400">
                        <Bookmark size={15} fill="currentColor" />
                      </button>
                    </div>
                    <p className="text-xs text-ink-300">{j.company} · {j.location}</p>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {j.tags.map((t) => (
                        <span key={t} className="chip bg-ink-700 text-ink-100 text-[10px]">{t}</span>
                      ))}
                    </div>
                    <button
                      onClick={() => apply(j.id)}
                      disabled={applied[j.id]}
                      className="btn-primary text-xs px-3 py-2 mt-3"
                    >
                      {applied[j.id] ? 'Applied' : 'Apply now'}
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

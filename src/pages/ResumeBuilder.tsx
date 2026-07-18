import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FileText,
  Upload,
  Download,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Plus,
  GripVertical,
  X,
  Wand2,
} from 'lucide-react';
import { resumeAnalysis, templates, currentUser } from '../data';

type Section = { id: string; title: string; visible: boolean };

const initialSections: Section[] = [
  { id: 's1', title: 'Summary', visible: true },
  { id: 's2', title: 'Experience', visible: true },
  { id: 's3', title: 'Projects', visible: true },
  { id: 's4', title: 'Skills', visible: true },
  { id: 's5', title: 'Education', visible: true },
  { id: 's6', title: 'Certifications', visible: false },
];

export function ResumeBuilder() {
  const [sections, setSections] = useState<Section[]>(initialSections);
  const [template, setTemplate] = useState(templates[0]);
  const [dragIndex, setDragIndex] = useState<number | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const [summary, setSummary] = useState(
    'Final-year CS student passionate about building scalable web apps. Strong in React, TypeScript and Node.js with 3 production projects shipped.'
  );

  const move = (from: number, to: number) => {
    if (to < 0 || to >= sections.length) return;
    const next = [...sections];
    const [item] = next.splice(from, 1);
    next.splice(to, 0, item);
    setSections(next);
  };

  const runAnalysis = () => {
    setAnalyzing(true);
    setShowReport(false);
    setTimeout(() => {
      setAnalyzing(false);
      setShowReport(true);
    }, 1400);
  };

  return (
    <div className="grid lg:grid-cols-3 gap-4">
      {/* Left: builder controls */}
      <div className="lg:col-span-1 space-y-4">
        <div className="glass p-5">
          <h3 className="font-semibold text-white mb-3">Template</h3>
          <div className="grid grid-cols-2 gap-2">
            {templates.map((t) => (
              <button
                key={t.id}
                onClick={() => setTemplate(t)}
                className={`p-3 rounded-xl border text-left transition ${
                  template.id === t.id
                    ? 'border-brand-500/40 bg-brand-500/10'
                    : 'border-white/[0.06] bg-ink-800/50 hover:border-white/15'
                }`}
              >
                <div className="w-full h-12 rounded-lg mb-2" style={{ background: `linear-gradient(135deg, ${t.accent}, transparent)` }} />
                <div className="text-xs font-semibold text-white">{t.name}</div>
                <div className="text-[10px] text-ink-300">{t.desc}</div>
              </button>
            ))}
          </div>
        </div>

        <div className="glass p-5">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-white">Sections</h3>
            <button
              onClick={() =>
                setSections((s) => [...s, { id: `s${Date.now()}`, title: 'New Section', visible: true }])
              }
              className="text-xs text-brand-400 hover:text-brand-300 flex items-center gap-1"
            >
              <Plus size={12} /> Add
            </button>
          </div>
          <div className="space-y-1.5">
            {sections.map((s, i) => (
              <div
                key={s.id}
                draggable
                onDragStart={() => setDragIndex(i)}
                onDragOver={(e) => e.preventDefault()}
                onDrop={() => {
                  if (dragIndex !== null) move(dragIndex, i);
                  setDragIndex(null);
                }}
                className="flex items-center gap-2 p-2.5 rounded-lg bg-ink-800/60 border border-white/[0.04] hover:border-white/10"
              >
                <GripVertical size={14} className="text-ink-300 cursor-grab" />
                <span className="flex-1 text-sm text-ink-100">{s.title}</span>
                <button
                  onClick={() => setSections((arr) => arr.filter((x) => x.id !== s.id))}
                  className="text-ink-300 hover:text-danger-400"
                >
                  <X size={14} />
                </button>
              </div>
            ))}
          </div>
          <p className="text-[11px] text-ink-300 mt-3">Drag to reorder. Sections appear in the live preview.</p>
        </div>

        <div className="glass p-5">
          <h3 className="font-semibold text-white mb-3">Export</h3>
          <div className="flex flex-col gap-2">
            <button className="btn-primary w-full">
              <Download size={15} /> Download PDF
            </button>
            <button className="btn-outline w-full">
              <Upload size={15} /> Upload existing resume
            </button>
          </div>
        </div>
      </div>

      {/* Middle: live preview */}
      <div className="lg:col-span-1 space-y-4">
        <div className="glass p-6 min-h-[520px]" style={{ borderTop: `3px solid ${template.accent}` }}>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-extrabold text-white">{currentUser.name}</h2>
              <p className="text-xs text-ink-300">{currentUser.headline}</p>
            </div>
            <span className="chip bg-brand-500/15 text-brand-300">ATS-ready</span>
          </div>

          {sections.filter((s) => s.visible).map((s) => (
            <div key={s.id} className="mb-5">
              <h3
                className="text-[11px] font-bold uppercase tracking-wider mb-2 pb-1 border-b border-white/10"
                style={{ color: template.accent }}
              >
                {s.title}
              </h3>
              {s.title === 'Summary' ? (
                <textarea
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                  className="w-full bg-transparent text-xs text-ink-100 outline-none resize-none leading-relaxed"
                  rows={3}
                />
              ) : (
                <div className="space-y-2">
                  {s.title === 'Experience' && (
                    <div className="text-xs text-ink-100">
                      <div className="font-semibold text-white">SDE Intern · Razorpay</div>
                      <div className="text-ink-300">May 2025 – Jul 2025</div>
                      <ul className="list-disc list-inside text-ink-200 mt-1 space-y-0.5">
                        <li>Built checkout SDK used by 12k merchants; reduced load time by 34%.</li>
                        <li>Owned migration of legacy JS to TypeScript across 4 services.</li>
                      </ul>
                    </div>
                  )}
                  {s.title === 'Projects' && (
                    <div className="text-xs text-ink-100">
                      <div className="font-semibold text-white">CareerPilot AI</div>
                      <div className="text-ink-200">Full-stack AI placement platform · React, Node, Gemini.</div>
                    </div>
                  )}
                  {s.title === 'Skills' && (
                    <div className="flex flex-wrap gap-1.5">
                      {currentUser.skills.slice(0, 6).map((sk) => (
                        <span key={sk.name} className="chip bg-ink-700 text-ink-100">{sk.name}</span>
                      ))}
                    </div>
                  )}
                  {s.title === 'Education' && (
                    <div className="text-xs text-ink-100">
                      <div className="font-semibold text-white">B.Tech, Computer Science</div>
                      <div className="text-ink-300">VIT Vellore · 2022–2026 · CGPA 8.7</div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Right: AI analysis */}
      <div className="lg:col-span-1 space-y-4">
        <div className="glass p-5">
          <div className="flex items-center gap-2 mb-3">
            <Wand2 size={16} className="text-brand-400" />
            <h3 className="font-semibold text-white">AI Resume Analyzer</h3>
          </div>
          <p className="text-xs text-ink-300 mb-4">
            Grammar, ATS score, missing keywords, weak skills and suggestions.
          </p>
          <button
            onClick={runAnalysis}
            disabled={analyzing}
            className="btn-primary w-full"
          >
            {analyzing ? (
              <>
                <span className="w-3.5 h-3.5 rounded-full border-2 border-white/40 border-t-white animate-spin" />
                Analyzing…
              </>
            ) : (
              <>
                <Sparkles size={15} /> Run AI analysis
              </>
            )}
          </button>
        </div>

        {showReport && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="glass p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-white">ATS Score</span>
                <span className="text-2xl font-extrabold gradient-text">{resumeAnalysis.atsScore}</span>
              </div>
              <div className="h-2 rounded-full bg-ink-700 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${resumeAnalysis.atsScore}%` }}
                  transition={{ duration: 1 }}
                  className="h-full rounded-full bg-gradient-to-r from-success-500 to-brand-500"
                />
              </div>
              <p className="text-[11px] text-ink-300 mt-2">Good — top 25% of applicants. A few fixes can push 90+.</p>
            </div>

            <div className="glass p-5">
              <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                <AlertTriangle size={14} className="text-warning-400" /> Grammar issues
              </h4>
              <div className="space-y-2">
                {resumeAnalysis.grammar.map((g, i) => (
                  <div key={i} className="text-xs glass-soft p-2.5 rounded-lg">
                    <div className="text-ink-100">Line {g.line} · <span className="text-warning-400">{g.issue}</span></div>
                    <div className="text-ink-300 mt-0.5">{g.suggestion}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass p-5">
              <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                <Plus size={14} className="text-brand-400" /> Missing keywords
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {resumeAnalysis.missingKeywords.map((k) => (
                  <span key={k} className="chip bg-brand-500/10 text-brand-300 border border-brand-500/20">{k}</span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="glass p-4">
                <h4 className="text-xs font-semibold text-success-400 mb-2 flex items-center gap-1">
                  <CheckCircle2 size={12} /> Strong
                </h4>
                <div className="flex flex-wrap gap-1">
                  {resumeAnalysis.strongSkills.map((s) => (
                    <span key={s} className="chip bg-success-500/10 text-success-400">{s}</span>
                  ))}
                </div>
              </div>
              <div className="glass p-4">
                <h4 className="text-xs font-semibold text-danger-400 mb-2 flex items-center gap-1">
                  <AlertTriangle size={12} /> Weak
                </h4>
                <div className="flex flex-wrap gap-1">
                  {resumeAnalysis.weakSkills.map((s) => (
                    <span key={s} className="chip bg-danger-500/10 text-danger-400">{s}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="glass p-5">
              <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                <Lightbulb size={14} className="text-warning-400" /> Suggestions
              </h4>
              <ul className="space-y-2">
                {resumeAnalysis.suggestions.map((s, i) => (
                  <li key={i} className="text-xs text-ink-100 flex gap-2">
                    <span className="text-brand-400">→</span> {s}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}

        {!showReport && !analyzing && (
          <div className="glass p-5 text-center">
            <FileText size={24} className="text-ink-300 mx-auto mb-2" />
            <p className="text-xs text-ink-300">
              Run an analysis to see your ATS score, grammar issues and AI suggestions.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

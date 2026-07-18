import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mic,
  MicOff,
  Video,
  VideoOff,
  PhoneOff,
  Sparkles,
  Camera,
  Brain,
  MessageSquare,
  Code2,
  ChevronRight,
  RotateCcw,
} from 'lucide-react';
import { interviewQuestions } from '../data';

type Phase = 'setup' | 'live' | 'feedback';

export function MockInterview() {
  const [phase, setPhase] = useState<Phase>('setup');
  const [qIndex, setQIndex] = useState(0);
  const [micOn, setMicOn] = useState(true);
  const [camOn, setCamOn] = useState(true);
  const [answers, setAnswers] = useState<string[]>([]);
  const [transcript, setTranscript] = useState('');
  const [recording, setRecording] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (phase === 'live') {
      timerRef.current = window.setInterval(() => setSeconds((s) => s + 1), 1000);
    }
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [phase]);

  const fmt = (s: number) => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;

  const start = () => {
    setPhase('live');
    setQIndex(0);
    setAnswers([]);
    setTranscript('');
    setSeconds(0);
  };

  const next = () => {
    setAnswers((a) => [...a, transcript || '(skipped)']);
    setTranscript('');
    if (qIndex + 1 < interviewQuestions.length) {
      setQIndex((i) => i + 1);
    } else {
      setPhase('feedback');
    }
  };

  const q = interviewQuestions[qIndex];

  if (phase === 'setup') {
    return (
      <div className="grid lg:grid-cols-2 gap-4">
        <div className="glass p-6">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles size={18} className="text-brand-400" />
            <h3 className="font-semibold text-white">AI Mock Interview setup</h3>
          </div>
          <p className="text-sm text-ink-300 mb-5">
            Configure your interview. We'll ask {interviewQuestions.length} questions across HR, technical and coding rounds.
          </p>

          <div className="space-y-4">
            <div>
              <label className="label">Role targeting</label>
              <select className="input">
                <option>Frontend Engineer</option>
                <option>Full Stack Developer</option>
                <option>Backend Engineer</option>
                <option>SDE-I (Generalist)</option>
              </select>
            </div>
            <div>
              <label className="label">Target company (optional)</label>
              <select className="input">
                <option>Any</option>
                <option>Stripe</option>
                <option>Linear</option>
                <option>Zerodha</option>
                <option>Razorpay</option>
              </select>
            </div>
            <div>
              <label className="label">Difficulty</label>
              <div className="grid grid-cols-3 gap-2">
                {['Easy', 'Medium', 'Hard'].map((d, i) => (
                  <button
                    key={d}
                    className={`p-2.5 rounded-xl border text-sm ${
                      i === 1
                        ? 'border-brand-500/40 bg-brand-500/10 text-white'
                        : 'border-white/[0.06] text-ink-200 hover:text-white'
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="label">Rounds</label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { l: 'HR', icon: MessageSquare },
                  { l: 'Technical', icon: Brain },
                  { l: 'Coding', icon: Code2 },
                ].map((r) => (
                  <div key={r.l} className="p-2.5 rounded-xl border border-white/[0.06] text-center text-xs text-ink-100 flex flex-col items-center gap-1">
                    <r.icon size={14} className="text-brand-400" />
                    {r.l}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button onClick={start} className="btn-primary w-full mt-6">
            <Mic size={15} /> Start interview
          </button>
        </div>

        <div className="glass p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-white">Camera preview</h3>
            <div className="flex gap-2">
              <button
                onClick={() => setCamOn((v) => !v)}
                className={`p-2 rounded-lg border ${camOn ? 'border-brand-500/40 bg-brand-500/10 text-brand-300' : 'border-white/10 text-ink-300'}`}
              >
                {camOn ? <Video size={15} /> : <VideoOff size={15} />}
              </button>
              <button
                onClick={() => setMicOn((v) => !v)}
                className={`p-2 rounded-lg border ${micOn ? 'border-brand-500/40 bg-brand-500/10 text-brand-300' : 'border-white/10 text-ink-300'}`}
              >
                {micOn ? <Mic size={15} /> : <MicOff size={15} />}
              </button>
            </div>
          </div>
          <div className="relative aspect-video rounded-xl bg-ink-900 border border-white/[0.06] overflow-hidden grid place-items-center">
            {camOn ? (
              <>
                <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 to-accent-500/10" />
                <Camera size={40} className="text-ink-300 relative" />
                <div className="absolute bottom-3 left-3 chip bg-black/40 text-white">
                  {micOn ? 'Mic on' : 'Mic muted'}
                </div>
              </>
            ) : (
              <div className="text-ink-300 text-sm">Camera off</div>
            )}
          </div>
          <p className="text-[11px] text-ink-300 mt-3">
            We analyze facial emotion, voice tone and answer quality. Nothing is stored — this is a simulation.
          </p>

          <div className="mt-4 grid grid-cols-3 gap-2">
            {[
              { l: 'Confidence', v: '—' },
              { l: 'Communication', v: '—' },
              { l: 'Technical', v: '—' },
            ].map((m) => (
              <div key={m.l} className="glass-soft p-3 text-center">
                <div className="text-lg font-bold text-white">{m.v}</div>
                <div className="text-[10px] text-ink-300">{m.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (phase === 'live') {
    return (
      <div className="grid lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 space-y-4">
          <div className="glass p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="chip bg-brand-500/15 text-brand-300">
                Question {qIndex + 1} / {interviewQuestions.length}
              </span>
              <span className="text-sm text-ink-200 font-mono">{fmt(seconds)}</span>
            </div>

            <div className="flex items-center gap-2 mb-2">
              <span className={`chip ${q.type === 'HR' ? 'bg-accent-500/15 text-accent-400' : q.type === 'Technical' ? 'bg-brand-500/15 text-brand-300' : 'bg-success-500/15 text-success-400'}`}>
                {q.type}
              </span>
            </div>

            <AnimatePresence mode="wait">
              <motion.h3
                key={q.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-xl font-semibold text-white leading-snug mb-3"
              >
                {q.question}
              </motion.h3>
            </AnimatePresence>

            {q.hint && (
              <div className="glass-soft p-3 text-xs text-ink-200 mb-4">
                <span className="text-brand-400 font-semibold">Hint:</span> {q.hint}
              </div>
            )}

            <textarea
              value={transcript}
              onChange={(e) => setTranscript(e.target.value)}
              placeholder="Type your answer, or speak — we'll transcribe live…"
              className="input min-h-[140px] resize-none"
            />

            <div className="flex items-center justify-between mt-4">
              <button
                onClick={() => setRecording((r) => !r)}
                className={`btn-outline ${recording ? 'border-danger-500/40 text-danger-400' : ''}`}
              >
                {recording ? (
                  <>
                    <span className="w-3 h-3 rounded-full bg-danger-500 animate-pulse" /> Recording…
                  </>
                ) : (
                  <>
                    <Mic size={15} /> Record answer
                  </>
                )}
              </button>
              <button onClick={next} className="btn-primary">
                {qIndex + 1 < interviewQuestions.length ? 'Next question' : 'Finish'} <ChevronRight size={15} />
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="glass p-5">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-white">Live preview</h3>
              <span className="chip bg-success-500/15 text-success-400">
                <span className="w-1.5 h-1.5 rounded-full bg-success-500 animate-pulse" /> Live
              </span>
            </div>
            <div className="relative aspect-video rounded-xl bg-ink-900 border border-white/[0.06] overflow-hidden grid place-items-center mb-3">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 to-accent-500/10" />
              <Camera size={28} className="text-ink-300 relative" />
              {recording && (
                <span className="absolute top-2 right-2 chip bg-danger-500/20 text-danger-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-danger-500 animate-pulse" /> REC
                </span>
              )}
            </div>
            <div className="flex gap-2">
              <button onClick={() => setMicOn((v) => !v)} className={`flex-1 btn-outline ${micOn ? '' : 'text-ink-300'}`}>
                {micOn ? <Mic size={14} /> : <MicOff size={14} />} Mic
              </button>
              <button onClick={() => setCamOn((v) => !v)} className={`flex-1 btn-outline ${camOn ? '' : 'text-ink-300'}`}>
                {camOn ? <Video size={14} /> : <VideoOff size={14} />} Cam
              </button>
              <button onClick={() => setPhase('feedback')} className="flex-1 btn-outline text-danger-400 border-danger-500/30">
                <PhoneOff size={14} /> End
              </button>
            </div>
          </div>

          <div className="glass p-5">
            <h3 className="font-semibold text-white mb-3">Real-time signals</h3>
            <div className="space-y-3">
              {[
                { l: 'Confidence', v: 68, color: 'from-brand-500 to-accent-500' },
                { l: 'Clarity', v: 74, color: 'from-success-500 to-brand-500' },
                { l: 'Pace', v: 55, color: 'from-warning-400 to-warning-500' },
              ].map((m) => (
                <div key={m.l}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-ink-200">{m.l}</span>
                    <span className="text-white font-semibold">{m.v}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-ink-700 overflow-hidden">
                    <motion.div
                      animate={{ width: `${m.v}%` }}
                      className={`h-full rounded-full bg-gradient-to-r ${m.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // feedback
  const feedback = [
    { l: 'Confidence', v: 72, note: 'Steady pace. Slight hesitation on technical depth.' },
    { l: 'Communication', v: 81, note: 'Clear structure. Used STAR well in HR round.' },
    { l: 'Technical accuracy', v: 64, note: 'Strong on React, weaker on system design.' },
    { l: 'Coding', v: 78, note: 'Solved Kadane\'s optimally. Could explain trade-offs better.' },
  ];

  return (
    <div className="space-y-4">
      <div className="glass p-6">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h2 className="text-xl font-bold text-white">Interview feedback</h2>
            <p className="text-sm text-ink-300">AI-generated from your {interviewQuestions.length} responses.</p>
          </div>
          <button onClick={() => setPhase('setup')} className="btn-outline">
            <RotateCcw size={15} /> Retake
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-5">
          {feedback.map((f) => (
            <div key={f.l} className="glass-soft p-4">
              <div className="text-2xl font-extrabold gradient-text">{f.v}</div>
              <div className="text-xs text-ink-300 mt-0.5">{f.l}</div>
              <div className="h-1.5 rounded-full bg-ink-700 overflow-hidden mt-2">
                <div className="h-full rounded-full bg-gradient-to-r from-brand-500 to-accent-500" style={{ width: `${f.v}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        <div className="glass p-6">
          <h3 className="font-semibold text-white mb-3">What went well</h3>
          <ul className="space-y-2 text-sm text-ink-100">
            <li className="flex gap-2"><span className="text-success-400">+</span> Strong opening on "Tell me about yourself" — concise and relevant.</li>
            <li className="flex gap-2"><span className="text-success-400">+</span> Good use of metrics in experience (34% latency reduction).</li>
            <li className="flex gap-2"><span className="text-success-400">+</span> Solved coding problem in optimal O(n) time.</li>
          </ul>
        </div>
        <div className="glass p-6">
          <h3 className="font-semibold text-white mb-3">What to improve</h3>
          <ul className="space-y-2 text-sm text-ink-100">
            <li className="flex gap-2"><span className="text-danger-400">−</span> Add trade-off discussion after coding solutions.</li>
            <li className="flex gap-2"><span className="text-danger-400">−</span> Prepare 2 system design examples for technical round.</li>
            <li className="flex gap-2"><span className="text-danger-400">−</span> Slow down when explaining architectural decisions.</li>
          </ul>
        </div>
      </div>

      <div className="glass p-6">
        <h3 className="font-semibold text-white mb-3">Your answers</h3>
        <div className="space-y-3">
          {interviewQuestions.map((qq, i) => (
            <div key={qq.id} className="glass-soft p-4">
              <div className="text-xs text-brand-400 mb-1">Q{i + 1} · {qq.type}</div>
              <div className="text-sm font-medium text-white mb-1">{qq.question}</div>
              <div className="text-xs text-ink-300">{answers[i] || '(skipped)'}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

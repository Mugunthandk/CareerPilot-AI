import { Search, Book, MessageSquare, Mail, FileText, Code2, Mic, Briefcase } from 'lucide-react';

const faqs = [
  { icon: FileText, q: 'How does the AI resume analyzer work?', a: 'Upload or build your resume and click Run AI analysis. We score ATS compatibility, flag grammar, identify missing keywords from matched JDs, and suggest improvements.' },
  { icon: Mic, q: 'Can I practice interviews without a camera?', a: 'Yes. You can disable the camera and use voice-only mode. We still score confidence, clarity and technical accuracy from your transcript.' },
  { icon: Code2, q: 'Which languages does the coding platform support?', a: 'JavaScript, Python, Java, C++ and SQL. We run your code against hidden test cases and rank you on a global leaderboard.' },
  { icon: Briefcase, q: 'How are job matches calculated?', a: 'We compare your skills, projects and resume keywords against each JD. Matches above 70% are surfaced in your portal.' },
];

export function Help() {
  return (
    <div className="grid lg:grid-cols-3 gap-4">
      <div className="lg:col-span-2 space-y-4">
        <div className="glass p-6">
          <div className="flex items-center gap-2 mb-4">
            <Search size={16} className="text-brand-400" />
            <input className="input" placeholder="Search help articles…" />
          </div>
          <div className="space-y-3">
            {faqs.map((f) => (
              <div key={f.q} className="glass-soft p-4">
                <div className="flex items-start gap-3">
                  <f.icon size={16} className="text-brand-400 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-sm font-semibold text-white">{f.q}</div>
                    <p className="text-xs text-ink-300 mt-1 leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="glass p-6">
          <div className="flex items-center gap-2 mb-3">
            <Book size={16} className="text-brand-400" />
            <h3 className="font-semibold text-white">Resources</h3>
          </div>
          <div className="space-y-2">
            {['Getting started guide', 'Resume templates', 'Interview prep checklist', 'DSA roadmap'].map((r) => (
              <a key={r} className="block p-3 rounded-xl glass-soft hover:bg-white/[0.05] text-sm text-ink-100">
                {r}
              </a>
            ))}
          </div>
        </div>
        <div className="glass p-6">
          <div className="flex items-center gap-2 mb-3">
            <Mail size={16} className="text-brand-400" />
            <h3 className="font-semibold text-white">Contact us</h3>
          </div>
          <p className="text-xs text-ink-300 mb-3">We typically reply within 4 hours.</p>
          <button className="btn-primary w-full">
            <MessageSquare size={15} /> Start a conversation
          </button>
        </div>
      </div>
    </div>
  );
}

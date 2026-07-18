import { Rocket } from 'lucide-react';

export function Logo({ size = 32 }: { size?: number }) {
  return (
    <div className="flex items-center gap-2.5 select-none">
      <div
        className="relative grid place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 shadow-[0_6px_20px_-6px_rgba(46,116,255,0.7)]"
        style={{ width: size, height: size }}
      >
        <Rocket size={size * 0.55} className="text-white" strokeWidth={2.5} />
      </div>
      <div className="leading-none">
        <span className="font-extrabold tracking-tight text-white text-[15px]">
          CareerPilot
        </span>
        <span className="ml-1 text-[11px] font-semibold text-brand-400">AI</span>
      </div>
    </div>
  );
}

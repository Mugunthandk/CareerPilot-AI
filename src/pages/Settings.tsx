import { useState } from 'react';
import { User, Bell, Shield, Palette, Globe, Check } from 'lucide-react';
import { currentUser } from '../data';

export function Settings() {
  const [darkMode, setDarkMode] = useState(true);
  const [emailNotif, setEmailNotif] = useState(true);
  const [pushNotif, setPushNotif] = useState(false);

  return (
    <div className="grid lg:grid-cols-3 gap-4">
      <div className="lg:col-span-2 space-y-4">
        <div className="glass p-6">
          <div className="flex items-center gap-2 mb-4">
            <User size={16} className="text-brand-400" />
            <h3 className="font-semibold text-white">Profile</h3>
          </div>
          <div className="flex items-center gap-4 mb-5">
            <img src={currentUser.avatar} alt="" className="w-16 h-16 rounded-2xl object-cover border border-white/10" />
            <button className="btn-outline text-xs">Change photo</button>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="label">Full name</label>
              <input className="input" defaultValue={currentUser.name} />
            </div>
            <div>
              <label className="label">Email</label>
              <input className="input" defaultValue={currentUser.email} />
            </div>
            <div>
              <label className="label">Headline</label>
              <input className="input" defaultValue={currentUser.headline} />
            </div>
            <div>
              <label className="label">Role</label>
              <select className="input">
                <option>Student</option>
                <option>Recruiter</option>
                <option>Admin</option>
              </select>
            </div>
          </div>
          <button className="btn-primary mt-5">Save changes</button>
        </div>

        <div className="glass p-6">
          <div className="flex items-center gap-2 mb-4">
            <Bell size={16} className="text-brand-400" />
            <h3 className="font-semibold text-white">Notifications</h3>
          </div>
          <div className="space-y-3">
            {[
              { l: 'Email notifications', d: 'Job matches, interview reminders, AI reports', v: emailNotif, set: setEmailNotif },
              { l: 'Push notifications', d: 'Real-time alerts in your browser', v: pushNotif, set: setPushNotif },
            ].map((s) => (
              <div key={s.l} className="flex items-center justify-between p-3 rounded-xl glass-soft">
                <div>
                  <div className="text-sm font-medium text-white">{s.l}</div>
                  <div className="text-xs text-ink-300">{s.d}</div>
                </div>
                <button
                  onClick={() => s.set(!s.v)}
                  className={`w-11 h-6 rounded-full transition relative ${s.v ? 'bg-brand-500' : 'bg-ink-700'}`}
                >
                  <span className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition ${s.v ? 'left-5' : 'left-0.5'}`} />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="glass p-6">
          <div className="flex items-center gap-2 mb-4">
            <Shield size={16} className="text-brand-400" />
            <h3 className="font-semibold text-white">Security</h3>
          </div>
          <div className="space-y-3">
            <button className="btn-outline w-full justify-between">
              Change password <span className="text-ink-300">→</span>
            </button>
            <button className="btn-outline w-full justify-between">
              Enable two-factor authentication <span className="text-ink-300">→</span>
            </button>
            <button className="btn-outline w-full justify-between text-danger-400 border-danger-500/30">
              Delete account <span>→</span>
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="glass p-6">
          <div className="flex items-center gap-2 mb-4">
            <Palette size={16} className="text-brand-400" />
            <h3 className="font-semibold text-white">Appearance</h3>
          </div>
          <div className="flex items-center justify-between p-3 rounded-xl glass-soft">
            <div>
              <div className="text-sm font-medium text-white">Dark mode</div>
              <div className="text-xs text-ink-300">Easier on the eyes at night</div>
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`w-11 h-6 rounded-full transition relative ${darkMode ? 'bg-brand-500' : 'bg-ink-700'}`}
            >
              <span className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition ${darkMode ? 'left-5' : 'left-0.5'}`} />
            </button>
          </div>
        </div>

        <div className="glass p-6">
          <div className="flex items-center gap-2 mb-4">
            <Globe size={16} className="text-brand-400" />
            <h3 className="font-semibold text-white">Plan</h3>
          </div>
          <div className="glass-soft p-4 mb-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-white">Pro</span>
              <span className="chip bg-brand-500/15 text-brand-300">Active</span>
            </div>
            <p className="text-xs text-ink-300 mt-1">Renews Aug 18, 2026 · ₹499/mo</p>
          </div>
          <button className="btn-outline w-full">Manage subscription</button>
        </div>

        <div className="glass p-6">
          <h3 className="font-semibold text-white mb-3">Account health</h3>
          <div className="space-y-2 text-xs">
            {[
              { l: 'Email verified', ok: true },
              { l: 'Profile complete', ok: true },
              { l: 'Resume uploaded', ok: true },
              { l: '2FA enabled', ok: false },
            ].map((c) => (
              <div key={c.l} className="flex items-center justify-between">
                <span className="text-ink-200">{c.l}</span>
                {c.ok ? (
                  <span className="chip bg-success-500/15 text-success-400"><Check size={11} /> Yes</span>
                ) : (
                  <span className="chip bg-warning-500/15 text-warning-400">Pending</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

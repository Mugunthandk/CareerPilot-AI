import { Outlet, useLocation } from 'react-router-dom';
import { Sidebar, Topbar } from './Sidebar';

const titles: Record<string, { title: string; subtitle: string }> = {
  '/app': { title: 'Dashboard', subtitle: 'Your placement readiness at a glance' },
  '/app/resume': { title: 'Resume Builder', subtitle: 'ATS-friendly resumes with AI analysis' },
  '/app/interview': { title: 'AI Mock Interview', subtitle: 'Voice & camera practice with instant feedback' },
  '/app/code': { title: 'Coding Platform', subtitle: 'Practice, compete, and climb the leaderboard' },
  '/app/jobs': { title: 'Job Portal', subtitle: 'Apply to roles matched to your profile' },
  '/app/advisor': { title: 'AI Career Advisor', subtitle: 'Personalized guidance, roadmaps & predictions' },
  '/app/settings': { title: 'Settings', subtitle: 'Manage your account and preferences' },
  '/app/help': { title: 'Help & Support', subtitle: 'Guides, docs and contact' },
};

export function AppShell() {
  const { pathname } = useLocation();
  const meta = titles[pathname] ?? titles['/app'];
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="flex-1 min-w-0 px-4 lg:px-8 pb-16">
        <Topbar title={meta.title} subtitle={meta.subtitle} />
        <div className="pt-6 animate-fade-up">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

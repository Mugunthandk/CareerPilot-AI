import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { AppShell } from './components/AppShell';
import { Dashboard } from './pages/Dashboard';
import { ResumeBuilder } from './pages/ResumeBuilder';
import { MockInterview } from './pages/MockInterview';
import { CodingPlatform } from './pages/CodingPlatform';
import { JobPortal } from './pages/JobPortal';
import { CareerAdvisor } from './pages/CareerAdvisor';
import { Settings } from './pages/Settings';
import { Help } from './pages/Help';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/app" element={<AppShell />}>
          <Route index element={<Dashboard />} />
          <Route path="resume" element={<ResumeBuilder />} />
          <Route path="interview" element={<MockInterview />} />
          <Route path="code" element={<CodingPlatform />} />
          <Route path="jobs" element={<JobPortal />} />
          <Route path="advisor" element={<CareerAdvisor />} />
          <Route path="settings" element={<Settings />} />
          <Route path="help" element={<Help />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

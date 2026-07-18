export type Role = 'student' | 'recruiter' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  avatar: string;
  headline: string;
  profileCompletion: number;
  resumeScore: number;
  interviewScore: number;
  codingRank: number;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'language' | 'tool' | 'soft';
}

export interface Job {
  id: string;
  title: string;
  company: string;
  logo: string;
  location: string;
  type: 'Full-time' | 'Internship' | 'Contract' | 'Remote';
  salary: string;
  posted: string;
  tags: string[];
  match: number;
  saved?: boolean;
  applied?: boolean;
}

export interface CodingProblem {
  id: string;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  tags: string[];
  acceptance: number;
  solved?: boolean;
  description: string;
  starter: string;
  testCases: { input: string; output: string }[];
}

export interface InterviewQuestion {
  id: string;
  type: 'HR' | 'Technical' | 'Coding';
  question: string;
  hint?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'ai';
  content: string;
  ts: number;
}

export interface Notification {
  id: string;
  title: string;
  body: string;
  time: string;
  read: boolean;
  icon: 'briefcase' | 'mail' | 'award' | 'alert' | 'calendar';
}

export interface Application {
  id: string;
  jobTitle: string;
  company: string;
  logo: string;
  status: 'Applied' | 'Reviewing' | 'Interview' | 'Offer' | 'Rejected';
  appliedOn: string;
}

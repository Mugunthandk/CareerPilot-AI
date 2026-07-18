import type {
  Application,
  ChatMessage,
  CodingProblem,
  InterviewQuestion,
  Job,
  Notification,
  User,
} from './types';

export type { ChatMessage };

export const currentUser: User = {
  id: 'u_1',
  name: 'Aarav Sharma',
  email: 'aarav.sharma@careerpilot.ai',
  role: 'student',
  avatar:
    'https://images.pexels.com/photos/22045/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=200',
  headline: 'Final-year B.Tech · Computer Science',
  profileCompletion: 78,
  resumeScore: 82,
  interviewScore: 74,
  codingRank: 142,
  skills: [
    { name: 'React', level: 88, category: 'frontend' },
  { name: 'TypeScript', level: 82, category: 'language' },
  { name: 'Node.js', level: 76, category: 'backend' },
  { name: 'Python', level: 71, category: 'language' },
  { name: 'MongoDB', level: 64, category: 'backend' },
  { name: 'DSA', level: 79, category: 'language' },
  { name: 'System Design', level: 48, category: 'backend' },
  { name: 'Communication', level: 81, category: 'soft' },
  ],
};

export const skillProgress = [
  { month: 'Jan', score: 58 },
  { month: 'Feb', score: 62 },
  { month: 'Mar', score: 65 },
  { month: 'Apr', score: 71 },
  { month: 'May', score: 74 },
  { month: 'Jun', score: 79 },
  { month: 'Jul', score: 82 },
];

export const radarData = [
  { skill: 'Coding', value: 79 },
  { skill: 'System Design', value: 48 },
  { skill: 'Communication', value: 81 },
  { skill: 'Projects', value: 72 },
  { skill: 'DSA', value: 79 },
  { skill: 'Core', value: 65 },
];

export const jobs: Job[] = [
  {
    id: 'j1',
    title: 'Frontend Engineer',
    company: 'Stripe',
    logo: 'https://images.pexels.com/photos/356056/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=120',
    location: 'Bengaluru, IN',
    type: 'Full-time',
    salary: '₹28–38 LPA',
    posted: '2d ago',
    tags: ['React', 'TypeScript', 'Next.js'],
    match: 94,
    saved: true,
  },
  {
    id: 'j2',
    title: 'SDE Intern',
    company: 'Zerodha',
    logo: 'https://images.pexels.com/photos/356056/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=120',
    location: 'Remote',
    type: 'Internship',
    salary: '₹60k /mo',
    posted: '5h ago',
    tags: ['Go', 'PostgreSQL', 'Kafka'],
    match: 76,
  },
  {
    id: 'j3',
    title: 'Full Stack Developer',
    company: 'Linear',
    logo: 'https://images.pexels.com/photos/356056/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=120',
    location: 'Remote',
    type: 'Remote',
    salary: '$70–95k',
    posted: '1d ago',
    tags: ['Node.js', 'React', 'GraphQL'],
    match: 88,
    saved: false,
    applied: true,
  },
  {
    id: 'j4',
    title: 'Backend Engineer',
    company: 'Vercel',
    logo: 'https://images.pexels.com/photos/356056/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=120',
    location: 'Remote',
    type: 'Full-time',
    salary: '$80–110k',
    posted: '3d ago',
    tags: ['Go', 'Edge', 'Postgres'],
    match: 71,
  },
  {
    id: 'j5',
    title: 'Software Engineer',
    company: 'Notion',
    logo: 'https://images.pexels.com/photos/356056/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=120',
    location: 'Hybrid · Mumbai',
    type: 'Full-time',
    salary: '₹22–30 LPA',
    posted: '6h ago',
    tags: ['TypeScript', 'React', 'Node.js'],
    match: 90,
  },
  {
    id: 'j6',
    title: 'ML Engineer Intern',
    company: 'OpenAI',
    logo: 'https://images.pexels.com/photos/356056/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=120',
    location: 'Bengaluru, IN',
    type: 'Internship',
    salary: '₹1.2L /mo',
    posted: '4h ago',
    tags: ['Python', 'PyTorch', 'LLMs'],
    match: 64,
  },
];

export const applications: Application[] = [
  {
    id: 'a1',
    jobTitle: 'Full Stack Developer',
    company: 'Linear',
    logo: 'https://images.pexels.com/photos/356056/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=120',
    status: 'Interview',
    appliedOn: 'Jul 12',
  },
  {
    id: 'a2',
    jobTitle: 'Frontend Engineer',
    company: 'Razorpay',
    logo: 'https://images.pexels.com/photos/356056/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=120',
    status: 'Reviewing',
    appliedOn: 'Jul 10',
  },
  {
    id: 'a3',
    jobTitle: 'SDE-I',
    company: 'Zomato',
    logo: 'https://images.pexels.com/photos/356056/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=120',
    status: 'Applied',
    appliedOn: 'Jul 09',
  },
  {
    id: 'a4',
    jobTitle: 'Backend Intern',
    company: 'Postman',
    logo: 'https://images.pexels.com/photos/356056/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=120',
    status: 'Offer',
    appliedOn: 'Jul 02',
  },
  {
    id: 'a5',
    jobTitle: 'Data Engineer',
    company: 'Swiggy',
    logo: 'https://images.pexels.com/photos/356056/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=120',
    status: 'Rejected',
    appliedOn: 'Jun 28',
  },
];

export const codingProblems: CodingProblem[] = [
  {
    id: 'p1',
    title: 'Two Sum',
    difficulty: 'Easy',
    tags: ['Array', 'Hashing'],
    acceptance: 54,
    solved: true,
    description:
      'Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.\n\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.',
    starter: `function twoSum(nums, target) {
  // your code here
}`,
    testCases: [
      { input: 'nums = [2,7,11,15], target = 9', output: '[0,1]' },
      { input: 'nums = [3,2,4], target = 6', output: '[1,2]' },
      { input: 'nums = [3,3], target = 6', output: '[0,1]' },
    ],
  },
  {
    id: 'p2',
    title: 'Valid Parentheses',
    difficulty: 'Easy',
    tags: ['Stack', 'String'],
    acceptance: 40,
    solved: true,
    description:
      'Given a string `s` containing just the characters `(`, `)`, `{`, `}`, `[` and `]`, determine if the input string is valid.',
    starter: `function isValid(s) {
  // your code here
}`,
    testCases: [
      { input: 's = "()"', output: 'true' },
      { input: 's = "()[]{}"', output: 'true' },
      { input: 's = "(]"', output: 'false' },
    ],
  },
  {
    id: 'p3',
    title: 'Longest Substring Without Repeating Characters',
    difficulty: 'Medium',
    tags: ['Sliding Window', 'Hashing'],
    acceptance: 34,
    description:
      'Given a string `s`, find the length of the longest substring without repeating characters.',
    starter: `function lengthOfLongestSubstring(s) {
  // your code here
}`,
    testCases: [
      { input: 's = "abcabcbb"', output: '3' },
      { input: 's = "bbbbb"', output: '1' },
      { input: 's = "pwwkew"', output: '3' },
    ],
  },
  {
    id: 'p4',
    title: 'Median of Two Sorted Arrays',
    difficulty: 'Hard',
    tags: ['Binary Search', 'Array'],
    acceptance: 28,
    description:
      'Given two sorted arrays `nums1` and `nums2` of size `m` and `n`, return the median of the two sorted arrays in O(log(m+n)) time.',
    starter: `function findMedianSortedArrays(nums1, nums2) {
  // your code here
}`,
    testCases: [
      { input: 'nums1 = [1,3], nums2 = [2]', output: '2.0' },
      { input: 'nums1 = [1,2], nums2 = [3,4]', output: '2.5' },
    ],
  },
  {
    id: 'p5',
    title: 'LRU Cache',
    difficulty: 'Medium',
    tags: ['Design', 'Hashing', 'Linked List'],
    acceptance: 31,
    description:
      'Design a data structure that follows the LRU cache eviction policy with O(1) get and put operations.',
    starter: `class LRUCache {
  constructor(capacity) {}
  get(key) {}
  put(key, value) {}
}`,
    testCases: [
      { input: 'LRUCache(2); put(1,1); put(2,2); get(1)', output: '1' },
      { input: 'put(3,3); get(2)', output: '-1' },
    ],
  },
];

export const leaderboard = [
  { rank: 1, name: 'Ishaan Verma', college: 'IIT Bombay', solved: 642, streak: 120 },
  { rank: 2, name: 'Ananya Reddy', college: 'BITS Pilani', solved: 598, streak: 96 },
  { rank: 3, name: 'Karthik Nair', college: 'NIT Trichy', solved: 571, streak: 88 },
  { rank: 4, name: 'Sara Khan', college: 'IIIT Hyderabad', solved: 540, streak: 74 },
  { rank: 5, name: 'Aarav Sharma', college: 'VIT Vellore', solved: 512, streak: 62 },
  { rank: 6, name: 'Dev Mehta', college: 'DTU', solved: 488, streak: 55 },
  { rank: 7, name: 'Riya Gupta', college: 'PEC Chandigarh', solved: 471, streak: 49 },
];

export const interviewQuestions: InterviewQuestion[] = [
  {
    id: 'q1',
    type: 'HR',
    question: 'Tell me about yourself and why you chose Computer Science.',
    hint: 'Keep it to 60–90 seconds. Cover background, key projects, and motivation.',
  },
  {
    id: 'q2',
    type: 'HR',
    question: 'Describe a challenging team conflict and how you resolved it.',
    hint: 'Use STAR: Situation, Task, Action, Result.',
  },
  {
    id: 'q3',
    type: 'Technical',
    question: 'Explain the difference between SQL and NoSQL databases. When would you pick each?',
    hint: 'Mention ACID, scaling, schema flexibility, and a real example.',
  },
  {
    id: 'q4',
    type: 'Technical',
    question: 'How does the React reconciler work? What is the role of the virtual DOM?',
    hint: 'Cover diffing, keys, and reconciliation cost.',
  },
  {
    id: 'q5',
    type: 'Coding',
    question: 'Given an array, find the maximum subarray sum (Kadane\'s algorithm). Walk me through your approach.',
    hint: 'Explain O(n) greedy, then code it out.',
  },
];

export const initialChat: ChatMessage[] = [
  {
    id: 'm1',
    role: 'ai',
    content:
      "Hi Aarav! I'm your AI Career Advisor. I can help with company targeting, skill roadmaps, salary prediction, and resume improvements. What's on your mind?",
    ts: Date.now() - 60000,
  },
];

export const notifications: Notification[] = [
  {
    id: 'n1',
    title: 'Interview scheduled',
    body: 'Linear · Full Stack Developer · Jul 19, 4:00 PM',
    time: '2h',
    read: false,
    icon: 'calendar',
  },
  {
    id: 'n2',
    title: 'New job match (94%)',
    body: 'Stripe is hiring a Frontend Engineer — strong match with your profile.',
    time: '5h',
    read: false,
    icon: 'briefcase',
  },
  {
    id: 'n3',
    title: 'Resume score improved',
    body: 'Your ATS score went from 76 → 82 after the last edit.',
    time: '1d',
    read: true,
    icon: 'award',
  },
  {
    id: 'n4',
    title: 'New message from recruiter',
    body: 'Razorpay wants to know your availability next week.',
    time: '1d',
    read: true,
    icon: 'mail',
  },
];

export const resumeAnalysis = {
  atsScore: 82,
  grammar: [
    { line: 4, issue: 'Passive voice', suggestion: "Use active voice: 'Built' instead of 'Was built'." },
    { line: 11, issue: 'Weak verb', suggestion: "Replace 'helped' with 'spearheaded' or 'drove'." },
  ],
  missingKeywords: ['Kubernetes', 'CI/CD', 'GraphQL', 'Redis', 'Microservices'],
  weakSkills: ['System Design', 'MongoDB'],
  strongSkills: ['React', 'TypeScript', 'DSA', 'Communication'],
  suggestions: [
    'Add 2–3 measurable impact bullets per project (e.g. "reduced latency by 40%").',
    'Include a "Core Coursework" section for ATS keyword density.',
    'Lead with a 2-line summary aligned to the target role.',
    'Quantify outcomes — numbers improve recall by ~38% in screening.',
  ],
};

export const roadmapSteps = [
  {
    week: 'Week 1–2',
    title: 'Frontend Mastery',
    items: ['React 19 patterns', 'Server components', 'State management with Redux Toolkit'],
  },
  {
    week: 'Week 3–4',
    title: 'Backend Foundations',
    items: ['Node.js + Express', 'REST & GraphQL APIs', 'JWT auth flows'],
  },
  {
    week: 'Week 5–6',
    title: 'DSA Sprint',
    items: ['Arrays & Strings', 'Trees & Graphs', 'DP patterns'],
  },
  {
    week: 'Week 7',
    title: 'System Design + Mock Interviews',
    items: ['Scaling basics', 'Caching & queues', '5 AI mock interviews'],
  },
];

export const templates = [
  { id: 't1', name: 'Minimal', accent: '#2E74FF', desc: 'Clean single-column, ATS-friendly.' },
  { id: 't2', name: 'Modern', accent: '#06B6D4', desc: 'Two-column with skill bars.' },
  { id: 't3', name: 'Compact', accent: '#10B981', desc: 'Dense layout for experienced roles.' },
  { id: 't4', name: 'Creative', accent: '#F59E0B', desc: 'Accent header, portfolio-ready.' },
];

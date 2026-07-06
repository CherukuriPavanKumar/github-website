export type EventType =
  | "workshop"
  | "hackathon"
  | "open_source"
  | "session"
  | "talk"
  | "meetup"
  | "showcase"
  | "recruitment";

export interface CommunityEvent {
  id: string;
  name: string;
  date: string; // YYYY-MM-DD
  type: EventType;
  description: string;
  participants: number;
  image?: string;
  level: 1 | 2 | 3 | 4;
}

/**
 * Hand-crafted events for 2025.
 * Each event is pinned to a specific date so the graph is deterministic
 * (no Math.random — same render every time).
 */
export const communityEvents: CommunityEvent[] = [
  // ─── January ──────────────────────────────────────────
  { id: "e01", name: "Kickoff Meetup", date: "2025-01-07", type: "meetup", description: "New year community welcome & roadmap reveal for 2025.", participants: 90, image: "/2.jpeg", level: 3 },
  { id: "e02", name: "Git 101 Workshop", date: "2025-01-11", type: "workshop", description: "Hands-on session covering Git basics, branching, and collaboration workflows.", participants: 45, level: 2 },
  { id: "e03", name: "Open Source Onboarding", date: "2025-01-21", type: "open_source", description: "Helping first-timers make their very first open-source contribution.", participants: 35, level: 2 },
  { id: "e04", name: "Tech Talk: System Design", date: "2025-01-24", type: "talk", description: "Deep dive into scalable system design patterns used by top tech companies.", participants: 60, level: 2 },
  { id: "e04b", name: "Weekend Co-working", date: "2025-01-26", type: "session", description: "Sunday casual coding session.", participants: 25, level: 1 },
  { id: "e04c", name: "Pairing Session", date: "2025-01-09", type: "session", description: "Impromptu pair programming.", participants: 12, level: 1 },
  { id: "e04d", name: "Code Review", date: "2025-01-14", type: "session", description: "Reviewing community PRs.", participants: 15, level: 1 },
  { id: "e04e", name: "Study Group", date: "2025-01-30", type: "session", description: "Algorithm study group.", participants: 20, level: 1 },

  // ─── February ─────────────────────────────────────────
  { id: "e05", name: "React Crash Course", date: "2025-02-04", type: "workshop", description: "From zero to React — building your first interactive web app.", participants: 55, level: 2 },
  { id: "e05b", name: "CSS Battle", date: "2025-02-08", type: "meetup", description: "Competitive CSS design challenge.", participants: 40, level: 1 },
  { id: "e06", name: "Valentine's Code Jam", date: "2025-02-14", type: "hackathon", description: "A fun 12-hour mini-hackathon themed around creative coding.", participants: 120, image: "/1.jpeg", level: 3 },
  { id: "e07", name: "API Design Session", date: "2025-02-20", type: "session", description: "Best practices for designing clean, RESTful APIs.", participants: 40, level: 2 },
  { id: "e08", name: "Cloud Deployment Talk", date: "2025-02-25", type: "talk", description: "Deploying apps to AWS, Vercel, and Railway — what to use when.", participants: 50, level: 2 },
  { id: "e08b", name: "Debug Night", date: "2025-02-11", type: "session", description: "Late night debugging.", participants: 18, level: 1 },
  { id: "e08c", name: "Open Source Prep", date: "2025-02-18", type: "open_source", description: "Finding good first issues.", participants: 22, level: 1 },
  { id: "e08d", name: "Tech Movie Night", date: "2025-02-22", type: "meetup", description: "Watching tech documentaries.", participants: 35, level: 1 },
  { id: "e08e", name: "Study Group", date: "2025-02-27", type: "session", description: "Database design study.", participants: 15, level: 1 },

  // ─── March ────────────────────────────────────────────
  { id: "e09", name: "Git-a-thon 2025", date: "2025-03-08", type: "hackathon", description: "Our annual flagship 48-hour hackathon. 250+ students built and shipped real products.", participants: 250, image: "/2.jpeg", level: 4 },
  { id: "e10", name: "Git-a-thon Day 2", date: "2025-03-09", type: "hackathon", description: "Final presentations, judging, and awards ceremony.", participants: 250, image: "/2.jpeg", level: 4 },
  { id: "e11", name: "Post-Hackathon Retro", date: "2025-03-13", type: "session", description: "Retrospective and lessons learned from Git-a-thon 2025.", participants: 70, level: 2 },
  { id: "e12", name: "Docker Workshop", date: "2025-03-18", type: "workshop", description: "Containerizing your apps — from Dockerfile to production.", participants: 50, level: 2 },
  { id: "e13", name: "ML Intro Talk", date: "2025-03-27", type: "talk", description: "Intro to machine learning concepts for web developers.", participants: 65, level: 2 },
  { id: "e13b", name: "Study Group", date: "2025-03-30", type: "session", description: "Group study for upcoming midterms.", participants: 30, level: 1 },
  { id: "e13c", name: "Hackathon Brainstorm", date: "2025-03-04", type: "session", description: "Pre-hackathon team forming.", participants: 45, level: 2 },
  { id: "e13d", name: "Hackathon Prep", date: "2025-03-06", type: "session", description: "Final prep for Git-a-thon.", participants: 60, level: 2 },
  { id: "e13e", name: "Open Source Triage", date: "2025-03-22", type: "open_source", description: "Triaging community issues.", participants: 15, level: 1 },
  { id: "e13f", name: "Lightning Talk Prep", date: "2025-03-25", type: "session", description: "Practicing presentations.", participants: 12, level: 1 },

  // ─── April ────────────────────────────────────────────
  { id: "e14", name: "Next.js Deep Dive", date: "2025-04-03", type: "workshop", description: "Server components, streaming, and the app router explained.", participants: 55, level: 2 },
  { id: "e15", name: "Open Source Sprint", date: "2025-04-12", type: "open_source", description: "Marathon session: 30+ PRs merged into community repos.", participants: 85, image: "/4.jpeg", level: 3 },
  { id: "e16", name: "Resume Building Session", date: "2025-04-15", type: "session", description: "Crafting developer resumes that actually get callbacks.", participants: 40, level: 1 },
  { id: "e17", name: "TypeScript Masterclass", date: "2025-04-24", type: "workshop", description: "Advanced TypeScript patterns — generics, mapped types, and type gymnastics.", participants: 50, level: 2 },
  { id: "e17b", name: "Coffee & Code", date: "2025-04-28", type: "meetup", description: "Morning coffee and casual hacking.", participants: 20, level: 1 },
  { id: "e17c", name: "Portfolio Review", date: "2025-04-08", type: "session", description: "Peer review of portfolios.", participants: 25, level: 1 },
  { id: "e17d", name: "Algorithms Night", date: "2025-04-18", type: "session", description: "Practicing LeetCode together.", participants: 30, level: 2 },
  { id: "e17e", name: "Design System Talk", date: "2025-04-22", type: "talk", description: "Building reusable components.", participants: 40, level: 1 },
  { id: "e17f", name: "Open Source Sync", date: "2025-04-29", type: "open_source", description: "Syncing on community projects.", participants: 18, level: 1 },

  // ─── May ──────────────────────────────────────────────
  { id: "e18", name: "Project Showcase", date: "2025-05-03", type: "showcase", description: "End-of-semester demo day. 15 teams presented their projects.", participants: 150, image: "/4.jpeg", level: 4 },
  { id: "e19", name: "DSA Bootcamp Week", date: "2025-05-07", type: "session", description: "Intensive week of data structures and algorithms practice.", participants: 60, level: 2 },
  { id: "e20", name: "DSA Bootcamp Day 2", date: "2025-05-08", type: "session", description: "Graphs, trees, and dynamic programming deep dive.", participants: 55, level: 2 },
  { id: "e21", name: "DSA Bootcamp Day 3", date: "2025-05-09", type: "session", description: "Mock interviews and competitive problem solving.", participants: 50, level: 2 },
  { id: "e22", name: "Figma for Devs", date: "2025-05-15", type: "workshop", description: "Design fundamentals every developer should know.", participants: 35, level: 1 },
  { id: "e23", name: "Community Meetup", date: "2025-05-23", type: "meetup", description: "Casual networking and project brainstorming evening.", participants: 45, level: 1 },
  { id: "e23b", name: "Showcase Prep", date: "2025-05-01", type: "session", description: "Final touches for project showcase.", participants: 40, level: 2 },
  { id: "e23c", name: "Showcase Rehearsal", date: "2025-05-02", type: "session", description: "Dry run of presentations.", participants: 35, level: 1 },
  { id: "e23d", name: "Post-showcase Chill", date: "2025-05-04", type: "meetup", description: "Relaxing after the showcase.", participants: 50, level: 1 },
  { id: "e23e", name: "Web Accessibility", date: "2025-05-19", type: "talk", description: "Making the web accessible for all.", participants: 25, level: 1 },
  { id: "e23f", name: "Code & Coffee", date: "2025-05-28", type: "meetup", description: "Morning coding session.", participants: 15, level: 1 },

  // ─── June ─────────────────────────────────────────────
  { id: "e24", name: "Summer Kickoff", date: "2025-06-05", type: "meetup", description: "Summer break plans, project ideas, and team formations.", participants: 80, level: 2 },
  { id: "e24b", name: "Lightning Talks", date: "2025-06-11", type: "talk", description: "Short 5-min talks from members.", participants: 45, level: 1 },
  { id: "e25", name: "Data Xplore", date: "2025-06-14", type: "session", description: "Massive intro to data science and ML for 180+ students.", participants: 180, image: "/3.jpeg", level: 4 },
  { id: "e26", name: "Rust for Beginners", date: "2025-06-20", type: "talk", description: "Why Rust matters and how to start your first Rust project.", participants: 40, level: 1 },
  { id: "e27", name: "Web3 Intro", date: "2025-06-26", type: "talk", description: "Blockchain, smart contracts, and the future of the decentralized web.", participants: 55, level: 2 },
  { id: "e27b", name: "Open Source Planning", date: "2025-06-09", type: "open_source", description: "Planning summer open source work.", participants: 20, level: 1 },
  { id: "e27c", name: "Pair Programming", date: "2025-06-17", type: "session", description: "Collaborative coding.", participants: 18, level: 1 },
  { id: "e27d", name: "UI Design Challenge", date: "2025-06-22", type: "workshop", description: "Figma design challenge.", participants: 30, level: 1 },
  { id: "e27e", name: "Weekly Sync", date: "2025-06-29", type: "meetup", description: "End of month sync up.", participants: 25, level: 1 },

  // ─── July ─────────────────────────────────────────────
  { id: "e28", name: "Summer Hackathon", date: "2025-07-05", type: "hackathon", description: "48-hour summer hackathon — build anything, ship everything.", participants: 130, image: "/1.jpeg", level: 3 },
  { id: "e29", name: "Summer Hackathon Day 2", date: "2025-07-06", type: "hackathon", description: "Final demos and awards for the summer hackathon.", participants: 130, image: "/1.jpeg", level: 3 },
  { id: "e29b", name: "Post-Hackathon Chill", date: "2025-07-08", type: "meetup", description: "Relaxed meetup after the intense hackathon.", participants: 50, level: 1 },
  { id: "e30", name: "Linux Workshop", date: "2025-07-17", type: "workshop", description: "Terminal mastery — navigating the command line like a pro.", participants: 45, level: 2 },
  { id: "e31", name: "GraphQL Session", date: "2025-07-25", type: "session", description: "REST vs GraphQL — when and why to switch.", participants: 35, level: 1 },
  { id: "e31a", name: "Pre-Hackathon Brainstorm", date: "2025-07-02", type: "session", description: "Team forming for summer hackathon.", participants: 60, level: 2 },
  { id: "e31b", name: "Project Architecture", date: "2025-07-11", type: "talk", description: "Structuring large web apps.", participants: 40, level: 1 },
  { id: "e31c", name: "Open Source Bug Bash", date: "2025-07-21", type: "open_source", description: "Squashing bugs in community tools.", participants: 25, level: 1 },
  { id: "e31d", name: "Code Review Night", date: "2025-07-30", type: "session", description: "Reviewing hackathon code.", participants: 20, level: 1 },

  // ─── August ───────────────────────────────────────────
  { id: "e32", name: "Recruitment Drive", date: "2025-08-06", type: "recruitment", description: "Welcoming the next batch of builders into the community.", participants: 200, image: "/2.jpeg", level: 4 },
  { id: "e33", name: "Recruitment Day 2", date: "2025-08-07", type: "recruitment", description: "Technical screening and team allocation for new members.", participants: 200, level: 4 },
  { id: "e34", name: "Onboarding Workshop", date: "2025-08-14", type: "workshop", description: "Getting new members set up with Git, GitHub, and their first PR.", participants: 80, level: 3 },
  { id: "e35", name: "Intro to CI/CD", date: "2025-08-22", type: "talk", description: "Automating your workflow with GitHub Actions.", participants: 40, level: 1 },
  { id: "e35b", name: "Career AMA", date: "2025-08-25", type: "session", description: "Ask me anything session with alumni.", participants: 60, level: 2 },
  { id: "e36", name: "Pair Programming Night", date: "2025-08-29", type: "session", description: "Random pairing — solve problems together, learn from each other.", participants: 30, level: 1 },
  { id: "e36a", name: "Recruitment Prep", date: "2025-08-02", type: "session", description: "Planning the recruitment drive.", participants: 25, level: 1 },
  { id: "e36b", name: "Interviewer Sync", date: "2025-08-04", type: "session", description: "Aligning on interview questions.", participants: 15, level: 1 },
  { id: "e36c", name: "Core Team Meetup", date: "2025-08-11", type: "meetup", description: "Core team aligning on the semester.", participants: 20, level: 1 },
  { id: "e36d", name: "Mentorship Kickoff", date: "2025-08-18", type: "meetup", description: "Matching mentors with new members.", participants: 50, level: 2 },
  { id: "e36e", name: "Git Deep Dive", date: "2025-08-31", type: "workshop", description: "Advanced Git workflows.", participants: 35, level: 1 },

  // ─── September ────────────────────────────────────────
  { id: "e37", name: "Hacktoberfest Prep", date: "2025-09-04", type: "open_source", description: "Preparing repos and issues for the upcoming Hacktoberfest.", participants: 50, level: 2 },
  { id: "e38", name: "Backend Bootcamp", date: "2025-09-12", type: "workshop", description: "Node.js, Express, and database design from scratch.", participants: 65, level: 2 },
  { id: "e39", name: "Speaker Session: Industry", date: "2025-09-18", type: "talk", description: "Guest speaker from the industry on scaling engineering teams.", participants: 90, image: "/4.jpeg", level: 3 },
  { id: "e39b", name: "Code Review Culture", date: "2025-09-24", type: "session", description: "How to give and receive great code reviews.", participants: 35, level: 1 },
  { id: "e40", name: "UI/UX Basics", date: "2025-09-29", type: "workshop", description: "Understanding typography, spacing, and color theory.", participants: 45, level: 2 },
  { id: "e40a", name: "Open Source Basics", date: "2025-09-08", type: "session", description: "What is open source?", participants: 40, level: 1 },
  { id: "e40b", name: "Database Optimization", date: "2025-09-15", type: "talk", description: "Indexing and querying efficiently.", participants: 35, level: 1 },
  { id: "e40c", name: "Study Group", date: "2025-09-21", type: "session", description: "Midterm study group.", participants: 25, level: 1 },
  { id: "e40d", name: "Hacktoberfest Teaser", date: "2025-09-27", type: "meetup", description: "Getting hyped for October.", participants: 50, level: 2 },

  // ─── October ──────────────────────────────────────────
  { id: "e41", name: "Hacktoberfest Week 1", date: "2025-10-04", type: "open_source", description: "Community-wide open source contribution sprint.", participants: 100, image: "/3.jpeg", level: 3 },
  { id: "e42", name: "Hacktoberfest Week 2", date: "2025-10-12", type: "open_source", description: "50+ PRs merged across 12 different repositories.", participants: 90, level: 3 },
  { id: "e42b", name: "CSS Art Workshop", date: "2025-10-16", type: "workshop", description: "Creating stunning visual art with nothing but CSS.", participants: 30, level: 1 },
  { id: "e43", name: "Hacktoberfest Week 3", date: "2025-10-19", type: "open_source", description: "Community members mentoring first-time contributors.", participants: 75, level: 3 },
  { id: "e44", name: "Hacktoberfest Finale", date: "2025-10-26", type: "open_source", description: "Wrapping up with 120+ merged PRs and swag distribution.", participants: 110, image: "/3.jpeg", level: 3 },
  { id: "e44a", name: "Hacktoberfest Kickoff", date: "2025-10-01", type: "meetup", description: "Opening ceremonies.", participants: 80, level: 2 },
  { id: "e44b", name: "PR Review Marathon", date: "2025-10-08", type: "open_source", description: "Reviewing open PRs.", participants: 30, level: 1 },
  { id: "e44c", name: "Issue Triage", date: "2025-10-14", type: "open_source", description: "Labeling issues for contributors.", participants: 20, level: 1 },
  { id: "e44d", name: "Maintainer Q&A", date: "2025-10-22", type: "talk", description: "Q&A with repo maintainers.", participants: 40, level: 1 },
  { id: "e44e", name: "Spooky Coding", date: "2025-10-31", type: "meetup", description: "Halloween themed coding night.", participants: 60, level: 2 },

  // ─── November ─────────────────────────────────────────
  { id: "e45", name: "Full Stack Workshop", date: "2025-11-06", type: "workshop", description: "Building a full-stack app from design to deployment in one session.", participants: 60, level: 2 },
  { id: "e46", name: "Community Retro", date: "2025-11-13", type: "meetup", description: "Looking back at 2025 — wins, lessons, and growth.", participants: 85, level: 3 },
  { id: "e46b", name: "Portfolio Workshop", date: "2025-11-18", type: "workshop", description: "Building premium developer portfolios that stand out.", participants: 50, level: 2 },
  { id: "e47", name: "Lightning Talks", date: "2025-11-27", type: "talk", description: "10 speakers, 5 minutes each — rapid-fire knowledge sharing.", participants: 70, level: 2 },
  { id: "e47b", name: "Code & Chill", date: "2025-11-29", type: "session", description: "Casual weekend coding session.", participants: 25, level: 1 },
  { id: "e47c", name: "Post-Hacktoberfest Retro", date: "2025-11-03", type: "session", description: "Reviewing Hacktoberfest metrics.", participants: 30, level: 1 },
  { id: "e47d", name: "API Integration", date: "2025-11-10", type: "workshop", description: "Connecting frontend to backend.", participants: 40, level: 1 },
  { id: "e47e", name: "Database Migrations", date: "2025-11-22", type: "talk", description: "Handling data changes safely.", participants: 35, level: 1 },

  // ─── December ─────────────────────────────────────────
  { id: "e48", name: "Year-End Showcase", date: "2025-12-06", type: "showcase", description: "The biggest demo day of the year. 25 projects presented.", participants: 200, image: "/4.jpeg", level: 4 },
  { id: "e49", name: "Open Source Awards", date: "2025-12-11", type: "open_source", description: "Celebrating top contributors and their open-source impact.", participants: 100, level: 3 },
  { id: "e50", name: "Winter Workshop", date: "2025-12-18", type: "workshop", description: "Building cozy side projects for the winter break.", participants: 40, level: 1 },
  { id: "e51", name: "Community Farewell 2025", date: "2025-12-21", type: "meetup", description: "End-of-year celebration, awards, and plans for 2026.", participants: 120, image: "/2.jpeg", level: 3 },
  { id: "e52", name: "Winter Coding Challenge", date: "2025-12-27", type: "hackathon", description: "Remote mini-hackathon to keep the skills sharp over the break.", participants: 80, level: 2 },
  { id: "e52a", name: "Showcase Prep 1", date: "2025-12-02", type: "session", description: "Final bug squashing.", participants: 45, level: 1 },
  { id: "e52b", name: "Showcase Prep 2", date: "2025-12-04", type: "session", description: "Presentation practice.", participants: 40, level: 1 },
  { id: "e52c", name: "Post-Showcase Meetup", date: "2025-12-08", type: "meetup", description: "Relaxing after the big day.", participants: 60, level: 2 },
  { id: "e52d", name: "Core Team Planning", date: "2025-12-15", type: "session", description: "Planning for 2026.", participants: 15, level: 1 },
  { id: "e52e", name: "New Year Eve Code", date: "2025-12-31", type: "session", description: "Shipping one last commit for the year.", participants: 20, level: 1 },
];

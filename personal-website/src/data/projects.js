/* ─────────────────────────────────────────
   Projects Data
   To add a project: copy one object, fill in the fields, and add it to the array.
   - tags must match the filter chip labels exactly
   - team: list of team member names
   - demo: URL string, or null if not available
   - github: URL string, or null if not available
───────────────────────────────────────── */

export const projects = [
  {
    id: 1,
    title: 'SingFlix',
    description:
      'AI-powered immersive touring experience that turns Singapore landmarks into cinematic stories.',
    team: ['Esther Wang', 'Weng Siong Chan'],
    tags: ['AI Builds', 'Hackathon', 'Travel'],
    demo: 'https://youtu.be/di7z8M9Chq0',
    github: 'https://github.com/Dylon-Chan/gemini3-hackathon-sg',
  },
  {
    id: 2,
    title: 'Local Knowledge Exchange',
    description:
      'A concept exploring how locals contribute authentic city knowledge and unlock travel insight from other places.',
    team: ['Esther Wang'],
    tags: ['Experiments', 'AI Builds', 'Community'],
    demo: null,
    github: null,
  },
  {
    id: 3,
    title: 'HomeFlow AI',
    description:
      'A lightweight AI tool that translates household workflows into structured tasks for shared living spaces.',
    team: ['Esther Wang'],
    tags: ['Experiments', 'AI Builds', 'Workflow'],
    demo: null,
    github: null,
  },
  {
    id: 4,
    title: 'AI Portfolio Site',
    description:
      'My evolving digital home for projects, writing, and creative exploration.',
    team: ['Esther Wang'],
    tags: ['Product Work', 'Personal'],
    demo: null,
    github: null,
  },
];

export const filterChips = ['All', 'AI Builds', 'Product Work', 'Experiments'];

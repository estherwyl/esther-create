/* ─────────────────────────────────────────
   Writing Data
   To add a piece: copy one object, fill in the fields.
   - status: 'published' | 'coming-soon'
   - date: display string, e.g. 'Mar 8, 2026'
   - readTime: e.g. '4 min read'
   - image: URL string or null (shows a placeholder tint if null)
───────────────────────────────────────── */

export const chineseWriting = [
  {
    id: 'cn-1',
    title: 'AI Hackathon 12小时体验',
    description: '一次12小时的AI黑客马拉松，让我重新思考了什么叫做"快速构建"。',
    platform: 'Xiaohongshu',
    status: 'published',
    date: 'Mar 5, 2026',
    readTime: '5 min read',
    image: null,
    url: null,
  },
  {
    id: 'cn-2',
    title: '从产品经理到AI Builder',
    description: '当我决定从产品管理转向自己动手构建AI产品，这段旅程教会了我什么。',
    platform: 'Xiaohongshu',
    status: 'published',
    date: 'Feb 20, 2026',
    readTime: '6 min read',
    image: null,
    url: null,
  },
  {
    id: 'cn-3',
    title: '在转型期重新认识自己',
    description: '职业转型不只是换工作，更是一次重新定义自己的机会。',
    platform: 'Xiaohongshu',
    status: 'coming-soon',
    date: null,
    readTime: null,
    image: null,
    url: null,
  },
];

export const englishWriting = [
  {
    id: 'en-1',
    title: 'What I Learned Building AI Products in 12 Hours',
    description:
      'A hackathon taught me more about AI product thinking than months of reading ever could.',
    platform: 'Substack',
    status: 'published',
    date: 'Mar 8, 2026',
    readTime: '4 min read',
    image: null,
    url: null,
  },
  {
    id: 'en-2',
    title: 'AI Is Changing How Products Are Built',
    description:
      "The shift isn't just about tools — it's about who gets to build, and what becomes possible.",
    platform: 'Substack',
    status: 'published',
    date: 'Feb 28, 2026',
    readTime: '5 min read',
    image: null,
    url: null,
  },
  {
    id: 'en-3',
    title: 'On Reinvention, Identity, and Starting Again',
    description:
      'Notes on what it feels like to leave a well-worn path and start building something new.',
    platform: 'Substack',
    status: 'coming-soon',
    date: null,
    readTime: null,
    image: null,
    url: null,
  },
];

import { User, BlogPost } from '../types';

export const dummyUsers: User[] = [
  {
    id: '1',
    name: 'Alex Chen',
    email: 'alex.chen@example.com',
    joinedDate: '2024-01-15',
    bio: 'Full-stack developer passionate about React and modern web technologies.'
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    email: 'sarah.johnson@example.com',
    joinedDate: '2024-02-20',
    bio: 'UX designer and frontend developer with a love for creating beautiful user experiences.'
  },
  {
    id: '3',
    name: 'Michael Rodriguez',
    email: 'michael.rodriguez@example.com',
    joinedDate: '2024-03-10',
    bio: 'Tech entrepreneur and startup advisor. Building the future one line of code at a time.'
  },
  {
    id: '4',
    name: 'Emily Davis',
    email: 'emily.davis@example.com',
    joinedDate: '2024-01-28',
    bio: 'Product manager and tech writer. Bridging the gap between business and technology.'
  },
  {
    id: '5',
    name: 'David Kim',
    email: 'david.kim@example.com',
    joinedDate: '2024-04-05',
    bio: 'DevOps engineer and cloud architecture specialist. Scaling applications for millions of users.'
  },
  {
    id: '6',
    name: 'Jessica Thompson',
    email: 'jessica.thompson@example.com',
    joinedDate: '2024-02-14',
    bio: 'Mobile app developer and UI/UX enthusiast. Creating delightful mobile experiences.'
  },
  {
    id: '7',
    name: 'Ryan Martinez',
    email: 'ryan.martinez@example.com',
    joinedDate: '2024-03-22',
    bio: 'Data scientist and machine learning engineer. Turning data into actionable insights.'
  },
  {
    id: '8',
    name: 'Lisa Wang',
    email: 'lisa.wang@example.com',
    joinedDate: '2024-01-08',
    bio: 'Cybersecurity expert and ethical hacker. Protecting digital assets and user privacy.'
  },
  {
    id: '9',
    name: 'James Wilson',
    email: 'james.wilson@example.com',
    joinedDate: '2024-04-12',
    bio: 'Backend developer and API architect. Building robust and scalable server solutions.'
  },
  {
    id: '10',
    name: 'Amanda Foster',
    email: 'amanda.foster@example.com',
    joinedDate: '2024-02-28',
    bio: 'Frontend developer and accessibility advocate. Making the web inclusive for everyone.'
  },
  {
    id: '11',
    name: 'Kevin Lee',
    email: 'kevin.lee@example.com',
    joinedDate: '2024-03-15',
    bio: 'Game developer and graphics programmer. Creating immersive digital experiences.'
  },
  {
    id: '12',
    name: 'Rachel Green',
    email: 'rachel.green@example.com',
    joinedDate: '2024-01-30',
    bio: 'Technical writer and documentation specialist. Making complex topics accessible to all.'
  }
];

export const dummyBlogs: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Web Development in 2025',
    content: 'As we step into 2025, web development continues to evolve at an unprecedented pace. New frameworks, tools, and methodologies are reshaping how we build digital experiences. From AI-powered development tools to advanced performance optimization techniques, the landscape is more exciting than ever. In this post, we explore the key trends that will define web development this year, including the rise of edge computing, the maturation of WebAssembly, and the growing importance of accessibility in modern web applications.',
    author: 'Alex Chen',
    authorId: '1',
    authorEmail: 'alex.chen@example.com',
    date: '2025-01-10',
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
    likes: 42,
    likedBy: ['2', '3', '4'],
    comments: [
      { id: '1', author: 'Sarah Johnson', authorId: '2', content: 'Great insights on the future trends!', date: '2025-01-11' },
      { id: '2', author: 'Michael Rodriguez', authorId: '3', content: 'WebAssembly is definitely game-changing.', date: '2025-01-11' }
    ],
    tags: ['web-development', 'technology', 'future']
  },
  {
    id: '2',
    title: 'Design Systems: Building Consistency at Scale',
    content: 'Design systems have become the backbone of modern product development. They provide a unified language between designers and developers, ensuring consistency across all touchpoints. In this comprehensive guide, we dive deep into creating and maintaining design systems that scale with your organization. From establishing design tokens to building component libraries, we cover everything you need to know to implement a successful design system that enhances both user experience and development efficiency.',
    author: 'Sarah Johnson',
    authorId: '2',
    authorEmail: 'sarah.johnson@example.com',
    date: '2025-01-08',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    likes: 38,
    likedBy: ['1', '4', '5'],
    comments: [
      { id: '3', author: 'Emily Davis', authorId: '4', content: 'This is exactly what our team needed!', date: '2025-01-09' }
    ],
    tags: ['design', 'ui-ux', 'design-systems']
  },
  {
    id: '3',
    title: 'Scaling Startups: Lessons from the Trenches',
    content: 'Building a startup from zero to millions of users is a journey filled with challenges, failures, and incredible learning opportunities. Over the past five years, I\'ve had the privilege of working with dozens of startups, helping them navigate the complex world of scaling technology and teams. In this post, I share the most valuable lessons learned, common pitfalls to avoid, and practical strategies that have proven successful across different industries and business models.',
    author: 'Michael Rodriguez',
    authorId: '3',
    authorEmail: 'michael.rodriguez@example.com',
    date: '2025-01-05',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    likes: 56,
    likedBy: ['1', '2', '6', '7'],
    comments: [
      { id: '4', author: 'David Kim', authorId: '5', content: 'Invaluable advice for any entrepreneur!', date: '2025-01-06' },
      { id: '5', author: 'Jessica Thompson', authorId: '6', content: 'The scaling strategies are spot on.', date: '2025-01-06' }
    ],
    tags: ['startup', 'entrepreneurship', 'scaling']
  },
  {
    id: '4',
    title: 'Product Management in the Age of AI',
    content: 'Artificial Intelligence is transforming how we approach product management. From user research to feature prioritization, AI tools are augmenting human decision-making and enabling more data-driven product strategies. This post explores how product managers can leverage AI to better understand user needs, predict market trends, and build products that truly resonate with their target audience. We also discuss the ethical considerations and potential pitfalls of AI-driven product development.',
    author: 'Emily Davis',
    authorId: '4',
    authorEmail: 'emily.davis@example.com',
    date: '2025-01-03',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    likes: 29,
    likedBy: ['3', '8', '9'],
    comments: [],
    tags: ['product-management', 'ai', 'strategy']
  },
  {
    id: '5',
    title: 'Cloud Architecture Best Practices',
    content: 'Modern applications demand robust, scalable, and cost-effective cloud architectures. Drawing from years of experience building cloud-native solutions, this post outlines the essential patterns and practices for designing systems that can handle massive scale while maintaining reliability and security. We cover microservices architecture, containerization strategies, database design patterns, and monitoring approaches that have proven successful in production environments.',
    author: 'David Kim',
    authorId: '5',
    authorEmail: 'david.kim@example.com',
    date: '2025-01-01',
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
    likes: 45,
    likedBy: ['1', '3', '7', '10'],
    comments: [
      { id: '6', author: 'James Wilson', authorId: '9', content: 'Excellent breakdown of cloud patterns!', date: '2025-01-02' }
    ],
    tags: ['cloud', 'architecture', 'devops']
  },
  {
    id: '6',
    title: 'Mobile-First Design Philosophy',
    content: 'With mobile traffic accounting for over 60% of web usage, designing for mobile-first has become not just a best practice, but a necessity. This approach fundamentally changes how we think about user interfaces, forcing us to prioritize content and functionality while creating more focused, efficient designs. In this post, we explore the principles of mobile-first design, common challenges developers face, and practical techniques for creating responsive experiences that work beautifully across all devices.',
    author: 'Jessica Thompson',
    authorId: '6',
    authorEmail: 'jessica.thompson@example.com',
    date: '2024-12-28',
    image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800',
    likes: 33,
    likedBy: ['2', '4', '11'],
    comments: [
      { id: '7', author: 'Amanda Foster', authorId: '10', content: 'Mobile-first changed everything for our team!', date: '2024-12-29' }
    ],
    tags: ['mobile', 'design', 'responsive']
  },
  {
    id: '7',
    title: 'Machine Learning for Developers',
    content: 'Machine learning is no longer confined to data science teams. Modern developers are increasingly expected to understand and implement ML solutions in their applications. This comprehensive guide breaks down complex ML concepts into digestible pieces, providing practical examples and real-world applications. From recommendation systems to natural language processing, we explore how developers can integrate intelligent features into their applications without needing a PhD in mathematics.',
    author: 'Ryan Martinez',
    authorId: '7',
    authorEmail: 'ryan.martinez@example.com',
    date: '2024-12-25',
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800',
    likes: 51,
    likedBy: ['1', '5', '8', '12'],
    comments: [
      { id: '8', author: 'Lisa Wang', authorId: '8', content: 'Finally, ML explained for developers!', date: '2024-12-26' },
      { id: '9', author: 'Kevin Lee', authorId: '11', content: 'The practical examples are incredibly helpful.', date: '2024-12-26' }
    ],
    tags: ['machine-learning', 'ai', 'development']
  },
  {
    id: '8',
    title: 'Cybersecurity in Modern Web Applications',
    content: 'As web applications become more sophisticated, so do the security threats they face. This post provides a comprehensive overview of modern cybersecurity practices for web developers, covering everything from secure coding practices to advanced threat detection. We discuss common vulnerabilities like XSS and CSRF attacks, explore modern authentication methods, and provide actionable strategies for building security into your development workflow from day one.',
    author: 'Lisa Wang',
    authorId: '8',
    authorEmail: 'lisa.wang@example.com',
    date: '2024-12-22',
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
    likes: 37,
    likedBy: ['3', '5', '9'],
    comments: [],
    tags: ['security', 'web-development', 'cybersecurity']
  },
  {
    id: '9',
    title: 'Building Robust APIs with Node.js',
    content: 'APIs are the backbone of modern applications, connecting frontend interfaces with backend services and external systems. This detailed guide covers best practices for building robust, scalable APIs using Node.js and Express. We explore authentication strategies, error handling patterns, rate limiting, documentation approaches, and testing methodologies that ensure your APIs can handle real-world traffic while maintaining excellent developer experience.',
    author: 'James Wilson',
    authorId: '9',
    authorEmail: 'james.wilson@example.com',
    date: '2024-12-20',
    image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
    likes: 44,
    likedBy: ['1', '5', '7', '11'],
    comments: [
      { id: '10', author: 'David Kim', authorId: '5', content: 'Great API design principles!', date: '2024-12-21' }
    ],
    tags: ['nodejs', 'api', 'backend']
  },
  {
    id: '10',
    title: 'Accessibility: Building for Everyone',
    content: 'Web accessibility isn\'t just about compliance—it\'s about creating inclusive experiences that work for everyone, regardless of their abilities or the technology they use. This comprehensive guide covers the fundamental principles of accessible design, practical implementation techniques, and testing strategies. We explore ARIA attributes, keyboard navigation, screen reader compatibility, and color contrast requirements, providing developers with the knowledge and tools needed to build truly inclusive web applications.',
    author: 'Amanda Foster',
    authorId: '10',
    authorEmail: 'amanda.foster@example.com',
    date: '2024-12-18',
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
    likes: 39,
    likedBy: ['2', '6', '8', '12'],
    comments: [
      { id: '11', author: 'Rachel Green', authorId: '12', content: 'Accessibility should be a priority for every developer.', date: '2024-12-19' }
    ],
    tags: ['accessibility', 'inclusive-design', 'web-standards']
  },
  {
    id: '11',
    title: 'Game Development with Modern JavaScript',
    content: 'JavaScript has evolved far beyond simple web interactions to become a powerful platform for game development. With technologies like WebGL, WebAssembly, and advanced browser APIs, developers can create sophisticated gaming experiences that run directly in the browser. This post explores the current state of web-based game development, covering popular frameworks, performance optimization techniques, and the unique challenges of building games for the web platform.',
    author: 'Kevin Lee',
    authorId: '11',
    authorEmail: 'kevin.lee@example.com',
    date: '2024-12-15',
    image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800',
    likes: 28,
    likedBy: ['7', '9'],
    comments: [
      { id: '12', author: 'Ryan Martinez', authorId: '7', content: 'WebGL opens up so many possibilities!', date: '2024-12-16' }
    ],
    tags: ['game-development', 'javascript', 'webgl']
  },
  {
    id: '12',
    title: 'Technical Writing for Developers',
    content: 'Clear, concise technical documentation is crucial for project success, yet many developers struggle with writing effectively. This post provides practical strategies for improving your technical writing skills, from structuring complex information to choosing the right tone for your audience. We cover documentation best practices, API documentation standards, and techniques for making technical content accessible to both technical and non-technical stakeholders.',
    author: 'Rachel Green',
    authorId: '12',
    authorEmail: 'rachel.green@example.com',
    date: '2024-12-12',
    image: 'https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg?auto=compress&cs=tinysrgb&w=800',
    likes: 31,
    likedBy: ['4', '8', '10'],
    comments: [],
    tags: ['technical-writing', 'documentation', 'communication']
  }
];
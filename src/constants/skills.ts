import ExplanationNode from '@/components/nodes/explanation-node.component'
import InvisibleNode from '@/components/nodes/invisible-node.component'
import LearningNode from '@/components/nodes/learning-node.component'
import { Edge, Node, Position } from 'reactflow'

// Types
type NodeAndEdge = (Node & { _type: 'node' }) | (Edge & { _type: 'edge' })
type NodePosition = { x: number; y: number }
type NodePositions = { source?: Position; target?: Position }
type Project = { name: string; description: string; link?: string }

// Constants
export const nodeTypes = {
  learning: LearningNode,
  explanation: ExplanationNode,
  invisible: InvisibleNode,
}

// Utility functions
const createLearningNode = (
  id: string,
  course: string,
  position: NodePosition,
  positions: NodePositions = {},
): NodeAndEdge => ({
  id,
  _type: 'node',
  type: 'learning',
  data: { course },
  position,
  connectable: true,
  sourcePosition: positions.source || Position.Right,
  targetPosition: positions.target || Position.Left,
})

const createExplanationNode = (
  id: string,
  explanation: string,
  position: NodePosition,
  options: {
    description?: string
    variant?: 'left' | 'right' | 'justify'
    positions?: NodePositions
    block?: 'special'
    width?: number
  } = {},
): NodeAndEdge => ({
  id,
  _type: 'node',
  type: 'explanation',
  data: {
    explanation,
    description: options.description,
    variant: options.variant,
    block: options.block,
    width: options.width,
  },
  position,
  connectable: true,
  sourcePosition: options.positions?.source || Position.Bottom,
  targetPosition: options.positions?.target || Position.Top,
})

const newCreateInvisibleNode = (
  id: string,
  position: NodePosition,
  positions: NodePositions = {},
): NodeAndEdge[] => {
  const getOppositePosition = (pos?: Position) => {
    if (pos === Position.Left) return Position.Right
    if (pos === Position.Right) return Position.Left
    if (pos === Position.Top) return Position.Bottom
    return Position.Top
  }

  return [
    {
      id,
      _type: 'node',
      type: 'invisible',
      data: {},
      position,
      connectable: true,
      sourcePosition: getOppositePosition(positions.source),
      targetPosition:
        positions.source === Position.Left ||
        positions.source === Position.Right
          ? positions.source === Position.Left
            ? Position.Left
            : Position.Right
          : positions.source === Position.Top
            ? Position.Top
            : Position.Bottom,
    },
    {
      id: `${id}-clone`,
      _type: 'node',
      type: 'invisible',
      data: {},
      position,
      connectable: true,
      sourcePosition: positions.target,
    },
  ]
}

const createEdge = (source: string, target: string): NodeAndEdge => ({
  _type: 'edge',
  id: `${source}-to-${target}`,
  source,
  target,
  animated: !source.includes('clone'),
  style: { stroke: '#ef4444' },
  type: 'smoothstep',
})

// Projects data
const projects: Record<string, Project> = {
  'first-project': {
    name: 'First Project - Recipe Collection',
    description:
      'A recipe collection website built with HTML and CSS, featuring a clean single-page design',
  },
  'first-project-functionality': {
    name: 'First Project ( Functionality )',
    description:
      'Adding functionality to the project using JavaScript, opening and closing the recipe details section.',
  },
  'second-project': {
    name: 'Second Project - News Website',
    description:
      'News website built with HTML, CSS, and JavaScript, featuring a clean and modern design with css grid and flexbox, also includes a responsive design.',
  },
  'third-project': {
    name: 'Third Project - ECommerce Website',
    description:
      'ECommerce website, featuring a clean and modern design with css grid and flexbox, also includes a responsive design and cart functionality',
  },
  'first-real-world-project': {
    name: 'First Real World Project - Facebook Messenger Chatbot',
    description:
      'Facebook Messenger Chatbot for all type of ecommerce business, featuring auto response chatbot with Messenger, receive order, categorize products, and more.',
    link: 'https://www.facebook.com/vietlinecoffeemdy/',
  },
  'second-real-world-project': {
    name: 'Second Real World Project - Food Ordering Website',
    description:
      'Food ordering website for Vietline Coffee restaurant, featuring auto response chatbot with Messenger, a food ordering system, and a dashboard for managing orders and inventory.',
    link: 'https://www.facebook.com/vietlinecoffeemdy/',
  },
  'my-first-portfolio': {
    name: 'My First Portfolio',
    description:
      'My first portfolio website built with React, Tailwind, and Framer Motion, featuring a clean and modern design with css grid and flexbox, also includes a responsive design.',
  },
  'business-portfolio': {
    name: 'Third Real World Project - Business Portfolio',
    description:
      'Create a business portfolio for alpha marketing company, featuring a clean and modern design with css grid and flexbox, also includes a responsive design.',
  },
  'fourth-project': {
    name: 'Fourth Project - Real Time Chat App',
    description:
      'Create a real time chat app for alpha marketing company, featuring a clean and modern design with css grid and flexbox, also includes a responsive design.',
  },
  'my-first-job': {
    name: 'My First Job',
    description:
      'My first full-time remote position as a Software Engineer at a Japanese EdTech startup. We developed an innovative Japanese language learning platform using the MERN stack (MongoDB, Express.js, React, Node.js). As one of the lead developers, I architected and implemented key features like real-time chat community, interactive exercises, and Kanji drawing canvas from scratch. I demonstrated strong problem-solving skills by optimizing database queries that improved application performance by 40%. Working in an agile environment with a diverse CEO ( my boss who really works hard and always try to improve the product ) enhanced my collaboration and time management capabilities. I took initiative to mentor junior developers and establish coding standards that increased team productivity. Through this role, I gained extensive experience in full-stack development, server infrastructure, and technical leadership while contributing to a product that helps me to improve my skills and become a better developer.',
  },
  'side-projects': {
    name: 'Other Mid Projects',
    description:
      'POS, school management, employee check in/our tracker, cv management, social links collection website, etc.',
  },
  'my-second-job': {
    name: 'My Second Job',
    description:
      'In my second job, I worked remotely as a full-stack developer for a Singaporean company. We developed a comprehensive platform featuring community management with multi-channel chat, user activity tracking with gamification (points, badges), reward systems, trading analysis charts, social media integration, and an AI-powered chatbot. As a core developer using the MERN stack (MongoDB, Express.js, React, Node.js), I primarily focused on backend development while also contributing to frontend features. During my year there, I gained invaluable experience learning from my managers and teammates, while also mentoring junior developers and implementing coding standards that enhanced team efficiency. This role significantly improved my technical skills, English communication, Agile methodology experience, and problem-solving capabilities.',
  },
  'journey-start': {
    name: 'Starting my journey of programming',
    description: '',
  },
  'continue-learning': {
    name: 'Continue Learning',
    description:
      'Continue learning new technologies and frameworks to improve my skills and become a better developer.',
  },
}

const nodesAndEdges: NodeAndEdge[] = [
  /* start with explanation node */
  createExplanationNode('journey-start', projects['journey-start'].name, {
    x: -79,
    y: -100,
  }),
  createEdge('journey-start', 'html-learning-node'),

  createLearningNode(
    'html-learning-node',
    'HTML',
    { x: 0, y: 0 },
    {
      source: Position.Right,
      target: Position.Top,
    },
  ),

  createEdge('html-learning-node', 'css-learning-node'),

  createLearningNode(
    'css-learning-node',
    'CSS',
    { x: 250, y: 0 },
    {
      source: Position.Right,
      target: Position.Left,
    },
  ),

  createEdge('css-learning-node', 'first-project-breakpoint'),
  ...newCreateInvisibleNode(
    'first-project-breakpoint',
    { x: 400 + 100, y: 12 },
    {
      source: Position.Left,
      target: Position.Bottom,
    },
  ),
  createEdge('first-project-breakpoint-clone', 'first-project-node'),
  createExplanationNode(
    'first-project-node',
    projects['first-project'].name,
    { x: 240 + 100, y: 90 },
    {
      description: projects['first-project'].description,
    },
  ),
  createEdge('first-project-breakpoint', 'javascript-learning-node'),

  createLearningNode(
    'javascript-learning-node',
    'JavaScript',
    { x: 600, y: 0 },
    {
      source: Position.Right,
      target: Position.Left,
    },
  ),

  createEdge(
    'javascript-learning-node',
    'first-project-functionality-breakpoint',
  ),
  ...newCreateInvisibleNode(
    'first-project-functionality-breakpoint',
    { x: 795, y: 12 },
    {
      source: Position.Left,
      target: Position.Top,
    },
  ),
  createEdge(
    'first-project-functionality-breakpoint-clone',
    'first-project-functionality-node',
  ),
  createExplanationNode(
    'first-project-functionality-node',
    projects['first-project-functionality'].name,
    { x: 350, y: -135 },
    {
      description: projects['first-project-functionality'].description,
      variant: 'right',
      positions: {
        target: Position.Right,
      },
    },
  ),
  createEdge(
    'first-project-functionality-breakpoint',
    'css-layouts-learning-node',
  ),

  createLearningNode(
    'css-layouts-learning-node',
    'CSS Layouts',
    { x: 600, y: 180 + 20 },
    {
      source: Position.Left,
      target: Position.Right,
    },
  ),

  createEdge('css-layouts-learning-node', 'second-project-breakpoint'),
  ...newCreateInvisibleNode(
    'second-project-breakpoint',
    { x: 400 + 65, y: 192 + 20 },
    {
      source: Position.Right,
      target: Position.Bottom,
    },
  ),
  createEdge('second-project-breakpoint-clone', 'second-project-node'),

  createExplanationNode(
    'second-project-node',
    projects['second-project'].name,
    { x: 430 + 65, y: 250 + 20 },
    {
      description: projects['second-project'].description,
      variant: 'left',
      positions: {
        target: Position.Left,
      },
    },
  ),

  createLearningNode(
    'git-learning-node',
    'Git',
    { x: 250, y: 180 + 20 },
    {
      source: Position.Left,
      target: Position.Right,
    },
  ),
  createEdge('second-project-breakpoint', 'git-learning-node'),

  createLearningNode(
    'bootstrap-learning-node',
    'Bootstrap',
    { x: -10, y: 180 + 20 },
    {
      source: Position.Left,
      target: Position.Right,
    },
  ),
  createEdge('git-learning-node', 'bootstrap-learning-node'),
  createEdge('bootstrap-learning-node', 'third-project-breakpoint'),

  /* now create a third project breakpoint */
  ...newCreateInvisibleNode(
    'third-project-breakpoint',
    { x: -50, y: 192 + 20 + 118 },
    {
      source: Position.Top,
      target: Position.Right,
    },
  ),
  createEdge('third-project-breakpoint-clone', 'third-project-node'),

  createExplanationNode(
    'third-project-node',
    projects['third-project'].name,
    { x: -10, y: 250 + 20 },
    {
      positions: {
        target: Position.Left,
      },
      variant: 'left',
      description: projects['third-project'].description,
    },
  ),

  /* now connect with CPanel learning node with third project node */
  createLearningNode(
    'cpanel-learning-node',
    'CPanel',
    { x: -99, y: 330 + 20 + 120 },
    {
      source: Position.Bottom,
      target: Position.Top,
    },
  ),
  createEdge('third-project-breakpoint', 'cpanel-learning-node'),

  /* now connect CPanel with node js learning node */
  createLearningNode(
    'node-js-learning-node',
    'Node.js',
    { x: 0, y: 570 },
    {
      source: Position.Right,
      target: Position.Left,
    },
  ),
  createEdge('cpanel-learning-node', 'node-js-learning-node'),

  /* now connect node js with express learning node */
  createLearningNode(
    'express-learning-node',
    'Express',
    { x: 170, y: 570 },
    {
      source: Position.Right,
      target: Position.Left,
    },
  ),
  createEdge('node-js-learning-node', 'express-learning-node'),

  /* now connect express with mongodb learning node y is same line, x need to right 100px */
  createLearningNode(
    'mongodb-learning-node',
    'MongoDB',
    { x: 335, y: 570 },
    {},
  ),
  createEdge('express-learning-node', 'mongodb-learning-node'),

  /* now connect with first real world project */
  ...newCreateInvisibleNode(
    'first-real-world-project-breakpoint',
    { x: 500, y: 570 + 12 },
    {
      source: Position.Left,
      target: Position.Bottom,
    },
  ),
  createEdge('mongodb-learning-node', 'first-real-world-project-breakpoint'),
  createEdge(
    'first-real-world-project-breakpoint-clone',
    'first-real-world-project-node',
  ),
  createExplanationNode(
    'first-real-world-project-node',
    projects['first-real-world-project'].name,
    { x: 100 - 20, y: 620 },
    {
      description: projects['first-real-world-project'].description,
      variant: 'right',
      positions: {
        target: Position.Right,
      },
    },
  ),

  /* now connect with mysql learning node with first real world project node */
  createLearningNode(
    'mysql-learning-node',
    'MySQL',
    { x: 550, y: 570 },
    {
      source: Position.Right,
      target: Position.Left,
    },
  ),
  createEdge('first-real-world-project-breakpoint', 'mysql-learning-node'),

  /* now connect with second real world project */
  createExplanationNode(
    'second-real-world-project-node',
    projects['second-real-world-project'].name,
    { x: 300, y: 420 },
    {
      description: projects['second-real-world-project'].description,
      variant: 'right',
      positions: {
        target: Position.Right,
      },
    },
  ),
  createEdge('mysql-learning-node', 'second-real-world-project-breakpoint'),
  ...newCreateInvisibleNode(
    'second-real-world-project-breakpoint',
    { x: 700, y: 570 + 12 },
    {
      source: Position.Left,
      target: Position.Top,
    },
  ),
  createEdge(
    'second-real-world-project-breakpoint-clone',
    'second-real-world-project-node',
  ),

  createExplanationNode(
    'side-projects-node',
    projects['side-projects'].name,
    { x: 500 + 50, y: 620 },
    {
      description: projects['side-projects'].description,
      width: 200,
    },
  ),
  /* now connect with tailwind */
  createLearningNode(
    'tailwind-learning-node',
    'Tailwind',
    { x: 700 - 20, y: 800 - 25 },
    {
      source: Position.Left,
      target: Position.Right,
    },
  ),
  createEdge('second-real-world-project-breakpoint', 'tailwind-learning-node'),

  /* now connect with react learning node */
  createLearningNode(
    'react-learning-node',
    'React',
    { x: 500, y: 800 - 25 },
    {
      source: Position.Left,
      target: Position.Right,
    },
  ),
  createEdge('tailwind-learning-node', 'react-learning-node'),

  /* now connect with my first portfolio */
  createExplanationNode(
    'my-first-portfolio-node',
    projects['my-first-portfolio'].name,
    { x: 500, y: 850 - 25 },
    {
      description: projects['my-first-portfolio'].description,
      variant: 'left',
      positions: {
        target: Position.Left,
      },
    },
  ),
  createEdge('react-learning-node', 'my-first-portfolio-breakpoint'),
  ...newCreateInvisibleNode(
    'my-first-portfolio-breakpoint',
    { x: 450, y: 800 + 12 - 25 },
    {
      source: Position.Right,
      target: Position.Bottom,
    },
  ),
  createEdge('my-first-portfolio-breakpoint-clone', 'my-first-portfolio-node'),

  /* now connect with linux learning node */
  createLearningNode(
    'linux-learning-node',
    'Linux',
    { x: 250, y: 800 - 25 },
    {
      source: Position.Left,
      target: Position.Right,
    },
  ),
  createEdge('my-first-portfolio-breakpoint', 'linux-learning-node'),

  /* now connect with docker learning node */
  createLearningNode(
    'docker-learning-node',
    'Docker',
    { x: -20, y: 800 - 25 },
    {
      source: Position.Left,
      target: Position.Right,
    },
  ),
  createEdge('linux-learning-node', 'docker-learning-node'),

  createEdge('docker-learning-node', 'business-portfolio-breakpoint'),
  ...newCreateInvisibleNode(
    'business-portfolio-breakpoint',
    { x: -50, y: 920 - 30 },
    {
      source: Position.Top,
      target: Position.Right,
    },
  ),
  createEdge('business-portfolio-breakpoint-clone', 'business-portfolio-node'),
  createExplanationNode(
    'business-portfolio-node',
    projects['business-portfolio'].name,
    { x: 60, y: 860 - 30 },
    {
      description: projects['business-portfolio'].description,
      variant: 'left',
      positions: {
        target: Position.Left,
      },
    },
  ),

  // websocket
  createEdge('business-portfolio-breakpoint', 'websocket-learning-node'),
  createLearningNode(
    'websocket-learning-node',
    'WebSocket',
    { x: 0, y: 1020 - 40 },
    {
      source: Position.Right,
      target: Position.Left,
    },
  ),

  // webrtc
  createEdge('websocket-learning-node', 'webrtc-learning-node'),
  createLearningNode(
    'webrtc-learning-node',
    'WebRTC',
    { x: 250, y: 1020 - 40 },
    {
      source: Position.Right,
      target: Position.Left,
    },
  ),

  // redis
  createEdge('webrtc-learning-node', 'redis-learning-node'),
  createLearningNode(
    'redis-learning-node',
    'Redis',
    { x: 500, y: 1020 - 40 },
    {
      source: Position.Right,
      target: Position.Left,
    },
  ),

  // Fourth Project - Real Time Chat App
  createEdge('redis-learning-node', 'fourth-project-breakpoint'),
  ...newCreateInvisibleNode(
    'fourth-project-breakpoint',
    { x: 700, y: 1020 + 12 - 40 },
    {
      source: Position.Left,
      target: Position.Bottom,
    },
  ),
  createEdge('fourth-project-breakpoint-clone', 'fourth-project-node'),
  createExplanationNode(
    'fourth-project-node',
    projects['fourth-project'].name,
    { x: -50, y: 1080 - 40 },
    {
      description: projects['fourth-project'].description,
      variant: 'right',
      positions: {
        target: Position.Right,
      },
    },
  ),

  // VPS
  createEdge('fourth-project-breakpoint', 'vps-learning-node'),
  createLearningNode(
    'vps-learning-node',
    'VPS',
    { x: 800 - 20, y: 1150 - 65 },
    {
      source: Position.Bottom,
      target: Position.Top,
    },
  ),

  // my first job
  createEdge('vps-learning-node', 'my-first-job-breakpoint'),
  ...newCreateInvisibleNode(
    'my-first-job-breakpoint',
    { x: 841 - 20, y: 1422 - 65 },
    {
      source: Position.Top,
      target: Position.Left,
    },
  ),
  createEdge('my-first-job-breakpoint-clone', 'my-first-job-node'),
  createExplanationNode(
    'my-first-job-node',
    projects['my-first-job'].name,
    { x: 300 - 10, y: 1182 - 65 },
    {
      description: projects['my-first-job'].description,
      variant: 'right',
      block: 'special',
      positions: {
        target: Position.Right,
      },
    },
  ),

  // learn kubernetes
  createEdge('my-first-job-breakpoint', 'kubernetes-learning-node'),
  createLearningNode(
    'kubernetes-learning-node',
    'Kubernetes',
    { x: 800 - 22 - 20, y: 1700 - 70 },
    {
      source: Position.Left,
      target: Position.Top,
    },
  ),

  // learn datastructure and algorithm
  createEdge('kubernetes-learning-node', 'datastructure-learning-node'),
  createLearningNode(
    'datastructure-learning-node',
    'Data Structure and Algorithm',
    { x: 300, y: 1700 - 70 },
    {
      source: Position.Left,
      target: Position.Right,
    },
  ),

  // learn worker
  createEdge('datastructure-learning-node', 'worker-learning-node'),
  createLearningNode(
    'worker-learning-node',
    'Worker',
    { x: 100, y: 1250 - 55 },
    {
      source: Position.Left,
      target: Position.Right,
    },
  ),

  // learn nextjs
  createEdge('worker-learning-node', 'nextjs-learning-node'),
  createLearningNode(
    'nextjs-learning-node',
    'Next.js',
    { x: -50 + 25, y: 1350 - 80 },
    {
      source: Position.Right,
      target: Position.Left,
    },
  ),

  // learn typescript
  createEdge('nextjs-learning-node', 'typescript-learning-node'),
  createLearningNode(
    'typescript-learning-node',
    'TypeScript',
    { x: 50, y: 1430 - 80 },
    {
      source: Position.Left,
      target: Position.Right,
    },
  ),

  // learn nestjs
  createEdge('typescript-learning-node', 'nestjs-learning-node'),
  createLearningNode(
    'nestjs-learning-node',
    'Nest.js',
    { x: -50 + 25, y: 1510 - 80 },
    {
      source: Position.Right,
      target: Position.Left,
    },
  ),

  // learn graphql
  createEdge('nestjs-learning-node', 'graphql-learning-node'),
  createLearningNode(
    'graphql-learning-node',
    'GraphQL',
    { x: 50 + 10, y: 1600 - 80 },
    {
      source: Position.Left,
      target: Position.Right,
    },
  ),

  // learn devops
  createEdge('graphql-learning-node', 'devops-learning-node'),
  createLearningNode(
    'devops-learning-node',
    'DevOps',
    { x: -25, y: 1700 - 100 },
    {
      source: Position.Bottom,
      target: Position.Left,
    },
  ),

  /* my second job */
  createEdge('devops-learning-node', 'my-second-job-breakpoint'),
  ...newCreateInvisibleNode(
    'my-second-job-breakpoint',
    { x: 500 - 100, y: 1760 - 70 },
    {
      source: Position.Left,
      target: Position.Bottom,
    },
  ),
  createEdge('my-second-job-breakpoint-clone', 'my-second-job-node'),
  createExplanationNode(
    'my-second-job-node',
    projects['my-second-job'].name,
    { x: -16, y: 1820 - 70 },
    {
      description: projects['my-second-job'].description,
      block: 'special',
      width: 800,
      positions: {
        target: Position.Top,
      },
    },
  ),

  // continue learning
  createEdge('my-second-job-node', 'continue-learning-node'),
  createExplanationNode(
    'continue-learning-node',
    projects['continue-learning'].name,
    { x: 192, y: 2150 - 100 },
    {
      description: projects['continue-learning'].description,
      block: 'special',
    },
  ),
]

const nodes = nodesAndEdges.filter((node) => node._type === 'node')
const edges = nodesAndEdges.filter((edge) => edge._type === 'edge')

export { edges, nodes }

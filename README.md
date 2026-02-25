# Xai - Intelligence Workspace

A high-fidelity interactive product experience prototype for Xai, demonstrating the transformation of raw data into actionable insights using advanced motion, 3D visuals, and a polished UI/UX.

## 🚀 Live Demo
[View Live Site](https://raco-ai-task.vercel.app/)

## 🛠 Technology Stack
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Vanilla CSS Modules (Custom Design System)
- **3D Engine**: Three.js / React Three Fiber / Drei
- **Animation**: Framer Motion & GSAP (ScrollTrigger)
- **Icons**: Lucide React

## 💡 Key Design & Interaction Decisions

### 1. 3D Particle Hero
We used an instanced mesh of 2,000 particles controlled via `useFrame` in React Three Fiber to represent unstructured data. This creates a high-performance, dynamic background that establishes the "Intelligence" theme immediately.

### 2. The Crystallization Moment
In the "Signature" section, we implemented a scroll-triggered lerp between random noise and a geometric icosahedron. This was achieved by:
- Using GSAP ScrollTrigger to map scroll progress (0-1).
- Lerp-ing vertex positions of an instanced mesh in a custom `useFrame` loop.
- This serves as a powerful metaphor for data "crystallizing" into strategy.

### 3. Dashboard Parallax
The Dashboard Preview uses Framer Motion's `whileInView` with a 3D rotation (`rotateX: 10`) to create a floating "window" effect that feels tactile and modern.

- **Design Philosophy**: Code-First Design (System articulated in the Product Documentation)


## 💻 Getting Started

### Prerequisites
- Node.js 18.x or later
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/abu-abdullah22/raco-ai-task.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) to see the result.

## 🏗 Build & Deployment
To create a production build:
```bash
npm run build
```
The project is optimized for deployment on **Vercel**.

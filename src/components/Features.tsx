import React from 'react';
import { 
  BoltIcon, 
  LightBulbIcon, 
  PaintBrushIcon, 
  RocketLaunchIcon, 
  CommandLineIcon,
  SparklesIcon 
} from '@heroicons/react/24/outline';

interface Feature {
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

const features: Feature[] = [
  {
    name: 'Lightning Fast',
    description: 'Local templates for instant scaffolding. No network downloads, no waiting. Get your project up and running in seconds.',
    icon: BoltIcon,
    color: 'text-yellow-600 bg-yellow-100',
  },
  {
    name: 'Smart Prompts',
    description: 'Guided setup with intelligent defaults. The CLI asks the right questions and provides sensible suggestions.',
    icon: LightBulbIcon,
    color: 'text-purple-600 bg-purple-100',
  },
  {
    name: 'Variable Templating',
    description: 'Dynamic file and content generation. Customize your project structure with powerful templating variables.',
    icon: PaintBrushIcon,
    color: 'text-pink-600 bg-pink-100',
  },
  {
    name: 'Deploy Ready',
    description: 'Built-in support for Vercel, Netlify, and Cloudflare Pages. Go from development to production seamlessly.',
    icon: RocketLaunchIcon,
    color: 'text-primary-600 bg-primary-100',
  },
  {
    name: 'Modern Stack',
    description: 'React 18, TypeScript, Vite, custom CSS, and more. Built with the latest and greatest web technologies.',
    icon: CommandLineIcon,
    color: 'text-secondary-600 bg-secondary-100',
  },
  {
    name: 'AI Integration',
    description: 'Built-in Gemini CLI support for generating custom components, sample data, and project customization.',
    icon: SparklesIcon,
    color: 'text-indigo-600 bg-indigo-100',
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container-max section-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg-text-5xl font-bold text-gray-900 mb-6">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              create-projex
            </span>
            ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Designed for modern developers who value speed, efficiency, and best practices. 
            Every feature is crafted to enhance your development workflow.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md-grid-cols-2 lg-grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.name}
              className="group p-8 rounded-2xl border border-gray-200 hover-border-primary-200 hover-shadow-lg transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex p-3 rounded-xl ${feature.color} mb-6`}>
                <feature.icon className="h-6 w-6" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover-text-primary-600 transition-colors">
                {feature.name}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md-grid-cols-4 gap-8 text-center">
          <div className="animate-fade-up" style={{ animationDelay: '0.8s' }}>
            <div className="text-3xl lg-text-4xl font-bold text-primary-600 mb-2">3</div>
            <div className="text-gray-600">Templates</div>
          </div>
          <div className="animate-fade-up" style={{ animationDelay: '0.9s' }}>
            <div className="text-3xl lg-text-4xl font-bold text-primary-600 mb-2">⚡</div>
            <div className="text-gray-600">Lightning Fast</div>
          </div>
          <div className="animate-fade-up" style={{ animationDelay: '1.0s' }}>
            <div className="text-3xl lg-text-4xl font-bold text-primary-600 mb-2">🚀</div>
            <div className="text-gray-600">Deploy Ready</div>
          </div>
          <div className="animate-fade-up" style={{ animationDelay: '1.1s' }}>
            <div className="text-3xl lg-text-4xl font-bold text-primary-600 mb-2">🤖</div>
            <div className="text-gray-600">AI Powered</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

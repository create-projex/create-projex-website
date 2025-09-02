import React from 'react';
import { 
  CodeBracketIcon, 
  GlobeAltIcon, 
  DocumentTextIcon,
  ArrowTopRightOnSquareIcon,
  StarIcon 
} from '@heroicons/react/24/outline';

interface Template {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  tags: string[];
  features: string[];
  demoUrl?: string;
  popular?: boolean;
}

const templates: Template[] = [
  {
    id: 'portfolio-react',
    name: 'Portfolio React',
    description: 'Professional portfolio website built with React 18, TypeScript, and custom CSS. Perfect for developers and designers.',
    icon: CodeBracketIcon,
    color: 'from-primary-500 to-primary-600',
    tags: ['React 18', 'TypeScript', 'Vite', 'Custom CSS'],
    features: [
      'Dark/Light mode toggle',
      'Responsive design',
      'Optional blog section',
      'Scroll animations',
      'Google Analytics integration'
    ],
    popular: true,
  },
  {
    id: 'landing-page',
    name: 'Landing Page',
    description: 'Modern product landing page with customizable branding, newsletter integration, and smooth animations.',
    icon: GlobeAltIcon,
    color: 'from-secondary-500 to-secondary-600',
    tags: ['React 18', 'TypeScript', 'Vite', 'Custom CSS'],
    features: [
      'Customizable brand colors',
      'Newsletter signup integration',
      'Smooth scroll animations',
      'Fully responsive design',
      'Performance optimized'
    ],
  },
  {
    id: 'personal-blog',
    name: 'Personal Blog',
    description: 'Content-focused blog with MDX support, built with Astro for optimal performance and SEO.',
    icon: DocumentTextIcon,
    color: 'from-purple-500 to-purple-600',
    tags: ['Astro', 'MDX', 'Tailwind CSS', 'TypeScript'],
    features: [
      'MDX for rich content',
      'Tag system and pagination',
      'Dark mode support',
      'Comments system (Giscus/Disqus)',
      'RSS feed generation',
      'SEO optimized'
    ],
  },
];

const Templates: React.FC = () => {
  return (
    <section id="templates" className="py-20 bg-gray-50">
      <div className="container-max section-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg-text-5xl font-bold text-gray-900 mb-6">
            Choose Your{' '}
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Starting Point
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Production-ready templates built with modern technologies and best practices. 
            Each template is carefully crafted and regularly updated.
          </p>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 lg-grid-cols-3 gap-8">
          {templates.map((template, index) => (
            <div
              key={template.id}
              className={`relative bg-white rounded-2xl border border-gray-200 hover-border-primary-200 hover-shadow-xl transition-all duration-300 overflow-hidden animate-fade-up ${
                template.popular ? 'ring-2 ring-primary-200' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {template.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                    <StarIcon className="h-3 w-3" />
                    Popular
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${template.color} text-white mb-6`}>
                  <template.icon className="h-6 w-6" />
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{template.name}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{template.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {template.tags.map((tag) => (
                    <span
                      key={tag}
                      className="tag-center px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-3">Features:</h4>
                  <ul className="space-y-2">
                    {template.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button 
                    className="flex-1 bg-gray-900 hover-bg-gray-800 text-white px-4 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2"
                    onClick={() => navigator.clipboard.writeText(`npm create projex@latest -- --template ${template.id} --yes`)}
                  >
                    Copy Command
                  </button>
                  {template.demoUrl && (
                    <button className="px-4 py-3 border border-gray-300 hover-border-gray-400 text-gray-700 rounded-lg transition-colors duration-200 flex items-center gap-2">
                      <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                      Demo
                    </button>
                  )}
                </div>
              </div>

              {/* Command Preview */}
              <div className="bg-gray-900 text-gray-300 p-4 font-mono text-sm">
                <span className="text-gray-500">$</span> npm create projex@latest -- --template {template.id}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Can't find what you're looking for? We're always adding new templates!
          </p>
          <a
            href="https://github.com/chhedadhruv/create-projex/discussions"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Request a Template
            <ArrowTopRightOnSquareIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Templates;

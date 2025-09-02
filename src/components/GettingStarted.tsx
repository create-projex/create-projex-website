import React, { useState } from 'react';
import { 
  ClipboardDocumentIcon,
  CheckIcon,
  CommandLineIcon,
  CogIcon,
  RocketLaunchIcon,
  PlayIcon
} from '@heroicons/react/24/outline';

interface Step {
  id: number;
  title: string;
  description: string;
  command?: string;
  icon: React.ComponentType<{ className?: string }>;
  details: string[];
}

const steps: Step[] = [
  {
    id: 1,
    title: 'Install & Create',
    description: 'Run the create command to start scaffolding your new project',
    command: 'npm create projex@latest',
    icon: CommandLineIcon,
    details: [
      'No global installation required',
      'Always uses the latest version',
      'Works with npm, yarn, or pnpm'
    ]
  },
  {
    id: 2,
    title: 'Choose Template',
    description: 'Select from our curated collection of modern templates',
    icon: CogIcon,
    details: [
      'Portfolio React - Professional portfolio',
      'Landing Page - Product marketing site',
      'Personal Blog - Content-focused blog'
    ]
  },
  {
    id: 3,
    title: 'Customize',
    description: 'Answer guided prompts to personalize your project',
    icon: PlayIcon,
    details: [
      'Project name and description',
      'Personal information (name, email, etc.)',
      'Feature toggles (dark mode, analytics, etc.)',
      'Deployment preferences'
    ]
  },
  {
    id: 4,
    title: 'Deploy',
    description: 'Push to production with built-in deployment support',
    icon: RocketLaunchIcon,
    details: [
      'Vercel - Zero-config deployment',
      'Netlify - Git-based workflows',
      'Cloudflare Pages - Edge performance'
    ]
  }
];

const examples = [
  {
    title: 'Interactive Mode',
    description: 'Guided setup with smart defaults',
    command: 'npm create projex@latest',
    output: `✨ Welcome to create-projex!
? Project name: › my-awesome-project
? Choose a template: › Portfolio React
? Your full name: › John Doe
? Enable dark mode? › Yes
? Include blog section? › No
? Deployment target: › Vercel

🚀 Creating project...
✅ Project created successfully!`
  },
  {
    title: 'Non-Interactive Mode',
    description: 'Perfect for automation and CI/CD',
    command: `npm create projex@latest -- \\
  --template portfolio-react \\
  --name my-portfolio \\
  --fullName "John Doe" \\
  --deploy vercel \\
  --yes`,
    output: `🚀 Scaffolding portfolio-react template...
📦 Installing dependencies...
🎨 Applying customizations...
✅ Ready to go! Run 'npm run dev' to start.`
  }
];

const GettingStarted: React.FC = () => {
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);
  const [activeExample, setActiveExample] = useState(0);

  const copyToClipboard = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedCommand(text);
    setTimeout(() => setCopiedCommand(null), 2000);
  };

  return (
    <section id="getting-started" className="py-20 bg-white">
      <div className="container-max section-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg-text-5xl font-bold text-gray-900 mb-6">
            Get Started in{' '}
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              4 Simple Steps
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From zero to deployed in minutes. Our guided setup makes it easy to create 
            professional web projects without the complexity.
          </p>
        </div>

        {/* Quick Start */}
        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 mb-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">🚀 Quick Start</h3>
          <p className="text-gray-600 mb-6">Get up and running in 30 seconds</p>
          
          <div className="bg-gray-900 text-gray-100 p-6 rounded-xl max-w-md mx-auto relative">
            <div className="font-mono text-left">
              <span className="text-gray-400">$</span> npm create projex@latest
            </div>
            <button
              onClick={() => copyToClipboard('npm create projex@latest')}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              {copiedCommand === 'npm create projex@latest' ? (
                <CheckIcon className="h-5 w-5 text-green-400" />
              ) : (
                <ClipboardDocumentIcon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md-grid-cols-2 lg-grid-cols-4 gap-8 mb-20">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="text-center animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white mb-4">
                  <step.icon className="h-8 w-8" />
                </div>
                <div className="step-badge">
                  {step.id}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 mb-4">{step.description}</p>
              
              {step.command && (
                <div className="bg-gray-100 text-gray-800 px-3 py-2 rounded-lg font-mono text-sm mb-4">
                  {step.command}
                </div>
              )}
              
              <ul className="text-sm text-gray-600 space-y-1">
                {step.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 flex-shrink-0"></div>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Examples */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">Usage Examples</h3>
          
          <div className="flex justify-center mb-8">
            <div className="examples-buttons">
              {examples.map((example, index) => (
                <button
                  key={index}
                  onClick={() => setActiveExample(index)}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    activeExample === index
                      ? 'bg-white text-primary-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {example.title}
                </button>
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
              <div className="border-b border-gray-200 p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {examples[activeExample].title}
                </h4>
                <p className="text-gray-600">{examples[activeExample].description}</p>
              </div>
              
              <div className="grid md-grid-cols-2 gap-0">
                {/* Command */}
                <div className="bg-gray-50 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h5 className="font-medium text-gray-900">Command</h5>
                    <button
                      onClick={() => copyToClipboard(examples[activeExample].command)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      {copiedCommand === examples[activeExample].command ? (
                        <CheckIcon className="h-4 w-4 text-green-600" />
                      ) : (
                        <ClipboardDocumentIcon className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                  <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                    {examples[activeExample].command}
                  </div>
                </div>
                
                {/* Output */}
                <div className="p-6">
                  <h5 className="font-medium text-gray-900 mb-4">Output</h5>
                  <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm whitespace-pre-line">
                    {examples[activeExample].output}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GettingStarted;

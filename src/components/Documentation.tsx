import React, { useState } from 'react';
import { 
  CommandLineIcon,
  DocumentTextIcon,
  CogIcon,
  ChevronDownIcon,
  ClipboardDocumentIcon,
  CheckIcon
} from '@heroicons/react/24/outline';

interface Command {
  name: string;
  description: string;
  usage: string;
  options?: { flag: string; description: string; type?: string }[];
  examples?: string[];
}

interface Option {
  flag: string;
  description: string;
  type?: string;
  default?: string;
}

const commands: Command[] = [
  {
    name: 'create-projex',
    description: 'Create a new project (default command)',
    usage: 'create-projex [project-name] [options]',
    examples: [
      'create-projex',
      'create-projex my-app',
      'create-projex my-portfolio --template portfolio-react --yes'
    ]
  },
  {
    name: 'templates list',
    description: 'List all available templates',
    usage: 'create-projex templates list',
    examples: ['create-projex templates list']
  },
  {
    name: 'doctor',
    description: 'Check system requirements and setup',
    usage: 'create-projex doctor',
    examples: ['create-projex doctor']
  }
];

const globalOptions: Option[] = [
  { flag: '-t, --template <id>', description: 'Template ID to use', type: 'string' },
  { flag: '-n, --name <name>', description: 'Project name', type: 'string' },
  { flag: '-d, --dir <path>', description: 'Output directory', type: 'string' },
  { flag: '-y, --yes', description: 'Skip all prompts and use defaults', type: 'boolean' },
  { flag: '--non-interactive', description: 'Fail if any required input is missing', type: 'boolean' },
  { flag: '--deploy <target>', description: 'Deployment target', type: 'vercel|netlify|cloudflare|none' },
];

const templateOptions: Option[] = [
  { flag: '--fullName <name>', description: 'Your full name', type: 'string' },
  { flag: '--title <title>', description: 'Your professional title', type: 'string' },
  { flag: '--email <email>', description: 'Your email address', type: 'string' },
  { flag: '--github <username>', description: 'GitHub username', type: 'string' },
  { flag: '--linkedin <username>', description: 'LinkedIn username', type: 'string' },
  { flag: '--darkMode <yes|no>', description: 'Include dark mode toggle', type: 'boolean', default: 'yes' },
  { flag: '--blog <yes|no>', description: 'Include blog section', type: 'boolean', default: 'no' },
  { flag: '--animations <yes|no>', description: 'Include scroll animations', type: 'boolean', default: 'yes' },
  { flag: '--analytics <yes|no>', description: 'Include Google Analytics', type: 'boolean', default: 'no' },
];

const Documentation: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['commands']));
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(section)) {
      newExpanded.delete(section);
    } else {
      newExpanded.add(section);
    }
    setExpandedSections(newExpanded);
  };

  const copyToClipboard = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const Section: React.FC<{ 
    id: string; 
    title: string; 
    icon: React.ComponentType<{ className?: string }>;
    children: React.ReactNode;
  }> = ({ id, title, icon: Icon, children }) => {
    const isExpanded = expandedSections.has(id);
    
    return (
      <div className="border border-gray-200 rounded-xl overflow-hidden">
        <button
          onClick={() => toggleSection(id)}
          className="w-full flex items-center justify-between p-6 bg-gray-50 hover:bg-gray-100 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Icon className="h-5 w-5 text-primary-600" />
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          </div>
          <ChevronDownIcon 
            className={`h-5 w-5 text-gray-500 transition-transform ${
              isExpanded ? 'rotate-180' : ''
            }`} 
          />
        </button>
        {isExpanded && (
          <div className="p-6 bg-white">
            {children}
          </div>
        )}
      </div>
    );
  };

  return (
    <section id="docs" className="py-20 bg-gray-50">
      <div className="container-max section-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg-text-5xl font-bold text-gray-900 mb-6">
            Complete{' '}
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Documentation
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about using create-projex, from basic usage 
            to advanced configuration options.
          </p>
        </div>

        {/* Documentation Sections */}
        <div className="max-w-4xl mx-auto space-y-6">
          
          {/* Commands Section */}
          <Section id="commands" title="Commands" icon={CommandLineIcon}>
            <div className="space-y-8">
              {commands.map((command) => (
                <div key={command.name} className="border-l-4 border-primary-200 pl-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{command.name}</h4>
                  <p className="text-gray-600 mb-4">{command.description}</p>
                  
                  <div className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-4 relative">
                    <div className="font-mono text-sm">{command.usage}</div>
                    <button
                      onClick={() => copyToClipboard(command.usage)}
                      className="absolute top-3 right-3 text-gray-400 hover:text-white"
                    >
                      {copiedText === command.usage ? (
                        <CheckIcon className="h-4 w-4 text-green-400" />
                      ) : (
                        <ClipboardDocumentIcon className="h-4 w-4" />
                      )}
                    </button>
                  </div>

                  {command.examples && (
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Examples:</h5>
                      <div className="space-y-2">
                        {command.examples.map((example, index) => (
                          <div key={index} className="bg-gray-100 p-3 rounded-lg relative">
                            <code className="text-sm text-gray-800">{example}</code>
                            <button
                              onClick={() => copyToClipboard(example)}
                              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                            >
                              {copiedText === example ? (
                                <CheckIcon className="h-3 w-3 text-green-600" />
                              ) : (
                                <ClipboardDocumentIcon className="h-3 w-3" />
                              )}
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Section>

          {/* Global Options Section */}
          <Section id="global-options" title="Global Options" icon={CogIcon}>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Option</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Type</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {globalOptions.map((option, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="py-3 px-4 font-mono text-sm text-primary-600">{option.flag}</td>
                      <td className="py-3 px-4 text-sm text-gray-600">
                        {option.type && (
                          <span className="bg-gray-100 px-2 py-1 rounded text-xs">
                            {option.type}
                          </span>
                        )}
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-700">{option.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          {/* Template-Specific Options Section */}
          <Section id="template-options" title="Template-Specific Options" icon={DocumentTextIcon}>
            <p className="text-gray-600 mb-6">
              These options are available for specific templates and can be passed via CLI or answered interactively.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Option</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Default</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {templateOptions.map((option, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="py-3 px-4 font-mono text-sm text-primary-600">{option.flag}</td>
                      <td className="py-3 px-4 text-sm text-gray-600">
                        {option.default && (
                          <span className="bg-secondary-100 text-secondary-700 px-2 py-1 rounded text-xs">
                            {option.default}
                          </span>
                        )}
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-700">{option.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          {/* Requirements Section */}
          <Section id="requirements" title="System Requirements" icon={CogIcon}>
            <div className="grid md-grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="text-2xl font-bold text-primary-600 mb-2">Node.js</div>
                <div className="text-gray-600">≥18.17.0</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="text-2xl font-bold text-primary-600 mb-2">npm</div>
                <div className="text-gray-600">≥8.0.0</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="text-2xl font-bold text-primary-600 mb-2">Git</div>
                <div className="text-gray-600">Optional</div>
              </div>
            </div>
          </Section>
        </div>
      </div>
    </section>
  );
};

export default Documentation;

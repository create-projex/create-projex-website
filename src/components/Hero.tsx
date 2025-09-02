import React from 'react';
import { ChevronRightIcon, RocketLaunchIcon, CommandLineIcon } from '@heroicons/react/24/outline';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-primary-50 to-white pt-20 pb-16 lg-pt-32 lg-pb-20">
      <div className="container-max section-padding">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <RocketLaunchIcon className="h-4 w-4" />
            <span>v0.2.0 - Now with AI Integration</span>
          </div>

          {/* Hero Title */}
          <h1 className="text-5xl lg-text-7xl font-bold text-gray-900 mb-6 animate-fade-up">
            <span className="block">Scaffold Modern</span>
            <span className="block bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Web Projects
            </span>
            <span className="block">In Seconds</span>
          </h1>

          {/* Hero Subtitle */}
          <p className="text-xl lg-text-2xl text-gray-600 max-w-3xl mx-auto mb-10 animate-fade-up" style={{animationDelay: '0.2s'}}>
            A blazing-fast CLI tool to scaffold modern web projects with guided setup, 
            smart templates, and AI assistance. Get from zero to production in minutes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm-flex-row gap-4 justify-center items-center mb-12 animate-fade-up" style={{animationDelay: '0.4s'}}>
            <button className="btn-primary text-lg px-8 py-4 group">
              <CommandLineIcon className="h-5 w-5" />
              Get Started
              <ChevronRightIcon className="h-4 w-4 group-hover-translate-x-1 transition-transform" />
            </button>
            <button className="btn-secondary text-lg px-8 py-4">
              View Templates
            </button>
          </div>

          {/* Code Preview */}
          <div className="max-w-2xl mx-auto animate-fade-up" style={{animationDelay: '0.6s'}}>
            <div className="code-block text-left relative">
              <div className="flex items-center gap-2 mb-4 text-gray-400">
                <div className="flex gap-1">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-sm">Terminal</span>
              </div>
              <div className="font-mono">
                <div className="text-gray-400">$</div>
                <div className="text-secondary-400">npm create projex@latest</div>
                <div className="text-gray-500 text-sm mt-2">
                  ✨ Scaffolding modern web project...<br />
                  🎨 Setting up React + TypeScript + Vite...<br />
                  🚀 Ready to deploy!
                </div>
              </div>
              
              {/* Copy button */}
              <button 
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                onClick={() => navigator.clipboard.writeText('npm create projex@latest')}
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

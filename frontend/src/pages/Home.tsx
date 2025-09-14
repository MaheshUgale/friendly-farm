import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { CheckCircle, Users, Shield, Zap } from 'lucide-react';

const Home: React.FC = () => {
  const { user, isAuthenticated } = useAuth();

  const features = [
    {
      icon: Shield,
      title: 'Secure Authentication',
      description: 'JWT-based authentication with bcrypt password hashing'
    },
    {
      icon: Users,
      title: 'User Management',
      description: 'Complete user registration and profile management'
    },
    {
      icon: Zap,
      title: 'Fast Performance',
      description: 'Built with modern technologies for optimal speed'
    },
    {
      icon: CheckCircle,
      title: 'Production Ready',
      description: 'Clean architecture and best practices implemented'
    }
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
          Welcome to{' '}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            MyApp
          </span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          A full-stack application built with Express.js, MongoDB, React, and Tailwind CSS.
          Clean architecture, secure authentication, and modern design.
        </p>

        {isAuthenticated && user && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 max-w-md mx-auto">
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-6 h-6 text-green-600" />
              <div className="text-left">
                <h3 className="font-semibold text-green-800">Welcome back!</h3>
                <p className="text-sm text-green-700">
                  You're logged in as <span className="font-medium">{user.name}</span>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <feature.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Tech Stack */}
      <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
          Built With Modern Technologies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: 'Express.js', color: 'bg-gray-700' },
            { name: 'MongoDB', color: 'bg-green-600' },
            { name: 'React', color: 'bg-blue-500' },
            { name: 'Tailwind CSS', color: 'bg-cyan-500' }
          ].map((tech, index) => (
            <div key={index} className="text-center">
              <div className={`${tech.color} text-white px-4 py-2 rounded-lg font-medium text-sm`}>
                {tech.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
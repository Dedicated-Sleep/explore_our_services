import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Beaker, Code, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import MenuBar from '../components/MenuBar';

const environments = [
  {
    id: 'dev',
    name: 'Development',
    description: 'For testing new features and development',
    icon: <Code className="h-6 w-6" />,
    color: 'bg-emerald-500',
  },
  {
    id: 'qa',
    name: 'QA',
    description: 'For quality assurance and testing',
    icon: <Beaker className="h-6 w-6" />,
    color: 'bg-amber-500',
  },
  {
    id: 'prod',
    name: 'Production',
    description: 'Live environment for end users',
    icon: <Globe className="h-6 w-6" />,
    color: 'bg-blue-500',
  },
];

export default function ReferralEnvironments() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-brand-secondary">
      <MenuBar />
      <div className="max-w-4xl mx-auto p-4">
        <button
          onClick={() => navigate('/')}
          className="flex items-center text-gray-600 hover:text-gray-900 transition-colors mb-8"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to App Hub
        </button>

        <h1 className="text-3xl font-bold text-gray-900 mb-2">Referral System</h1>
        <p className="text-gray-600 mb-8">Select an environment to continue</p>

        <div className="grid md:grid-cols-3 gap-6">
          {environments.map((env) => (
            <motion.div
              key={env.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className={`${env.color} p-4`}>
                <div className="bg-white/20 w-fit p-2 rounded-lg">
                  {env.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{env.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{env.description}</p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-2 px-4 bg-brand-primary text-white rounded-lg hover:bg-brand-primary/90 transition-colors"
                  onClick={() => alert(`Navigating to ${env.name} environment`)}
                >
                  Launch
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { ArrowRight, Users, Calendar, Trophy, TrendingUp } from 'lucide-react';

interface HeroProps {
  onSectionChange: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onSectionChange }) => {
  const stats = [
    { label: 'Active Members', value: '150+', icon: Users },
    { label: 'Events Hosted', value: '45+', icon: Calendar },
    { label: 'Achievements', value: '28+', icon: Trophy },
    { label: 'Success Rate', value: '95%', icon: TrendingUp },
  ];

  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to <span className="text-yellow-400">ITFT</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            A centralized digital platform showcasing our vision, achievements, and activities. 
            Designed for transparency, visibility, and seamless public engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onSectionChange('events')}
              className="bg-yellow-500 text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span>Explore Events</span>
              <ArrowRight size={20} />
            </button>
            <button
              onClick={() => onSectionChange('members')}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-200 flex items-center justify-center space-x-2 hover:shadow-xl transform hover:-translate-y-1"
            >
              <span>Meet Our Team</span>
              <Users size={20} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                <Icon className="mx-auto mb-4 text-yellow-400" size={32} />
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
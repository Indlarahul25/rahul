import React from 'react';
import { Trophy, Award, Star, Medal, Target, Users } from 'lucide-react';

const Achievements: React.FC = () => {
  const achievements = [
    {
      id: 1,
      title: 'Best Innovation Award 2023',
      category: 'Innovation',
      recipient: 'ITFT Research Team',
      date: '2023-12-15',
      description: 'Recognized for groundbreaking research in AI-powered solutions',
      icon: Trophy,
      color: 'text-yellow-600 bg-yellow-100'
    },
    {
      id: 2,
      title: 'Community Impact Excellence',
      category: 'Community Service',
      recipient: 'Sarah Johnson',
      date: '2023-11-20',
      description: 'Outstanding contribution to local technology education programs',
      icon: Award,
      color: 'text-green-600 bg-green-100'
    },
    {
      id: 3,
      title: 'Technical Excellence Recognition',
      category: 'Technical Achievement',
      recipient: 'Michael Chen',
      date: '2023-10-10',
      description: 'Excellence in software development and system architecture',
      icon: Star,
      color: 'text-blue-600 bg-blue-100'
    },
    {
      id: 4,
      title: 'Leadership Excellence Award',
      category: 'Leadership',
      recipient: 'Emily Rodriguez',
      date: '2023-09-05',
      description: 'Exceptional leadership in project management and team coordination',
      icon: Medal,
      color: 'text-purple-600 bg-purple-100'
    },
    {
      id: 5,
      title: 'Research Publication Merit',
      category: 'Research',
      recipient: 'Dr. Lisa Wang',
      date: '2023-08-18',
      description: 'Published influential research in top-tier technology journals',
      icon: Target,
      color: 'text-red-600 bg-red-100'
    },
    {
      id: 6,
      title: 'Team Collaboration Award',
      category: 'Teamwork',
      recipient: 'Development Team',
      date: '2023-07-30',
      description: 'Outstanding collaboration on multi-departmental projects',
      icon: Users,
      color: 'text-indigo-600 bg-indigo-100'
    }
  ];

  const categories = ['All', 'Innovation', 'Community Service', 'Technical Achievement', 'Leadership', 'Research', 'Teamwork'];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Achievements & Recognition
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Celebrating the outstanding accomplishments of our members and organization
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 transition-all duration-200"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement) => {
            const Icon = achievement.icon;
            return (
              <div key={achievement.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 hover:-translate-y-1">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg ${achievement.color}`}>
                    <Icon size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {achievement.title}
                    </h3>
                    <div className="mb-3">
                      <span className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                        {achievement.category}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">
                      {achievement.description}
                    </p>
                    <div className="space-y-2">
                      <div className="text-sm">
                        <span className="font-medium text-gray-900">Recipient:</span>
                        <span className="text-gray-600 ml-1">{achievement.recipient}</span>
                      </div>
                      <div className="text-sm">
                        <span className="font-medium text-gray-900">Date:</span>
                        <span className="text-gray-600 ml-1">
                          {new Date(achievement.date).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Achievement Stats */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Achievement Statistics
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">28</div>
              <div className="text-gray-600">Total Awards</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">15</div>
              <div className="text-gray-600">Individual Recognitions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">8</div>
              <div className="text-gray-600">Team Awards</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">5</div>
              <div className="text-gray-600">Research Publications</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
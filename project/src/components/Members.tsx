import React, { useState } from 'react';
import { Users, Mail, Phone, Linkedin, Github, Award, Search } from 'lucide-react';

const Members: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const members = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      role: 'President',
      department: 'Computer Science',
      email: 'sarah.johnson@itft.org',
      phone: '+1 (555) 123-4567',
      image: 'https://images.pexels.com/photos/3781406/pexels-photo-3781406.jpeg?auto=compress&cs=tinysrgb&w=400',
      achievements: ['Best Research Paper 2023', 'Innovation Award'],
      social: { linkedin: '#', github: '#' }
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Vice President',
      department: 'Information Technology',
      email: 'michael.chen@itft.org',
      phone: '+1 (555) 234-5678',
      image: 'https://images.pexels.com/photos/3777946/pexels-photo-3777946.jpeg?auto=compress&cs=tinysrgb&w=400',
      achievements: ['Leadership Excellence', 'Community Impact Award'],
      social: { linkedin: '#', github: '#' }
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Secretary',
      department: 'Software Engineering',
      email: 'emily.rodriguez@itft.org',
      phone: '+1 (555) 345-6789',
      image: 'https://images.pexels.com/photos/3866555/pexels-photo-3866555.jpeg?auto=compress&cs=tinysrgb&w=400',
      achievements: ['Best Project 2023', 'Technical Excellence'],
      social: { linkedin: '#', github: '#' }
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'Treasurer',
      department: 'Data Science',
      email: 'david.kim@itft.org',
      phone: '+1 (555) 456-7890',
      image: 'https://images.pexels.com/photos/3799228/pexels-photo-3799228.jpeg?auto=compress&cs=tinysrgb&w=400',
      achievements: ['Financial Management Award', 'Strategic Planning'],
      social: { linkedin: '#', github: '#' }
    },
    {
      id: 5,
      name: 'Lisa Wang',
      role: 'Event Coordinator',
      department: 'Digital Marketing',
      email: 'lisa.wang@itft.org',
      phone: '+1 (555) 567-8901',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
      achievements: ['Event Excellence', 'Community Engagement'],
      social: { linkedin: '#', github: '#' }
    },
    {
      id: 6,
      name: 'James Taylor',
      role: 'Technical Lead',
      department: 'Cybersecurity',
      email: 'james.taylor@itft.org',
      phone: '+1 (555) 678-9012',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400',
      achievements: ['Security Innovation', 'Technical Mentorship'],
      social: { linkedin: '#', github: '#' }
    }
  ];

  const filteredMembers = members.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Team Members
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated professionals driving ITFT's mission forward
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search members..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Members Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="p-6">
                <div className="text-center mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover shadow-md"
                  />
                  <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-blue-600 font-medium">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.department}</p>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <Mail size={16} className="text-gray-400" />
                    <span className="text-sm text-gray-600">{member.email}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone size={16} className="text-gray-400" />
                    <span className="text-sm text-gray-600">{member.phone}</span>
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                    <Award size={16} className="mr-1" />
                    Recent Achievements
                  </h4>
                  <div className="space-y-1">
                    {member.achievements.map((achievement, index) => (
                      <span key={index} className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full mr-1 mb-1">
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-4">
                  <a
                    href={member.social.linkedin}
                    className="text-gray-400 hover:text-blue-600 transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href={member.social.github}
                    className="text-gray-400 hover:text-gray-800 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredMembers.length === 0 && (
          <div className="text-center py-12">
            <Users size={64} className="mx-auto text-gray-400 mb-4" />
            <p className="text-xl text-gray-600">No members found matching your search.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Members;
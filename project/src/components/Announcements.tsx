import React, { useState } from 'react';
import { Megaphone, Calendar, Pin, Bell, Plus, Edit, Trash2 } from 'lucide-react';

const Announcements: React.FC = () => {
  const [filter, setFilter] = useState('all');
  
  const announcements = [
    {
      id: 1,
      title: 'New Partnership with Tech Leaders',
      content: 'We are excited to announce our new strategic partnership with leading technology companies to enhance our research capabilities.',
      category: 'partnership',
      priority: 'high',
      date: '2024-01-25',
      pinned: true,
      author: 'Sarah Johnson'
    },
    {
      id: 2,
      title: 'Upcoming Annual Conference Registration',
      content: 'Registration is now open for our annual technology conference. Early bird pricing available until March 1st.',
      category: 'event',
      priority: 'medium',
      date: '2024-01-22',
      pinned: false,
      author: 'Michael Chen'
    },
    {
      id: 3,
      title: 'New Research Grant Awarded',
      content: 'ITFT has been awarded a significant research grant to advance AI and machine learning initiatives.',
      category: 'achievement',
      priority: 'high',
      date: '2024-01-20',
      pinned: true,
      author: 'Dr. Emily Rodriguez'
    },
    {
      id: 4,
      title: 'Monthly Newsletter Now Available',
      content: 'Our January newsletter featuring member spotlights, recent achievements, and upcoming events is now available.',
      category: 'general',
      priority: 'low',
      date: '2024-01-18',
      pinned: false,
      author: 'Lisa Wang'
    },
    {
      id: 5,
      title: 'Office Hours Schedule Update',
      content: 'Please note the updated office hours for faculty advisors effective February 1st.',
      category: 'update',
      priority: 'medium',
      date: '2024-01-15',
      pinned: false,
      author: 'David Kim'
    }
  ];

  const categories = [
    { value: 'all', label: 'All Announcements' },
    { value: 'partnership', label: 'Partnerships' },
    { value: 'event', label: 'Events' },
    { value: 'achievement', label: 'Achievements' },
    { value: 'general', label: 'General' },
    { value: 'update', label: 'Updates' }
  ];

  const filteredAnnouncements = announcements
    .filter(announcement => filter === 'all' || announcement.category === filter)
    .sort((a, b) => {
      if (a.pinned && !b.pinned) return -1;
      if (!a.pinned && b.pinned) return 1;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'partnership': return 'bg-blue-100 text-blue-800';
      case 'event': return 'bg-purple-100 text-purple-800';
      case 'achievement': return 'bg-yellow-100 text-yellow-800';
      case 'general': return 'bg-gray-100 text-gray-800';
      case 'update': return 'bg-indigo-100 text-indigo-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Announcements & Updates
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with the latest news, updates, and important announcements
          </p>
        </div>

        {/* Filter and Add Button */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 space-y-4 sm:space-y-0">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            {categories.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
          
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
            <Plus size={20} />
            <span>New Announcement</span>
          </button>
        </div>

        {/* Announcements List */}
        <div className="space-y-6">
          {filteredAnnouncements.map((announcement) => (
            <div key={announcement.id} className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ${announcement.pinned ? 'ring-2 ring-blue-200' : ''}`}>
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start space-x-4 flex-1">
                    {announcement.pinned && (
                      <Pin className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                    )}
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {announcement.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(announcement.category)}`}>
                          {announcement.category.charAt(0).toUpperCase() + announcement.category.slice(1)}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(announcement.priority)}`}>
                          {announcement.priority.charAt(0).toUpperCase() + announcement.priority.slice(1)} Priority
                        </span>
                        {announcement.pinned && (
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                            Pinned
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                      <Edit size={16} />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-red-600 transition-colors">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {announcement.content}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{new Date(announcement.date).toLocaleDateString()}</span>
                    </div>
                    <div>
                      By {announcement.author}
                    </div>
                  </div>
                  <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-800 font-medium">
                    <Bell size={14} />
                    <span>Subscribe to updates</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredAnnouncements.length === 0 && (
          <div className="text-center py-12">
            <Megaphone size={64} className="mx-auto text-gray-400 mb-4" />
            <p className="text-xl text-gray-600">No announcements found for the selected category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Announcements;
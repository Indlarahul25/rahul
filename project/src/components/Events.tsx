import React, { useState } from 'react';
import { Calendar, MapPin, Users, Clock, Filter, Plus, Edit, Trash2 } from 'lucide-react';

const Events: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [showAddForm, setShowAddForm] = useState(false);

  const events = [
    {
      id: 1,
      title: 'Annual Technology Summit',
      date: '2024-02-15',
      time: '09:00',
      location: 'Main Auditorium',
      attendees: 120,
      status: 'upcoming',
      description: 'Join us for our flagship technology summit featuring industry leaders.',
      image: 'https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 2,
      title: 'Workshop: AI & Machine Learning',
      date: '2024-01-28',
      time: '14:00',
      location: 'Lab 101',
      attendees: 45,
      status: 'completed',
      description: 'Hands-on workshop exploring the latest developments in AI and ML.',
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 3,
      title: 'Networking Mixer',
      date: '2024-02-20',
      time: '18:30',
      location: 'Conference Hall',
      attendees: 80,
      status: 'upcoming',
      description: 'Connect with fellow members and industry professionals.',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 4,
      title: 'Code Challenge Competition',
      date: '2024-01-20',
      time: '10:00',
      location: 'Virtual',
      attendees: 200,
      status: 'completed',
      description: 'Test your programming skills in our annual coding competition.',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  const filteredEvents = events.filter(event => 
    filter === 'all' || event.status === filter
  );

  const statusColors = {
    upcoming: 'bg-blue-100 text-blue-800',
    completed: 'bg-green-100 text-green-800',
    cancelled: 'bg-red-100 text-red-800'
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Events & Activities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with our latest events, workshops, and community activities
          </p>
        </div>

        {/* Filters and Management */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-4">
            <Filter size={20} className="text-gray-600" />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Events</option>
              <option value="upcoming">Upcoming</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          
          <button
            onClick={() => setShowAddForm(true)}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
          >
            <Plus size={20} />
            <span>Add Event</span>
          </button>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${event.image})` }}>
                <div className="h-full bg-black bg-opacity-20 flex items-end p-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[event.status as keyof typeof statusColors]}`}>
                    {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Calendar size={16} />
                    <span>{new Date(event.date).toLocaleDateString()}</span>
                    <Clock size={16} className="ml-2" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <MapPin size={16} />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Users size={16} />
                    <span>{event.attendees} attendees</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <button className="text-blue-600 hover:text-blue-800 font-medium">
                    View Details
                  </button>
                  <div className="flex space-x-2">
                    <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                      <Edit size={16} />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-red-600 transition-colors">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <Calendar size={64} className="mx-auto text-gray-400 mb-4" />
            <p className="text-xl text-gray-600">No events found for the selected filter.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Events;
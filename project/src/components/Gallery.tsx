import React, { useState } from 'react';
import { Images, Play, Download, Share2, Eye, Calendar } from 'lucide-react';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const galleryItems = [
    {
      id: 1,
      title: 'Annual Technology Summit 2023',
      type: 'image',
      category: 'events',
      date: '2023-12-15',
      src: 'https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Highlights from our flagship technology conference'
    },
    {
      id: 2,
      title: 'AI Workshop Series',
      type: 'video',
      category: 'workshops',
      date: '2023-11-20',
      src: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Interactive sessions on machine learning fundamentals'
    },
    {
      id: 3,
      title: 'Research Team Recognition',
      type: 'image',
      category: 'achievements',
      date: '2023-10-10',
      src: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Celebrating our research team\'s outstanding contributions'
    },
    {
      id: 4,
      title: 'Community Outreach Program',
      type: 'image',
      category: 'community',
      date: '2023-09-25',
      src: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Engaging with local schools and communities'
    },
    {
      id: 5,
      title: 'Innovation Lab Tour',
      type: 'video',
      category: 'facilities',
      date: '2023-09-15',
      src: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Virtual tour of our state-of-the-art facilities'
    },
    {
      id: 6,
      title: 'Networking Event 2023',
      type: 'image',
      category: 'events',
      date: '2023-08-30',
      src: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Building connections within the tech community'
    },
    {
      id: 7,
      title: 'Student Project Showcase',
      type: 'image',
      category: 'projects',
      date: '2023-08-15',
      src: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Showcasing innovative student projects and ideas'
    },
    {
      id: 8,
      title: 'Coding Competition Finals',
      type: 'video',
      category: 'competitions',
      date: '2023-07-20',
      src: 'https://images.pexels.com/photos/574073/pexels-photo-574073.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Intense moments from our annual coding competition'
    }
  ];

  const categories = [
    { value: 'all', label: 'All Media' },
    { value: 'events', label: 'Events' },
    { value: 'workshops', label: 'Workshops' },
    { value: 'achievements', label: 'Achievements' },
    { value: 'community', label: 'Community' },
    { value: 'facilities', label: 'Facilities' },
    { value: 'projects', label: 'Projects' },
    { value: 'competitions', label: 'Competitions' }
  ];

  const filteredItems = galleryItems.filter(item => 
    filter === 'all' || item.category === filter
  );

  const openModal = (item: any) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Media Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our collection of photos and videos showcasing ITFT activities and achievements
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setFilter(category.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                filter === category.value
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer"
              onClick={() => openModal(item)}
            >
              <div className="aspect-w-4 aspect-h-3 relative">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                  {item.type === 'video' ? (
                    <Play className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={48} />
                  ) : (
                    <Eye className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={48} />
                  )}
                </div>
                <div className="absolute top-2 right-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    item.type === 'video' 
                      ? 'bg-red-500 text-white' 
                      : 'bg-blue-500 text-white'
                  }`}>
                    {item.type === 'video' ? 'Video' : 'Photo'}
                  </span>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex items-center text-xs text-gray-500">
                  <Calendar size={12} className="mr-1" />
                  {new Date(item.date).toLocaleDateString()}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <Images size={64} className="mx-auto text-gray-400 mb-4" />
            <p className="text-xl text-gray-600">No media found for the selected category.</p>
          </div>
        )}

        {/* Modal */}
        {selectedItem && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-full overflow-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {selectedItem.title}
                    </h3>
                    <p className="text-gray-600">{selectedItem.description}</p>
                  </div>
                  <button
                    onClick={closeModal}
                    className="text-gray-400 hover:text-gray-600 p-2"
                  >
                    ×
                  </button>
                </div>
                
                <div className="mb-6">
                  <img
                    src={selectedItem.src}
                    alt={selectedItem.title}
                    className="w-full h-96 object-cover rounded-lg"
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Calendar size={16} />
                    <span>{new Date(selectedItem.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex space-x-2">
                    <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors">
                      <Download size={16} />
                      <span>Download</span>
                    </button>
                    <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors">
                      <Share2 size={16} />
                      <span>Share</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
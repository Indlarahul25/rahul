import React, { useState } from 'react';
import { BarChart3, TrendingUp, Users, Calendar, Award, Target, PieChart, Activity } from 'lucide-react';

const Results: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const metrics = [
    { label: 'Member Satisfaction', value: '95%', change: '+5%', icon: Users, color: 'text-green-600' },
    { label: 'Event Attendance', value: '87%', change: '+12%', icon: Calendar, color: 'text-blue-600' },
    { label: 'Project Success Rate', value: '92%', change: '+8%', icon: Target, color: 'text-purple-600' },
    { label: 'Community Impact Score', value: '89%', change: '+15%', icon: Award, color: 'text-yellow-600' }
  ];

  const monthlyData = [
    { month: 'Jan', events: 4, attendance: 85, satisfaction: 92 },
    { month: 'Feb', events: 6, attendance: 88, satisfaction: 94 },
    { month: 'Mar', events: 5, attendance: 90, satisfaction: 91 },
    { month: 'Apr', events: 7, attendance: 87, satisfaction: 95 },
    { month: 'May', events: 8, attendance: 92, satisfaction: 96 },
    { month: 'Jun', events: 6, attendance: 89, satisfaction: 93 }
  ];

  const projectResults = [
    { name: 'AI Research Initiative', progress: 95, status: 'Completed', impact: 'High' },
    { name: 'Community Outreach Program', progress: 78, status: 'In Progress', impact: 'Medium' },
    { name: 'Technology Workshop Series', progress: 100, status: 'Completed', impact: 'High' },
    { name: 'Digital Platform Development', progress: 85, status: 'In Progress', impact: 'High' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Results & Analytics
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Track our performance and impact through comprehensive data insights
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-100 p-1 rounded-lg">
            {[
              { id: 'overview', label: 'Overview', icon: BarChart3 },
              { id: 'projects', label: 'Projects', icon: Target },
              { id: 'trends', label: 'Trends', icon: TrendingUp },
              { id: 'analytics', label: 'Analytics', icon: Activity }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  <Icon size={16} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Key Metrics */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {metrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                      <Icon className="text-gray-400" size={24} />
                      <span className={`text-sm font-medium ${metric.color}`}>
                        {metric.change}
                      </span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      {metric.value}
                    </div>
                    <div className="text-sm text-gray-600">
                      {metric.label}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Visual Chart Placeholder */}
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <PieChart size={64} className="mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Performance Dashboard</h3>
              <p className="text-gray-600">Interactive charts and visualizations would be displayed here</p>
            </div>
          </div>
        )}

        {/* Projects Tab */}
        {activeTab === 'projects' && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900">Project Progress</h3>
            {projectResults.map((project, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{project.name}</h4>
                    <div className="flex items-center space-x-4 mt-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        project.status === 'Completed' 
                          ? 'bg-green-100 text-green-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {project.status}
                      </span>
                      <span className="text-sm text-gray-600">Impact: {project.impact}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">{project.progress}%</div>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Trends Tab */}
        {activeTab === 'trends' && (
          <div className="space-y-8">
            <h3 className="text-xl font-semibold text-gray-900">Monthly Trends</h3>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Month</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Events</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Attendance %</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Satisfaction %</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {monthlyData.map((data, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {data.month}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {data.events}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {data.attendance}%
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {data.satisfaction}%
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="text-center py-12">
            <Activity size={64} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Advanced Analytics</h3>
            <p className="text-gray-600">Detailed analytics and insights would be integrated here</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Results;
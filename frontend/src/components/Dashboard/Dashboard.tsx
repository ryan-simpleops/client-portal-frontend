import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { mockForms, mockSubmissions } from '../../data/mockData';
import { Submission, Form } from '../../types';
import './Dashboard.css';

const Dashboard: React.FC = () => {
  const [stats, setStats] = useState({
    totalSubmissions: 0,
    recentSubmissions: 0,
  });
  const [recentSubmissions, setRecentSubmissions] = useState<Submission[]>([]);
  const [recentForms, setRecentForms] = useState<Form[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = () => {
    setLoading(true);

    // Simulate loading delay
    setTimeout(() => {
      setStats({
        totalSubmissions: mockSubmissions.length,
        recentSubmissions: mockSubmissions.filter(s => {
          const dayAgo = new Date();
          dayAgo.setDate(dayAgo.getDate() - 1);
          return new Date(s.createdAt) >= dayAgo;
        }).length,
      });
      setRecentSubmissions(mockSubmissions.slice(0, 10));
      setRecentForms(mockForms);
      setLoading(false);
    }, 300);
  };

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      pending: '#f59e0b',
      'in-progress': '#3b82f6',
      completed: '#10b981',
      rejected: '#ef4444',
      'on-hold': '#6b7280',
    };
    return colors[status] || '#6b7280';
  };

  const getPriorityColor = (priority: string) => {
    const colors: Record<string, string> = {
      low: '#10b981',
      medium: '#f59e0b',
      high: '#ef4444',
      urgent: '#dc2626',
    };
    return colors[priority] || '#6b7280';
  };

  if (loading) {
    return (
      <div className="dashboard">
        <div className="loading">Loading dashboard...</div>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Welcome back!</h1>
        <p>Here's what's happening with your portal today.</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">📊</div>
          <div className="stat-content">
            <h3>{stats.totalSubmissions}</h3>
            <p>Total Submissions</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">🆕</div>
          <div className="stat-content">
            <h3>{stats.recentSubmissions}</h3>
            <p>Recent Submissions</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">📝</div>
          <div className="stat-content">
            <h3>{recentForms.length}</h3>
            <p>Active Forms</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">👥</div>
          <div className="stat-content">
            <h3>Admin</h3>
            <p>Your Role</p>
          </div>
        </div>
      </div>

      <div className="dashboard-content">
        <div className="dashboard-section">
          <h2>Recent Submissions</h2>
          <div className="submissions-list">
            {recentSubmissions.length > 0 ? (
              recentSubmissions.map((submission) => (
                <Link
                  key={submission._id}
                  to={`/submissions/${submission._id}`}
                  className="submission-item"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <div className="submission-info">
                    <h4>{submission.submissionNumber}</h4>
                    <p>
                      Form: {typeof submission.formId === 'object' ? submission.formId.title : submission.formId}
                      {submission.submittedBy && (
                        <span> • By: {submission.submittedBy?.name || 'Unknown User'}</span>
                      )}
                    </p>
                    <p className="submission-date">
                      {new Date(submission.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="submission-meta">
                    <span
                      className="status-badge"
                      style={{ backgroundColor: getStatusColor(submission.status) }}
                    >
                      {submission.status}
                    </span>
                    {submission.priority && (
                      <span
                        className="priority-badge"
                        style={{ backgroundColor: getPriorityColor(submission.priority) }}
                      >
                        {submission.priority}
                      </span>
                    )}
                  </div>
                </Link>
              ))
            ) : (
              <p className="no-data">No recent submissions</p>
            )}
          </div>
        </div>

        <div className="dashboard-section">
          <h2>Recent Forms</h2>
          <div className="forms-list">
            {recentForms.length > 0 ? (
              recentForms.map((form) => (
                <Link
                  key={form._id}
                  to={`/forms/${form._id}`}
                  className="form-item"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <div className="form-info">
                    <h4>{form.title}</h4>
                    <p>{form.description || 'No description'}</p>
                    <p className="form-meta">
                      {form.submissionCount} submissions • Created by {form.createdBy?.name || 'Unknown User'}
                    </p>
                  </div>
                  <div className="form-status">
                    <span className={`status-indicator ${form.isActive ? 'active' : 'inactive'}`}>
                      {form.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                </Link>
              ))
            ) : (
              <p className="no-data">No forms available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

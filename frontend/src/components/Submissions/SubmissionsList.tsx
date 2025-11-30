import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { mockSubmissions } from '../../data/mockData';
import './SubmissionsList.css';

const SubmissionsList: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [submissions] = useState(mockSubmissions);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 300);
  }, []);

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
      <div className="submissions-list">
        <div className="loading">Loading submissions...</div>
      </div>
    );
  }

  return (
    <div className="submissions-list">
      <div className="submissions-list-header">
        <h1>Submissions</h1>
        <p>View and manage all form submissions</p>
      </div>

      <div className="submissions-table">
        {submissions.map((submission) => (
          <Link
            key={submission._id}
            to={`/submissions/${submission._id}`}
            className="submission-row"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div className="submission-cell submission-number">
              <strong>{submission.submissionNumber}</strong>
            </div>
            <div className="submission-cell">
              <div className="form-name">
                {typeof submission.formId === 'object' ? submission.formId.title : submission.formId}
              </div>
              {submission.submittedBy && (
                <div className="submitted-by">By: {submission.submittedBy.name}</div>
              )}
            </div>
            <div className="submission-cell">
              <span
                className="status-badge"
                style={{ backgroundColor: getStatusColor(submission.status) }}
              >
                {submission.status}
              </span>
            </div>
            <div className="submission-cell">
              {submission.priority && (
                <span
                  className="priority-badge"
                  style={{ backgroundColor: getPriorityColor(submission.priority) }}
                >
                  {submission.priority}
                </span>
              )}
            </div>
            <div className="submission-cell submission-date">
              {new Date(submission.createdAt).toLocaleDateString()}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SubmissionsList;

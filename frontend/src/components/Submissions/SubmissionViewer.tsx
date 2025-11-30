import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockSubmissions } from '../../data/mockData';
import { Submission } from '../../types';
import './SubmissionViewer.css';

const SubmissionViewer: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [submission, setSubmission] = useState<Submission | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const foundSubmission = mockSubmissions.find(s => s._id === id);
      setSubmission(foundSubmission || null);
      setLoading(false);
    }, 300);
  }, [id]);

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
      <div className="submission-viewer">
        <div className="loading">Loading submission...</div>
      </div>
    );
  }

  if (!submission) {
    return (
      <div className="submission-viewer">
        <div className="no-submission">
          <h2>Submission not found</h2>
          <p>The requested submission could not be found.</p>
          <Link to="/submissions" className="btn btn-primary">
            Back to Submissions
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="submission-viewer">
      <div className="submission-viewer-header">
        <Link to="/submissions" className="back-link">← Back to Submissions</Link>
        <div className="submission-title-section">
          <h1>{submission.submissionNumber}</h1>
          <div className="badges">
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
        </div>
      </div>

      <div className="submission-info-section">
        <div className="info-grid">
          <div className="info-item">
            <label>Form</label>
            <div>{typeof submission.formId === 'object' ? submission.formId.title : submission.formId}</div>
          </div>
          <div className="info-item">
            <label>Submitted By</label>
            <div>{submission.submittedBy?.name || 'Unknown'}</div>
          </div>
          <div className="info-item">
            <label>Submitted Date</label>
            <div>{new Date(submission.createdAt).toLocaleString()}</div>
          </div>
          {submission.assignedTo && (
            <div className="info-item">
              <label>Assigned To</label>
              <div>{submission.assignedTo.name}</div>
            </div>
          )}
        </div>
      </div>

      <div className="submission-data-section">
        <h2>Submission Data</h2>
        <div className="data-fields">
          {Object.entries(submission.data).map(([key, value]) => (
            <div key={key} className="data-field">
              <label>{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</label>
              <div className="data-value">{value || '-'}</div>
            </div>
          ))}
        </div>
      </div>

      {submission.notes && submission.notes.length > 0 && (
        <div className="submission-notes-section">
          <h2>Notes</h2>
          <div className="notes-list">
            {submission.notes.map((note, index) => (
              <div key={index} className="note-item">
                <div className="note-header">
                  <strong>{note.addedBy?.name || 'Unknown'}</strong>
                  <span className="note-date">
                    {new Date(note.addedAt).toLocaleString()}
                  </span>
                </div>
                <p className="note-text">{note.text}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="submission-meta">
        <p>Last updated: {new Date(submission.updatedAt).toLocaleString()}</p>
      </div>
    </div>
  );
};

export default SubmissionViewer;

import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockForms } from '../../data/mockData';
import { Form } from '../../types';
import './FormViewer.css';

const FormViewer: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [form, setForm] = useState<Form | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const foundForm = mockForms.find(f => f._id === id);
      setForm(foundForm || null);
      setLoading(false);
    }, 300);
  }, [id]);

  if (loading) {
    return (
      <div className="form-viewer">
        <div className="loading">Loading form...</div>
      </div>
    );
  }

  if (!form) {
    return (
      <div className="form-viewer">
        <div className="no-form">
          <h2>Form not found</h2>
          <p>The requested form could not be found.</p>
          <Link to="/forms" className="btn btn-primary">
            Back to Forms
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="form-viewer">
      <div className="form-viewer-header">
        <Link to="/forms" className="back-link">← Back to Forms</Link>
        <div className="form-title-section">
          <h1>{form.title}</h1>
          <span className={`status-badge ${form.isActive ? 'active' : 'inactive'}`}>
            {form.isActive ? 'Active' : 'Inactive'}
          </span>
        </div>
        <p className="form-description">{form.description}</p>
      </div>

      <div className="form-stats-bar">
        <div className="stat-item">
          <span className="stat-label">Total Submissions</span>
          <span className="stat-value">{form.submissionCount}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Total Fields</span>
          <span className="stat-value">{form.fields.length}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Created By</span>
          <span className="stat-value">{form.createdBy?.name}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Created</span>
          <span className="stat-value">{new Date(form.createdAt).toLocaleDateString()}</span>
        </div>
      </div>

      <div className="form-fields-section">
        <h2>Form Fields</h2>
        <div className="fields-list">
          {form.fields.map((field, index) => (
            <div key={index} className="field-item">
              <div className="field-header">
                <h3>{field.label}</h3>
                <div className="field-badges">
                  {field.required && <span className="badge required">Required</span>}
                  <span className="badge type">{field.type}</span>
                </div>
              </div>
              {field.placeholder && (
                <p className="field-placeholder">Placeholder: {field.placeholder}</p>
              )}
              {field.options && field.options.length > 0 && (
                <div className="field-options">
                  <strong>Options:</strong>
                  <ul>
                    {field.options.map((option, i) => (
                      <li key={i}>{option}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="form-meta-section">
        <p>Last updated: {new Date(form.updatedAt).toLocaleString()}</p>
      </div>
    </div>
  );
};

export default FormViewer;

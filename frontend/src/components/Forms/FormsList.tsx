import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { mockForms } from '../../data/mockData';
import './FormsList.css';

const FormsList: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [forms] = useState(mockForms);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 300);
  }, []);

  if (loading) {
    return (
      <div className="forms-list">
        <div className="loading">Loading forms...</div>
      </div>
    );
  }

  return (
    <div className="forms-list">
      <div className="forms-list-header">
        <h1>Forms</h1>
        <p>Manage and view all your forms</p>
      </div>

      <div className="forms-grid">
        {forms.map((form) => (
          <Link
            key={form._id}
            to={`/forms/${form._id}`}
            className="form-card"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div className="form-card-header">
              <h3>{form.title}</h3>
              <span className={`status-badge ${form.isActive ? 'active' : 'inactive'}`}>
                {form.isActive ? 'Active' : 'Inactive'}
              </span>
            </div>
            <p className="form-description">{form.description}</p>
            <div className="form-card-footer">
              <div className="form-stat">
                <span className="stat-label">Submissions:</span>
                <span className="stat-value">{form.submissionCount}</span>
              </div>
              <div className="form-stat">
                <span className="stat-label">Fields:</span>
                <span className="stat-value">{form.fields.length}</span>
              </div>
            </div>
            <div className="form-meta">
              Created by {form.createdBy?.name} • {new Date(form.createdAt).toLocaleDateString()}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FormsList;

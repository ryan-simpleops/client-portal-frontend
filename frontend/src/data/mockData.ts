import { Form, Submission, User } from '../types';

// Mock users
const sarahJohnson: User = {
  id: '1',
  name: 'Sarah Johnson',
  email: 'sarah@company.com',
  role: 'admin',
  region: 'us',
  permissions: {
    canCreateForms: true,
    canManageUsers: true,
    canViewAllSubmissions: true,
    canEditSubmissions: true
  },
  isActive: true,
  createdAt: '2025-01-01T00:00:00.000Z'
};

const michaelChen: User = {
  id: '2',
  name: 'Michael Chen',
  email: 'michael@company.com',
  role: 'admin',
  region: 'us',
  permissions: {
    canCreateForms: true,
    canManageUsers: true,
    canViewAllSubmissions: true,
    canEditSubmissions: true
  },
  isActive: true,
  createdAt: '2025-01-01T00:00:00.000Z'
};

const johnSmith: User = {
  id: '10',
  name: 'John Smith',
  email: 'john.smith@techcorp.com',
  role: 'user',
  region: 'us',
  permissions: {
    canCreateForms: false,
    canManageUsers: false,
    canViewAllSubmissions: false,
    canEditSubmissions: false
  },
  isActive: true,
  createdAt: '2025-02-15T00:00:00.000Z'
};

const emilyRodriguez: User = {
  id: '11',
  name: 'Emily Rodriguez',
  email: 'emily.r@startup.io',
  role: 'user',
  region: 'us',
  permissions: {
    canCreateForms: false,
    canManageUsers: false,
    canViewAllSubmissions: false,
    canEditSubmissions: false
  },
  isActive: true,
  createdAt: '2025-03-10T00:00:00.000Z'
};

const davidLee: User = {
  id: '12',
  name: 'David Lee',
  email: 'david@retailco.com',
  role: 'user',
  region: 'us',
  permissions: {
    canCreateForms: false,
    canManageUsers: false,
    canViewAllSubmissions: false,
    canEditSubmissions: false
  },
  isActive: true,
  createdAt: '2025-04-01T00:00:00.000Z'
};

const rachelGreen: User = {
  id: '13',
  name: 'Rachel Green',
  email: 'rachel@fittech.com',
  role: 'user',
  region: 'us',
  permissions: {
    canCreateForms: false,
    canManageUsers: false,
    canViewAllSubmissions: false,
    canEditSubmissions: false
  },
  isActive: true,
  createdAt: '2025-05-12T00:00:00.000Z'
};

const alexThompson: User = {
  id: '14',
  name: 'Alex Thompson',
  email: 'alex.thompson@enterprise.com',
  role: 'user',
  region: 'us',
  permissions: {
    canCreateForms: false,
    canManageUsers: false,
    canViewAllSubmissions: false,
    canEditSubmissions: false
  },
  isActive: true,
  createdAt: '2025-06-20T00:00:00.000Z'
};

const mariaGarcia: User = {
  id: '15',
  name: 'Maria Garcia',
  email: 'maria.garcia@consulting.com',
  role: 'user',
  region: 'us',
  permissions: {
    canCreateForms: false,
    canManageUsers: false,
    canViewAllSubmissions: false,
    canEditSubmissions: false
  },
  isActive: true,
  createdAt: '2025-07-08T00:00:00.000Z'
};

export const mockForms: Form[] = [
  {
    _id: '1',
    title: 'Customer Feedback Survey',
    description: 'Help us improve our services by sharing your valuable feedback and experience',
    fields: [
      {
        name: 'fullName',
        label: 'Full Name',
        type: 'text',
        required: true,
        placeholder: 'Enter your full name'
      },
      {
        name: 'email',
        label: 'Email Address',
        type: 'email',
        required: true,
        placeholder: 'your.email@example.com'
      },
      {
        name: 'satisfaction',
        label: 'How satisfied are you with our service?',
        type: 'select',
        required: true,
        options: ['Very Satisfied', 'Satisfied', 'Neutral', 'Dissatisfied', 'Very Dissatisfied']
      },
      {
        name: 'comments',
        label: 'Additional Comments',
        type: 'textarea',
        required: false,
        placeholder: 'Share your thoughts...'
      }
    ],
    isActive: true,
    isPublic: true,
    submissionCount: 24,
    createdBy: sarahJohnson,
    settings: {
      allowMultipleSubmissions: true,
      requireAuthentication: false,
      notificationEmail: 'sarah@company.com'
    },
    createdAt: '2025-10-15T10:00:00.000Z',
    updatedAt: '2025-11-20T14:30:00.000Z'
  },
  {
    _id: '2',
    title: 'Project Request Form',
    description: 'Submit a new project request with detailed requirements and timeline',
    fields: [
      {
        name: 'projectName',
        label: 'Project Name',
        type: 'text',
        required: true,
        placeholder: 'Enter project name'
      },
      {
        name: 'projectType',
        label: 'Project Type',
        type: 'select',
        required: true,
        options: ['Web Development', 'Mobile App', 'UI/UX Design', 'Consulting', 'Other']
      },
      {
        name: 'budget',
        label: 'Budget Range',
        type: 'select',
        required: true,
        options: ['Under $5,000', '$5,000 - $10,000', '$10,000 - $25,000', '$25,000 - $50,000', '$50,000+']
      },
      {
        name: 'description',
        label: 'Project Description',
        type: 'textarea',
        required: true,
        placeholder: 'Describe your project requirements in detail...'
      },
      {
        name: 'timeline',
        label: 'Expected Timeline',
        type: 'text',
        required: false,
        placeholder: 'e.g., 3 months'
      }
    ],
    isActive: true,
    isPublic: true,
    submissionCount: 12,
    createdBy: sarahJohnson,
    settings: {
      allowMultipleSubmissions: false,
      requireAuthentication: true,
      notificationEmail: 'projects@company.com',
      autoResponse: {
        enabled: true,
        subject: 'Project Request Received',
        message: 'Thank you for your project request. We will review it and get back to you within 2 business days.'
      }
    },
    createdAt: '2025-09-20T09:00:00.000Z',
    updatedAt: '2025-11-18T16:20:00.000Z'
  },
  {
    _id: '3',
    title: 'Webinar Registration',
    description: 'Register for our upcoming webinar on digital transformation strategies',
    fields: [
      {
        name: 'fullName',
        label: 'Full Name',
        type: 'text',
        required: true,
        placeholder: 'Your name'
      },
      {
        name: 'email',
        label: 'Email',
        type: 'email',
        required: true,
        placeholder: 'your@email.com'
      },
      {
        name: 'company',
        label: 'Company',
        type: 'text',
        required: false,
        placeholder: 'Company name'
      },
      {
        name: 'dietaryRestrictions',
        label: 'Dietary Restrictions',
        type: 'textarea',
        required: false,
        placeholder: 'Any dietary restrictions?'
      }
    ],
    isActive: true,
    isPublic: true,
    submissionCount: 47,
    createdBy: michaelChen,
    settings: {
      allowMultipleSubmissions: false,
      requireAuthentication: false,
      notificationEmail: 'events@company.com',
      autoResponse: {
        enabled: true,
        subject: 'Webinar Registration Confirmation',
        message: 'Thank you for registering! You will receive webinar details via email 24 hours before the event.'
      }
    },
    createdAt: '2025-08-10T08:30:00.000Z',
    updatedAt: '2025-11-25T11:45:00.000Z'
  }
];

export const mockSubmissions: Submission[] = [
  {
    _id: '1',
    formId: { _id: '1', title: 'Customer Feedback Survey' },
    submissionNumber: 'SUB-2025-0142',
    data: {
      fullName: 'John Smith',
      email: 'john.smith@techcorp.com',
      satisfaction: 'Very Satisfied',
      comments: 'Excellent service! The team was very responsive and went above and beyond to meet our requirements. Really impressed with the quality of work.'
    },
    status: 'pending',
    priority: 'medium',
    submittedBy: johnSmith,
    notes: [],
    attachments: [],
    metadata: {
      ipAddress: '192.168.1.100',
      userAgent: 'Mozilla/5.0',
      region: 'us'
    },
    tags: [],
    createdAt: '2025-11-28T14:22:00.000Z',
    updatedAt: '2025-11-28T14:22:00.000Z'
  },
  {
    _id: '2',
    formId: { _id: '1', title: 'Customer Feedback Survey' },
    submissionNumber: 'SUB-2025-0141',
    data: {
      fullName: 'Emily Rodriguez',
      email: 'emily.r@startup.io',
      satisfaction: 'Satisfied',
      comments: 'Good experience overall. Communication could be improved, but the end result met our expectations.'
    },
    status: 'in-progress',
    priority: 'low',
    submittedBy: emilyRodriguez,
    assignedTo: sarahJohnson,
    notes: [
      {
        text: 'Following up with customer via email to discuss communication improvements',
        addedBy: sarahJohnson,
        addedAt: '2025-11-29T09:30:00.000Z'
      }
    ],
    attachments: [],
    metadata: {
      ipAddress: '192.168.1.101',
      userAgent: 'Mozilla/5.0',
      region: 'us'
    },
    tags: ['follow-up', 'communication'],
    createdAt: '2025-11-27T10:15:00.000Z',
    updatedAt: '2025-11-29T09:30:00.000Z'
  },
  {
    _id: '3',
    formId: { _id: '2', title: 'Project Request Form' },
    submissionNumber: 'SUB-2025-0140',
    data: {
      projectName: 'E-commerce Platform Redesign',
      projectType: 'Web Development',
      budget: '$25,000 - $50,000',
      description: 'Complete redesign of our e-commerce platform with modern UI/UX, mobile responsiveness, payment gateway integration, and connection to existing inventory management system. Need to support 10,000+ products.',
      timeline: '4-5 months'
    },
    status: 'pending',
    priority: 'high',
    submittedBy: davidLee,
    notes: [],
    attachments: [],
    metadata: {
      ipAddress: '192.168.1.102',
      userAgent: 'Mozilla/5.0',
      region: 'us'
    },
    tags: ['web-development', 'e-commerce'],
    createdAt: '2025-11-29T16:45:00.000Z',
    updatedAt: '2025-11-29T16:45:00.000Z'
  },
  {
    _id: '4',
    formId: { _id: '2', title: 'Project Request Form' },
    submissionNumber: 'SUB-2025-0135',
    data: {
      projectName: 'Mobile Fitness Tracking App',
      projectType: 'Mobile App',
      budget: '$50,000+',
      description: 'Native iOS and Android app for fitness tracking with social features, workout plans, nutrition tracking, and wearable device integration (Apple Watch, Fitbit, Garmin).',
      timeline: '6-8 months'
    },
    status: 'completed',
    priority: 'urgent',
    submittedBy: rachelGreen,
    assignedTo: michaelChen,
    notes: [
      {
        text: 'Project approved - contract sent to client',
        addedBy: michaelChen,
        addedAt: '2025-11-22T10:00:00.000Z'
      },
      {
        text: 'Kickoff meeting scheduled for December 5th',
        addedBy: michaelChen,
        addedAt: '2025-11-25T14:30:00.000Z'
      },
      {
        text: 'Contract signed, project moving to development',
        addedBy: michaelChen,
        addedAt: '2025-11-28T15:10:00.000Z'
      }
    ],
    attachments: [],
    metadata: {
      ipAddress: '192.168.1.103',
      userAgent: 'Mozilla/5.0',
      region: 'us'
    },
    tags: ['mobile', 'fitness', 'approved'],
    createdAt: '2025-11-20T11:20:00.000Z',
    updatedAt: '2025-11-28T15:10:00.000Z'
  },
  {
    _id: '5',
    formId: { _id: '3', title: 'Webinar Registration' },
    submissionNumber: 'SUB-2025-0138',
    data: {
      fullName: 'Alex Thompson',
      email: 'alex.thompson@enterprise.com',
      company: 'Enterprise Solutions Inc',
      dietaryRestrictions: 'Vegetarian'
    },
    status: 'pending',
    priority: 'low',
    submittedBy: alexThompson,
    notes: [],
    attachments: [],
    metadata: {
      ipAddress: '192.168.1.104',
      userAgent: 'Mozilla/5.0',
      region: 'us'
    },
    tags: ['webinar'],
    createdAt: '2025-11-30T08:12:00.000Z',
    updatedAt: '2025-11-30T08:12:00.000Z'
  },
  {
    _id: '6',
    formId: { _id: '3', title: 'Webinar Registration' },
    submissionNumber: 'SUB-2025-0137',
    data: {
      fullName: 'Maria Garcia',
      email: 'maria.garcia@consulting.com',
      company: 'Strategic Consulting Group',
      dietaryRestrictions: ''
    },
    status: 'in-progress',
    priority: 'medium',
    submittedBy: mariaGarcia,
    assignedTo: sarahJohnson,
    notes: [
      {
        text: 'Registration confirmed - confirmation email sent',
        addedBy: sarahJohnson,
        addedAt: '2025-11-30T09:15:00.000Z'
      }
    ],
    attachments: [],
    metadata: {
      ipAddress: '192.168.1.105',
      userAgent: 'Mozilla/5.0',
      region: 'us'
    },
    tags: ['webinar', 'confirmed'],
    createdAt: '2025-11-29T13:25:00.000Z',
    updatedAt: '2025-11-30T09:15:00.000Z'
  }
];

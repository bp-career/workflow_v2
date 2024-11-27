export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'manager' | 'employee';
  department: string;
}

export interface WorkflowStep {
  id: string;
  title: string;
  description: string;
  assignee?: User;
  status: 'pending' | 'in-progress' | 'completed' | 'blocked';
  dueDate?: Date;
  completedAt?: Date;
  attachments: Attachment[];
  comments: Comment[];
  riskScore: number;
}

export interface Workflow {
  id: string;
  title: string;
  description: string;
  creator: User;
  createdAt: Date;
  updatedAt: Date;
  status: 'active' | 'completed' | 'archived';
  steps: WorkflowStep[];
  department: string;
  priority: 'low' | 'medium' | 'high';
}

export interface Attachment {
  id: string;
  name: string;
  url: string;
  type: string;
  uploadedBy: User;
  uploadedAt: Date;
}

export interface Comment {
  id: string;
  content: string;
  author: User;
  createdAt: Date;
  attachments: Attachment[];
}
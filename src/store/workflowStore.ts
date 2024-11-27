import { create } from 'zustand';
import type { Workflow } from '../types/workflow';

interface WorkflowState {
  workflows: Workflow[];
  activeWorkflow: Workflow | null;
  loading: boolean;
  error: string | null;
  setWorkflows: (workflows: Workflow[]) => void;
  setActiveWorkflow: (workflow: Workflow | null) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useWorkflowStore = create<WorkflowState>((set) => ({
  workflows: [],
  activeWorkflow: null,
  loading: false,
  error: null,
  setWorkflows: (workflows) => set({ workflows }),
  setActiveWorkflow: (workflow) => set({ activeWorkflow: workflow }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
}));
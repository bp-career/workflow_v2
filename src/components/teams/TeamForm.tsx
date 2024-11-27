import React, { useState } from 'react';
import { Users, Image as ImageIcon } from 'lucide-react';

type TeamFormProps = {
  onClose: () => void;
};

export const TeamForm: React.FC<TeamFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    visibility: 'public',
    department: '',
    description: '',
    icon: '',
  });
  const [invitedMembers, setInvitedMembers] = useState<string[]>([]);
  const [newMember, setNewMember] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle team creation logic here
    onClose();
  };

  const addMember = () => {
    if (newMember && !invitedMembers.includes(newMember)) {
      setInvitedMembers([...invitedMembers, newMember]);
      setNewMember('');
    }
  };

  const iconOptions = [
    'team-1', 'team-2', 'team-3', 'team-4',
    'team-5', 'team-6', 'team-7', 'team-8',
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Team Icon</label>
        <div className="mt-2 grid grid-cols-4 gap-2">
          {iconOptions.map((icon) => (
            <button
              key={icon}
              type="button"
              onClick={() => setFormData({ ...formData, icon })}
              className={`p-2 rounded-md border ${
                formData.icon === icon ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
              }`}
            >
              <ImageIcon className="h-6 w-6 text-gray-400" />
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Team Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Visibility</label>
        <select
          value={formData.visibility}
          onChange={(e) => setFormData({ ...formData, visibility: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
        >
          <option value="public">Public</option>
          <option value="private">Private</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Department</label>
        <input
          type="text"
          value={formData.department}
          onChange={(e) => setFormData({ ...formData, department: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Invite Members</label>
        <div className="mt-1 flex rounded-md shadow-sm">
          <input
            type="email"
            value={newMember}
            onChange={(e) => setNewMember(e.target.value)}
            placeholder="Enter email address"
            className="flex-1 rounded-l-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          />
          <button
            type="button"
            onClick={addMember}
            className="inline-flex items-center px-3 py-2 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm"
          >
            Add
          </button>
        </div>
        {invitedMembers.length > 0 && (
          <div className="mt-2">
            <h4 className="text-sm font-medium text-gray-700">Invited Members:</h4>
            <div className="mt-1 space-y-1">
              {invitedMembers.map((email, index) => (
                <div key={index} className="flex items-center text-sm text-gray-600">
                  <Users className="h-4 w-4 mr-2" />
                  {email}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="mt-5 sm:mt-6 flex space-x-3">
        <button
          type="button"
          onClick={onClose}
          className="flex-1 rounded-md border border-gray-300 bg-white py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="flex-1 rounded-md border border-transparent bg-blue-600 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Create Team
        </button>
      </div>
    </form>
  );
};
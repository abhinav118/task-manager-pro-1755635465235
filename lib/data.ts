export const siteData = {
  "tasks": [
    {
      "id": 1,
      "title": "Design new landing page",
      "description": "Create wireframes and mockups for the new landing page",
      "status": "in-progress",
      "priority": "high",
      "assignee": "John Doe",
      "assigneeId": 1,
      "projectId": 1,
      "dueDate": "2024-01-15",
      "createdAt": "2024-01-10",
      "tags": [
        "design",
        "ui/ux"
      ]
    },
    {
      "id": 2,
      "title": "Fix authentication bug",
      "description": "Users are unable to login with Google OAuth",
      "status": "todo",
      "priority": "high",
      "assignee": "Jane Smith",
      "assigneeId": 2,
      "projectId": 2,
      "dueDate": "2024-01-12",
      "createdAt": "2024-01-11",
      "tags": [
        "bug",
        "auth"
      ]
    },
    {
      "id": 3,
      "title": "Update documentation",
      "description": "Update API documentation for new endpoints",
      "status": "completed",
      "priority": "medium",
      "assignee": "Mike Johnson",
      "assigneeId": 3,
      "projectId": 1,
      "dueDate": "2024-01-10",
      "createdAt": "2024-01-08",
      "tags": [
        "documentation"
      ]
    },
    {
      "id": 4,
      "title": "Setup CI/CD pipeline",
      "description": "Configure automated testing and deployment",
      "status": "in-progress",
      "priority": "medium",
      "assignee": "Sarah Wilson",
      "assigneeId": 4,
      "projectId": 2,
      "dueDate": "2024-01-18",
      "createdAt": "2024-01-09",
      "tags": [
        "devops",
        "automation"
      ]
    }
  ],
  "projects": [
    {
      "id": 1,
      "name": "Website Redesign",
      "description": "Complete overhaul of company website",
      "status": "active",
      "progress": 65,
      "teamSize": 4,
      "dueDate": "2024-02-15",
      "tasks": 12,
      "completedTasks": 8
    },
    {
      "id": 2,
      "name": "Mobile App",
      "description": "Development of iOS and Android mobile application",
      "status": "active",
      "progress": 30,
      "teamSize": 6,
      "dueDate": "2024-03-20",
      "tasks": 25,
      "completedTasks": 8
    },
    {
      "id": 3,
      "name": "API Integration",
      "description": "Third-party service integrations",
      "status": "planning",
      "progress": 0,
      "teamSize": 2,
      "dueDate": "2024-02-28",
      "tasks": 8,
      "completedTasks": 0
    }
  ],
  "team": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "role": "Designer",
      "avatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      "status": "online",
      "activeTasks": 3,
      "completedTasks": 15
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "email": "jane@example.com",
      "role": "Developer",
      "avatar": "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      "status": "online",
      "activeTasks": 5,
      "completedTasks": 23
    },
    {
      "id": 3,
      "name": "Mike Johnson",
      "email": "mike@example.com",
      "role": "Technical Writer",
      "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      "status": "away",
      "activeTasks": 2,
      "completedTasks": 18
    },
    {
      "id": 4,
      "name": "Sarah Wilson",
      "email": "sarah@example.com",
      "role": "DevOps Engineer",
      "avatar": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      "status": "online",
      "activeTasks": 4,
      "completedTasks": 12
    }
  ],
  "settings": {
    "profile": {
      "name": "Alex Johnson",
      "email": "alex@example.com",
      "avatar": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face"
    },
    "preferences": {
      "theme": "auto",
      "notifications": true,
      "timezone": "UTC-8"
    },
    "team": {
      "defaultProject": 1,
      "workingHours": "9:00 AM - 5:00 PM"
    }
  }
};

export const navigation = {
  "main": [
    {
      "label": "Dashboard",
      "route": "/",
      "icon": "dashboard"
    },
    {
      "label": "Tasks",
      "route": "/tasks",
      "icon": "tasks"
    },
    {
      "label": "Projects",
      "route": "/projects",
      "icon": "folder"
    },
    {
      "label": "Calendar",
      "route": "/calendar",
      "icon": "calendar"
    },
    {
      "label": "Team",
      "route": "/team",
      "icon": "users"
    },
    {
      "label": "Settings",
      "route": "/settings",
      "icon": "settings"
    }
  ],
  "footer": [
    {
      "label": "Help & Support",
      "route": "/support",
      "icon": "help"
    },
    {
      "label": "Privacy Policy",
      "route": "/privacy",
      "icon": "shield"
    },
    {
      "label": "Terms of Service",
      "route": "/terms",
      "icon": "document"
    }
  ]
};
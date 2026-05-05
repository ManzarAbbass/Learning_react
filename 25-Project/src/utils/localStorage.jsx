const employees = [
  {
    id: 1,
    firstName: "Ahmed",
    email: "employee1@example.com",
    password: "123",

    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Update Homepage",
        taskDescription: "Redesign the homepage banner section.",
        taskDate: "2026-05-05",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Navbar Bug",
        taskDescription: "Resolve responsive navbar issue on mobile.",
        taskDate: "2026-05-02",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Write API Docs",
        taskDescription: "Prepare documentation for authentication API.",
        taskDate: "2026-05-08",
        category: "Documentation"
      }
    ]
  },

  {
    id: 2,
    firstName: "Ali",
    email: "employee2@example.com",
    password: "123",

    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Database Backup",
        taskDescription: "Create weekly backup of production database.",
        taskDate: "2026-05-06",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Login Page UI",
        taskDescription: "Improve login form styling.",
        taskDate: "2026-05-01",
        category: "UI/UX"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Payment Gateway",
        taskDescription: "Integrate Stripe payment gateway.",
        taskDate: "2026-04-29",
        category: "Backend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Create Dashboard",
        taskDescription: "Build admin analytics dashboard.",
        taskDate: "2026-05-10",
        category: "Frontend"
      }
    ]
  },

  {
    id: 3,
    firstName: "Usman",
    email: "employee3@example.com",
    password: "123",

    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "SEO Optimization",
        taskDescription: "Optimize website SEO for Google ranking.",
        taskDate: "2026-05-07",
        category: "Marketing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Bug Testing",
        taskDescription: "Test newly added modules.",
        taskDate: "2026-05-03",
        category: "Testing"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Profile Page",
        taskDescription: "Develop user profile page.",
        taskDate: "2026-05-11",
        category: "Frontend"
      }
    ]
  },

  {
    id: 4,
    firstName: "Manzar",
    email: "employee4@example.com",
    password: "123",

    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Server Setup",
        taskDescription: "Deploy Node.js app on VPS.",
        taskDate: "2026-05-01",
        category: "DevOps"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Notification System",
        taskDescription: "Implement email notifications.",
        taskDate: "2026-05-09",
        category: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Analytics API",
        taskDescription: "Create analytics tracking API.",
        taskDate: "2026-04-28",
        category: "API"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Dark Mode",
        taskDescription: "Add dark mode feature.",
        taskDate: "2026-05-12",
        category: "Frontend"
      }
    ]
  },

  {
    id: 5,
    firstName: "Bilal",
    email: "employee5@example.com",
    password: "123",

    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Charts",
        taskDescription: "Add charts to sales dashboard.",
        taskDate: "2026-05-06",
        category: "Data Visualization"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Optimize Images",
        taskDescription: "Compress website images for performance.",
        taskDate: "2026-05-02",
        category: "Performance"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "User Feedback Form",
        taskDescription: "Build feedback form module.",
        taskDate: "2026-05-13",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Security Patch",
        taskDescription: "Apply latest security patches.",
        taskDate: "2026-04-30",
        category: "Security"
      }
    ]
  }
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
}

export const getLocalStorage = () => {
  const employeesData = JSON.parse(localStorage.getItem("employees"));
  const adminData = JSON.parse(localStorage.getItem("admin"));
  return { employees: employeesData, admin: adminData };
}